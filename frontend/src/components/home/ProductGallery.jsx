import { useRef, useState } from "react";
import { productScreenshots } from "../../data/productScreenshots";
import Icon from "../ui/Icon";

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);
  const [originalSize, setOriginalSize] = useState(false);
  const dialog = useRef(null);
  const screenshot = productScreenshots[selected];
  return (
    <section
      id="product-screenshots"
      className="product-gallery container"
      aria-label="Actual product screenshots"
    >
      <div className="gallery-heading">
        <div>
          <p className="eyebrow">A LOOK INSIDE SIMPLIFIED MANAGEMENT</p>
          <h2>Your operation, in focus.</h2>
        </div>
        <p>
          Explore the actual platform, from your daily overview to the
          performance of each property.
        </p>
      </div>
      <div className="gallery-toolbar">
        <div className="gallery-options" aria-label="Choose product screenshot">
          {productScreenshots.map((item, index) => (
            <button
              key={item.id}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="gallery-expand"
          onClick={() => {
            setOriginalSize(false);
            dialog.current.showModal();
          }}
        >
          Expand screenshot
        </button>
      </div>
      <figure className="product-screenshot">
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          loading="lazy"
        />
        <figcaption>{screenshot.caption}</figcaption>
      </figure>
      <dialog
        ref={dialog}
        className="screenshot-dialog"
        aria-labelledby="screenshot-dialog-title"
      >
        <div className="dialog-header">
          <h3 id="screenshot-dialog-title">{screenshot.label}</h3>
          <div className="image-view-controls">
            <button
              onClick={() => setOriginalSize(!originalSize)}
              aria-pressed={originalSize}
            >
              {originalSize ? "Fit to screen" : "Original size"}
            </button>
            <a href={screenshot.src} download>
              Download PNG
            </a>
          </div>
          <button
            onClick={() => dialog.current.close()}
            aria-label="Close screenshot"
          >
            <Icon name="close" />
          </button>
        </div>
        <div
          className={`dialog-image-scroll ${originalSize ? "dialog-image-scroll--original" : ""}`}
        >
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
          />
        </div>
        <p>
          {screenshot.caption} · {screenshot.width} × {screenshot.height} pixels
        </p>
      </dialog>
    </section>
  );
}
