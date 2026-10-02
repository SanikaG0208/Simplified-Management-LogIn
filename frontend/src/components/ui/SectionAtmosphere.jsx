import Icon from "./Icon";

export default function SectionAtmosphere({ children, variant = "blue" }) {
  return (
    <div className={`section-atmosphere section-atmosphere--${variant}`}>
      <div className="atmosphere-art" aria-hidden="true">
        <span className="atmosphere-glow atmosphere-glow--blue" />
        <span className="atmosphere-glow atmosphere-glow--peach" />
        <div className="atmosphere-orbit">
          <span className="atmosphere-icon atmosphere-icon--property">
            <Icon name="building" size={46} />
          </span>
          <span className="atmosphere-icon atmosphere-icon--calendar">
            <Icon name="calendar" size={30} />
          </span>
          <span className="atmosphere-icon atmosphere-icon--link">
            <Icon name="link" size={26} />
          </span>
          <span className="atmosphere-dot" />
        </div>
      </div>
      {children}
    </div>
  );
}
