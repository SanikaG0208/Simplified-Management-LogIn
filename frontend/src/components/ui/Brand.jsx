export default function Brand({ inverse = false }) {
  return (
    <a
      className={`brand ${inverse ? "brand--inverse" : ""}`}
      href="/"
      aria-label="Simplified Management home"
    >
      <img
        className="brand-full-logo"
        src="/images/logo-full.png"
        alt="Simplified Management"
        width="1013"
        height="109"
      />
      <img
        className="brand-short-logo"
        src="/images/logo-short.png"
        alt=""
        width="230"
        height="230"
      />
    </a>
  );
}
