import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import { useEffect, useSyncExternalStore } from "react";
import ProductPage from "./pages/ProductPage";
import SolutionsPage from "./pages/SolutionsPage";
import PricingPage from "./pages/PricingPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import BlogPage, { ArticlePage } from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import DemoPage from "./pages/DemoPage";
import NotFoundPage from "./pages/NotFoundPage";
import { pageMetadata } from "./data/navigation";
import { articles } from "./data/articles";
import { productRoutes, informationPages, legalPages } from "./data/footerPages";
import { ProductDetailPage, InformationPage, LegalPage, RoiCalculatorPage, ResourcesPage, ComparePage, CompetitorComparisonPage } from "./pages/FooterPages";

const pages = {
  "/": HomePage,
  "/services": ProductPage,
  "/solutions": SolutionsPage,
  "/pricing": PricingPage,
  "/integrations": IntegrationsPage,
  "/blog": BlogPage,
  "/contact": ContactPage,
  "/demo": DemoPage,
  "/roi-calculator": RoiCalculatorPage,
  "/resources": ResourcesPage,
  "/compare": ComparePage,
  "/compare/hostaway": CompetitorComparisonPage,
  "/compare/guesty": CompetitorComparisonPage,
  "/compare/lodgify": CompetitorComparisonPage,
};
const subscribe = (notify) => {
  window.addEventListener("popstate", notify);
  window.addEventListener("site:navigate", notify);
  return () => {
    window.removeEventListener("popstate", notify);
    window.removeEventListener("site:navigate", notify);
  };
};
const snapshot = () => window.location.pathname.replace(/\/$/, "") || "/";

export default function App() {
  const path = useSyncExternalStore(subscribe, snapshot, () => "/");
  const article = path.startsWith("/blog/")
    ? articles.find((a) => path === `/blog/${a.slug}`)
    : null;
  const Page = pages[path] || (productRoutes[path] ? ProductDetailPage : informationPages[path] ? InformationPage : legalPages[path] ? LegalPage : NotFoundPage);
  useEffect(() => {
    const [title, description] = article
      ? [article.title, article.summary]
      : pageMetadata[path] || [
          "Page not found",
          "Find your way back to Simplified Management.",
        ];
    document.title = `${title} | Simplified Management`;
    document.querySelector('meta[name="description"]').content = description;
    const frame = requestAnimationFrame(() => {
      if (window.location.hash)
        document
          .getElementById(decodeURIComponent(window.location.hash.slice(1)))
          ?.scrollIntoView();
      else {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [path, article]);
  function navigate(event) {
    const anchor = event.target.closest("a[href]");
    if (
      !anchor ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      anchor.target ||
      anchor.hasAttribute("download")
    )
      return;
    const url = new URL(anchor.href);
    if (
      url.origin !== window.location.origin ||
      !/^https?:$/.test(url.protocol)
    )
      return;
    const nextPath = url.pathname.replace(/\/$/, "") || "/";
    if (nextPath === path) return;
    event.preventDefault();
    window.history.pushState({}, "", url.pathname + url.search + url.hash);
    window.dispatchEvent(new Event("site:navigate"));
  }
  return (
    <div onClick={navigate}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header path={path} />
      {article ? (
        <ArticlePage key={path} article={article} />
      ) : (
        <Page key={path} path={path} />
      )}
      <Footer />
    </div>
  );
}
