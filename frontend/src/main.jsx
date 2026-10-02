import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import { siteTheme } from "./theme";
import "antd/dist/reset.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/home.css";
import "./styles/product-gallery.css";
import "./styles/branding.css";
import "./styles/ai-assistant.css";
import "./styles/pages.css";
import "./styles/feature-showcase.css";
import "./styles/atmosphere.css";
import "./styles/footer-pages.css";
import "./styles/antd-overrides.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={siteTheme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
