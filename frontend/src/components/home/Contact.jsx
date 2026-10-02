import { useState } from "react";

export default function Contact({ mode = "demo" }) {
  const isContact = mode === "contact";
  const params = new URLSearchParams(window.location.search);
  const context = params.get("channel")
    ? `I'd like to discuss the ${params.get("channel")} connection.`
    : params.get("interest")
      ? `I'd like a walkthrough for ${params.get("interest")}.`
      : "";
  const [status, setStatus] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Hello Simplified Management,",
      isContact
        ? "I would like to talk to your team."
        : "I would like to book a platform demo.",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Portfolio: ${data.get("portfolio")}`,
      `Interested in: ${data.get("interest")}`,
      data.get("message"),
    ].join("\n\n");
    window.location.href = `mailto:info@simplifiedmanagement.in?subject=${encodeURIComponent(isContact ? "Property management enquiry" : "Platform demo enquiry")}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email draft is ready to open. Review and send it in your email app. If it does not open, email us directly.",
    );
  }
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">MORE ROOM FOR WHAT MATTERS</p>
          <h2>
            Your next chapter
            <br />
            starts with a<br />
            <em>simpler day.</em>
          </h2>
          <p>
            Let's explore what connected property management could look like for
            your business.
          </p>
          <div className="contact-links">
            <a href="tel:+919824004043">+91 98240 04043</a>
            <a href="mailto:info@simplifiedmanagement.in">
              info@simplifiedmanagement.in
            </a>
          </div>
        </div>
        <form className="demo-form" onSubmit={handleSubmit}>
          <h3>
            {isContact ? "Start a conversation" : "Book your personal demo"}
          </h3>
          <p>
            {isContact
              ? "Tell us about your properties and how we can help."
              : "A conversation around your properties and priorities."}
          </p>
          <div className="form-row">
            <label htmlFor="demo-name">
              Your name
              <input
                id="demo-name"
                name="name"
                autoComplete="name"
                placeholder="Full name"
                required
              />
            </label>
            <label htmlFor="demo-email">
              Work email
              <input
                id="demo-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="demo-phone">
              Phone <span>(optional)</span>
              <input
                id="demo-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Your contact number"
              />
            </label>
            <label htmlFor="demo-portfolio">
              Portfolio size
              <select
                id="demo-portfolio"
                name="portfolio"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select properties
                </option>
                <option>1–10 properties</option>
                <option>11–50 properties</option>
                <option>51–200 properties</option>
                <option>200+ properties</option>
              </select>
            </label>
          </div>
          <label htmlFor="demo-interest">
            I'd like to explore
            <select
              id="demo-interest"
              name="interest"
              defaultValue="The full platform"
            >
              <option>The full platform</option>
              <option>Property management</option>
              <option>Channel management</option>
              <option>Partner accounts</option>
              <option>The mobile app</option>
              <option>The AI Assistant</option>
            </select>
          </label>
          <label htmlFor="demo-message">
            Anything else? <span>(optional)</span>
            <textarea
              id="demo-message"
              name="message"
              rows="3"
              defaultValue={context}
              placeholder="Tell us what you want to simplify."
            />
          </label>
          <button className="button" type="submit">
            {isContact ? "Prepare my enquiry" : "Prepare my demo enquiry"}
          </button>
          <small className="form-note">
            Opens an email draft for you to review and send.
          </small>
          <p className="form-status" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
