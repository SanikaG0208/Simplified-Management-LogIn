import { faqs } from "../../data/content";

export default function FAQ() {
  return (
    <section id="questions" className="section container faq-layout">
      <div>
        <p className="eyebrow">GOOD QUESTIONS, CLEAR ANSWERS</p>
        <h2>
          A few things
          <br />
          before we talk.
        </h2>
        <p>
          Still have a question?
          <br />
          <a className="quiet-link" href="mailto:info@simplifiedmanagement.in">
            Our team is here to help.
          </a>
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>
              {faq.question}
              <span aria-hidden="true" />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
