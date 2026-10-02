export default function PageIntro({
  label,
  title,
  description,
  children,
  image,
  imageAlt,
}) {
  return (
    <section className={`page-intro ${image ? "page-intro--split" : ""}`}>
      <div className="container page-intro-inner">
        <div className="page-intro-copy">
          <p className="page-breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            {label}
          </p>
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          <p className="page-lead">{description}</p>
          {children && <div className="page-intro-actions">{children}</div>}
        </div>
        {image && (
          <figure className="page-intro-image">
            <img src={image} alt={imageAlt} />
          </figure>
        )}
      </div>
    </section>
  );
}
