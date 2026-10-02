import PageIntro from "../components/ui/PageIntro";
import PageCta from "../components/ui/PageCta";
import Pricing from "../components/home/Pricing";
import { pricingTitle, pricingDescription, pricingFaqs } from "../data/pricing";

export default function PricingPage() {
  return (
    <main id="main" tabIndex="-1">
      <PageIntro label="Pricing" title={pricingTitle} description={pricingDescription} />
      <Pricing showIntro={false} />
      <section className="container section pricing-questions">
        <p className="eyebrow">FAQ</p><h2>Questions, answered</h2>
        <p>Still unsure? Our team walks you through everything in a live demo tailored to your portfolio.</p>
        <div className="faq-list">{pricingFaqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
      </section>
      <PageCta title="Start simplifying your operations" description="From 10 to 500+ listings, automate OTA distribution and partner payouts, and scale your property business." />
    </main>
  );
}
