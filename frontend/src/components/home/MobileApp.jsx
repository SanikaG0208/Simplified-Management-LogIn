import { Button } from "antd";
import Icon from "../ui/Icon";
import { useState } from "react";

export default function MobileApp() {
  const [view, setView] = useState("dashboard");
  return (
    <section id="app" className="section container app-layout">
      <div className="app-copy">
        <p className="eyebrow">HOSPITALITY IS ALWAYS ON THE MOVE</p>
        <h2>
          Your day doesn't
          <br />
          stop at your desk.
        </h2>
        <p>
          Keep your operation close with the Simplified Management app. Explore
          the mobile experience and the workflows available to your team.
        </p>
        <Button type="primary" className="button" href="/demo">
          Include the app in my demo
        </Button>
        <div className="app-detail">
          <Icon name="phone" size={24} />
          <span>
            Your properties, within reach.
            <br />
            <small>Ask our team for an actual app walkthrough.</small>
          </span>
        </div>
        <div
          className="mobile-view-switch"
          aria-label="Choose mobile screenshot"
        >
          <button
            aria-pressed={view === "dashboard"}
            onClick={() => setView("dashboard")}
          >
            Dashboard
          </button>
          <button
            aria-pressed={view === "menu"}
            onClick={() => setView("menu")}
          >
            Menu
          </button>
        </div>
      </div>
      <div className="app-stage">
        <span className="app-stage-caption">
          A LITTLE CLARITY.
          <br />
          WHEREVER YOU ARE.
        </span>
        <div className="phone-mockup phone-mockup--actual">
          <img
            src={
              view === "dashboard"
                ? "/images/mobile-dashboard.png"
                : "/images/mobile-menu.png"
            }
            alt={
              view === "dashboard"
                ? "Actual Simplified Management mobile dashboard showing revenue and expenses, system alerts and quick actions. The screen contains demo data."
                : "Actual Simplified Management mobile menu showing properties, availability calendar, rates, reservations, payments, reports, housekeeping and other operations."
            }
            loading="lazy"
            width={view === "dashboard" ? 277 : 276}
            height={view === "dashboard" ? 603 : 597}
          />
        </div>
        <p className="app-sample-note">Actual mobile view · demo data</p>
      </div>
    </section>
  );
}
