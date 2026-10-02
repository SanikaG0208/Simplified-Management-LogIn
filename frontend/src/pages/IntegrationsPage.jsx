import { Button } from "antd";
import PageIntro from "../components/ui/PageIntro";
import PageCta from "../components/ui/PageCta";
import { channels } from "../data/channels";

export default function IntegrationsPage() {
  return (
    <main id="main" tabIndex="-1">
      <PageIntro
        label="Integrations"
        title={
          <>
            Your channels.
            <br />
            <em>Working together.</em>
          </>
        }
        description="Explore the channels listed by Simplified Management. Bring the places your guests book into a conversation about one connected availability calendar."
      >
        <Button type="primary" href="/demo" className="button">
          Discuss your channel setup
        </Button>
      </PageIntro>
      <section className="container section integration-directory">
        <div className="section-intro">
          <div>
            <p className="eyebrow">INDIAN AND INTERNATIONAL CHANNELS</p>
            <h2>Meet your connections.</h2>
          </div>
          <p>
            Confirm the connection method, synchronised fields and setup
            requirements for your listings with our team.
          </p>
        </div>
        <div className="integration-grid">
          {channels.map((c) => (
            <article key={c.name}>
              <div className="integration-logo">
                <img src={c.logo} alt={c.name} loading="lazy" />
              </div>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <a
                className="quiet-link"
                href={`/demo?channel=${encodeURIComponent(c.name)}`}
              >
                Ask about this connection
              </a>
            </article>
          ))}
        </div>
        <p className="brand-note">
          Channel logos belong to their respective owners. Their display
          identifies the channels listed by Simplified Management and does not
          imply endorsement.
        </p>
      </section>
      <section className="connection-process">
        <div className="container">
          <p className="eyebrow">FROM SETUP TO YOUR DAILY WORKFLOW</p>
          <h2>Three steps to a connected calendar.</h2>
          <ol className="connection-steps">
            <li>
              <span>01</span>
              <h3>Connect your channels</h3>
              <p>
                Identify the channels you use and confirm the available
                connection method for each one.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Map rooms and rates</h3>
              <p>
                Match listings, properties, room inventory and rate plans so
                updates reach the right place.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Verify your workflow</h3>
              <p>
                Review how bookings, changes and cancellations appear, then
                agree on the checks your team will follow.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="container section pricing-questions">
        <h2>Connection questions.</h2>
        <div className="faq-list">
          <details>
            <summary>
              Can I connect my existing listings?
              <span aria-hidden="true" />
            </summary>
            <p>
              Bring your channel accounts and listings to your demo. The team
              will confirm compatibility and what is needed to map and connect
              them.
            </p>
          </details>
          <details>
            <summary>
              What synchronises between channels?
              <span aria-hidden="true" />
            </summary>
            <p>
              Discuss availability, rates and reservation updates for each
              channel. The exact fields and update behaviour depend on the
              connection and configuration.
            </p>
          </details>
          <details>
            <summary>
              What if I use another channel?
              <span aria-hidden="true" />
            </summary>
            <p>
              Tell the team which channel you need. They can confirm whether it
              is supported and explain the available options.
            </p>
          </details>
        </div>
      </section>
      <PageCta title="Bring your channel list. We'll take it from there." />
    </main>
  );
}
