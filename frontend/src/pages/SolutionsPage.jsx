import { Button } from "antd";
import PageIntro from "../components/ui/PageIntro";
import PageCta from "../components/ui/PageCta";
import { photography } from "../data/content";

const segments = [
  {
    id: "vacation-rentals",
    name: "Vacation rentals",
    title: "Every home, part of the bigger picture.",
    description:
      "Villas and homestays each have their own character. Keep their bookings, calendars and owner accounts connected while your team looks after every stay.",
    points: [
      "Availability across your booking channels",
      "Property-level income and expenses",
      "Cleaning and check-in preparation",
    ],
    focus: "Villas · Homestays · Holiday homes",
  },
  {
    id: "boutique-hotels",
    name: "Boutique hotels",
    title: "An organised front desk. A more personal stay.",
    description:
      "Keep room inventory, bookings and the day's activity in one place. Your team can follow arrivals, departures and the work that needs attention.",
    points: [
      "Room-type inventory and rate mapping",
      "Guest details and reservation management",
      "Tasks and housekeeping coordination",
    ],
    focus: "Independent hotels · Boutique stays",
  },
  {
    id: "serviced-apartments",
    name: "Serviced apartments",
    title: "Short stays and longer stays, together.",
    description:
      "Corporate stays and nightly bookings need the same reliable availability picture. Manage your units and keep turnover work connected across locations.",
    points: [
      "A shared calendar for different stay lengths",
      "Revenue visibility for each apartment",
      "Guest information and turnover tasks",
    ],
    focus: "City apartments · Corporate stays",
  },
  {
    id: "property-managers",
    name: "Property managers",
    title: "More owners. Clearer accountability.",
    description:
      "Run a multi-owner portfolio with property allocations, booking-level earnings and expenses, and clear partner statements. Keep operations in view as your business grows.",
    points: [
      "Owner and partner allocations",
      "Earnings and shared expense splits",
      "Portfolio reporting and team tasks",
    ],
    focus: "Multi-owner portfolios · Growing operators",
  },
];

export default function SolutionsPage() {
  return (
    <main id="main" tabIndex="-1">
      <PageIntro
        label="Solutions"
        title={
          <>
            Built around
            <br />
            <em>your kind of stay.</em>
          </>
        }
        description="A villa portfolio, a boutique hotel or apartments across the city. Find the workflows that fit the way you operate."
        image={photography.interior}
        imageAlt="Bright furnished apartment with a comfortable living space"
      >
        <Button type="primary" href="/demo" className="button">
          Talk about your properties
        </Button>
      </PageIntro>
      <div
        className="container segment-index"
        aria-label="Find your property type"
      >
        {segments.map((s) => (
          <a href={`#${s.id}`} key={s.id}>
            {s.name}
          </a>
        ))}
      </div>
      <section className="container segment-list">
        {segments.map((s, i) => (
          <article id={s.id} className="segment" key={s.id}>
            <div className="segment-label">
              <span>0{i + 1}</span>
              <h2>{s.name}</h2>
              <p>{s.focus}</p>
            </div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a
                className="quiet-link"
                href={`/demo?interest=${encodeURIComponent(s.name)}`}
              >
                See how it fits your business
              </a>
            </div>
          </article>
        ))}
      </section>
      <PageCta title="What does a simpler operation look like for you?" />
    </main>
  );
}
