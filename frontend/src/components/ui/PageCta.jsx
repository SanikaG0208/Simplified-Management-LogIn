import { Button } from "antd";
export default function PageCta({
  title = "Let's make your next day simpler.",
  description = "Bring your properties, your questions and your current workflow. We'll explore the platform together.",
}) {
  return (
    <section className="page-cta">
      <div className="container page-cta-inner">
        <div>
          <p className="eyebrow">YOUR PROPERTIES. YOUR PRIORITIES.</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Button type="primary" className="button" href="/demo">
          Request Demo
        </Button>
      </div>
    </section>
  );
}
