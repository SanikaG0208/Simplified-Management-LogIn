import { Button } from "antd";
import { plans, pricingTitle, pricingDescription, pricingNotes } from "../../data/pricing";
import Icon from "../ui/Icon";

export default function Pricing({ showIntro = true }) {
  return (
    <section id="pricing" className="section container pricing-section">
      {showIntro && <div className="section-intro"><div><p className="eyebrow">PRICING</p><h2>{pricingTitle}</h2></div><p>{pricingDescription}</p></div>}
      <div className="pricing-grid pricing-grid--two">
        {plans.map(plan => (
          <article key={plan.name}>
            <h3>{plan.name}</h3><p>{plan.description}</p>
            <div className="pricing-rates">
              {plan.rates.map(rate => <div key={rate.label}><p>{rate.label}</p><strong>{rate.amount}</strong><span>{rate.unit}</span></div>)}
            </div>
            <ul>{plan.features.map(feature => <li key={feature}><Icon name="check" size={17} />{feature}</li>)}</ul>
            <Button type="primary" className="button" href="/demo">Book a demo</Button>
          </article>
        ))}
      </div>
      <div className="pricing-notes">{pricingNotes.map(note => <p key={note}><Icon name="check" size={17} />{note}</p>)}</div>
    </section>
  );
}
