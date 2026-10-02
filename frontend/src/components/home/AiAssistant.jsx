import { Button } from "antd";
import Icon from "../ui/Icon";

export default function AiAssistant() {
  return (
    <section id="ai-assistant" className="ai-section">
      <div className="container ai-layout">
        <div className="ai-copy">
          <p className="eyebrow">
            <Icon name="sparkles" size={17} /> AI ASSISTANT
          </p>
          <h2>
            A little intelligence.
            <br />
            Right where
            <br />
            you work.
          </h2>
          <p>
            Meet the AI Assistant inside Simplified Management. Explore it
            alongside your property workflows in a personal walkthrough with our
            team.
          </p>
          <div className="ai-divider" />
          <h3>See what it can do for your operation.</h3>
          <p className="ai-secondary">
            Bring your everyday questions to the demo. We'll show you the
            assistant and explain the capabilities available in the platform.
          </p>
          <Button type="primary" className="button ai-demo" href="/demo">
            See the AI Assistant in action
          </Button>
          <a className="ai-product-link" href="#product-screenshots">
            Explore the actual product screens
          </a>
        </div>
        <figure className="ai-artwork">
          <img
            src="/images/ai-assistant-art.png"
            alt="Decorative cobalt glass architecture connected around a luminous centre, representing intelligence within a property portfolio"
            loading="lazy"
            width="1536"
            height="1024"
          />
          <figcaption>Connected properties. A clearer perspective.</figcaption>
        </figure>
      </div>
    </section>
  );
}
