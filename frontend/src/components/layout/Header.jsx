import { useEffect, useRef, useState } from "react";
import Brand from "../ui/Brand";
import Icon from "../ui/Icon";
import { navigation as links } from "../../data/navigation";

export default function Header({ path = "/" }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let frame = null;
    const updateHeader = () => {
      frame = null;
      // Clamp overscroll on touch devices and ignore small scroll jitters.
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = Math.min(maxY, Math.max(0, window.scrollY));
      const change = currentY - previousY;
      if (currentY <= (headerRef.current?.offsetHeight || 100)) {
        setHidden(false);
        previousY = currentY;
      } else if (Math.abs(change) >= 8) {
        setHidden(change > 0);
        previousY = currentY;
      }
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(updateHeader);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);
  return (
    <header
      ref={headerRef}
      className={`site-header${hidden && !open ? " site-header--hidden" : ""}`}
    >
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="site-nav"
          aria-label="Main navigation"
          className={open ? "navigation navigation--open" : "navigation"}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                path === link.href ||
                (link.href === "/blog" && path.startsWith("/blog/"))
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="header-login"
            href="https://app.simplifiedmanagement.in/login"
            onClick={() => setOpen(false)}
          >
            Login
          </a>
          <a
            className="button button--small"
            href="/demo"
            onClick={() => setOpen(false)}
          >
            Request Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
