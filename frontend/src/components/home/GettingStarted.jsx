const steps = [
  {
    label: "LET’S TALK",
    title: "Start with your business.",
    description:
      "Tell us about your properties, channels and the work you want to simplify.",
  },
  {
    label: "TAKE A LOOK",
    title: "Walk through the platform.",
    description:
      "Explore the workflows with our team and get answers to your questions.",
  },
  {
    label: "MAKE A PLAN",
    title: "Set up for your next chapter.",
    description:
      "Discuss your quote, setup requirements and onboarding together.",
  },
];

export default function GettingStarted() {
  return (
    <section className="getting-started">
      <div className="container">
        <p className="eyebrow">A HUMAN CONVERSATION. A CLEAR NEXT STEP.</p>
        <h2>
          Getting started should
          <br />
          feel simple, too.
        </h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step.label}>
              <span className="step-index">0{index + 1}</span>
              <small>{step.label}</small>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
