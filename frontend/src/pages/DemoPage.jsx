import PageIntro from "../components/ui/PageIntro";
import Contact from "../components/home/Contact";

export default function DemoPage() {
  return (
    <main id="main" tabIndex="-1">
      <PageIntro
        label="Request Demo"
        title={
          <>
            Your properties.
            <br />
            <em>Your personal walkthrough.</em>
          </>
        }
        description="See the real Simplified Management platform with a conversation centred on your portfolio, your channels and the work you want to simplify."
        image="/images/dashboard.png"
        imageAlt="Actual Simplified Management dashboard with reservations, property totals and activity"
      >
        <a className="button" href="#contact">
          Request your walkthrough
        </a>
      </PageIntro>
      <section className="container section demo-agenda">
        <div>
          <p className="eyebrow">WHAT WE'LL EXPLORE</p>
          <h2>
            Make the walkthrough
            <br />
            useful to you.
          </h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>Your operation</h3>
              <p>
                Tell us about your listings, channels and the tools your team
                uses today.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Your everyday workflows</h3>
              <p>
                Explore bookings, calendars, partner accounts, mobile screens
                and the AI Assistant.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Your next steps</h3>
              <p>
                Discuss connections, onboarding requirements and a quote matched
                to your portfolio.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <Contact />
    </main>
  );
}
