import { channels } from "../../data/channels";

export default function Channels() {
  return (
    <section className="channels">
      <div className="container">
        <p>Your channels. One connected conversation.</p>
        <div className="channel-names">
          {channels.map((c) => (
            <a
              key={c.name}
              href="/integrations"
              aria-label={`Explore ${c.name} integration`}
            >
              <img src={c.logo} alt={c.name} loading="lazy" />
            </a>
          ))}
        </div>
        <small>
          Explore supported connections and synchronisation methods with our
          team.
        </small>
      </div>
    </section>
  );
}
