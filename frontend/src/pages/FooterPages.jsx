import { useState } from "react";
import PageIntro from "../components/ui/PageIntro";
import PageCta from "../components/ui/PageCta";
import SectionAtmosphere from "../components/ui/SectionAtmosphere";
import Icon from "../components/ui/Icon";
import { features } from "../data/content";
import { productJourneys } from "../data/productJourneys";
import { competitors, comparisonBenefits, comparisonCapabilities } from "../data/comparisons";
import { productRoutes, informationPages, legalPages } from "../data/footerPages";

function Page({ children }) {
  return <main id="main" tabIndex="-1">{children}</main>;
}

export function ProductDetailPage({ path }) {
  const feature = features.find(item => item.id === productRoutes[path]);
  const journey = productJourneys[feature.id];
  const [selected, setSelected] = useState(0);
  return (
    <Page>
      <section className={`product-story-hero product-story-hero--${journey.accent}`}>
        <div className="container product-story-grid">
          <div>
            <p className="page-breadcrumb"><a href="/">Home</a><span>/</span><a href="/services">Product</a></p>
            <p className="eyebrow">{journey.label}</p>
            <h1>{journey.headline[0]}<br /><em>{journey.headline[1]}</em></h1>
            <p className="page-lead">{feature.description}</p>
            <div className="compare-actions"><a href="/demo" className="button">Explore it in a demo</a><a href="#workflow" className="quiet-link">See how it connects</a></div>
          </div>
          <div className="journey-illustration" aria-label={`${journey.label} workflow illustration`}>
            <div className="journey-central-icon"><Icon name={journey.icon} size={60} /></div>
            <p className="eyebrow">{journey.caption}</p>
            {journey.steps.map(([label, heading], index) => <div className="journey-mini-card" key={label}><span>0{index + 1}</span><div><strong>{label}</strong><p>{heading}</p></div><Icon name="check" size={20} /></div>)}
          </div>
        </div>
      </section>
      <SectionAtmosphere>
        <section className="section container">
          <div className="detail-benefits">
            {feature.points.map((point, index) => (
              <article className="content-card" key={point}>
                <span className="eyebrow">0{index + 1}</span>
                <h2>{point}</h2>
                <Icon name={feature.icon} size={30} />
              </article>
            ))}
          </div>
        </section>
      </SectionAtmosphere>
      <section id="workflow" className="section container product-workflow">
        <p className="eyebrow">ONE CONNECTED WORKFLOW</p><h2>{journey.caption}</h2>
        <div className="journey-switch" role="group" aria-label="Explore workflow steps">
          {journey.steps.map(([label], index) => <button key={label} aria-pressed={selected === index} aria-controls="journey-detail" onClick={() => setSelected(index)}><span>0{index + 1}</span>{label}</button>)}
        </div>
        <div id="journey-detail" className="journey-detail" aria-live="polite">
          <div className="journey-step-art" aria-hidden="true"><Icon name={journey.icon} size={72} /><span>0{selected + 1}</span></div>
          <div><p className="eyebrow">{journey.steps[selected][0]}</p><h3>{journey.steps[selected][1]}</h3><p>{journey.steps[selected][2]}</p></div>
        </div>
        <details className="product-question"><summary>{journey.question}</summary><p>{journey.answer}</p></details>
      </section>
      <section className="section container detail-next">
        <div><p className="eyebrow">MAKE IT FIT YOUR WORKFLOW</p><h2>Start with the way you work today.</h2></div>
        <div><p>Bring your current process, property count and channels to the walkthrough. We’ll show how {feature.label.toLowerCase()} fits into your daily operation and discuss the setup your portfolio needs.</p>
          <a href="/integrations" className="quiet-link">Explore channel connections</a></div>
      </section>
      <nav className="container product-related" aria-label="Explore related products">
        <p className="eyebrow">KEEP EXPLORING</p>
        <div>{Object.entries(productRoutes).filter(([, id]) => id !== feature.id).map(([href, id]) => <a key={href} href={href}><Icon name={productJourneys[id].icon} size={24} /><span>{productJourneys[id].label}</span><Icon name="chevron" size={18} /></a>)}</div>
      </nav>
      <PageCta />
    </Page>
  );
}

export function InformationPage({ path }) {
  const page = informationPages[path];
  return (
    <Page>
      <PageIntro label={page.label} title={page.title} description={page.description}>
        <a href="/contact" className="button">Talk to our team</a>
      </PageIntro>
      <SectionAtmosphere variant="peach">
        <section className="section container">
          <div className="content-heading"><h2>{page.heading}</h2><p>{page.introduction}</p></div>
          <div className="content-card-grid">
            {page.cards.map(([icon, title, description]) => (
              <article className="content-card" key={title}><Icon name={icon} size={30} /><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          {page.note && <p className="content-note">{page.note}</p>}
        </section>
      </SectionAtmosphere>
      <PageCta />
    </Page>
  );
}

export function LegalPage({ path }) {
  const page = legalPages[path];
  const renderText = text => text.split(/((?:info|privacy)@simplifiedmanagement\.in|App Privacy Policy|Privacy Policy|Terms of Use|\n)/).map((part, index) => part.endsWith("@simplifiedmanagement.in") ? <a key={index} className="quiet-link" href={`mailto:${part}`}><strong>{part}</strong></a> : ["App Privacy Policy", "Privacy Policy", "Terms of Use"].includes(part) ? <a key={index} className="quiet-link" href={part === "App Privacy Policy" ? "/app-privacy" : part === "Terms of Use" ? "/terms" : "/privacy"}><strong>{part}</strong></a> : part === "\n" ? <br key={index} /> : part);
  return (
    <Page>
      <PageIntro label={page.label} title={page.title} description={page.description} />
      <section className="section container legal-layout">
        <nav aria-label={`${page.label} contents`} className="legal-index">
          <p className="eyebrow">ON THIS PAGE</p>
          {page.sections.map(([title], index) => <a key={title} href={`#policy-${index}`}>{title}</a>)}
          <a href="/contact">Contact the team</a>
        </nav>
        <div className="legal-copy">
          {page.approved ? <><p className="policy-date">Last updated: {page.lastUpdated}</p>{page.introduction && <p>{renderText(page.introduction)}{path === "/privacy" && <> <a className="quiet-link" href="/app-privacy"><strong>App Privacy Policy</strong></a> instead.</>}</p>}</> : <div className="policy-draft"><strong>Draft · pending approval</strong><p>This outline is prepared for the new website. It is not an approved policy or binding agreement. Request the current approved document from our team.</p></div>}
          {page.sections.map(([title, body, items, table], index) => <section id={`policy-${index}`} key={title}><h2>{title}</h2>{(Array.isArray(body) ? body : [body]).map((paragraph, j) => <p key={j}>{renderText(paragraph)}</p>)}{items && <ul>{items.map(item => <li key={item}>{renderText(item)}</li>)}</ul>}{table && <><div className="legal-table-wrap"><table className="legal-table"><caption className="legal-table-caption">{table.caption}</caption>{table.headers.some(Boolean) && <thead><tr>{table.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead>}<tbody>{table.rows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{renderText(value)}</td></tr>)}</tbody></table></div>{table.after && <p>{renderText(table.after)}</p>}</>}</section>)}
          {!page.approved && <section><h2>Questions about this document?</h2><p>Contact <a className="quiet-link" href="mailto:info@simplifiedmanagement.in">info@simplifiedmanagement.in</a> or call <a href="tel:+919824004043">+91 98240 04043</a>.</p></section>}
        </div>
      </section>
    </Page>
  );
}

const initialInputs = { properties: 20, channels: 4, hours: 10, rate: 3500 };
const inputFields = [
  ["properties", "Number of listings"],
  ["channels", "Number of channels / OTAs"],
  ["hours", "Hours / week on manual calendar & booking work"],
  ["rate", "Average nightly rate (₹)"],
];
const money = value => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
const wholeNumber = value => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(value));
const nonNegative = value => {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
};
export function calculateSavings(values) {
  const hours = 4.33 * nonNegative(values.hours) * 0.7;
  const operations = 250 * hours;
  const revenue = 8 * nonNegative(values.properties) * 0.02 * nonNegative(values.rate);
  return { hours, operations, revenue, total: operations + revenue };
}
export function RoiCalculatorPage() {
  const [values, setValues] = useState(initialInputs);
  const result = calculateSavings(values);
  return (
    <Page>
      <PageIntro label="ROI Calculator" title="See what automation could save you" description="Enter a few details about your portfolio to estimate the manual hours, operations cost, and revenue you could protect each month. All figures are estimates to help you plan, not a quote." />
      <SectionAtmosphere><section className="section container calculator-layout">
        <form className="calculator-inputs" onSubmit={event => event.preventDefault()}>
          <p className="eyebrow">Your portfolio</p><h2>Enter your numbers</h2><p>Results update live as you type.</p>
          {inputFields.map(([name, label]) => <label key={name} htmlFor={`roi-${name}`}>{label}<input id={`roi-${name}`} type="number" min="0" step="any" inputMode="numeric" value={values[name]} onChange={event => setValues(previous => ({ ...previous, [name]: event.target.value === "" ? "" : nonNegative(event.target.value) }))} /></label>)}
          <p className="content-note">Channels are shown for context. More channels usually means more manual sync work, which is captured in your weekly hours above.</p>
          <button type="button" className="quiet-link calculator-reset" onClick={() => setValues(initialInputs)}>Reset assumptions</button>
        </form>
        <div className="calculator-result" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">Estimated monthly value</p><h2>{money(Math.round(result.total))}</h2><p>Combined estimated ops savings and revenue protected each month.</p>
          <dl>
            <div><dt>Manual hours saved / month<small>Assuming automation removes about 70% of manual calendar and booking work.</small></dt><dd>{wholeNumber(result.hours)} hrs</dd></div>
            <div><dt>Operations cost saved / month<small>Hours saved valued at an assumed ₹250/hour of ops time.</small></dt><dd>{money(Math.round(result.operations))}</dd></div>
            <div><dt>Revenue protected / month<small>Avoided losses from double-bookings, based on a small share of monthly bookings at risk.</small></dt><dd>{money(Math.round(result.revenue))}</dd></div>
          </dl>
          <div className="roi-assumptions"><strong>Estimates only</strong><p>These figures are illustrative estimates based on general assumptions, not a quote or a guarantee of results. Actual savings depend on your listings, channels, rates, and how your team works.</p><p>Assumptions used: automation removes about 70% of manual hours, ops time valued at ₹250/hour, roughly 8 bookings per listing per month with about 1% at risk of a double-booking costing 2 nights.</p></div>
          <a href="/demo" className="button">Request a demo</a>
        </div>
      </section></SectionAtmosphere>
    </Page>
  );
}
const templates = [
  { name: "Daily property checklist", icon: "building", description: "Track arrivals, departures and the tasks each property needs today.", file: "daily-property-checklist.csv", rows: [["Date", "Property", "Arrival time", "Departure time", "Cleaning status", "Assigned team member", "Notes"], ["", "", "", "", "", "", ""]] },
  { name: "Channel availability review", icon: "calendar", description: "Review channel availability alongside your master calendar before a busy period.", file: "channel-availability-review.csv", rows: [["Review date", "Property", "Stay date", "Master calendar availability", "Channel", "Channel availability", "Mismatch", "Action", "Reviewed by"], ["", "", "", "", "", "", "", "", ""]] },
  { name: "Owner payout worksheet", icon: "wallet", description: "Record booking revenue, costs and the share agreed with each owner.", file: "owner-payout-worksheet.csv", rows: [["Period", "Property", "Booking reference", "Owner", "Booking revenue INR", "Expenses INR", "Owner share percent", "Calculated payout INR", "Paid date", "Notes"], ["", "", "", "", "", "", "", "", "", ""]] },
];
function downloadTemplate(template) {
  const csv = "\uFEFF" + template.rows.map(row => row.map(cell => `"${cell.replaceAll('"', '""')}"`).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = template.file;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function ResourcesPage() {
  return <Page><PageIntro label="Free Templates" title={<>A little structure. <em>A smoother day.</em></>} description="Simple worksheets for daily property operations. Download, adapt and use them with your team." />
    <SectionAtmosphere variant="peach"><section className="section container"><div className="content-card-grid">{templates.map(template => <article className="content-card template-card" key={template.file}><Icon name={template.icon} size={32} /><p className="eyebrow">FREE CSV TEMPLATE</p><h2>{template.name}</h2><p>{template.description}</p><button className="button" onClick={() => downloadTemplate(template)}>Download template</button></article>)}</div><p className="content-note">Open these blank CSV worksheets in your preferred spreadsheet app. Fill in values and calculations to suit your workflow; these downloads do not include formulas.</p></section></SectionAtmosphere><PageCta title="Ready to connect the whole workflow?" /></Page>;
}

export function ComparePage() {
  return <Page>
    <PageIntro label="Compare" title="Choosing a channel manager for India" description="If you are evaluating channel managers, it helps to compare the things that actually affect day-to-day operations. Here is how Simplified Management fits, and how it stacks up against tools operators often consider." />
    <SectionAtmosphere><section className="section container">
      <div className="content-heading"><p className="eyebrow">Side-by-side</p><h2>Compare Simplified Management</h2><p>We keep these comparisons fair and factual. Pick a tool below to see the capabilities operators tell us matter most.</p></div>
      <div className="content-card-grid">{competitors.map(competitor => <article className="content-card" key={competitor.slug}><h3>vs {competitor.name}</h3><p>{competitor.description}</p><a className="quiet-link" href={`/compare/${competitor.slug}`}>Read comparison</a></article>)}</div>
    </section></SectionAtmosphere>
    <section className="section container detail-next">
      <div><p className="eyebrow">Why operators choose us</p><h2>Built for how India operates</h2></div>
      <div><p>Many platforms are built for other markets first. Simplified Management is designed around the OTAs, payout structures, and support expectations that matter for operators in India.</p><ul className="check-list">{comparisonBenefits.map(benefit => <li key={benefit}><Icon name="check" size={20} /><span>{benefit}</span></li>)}</ul></div>
    </section>
    <PageCta title="Start simplifying your operations" description="From 10 to 500+ listings, automate OTA distribution and partner payouts, and scale your property business." />
  </Page>;
}
export function CompetitorComparisonPage({ path }) {
  const competitor = competitors.find(item => path === `/compare/${item.slug}`);
  return <Page>
    <PageIntro label="Compare" title={`Simplified Management vs ${competitor.name}`} description={`Both platforms help you manage listings and distribute across OTAs. If you are weighing ${competitor.name} against Simplified Management, this page focuses on the capabilities operators in India tell us matter most.`}><a href="/compare" className="quiet-link">All comparisons</a></PageIntro>
    <section className="section container">
      <div className="content-heading"><p className="eyebrow">A fair comparison</p><h2>What operators tell us matters</h2><p>{competitor.name} is an established tool used by property operators. Rather than make claims about its roadmap or pricing, we focus here on what Simplified Management offers, so you can line it up against your own evaluation of {competitor.name}.</p><p>If you are comparing {competitor.name} with Simplified Management, here is what operators tell us matters.</p></div>
      <h2>What Simplified Management offers</h2><p>Use these as a checklist when you evaluate {competitor.name} or any other platform.</p>
      <div className="content-card-grid">{comparisonCapabilities.map(([icon, title, description]) => <article className="content-card" key={title}><Icon name={icon} size={30} /><h3>{title}</h3><p>{description}</p></article>)}</div>
      <div className="policy-draft comparison-diligence"><h3>Do your own diligence</h3><p>Every portfolio is different. The best way to compare {competitor.name} and Simplified Management is to see both against your real properties, channels, and payout structure. Request a demo and we will map the platform to how your team actually works.</p></div>
    </section>
    <PageCta title="Start simplifying your operations" description="From 10 to 500+ listings, automate OTA distribution and partner payouts, and scale your property business." />
  </Page>;
}
