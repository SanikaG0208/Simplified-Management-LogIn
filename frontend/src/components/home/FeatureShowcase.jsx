import { useState } from "react";
import { features } from "../../data/content";
import { featureScreenshots } from "../../data/featureScreenshots";
import Icon from "../ui/Icon";

export default function FeatureShowcase({ productPage = false }) {
  const [active, setActive] = useState(null);
  return (
    <section
      id={productPage ? "product-features" : "platform"}
      className="help-showcase section"
      aria-labelledby={productPage ? "product-help-title" : "home-help-title"}
    >
      <div className="container help-heading">
        <p className="eyebrow">The Platform</p>
        <h2 id={productPage ? "product-help-title" : "home-help-title"}>
          Everything you need to run distribution
        </h2>
        <p>
          One connected system for listings, calendars, channels, and payouts,
          built for operators running 10 to 500+ listings.
        </p>
      </div>
      <div className="help-rows">
        {features.map((feature, index) => {
          const screenshot = featureScreenshots[feature.id];
          return (
            <article
              key={feature.id}
              id={productPage ? feature.id : `home-${feature.id}`}
              data-feature={feature.id}
              className={`help-row ${active === feature.id ? "help-row--active" : ""}`}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActive(feature.id);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") setActive(null);
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setActive(null);
              }}
            >
              <button
                className="help-trigger container"
                aria-expanded={active === feature.id}
                aria-controls={`${productPage ? "product" : "home"}-${feature.id}-details`}
                onFocus={(event) => {
                  if (event.currentTarget.matches(":focus-visible")) setActive(feature.id);
                }}
                onClick={(event) => {
                  if (event.detail === 0 || window.matchMedia("(hover: none)").matches)
                    setActive((previous) => previous === feature.id ? null : feature.id);
                }}
              >
                <span className="help-number" aria-hidden="true">0{index + 1}</span>
                <span>{feature.label}</span>
                <span className="help-trigger-symbol" aria-hidden="true">{active === feature.id ? "−" : "+"}</span>
              </button>
              <div
                id={`${productPage ? "product" : "home"}-${feature.id}-details`}
                className="help-details"
                aria-hidden={active !== feature.id}
                inert={active !== feature.id}
              >
              <div className="help-details-clip">
              <div className="container help-row-inner">
                <span className="help-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <figure className="help-screenshot">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    loading="lazy"
                  />
                  <figcaption>{screenshot.caption}</figcaption>
                </figure>
                <div className="help-copy">
                  <h3>{feature.label}</h3>
                  <p className="help-benefit">{feature.title}</p>
                  <p>{feature.description}</p>
                  <ul>
                    {feature.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" size={17} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="quiet-link"
                    href={
                      productPage
                        ? feature.id === "channels"
                          ? "/integrations"
                          : "/demo"
                        : `/services#${feature.id}`
                    }
                  >
                    {productPage
                      ? feature.id === "channels"
                        ? "Explore booking channels"
                        : "Explore this in your demo"
                      : "Explore this feature"}
                  </a>
                </div>
              </div>
              </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
