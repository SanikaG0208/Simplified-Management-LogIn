import { useState } from "react";
import { Button } from "antd";
import PageIntro from "../components/ui/PageIntro";
import PageCta from "../components/ui/PageCta";
import { articles } from "../data/articles";

const categories = ["All", "Channel Management", "Guides", "Distribution", "Operations"];
export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const filtered = articles.filter(
    (a) => category === "All" || a.category === category,
  );
  return (
    <main id="main" tabIndex="-1">
      <PageIntro
        label="Blog"
        title="Playbooks for modern property operators"
        description="Practical guides on channel management, OTA distribution, and running 10 to 500+ listings without the spreadsheet chaos."
      />
      <section className="container section blog-library">
        <div className="blog-filter" aria-label="Filter articles by category">
          {categories.map((c) => (
            <Button
              key={c}
              type={c === category ? "primary" : "default"}
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>
        <p className="article-count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        </p>
        <div className="article-grid">
          {filtered.map((a, i) => (
            <article
              key={a.slug}
              className="article-card article-card--published"
            >
              <a href={`/blog/${a.slug}`}>
                <div className="article-card-copy">
                  <p className="article-meta">
                    {a.category}
                  </p>
                  <h2>{a.title}</h2>
                  <p>{a.summary}</p>
                  <p className="article-meta">{a.date} · {a.readTime}</p>
                  <span className="quiet-link">Read the post</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
      <PageCta title="Start simplifying your operations" description="From 10 to 500+ listings, automate OTA distribution and partner payouts, and scale your property business." />
    </main>
  );
}

export function ArticlePage({ article }) {
  return (
    <main id="main" tabIndex="-1">
      <section className="container article-heading">
        <a className="quiet-link" href="/blog">
          All posts
        </a>
        <p className="eyebrow">
          {article.category} · {article.readTime}
        </p>
        <h1>{article.title}</h1>
        <p className="page-lead">{article.summary}</p>
        <p className="article-byline">{article.date}</p>
      </section>
      <div className="container article-layout">
        <aside>
          <p className="eyebrow">IN THIS POST</p>
          <nav aria-label="Article contents">
            {article.sections.map((s, i) => s.title && (
              <a key={s.title} href={`#section-${i + 1}`}>
                {s.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="article-body">
          {article.sections.map((s, i) => (
            <section key={s.title} id={`section-${i + 1}`}>
              {s.title && <h2>{s.title}</h2>}
              {s.blocks.map((block, index) => block.type === "paragraph" ? <p key={index}>{block.text}</p> : block.ordered ? <ol key={index}>{block.items.map((item, j) => <li key={j}>{item}</li>)}</ol> : <ul key={index}>{block.items.map((item, j) => <li key={j}>{item}</li>)}</ul>)}
            </section>
          ))}
        </article>
      </div>
      <section className="container section">
        <p className="eyebrow">KEEP EXPLORING</p>
        <h2>Keep reading</h2>
        <div className="related-articles">
          {articles
            .filter((a) => a.slug !== article.slug)
            .slice(0, 2)
            .map((a) => (
              <a href={`/blog/${a.slug}`} key={a.slug}>
                <span>{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.summary}</p>
                <span className="quiet-link">Read the guide</span>
              </a>
            ))}
        </div>
      </section>
      <PageCta />
    </main>
  );
}
