import Hero from "../components/home/Hero";
import Channels from "../components/home/Channels";
import Platform from "../components/home/Platform";
import Solutions from "../components/home/Solutions";
import MobileApp from "../components/home/MobileApp";
import GettingStarted from "../components/home/GettingStarted";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import ProductGallery from "../components/home/ProductGallery";
import Pricing from "../components/home/Pricing";
import AiAssistant from "../components/home/AiAssistant";
import SectionAtmosphere from "../components/ui/SectionAtmosphere";

export default function HomePage() {
  return (
    <main id="main" tabIndex="-1">
      <SectionAtmosphere><Hero /></SectionAtmosphere>
      <Channels />
      <SectionAtmosphere variant="peach"><ProductGallery /></SectionAtmosphere>
      <Platform />
      <AiAssistant />
      <Solutions />
      <SectionAtmosphere><MobileApp /></SectionAtmosphere>
      <GettingStarted />
      <SectionAtmosphere variant="peach"><Pricing /></SectionAtmosphere>
      <SectionAtmosphere><FAQ /></SectionAtmosphere>
      <Contact />
    </main>
  );
}
