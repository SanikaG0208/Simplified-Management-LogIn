import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { pageMetadata } from "../src/data/navigation.js";
import { articles } from "../src/data/articles.js";

const output = resolve(import.meta.dirname, "../../dist");
const template = readFileSync(resolve(output, "index.html"), "utf8");
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
const routes = { ...pageMetadata, ...Object.fromEntries(articles.map(a => [`/blog/${a.slug}`, [a.title, a.summary]])) };
for (const [route, [title, description]] of Object.entries(routes)) {
  const html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(title)} | Simplified Management</title>`).replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escape(description)}" />`);
  const folder = resolve(output, route.slice(1));
  mkdirSync(folder, { recursive: true });
  writeFileSync(resolve(folder, "index.html"), html);
}
writeFileSync(resolve(output, "404.html"), template.replace(/<title>.*?<\/title>/s, "<title>Page not found | Simplified Management</title>"));
const loginFolder = resolve(output, "login");
mkdirSync(loginFolder, { recursive: true });
writeFileSync(resolve(loginFolder, "index.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=https://app.simplifiedmanagement.in/login"><title>Login | Simplified Management</title></head><body><p>Opening your workspace. <a href="https://app.simplifiedmanagement.in/login">Continue to Login</a></p></body></html>');
console.log(`Generated ${Object.keys(routes).length} page entries and app login redirect.`);
