import { Button } from "antd";
import PageIntro from "../components/ui/PageIntro";
import PageCta from "../components/ui/PageCta";
import ProductGallery from "../components/home/ProductGallery";
import AiAssistant from "../components/home/AiAssistant";
import MobileApp from "../components/home/MobileApp";
import FeatureShowcase from "../components/home/FeatureShowcase";
import { features } from "../data/content";

export default function ProductPage() {
  return (
    <main id="main" tabIndex="-1">
      <PageIntro
        label="Product"
        title={
          <>
            The whole operation.
            <br />
            <em>One clear view.</em>
          </>
        }
        description="Reservations, calendars, guests, teams and owner accounts. A connected platform for the work behind every stay."
      >
        <Button type="primary" className="button" href="/demo">
          See the platform in action
        </Button>
        <a className="quiet-link" href="#product-screenshots">
          Explore the real screens
        </a>
      </PageIntro>
      <nav
        className="product-jump-links container"
        aria-label="Product sections"
      >
        {features.map((f) => (
          <a key={f.id} href={`#${f.id}`}>
            {f.label}
          </a>
        ))}
        <a href="#ai-assistant">AI Assistant</a>
      </nav>
      <ProductGallery />
      <FeatureShowcase productPage />
      <AiAssistant />
      <MobileApp />
      <PageCta />
    </main>
  );
}
