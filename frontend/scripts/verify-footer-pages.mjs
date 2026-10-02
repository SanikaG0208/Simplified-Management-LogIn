import { build } from "esbuild";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const result = await build({
  stdin: {
    resolveDir: fileURLToPath(new URL("../", import.meta.url)),
    loader: "jsx",
    contents: `
      import React from "react";
      import assert from "node:assert/strict";
      import { existsSync, readFileSync } from "node:fs";
      import { resolve } from "node:path";
      import { renderToStaticMarkup } from "react-dom/server";
      import { ProductDetailPage, InformationPage, LegalPage, RoiCalculatorPage, ResourcesPage, ComparePage, CompetitorComparisonPage, calculateSavings } from "./src/pages/FooterPages.jsx";
      import Footer from "./src/components/layout/Footer.jsx";
      import BlogPage, { ArticlePage } from "./src/pages/BlogPage.jsx";
      import { articles } from "./src/data/articles.js";
      import { productRoutes, informationPages, legalPages, footerPageMetadata } from "./src/data/footerPages.js";
      const standalone = { "/roi-calculator": RoiCalculatorPage, "/resources": ResourcesPage, "/compare": ComparePage };
      for (const [path, [title]] of Object.entries(footerPageMetadata)) {
        const Component = standalone[path] || (productRoutes[path] ? ProductDetailPage : informationPages[path] ? InformationPage : LegalPage);
        const html = renderToStaticMarkup(<Component path={path} />);
        assert.match(html, /<main id="main"/);
        assert.match(html, /<h1>/);
        if (legalPages[path] && !legalPages[path].approved) assert.match(html, /Draft · pending approval/);
        if (path === "/dpa") {
          assert.ok(!html.includes("Draft · pending approval"));
          assert.ok(html.includes("Last updated: 19 August 2026"));
          assert.ok(html.includes('href="/app-privacy"'));
          assert.ok(html.includes('href="/terms"'));
          assert.ok(html.includes('href="mailto:privacy@simplifiedmanagement.in"'));
          assert.ok(html.includes("U62099PN2026PTC254686"));
          assert.equal((html.match(/<table /g) || []).length, 2);
          assert.equal(legalPages[path].sections.length, 11);
        }
        if (path === "/terms") {
          assert.ok(!html.includes("Draft · pending approval"));
          assert.ok(html.includes("Last updated: 3 July 2026"));
          assert.ok(html.includes('href="/privacy"'));
          assert.ok(html.includes("jurisdiction of the courts of Pune, Maharashtra"));
          assert.ok(!html.includes("App Privacy Policy"));
          assert.equal(legalPages[path].sections.length, 10);
        }
        if (path === "/privacy") {
          assert.ok(!html.includes("Draft · pending approval"));
          assert.ok(html.includes("Last updated: 3 July 2026"));
          assert.ok(html.includes('href="/app-privacy"'));
          assert.ok(html.includes("We do not sell your personal data."));
          assert.equal(legalPages[path].sections.length, 10);
        }
        const file = resolve("../dist", path.slice(1), "index.html");
        assert.ok(existsSync(file), "Direct route missing: " + path);
        const escapedTitle = title.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
        assert.ok(readFileSync(file, "utf8").includes(escapedTitle + " | Simplified Management"), "Incorrect title: " + path);
      }
      const footer = renderToStaticMarkup(<Footer />);
      for (const path of Object.keys(footerPageMetadata)) assert.ok(footer.includes('href="' + path + '"'), "Footer link missing: " + path);
      assert.ok(!footer.includes("https://www.simplifiedmanagement.in"));
      for (const label of ["Instagram", "Facebook", "YouTube", "LinkedIn"]) assert.ok(footer.includes('aria-label="' + label + '"'));
      const inputs = { properties: 20, channels: 4, hours: 10, rate: 3500 };
      const example = calculateSavings(inputs);
      assert.ok(Math.abs(example.hours - 30.31) < 0.000001);
      assert.equal(Math.round(example.operations), 7577);
      assert.equal(example.revenue, 11200);
      assert.equal(Math.round(example.total), 18778);
      assert.deepEqual(calculateSavings({ ...inputs, channels: 100 }), example);
      assert.equal(calculateSavings({ properties: 0, hours: 0, rate: 0 }).total, 0);
      assert.equal(calculateSavings({ properties: -1, hours: Infinity, rate: "invalid" }).total, 0);
      const decimal = calculateSavings({ properties: 2, hours: 1.5, rate: 1000 });
      assert.ok(Math.abs(decimal.hours - 4.5465) < 0.000001);
      assert.equal(decimal.revenue, 320);
      assert.equal((renderToStaticMarkup(<ResourcesPage />).match(/Download template/g) || []).length, 3);
      assert.equal(articles.length, 8);
      const comparisons = renderToStaticMarkup(<ComparePage />);
      assert.ok(!comparisons.includes("Separate tools and spreadsheets"));
      for (const slug of ["hostaway", "guesty", "lodgify"]) {
        assert.ok(comparisons.includes('href="/compare/' + slug + '"'));
        assert.ok(existsSync(resolve("../dist/compare", slug, "index.html")));
        assert.ok(renderToStaticMarkup(<CompetitorComparisonPage path={"/compare/" + slug} />).includes("Do your own diligence"));
      }
      assert.equal(articles.filter(article => article.category === "Distribution").length, 1);
      const blog = renderToStaticMarkup(<BlogPage />);
      assert.ok(blog.includes("Distribution"));
      for (const article of articles) {
        assert.ok(article.date && article.readTime && article.sections.length);
        assert.ok(existsSync(resolve("../dist/blog", article.slug, "index.html")));
        const post = renderToStaticMarkup(<ArticlePage article={article} />);
        assert.ok(post.includes('<main id="main"'));
        assert.ok(!post.includes("https://www.simplifiedmanagement.in/blog"));
        assert.ok(article.sections.some(section => section.blocks.some(block => block.type === "paragraph" && block.text.length > 100)));
      }
      console.log("Verified 13 page renders and direct URL entries, local footer links, social labels, template controls, and calculator edge cases.");
    `,
  },
  bundle: true,
  write: false,
  platform: "node",
  format: "cjs",
  packages: "external",
  jsx: "automatic",
});
const module = { exports: {} };
new Function("require", "module", "exports", result.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
