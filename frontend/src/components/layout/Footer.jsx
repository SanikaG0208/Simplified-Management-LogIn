import Brand from "../ui/Brand";
import Icon from "../ui/Icon";

const groups = {
  Product: [
    ["Property Management Software", "/services/property-management-software"],
    ["Channel Manager", "/services/channel-manager"],
    ["Calendar Sync", "/services/calendar-sync"],
    ["Partner Payouts", "/services/partner-payouts"],
  ],
  Company: [
    ["About", "/about"], ["Pricing", "/pricing"],
    ["Security", "/security"], ["ROI Calculator", "/roi-calculator"],
    ["Contact", "/contact"],
  ],
  Resources: [
    ["Blog", "/blog"], ["Free Templates", "/resources"],
    ["Integrations", "/integrations"], ["Compare", "/compare"],
    ["Book a Demo", "/demo"], ["Privacy", "/privacy"],
    ["App Privacy", "/app-privacy"], ["Terms", "/terms"], ["DPA", "/dpa"],
  ],
};
const socials = [
  ["Instagram", "instagram", "https://www.instagram.com/simplified_management.in/"],
  ["Facebook", "facebook", "https://www.facebook.com/profile.php?id=61591756372165"],
  ["YouTube", "youtube", "https://www.youtube.com/"],
  ["LinkedIn", "linkedin", "https://www.linkedin.com/"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand inverse />
            <p>A clearer way to run the business behind every stay.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <address className="footer-address">
              Viman Nagar, Pune,<br />Maharashtra, India
            </address>
            <a href="tel:+919824004043">+91 98240 04043</a>
            <a href="mailto:info@simplifiedmanagement.in">info@simplifiedmanagement.in</a>
            <div className="footer-socials" aria-label="Social media">
              {socials.map(([label, icon, href]) => (
                <a key={icon} href={href} aria-label={label} title={label}
                  target="_blank" rel="noopener noreferrer">
                  <Icon name={icon} size={21} />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(groups).map(([heading, links]) => (
            <div key={heading}>
              <h3>{heading}</h3>
              {links.map(([label, path]) => (
                <a key={path} href={path}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Simplified Management. All rights reserved.</span>
          <span>Proudly made in India</span>
        </div>
      </div>
    </footer>
  );
}
