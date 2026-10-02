import { useState } from "react";
import { photography, solutions } from "../../data/content";

export default function Solutions() {
  const [selected, setSelected] = useState(0);
  const solution = solutions[selected];
  return (
    <section id="solutions" className="solutions-section">
      <div className="container solutions-layout">
        <div className="solutions-photo">
          <img
            src={photography.interior}
            alt="Contemporary furnished apartment with a comfortable living area and kitchen"
            loading="lazy"
            width="800"
            height="900"
          />
          <span>EVERY SPACE HAS A STORY.</span>
        </div>
        <div className="solutions-copy">
          <p className="eyebrow">BUILT AROUND YOUR BUSINESS</p>
          <h2>
            Different places.
            <br />
            The same peace of mind.
          </h2>
          <div className="solution-options" aria-label="Property type">
            {solutions.map((item, index) => (
              <button
                key={item.id}
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="solution-detail" aria-live="polite">
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>
              {solution.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <a className="quiet-link" href="/solutions">
            Let's talk about your properties
          </a>
        </div>
      </div>
    </section>
  );
}
