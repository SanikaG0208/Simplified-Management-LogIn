import { Button } from "antd";
import PageIntro from "../components/ui/PageIntro";
import Contact from "../components/home/Contact";

export default function ContactPage() {
  return (
    <main id="main" tabIndex="-1">
      <PageIntro
        label="Contact"
        title={
          <>
            Let's talk about
            <br />
            <em>your next chapter.</em>
          </>
        }
        description="Questions about the platform, your channels or your portfolio? Start a conversation with the Simplified Management team."
      >
        <Button type="primary" href="tel:+919824004043" className="button">
          Call +91 98240 04043
        </Button>
        <a className="quiet-link" href="mailto:info@simplifiedmanagement.in">
          Email our team
        </a>
      </PageIntro>
      <section className="container contact-information">
        <div>
          <p className="eyebrow">FIND US</p>
          <h2>Pune, India.</h2>
          <p>
            Viman Nagar, Pune
            <br />
            Maharashtra, India
          </p>
        </div>
        <div>
          <p className="eyebrow">ALREADY USING THE PLATFORM?</p>
          <h3>Your daily workspace is ready.</h3>
          <p>
            Open the app to access your properties, bookings and team workflows.
          </p>
          <a
            className="quiet-link"
            href="https://app.simplifiedmanagement.in/login"
          >
            Log in to your account
          </a>
        </div>
        <div>
          <p className="eyebrow">WANT A WALKTHROUGH?</p>
          <h3>See it with your priorities in mind.</h3>
          <p>
            Explore the actual product and discuss the right setup for your
            properties.
          </p>
          <a className="quiet-link" href="/demo">
            Request Demo
          </a>
        </div>
      </section>
      <Contact mode="contact" />
    </main>
  );
}
