import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("dist");
const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };
createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const file = resolve(root, "." + (pathname === "/" ? "/index.html" : pathname));
  if (!file.startsWith(root + sep)) { response.writeHead(403).end(); return; }
  try {
    response.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream" });
    response.end(await readFile(file));
  } catch { response.writeHead(404).end("Not found"); }
}).listen(4180, "127.0.0.1", () => console.log("Login preview: http://127.0.0.1:4180"));
