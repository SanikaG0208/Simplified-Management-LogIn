import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import logo from "./logo.png";

function PropertyMark() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="m5 14 11-9 11 9v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V14Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M12 27V17h8v10M12 12h8" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
}

function LoginPage() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [recovery, setRecovery] = useState(false);
  function submit(event) {
    event.preventDefault();
    setMessage(recovery ? "Password recovery is ready to connect to your authentication service. No email was sent." : "The login preview works. Connect your authentication service to sign in.");
  }
  function switchMode() { setRecovery(!recovery); setMessage(""); }
  return (
    <div className="page">
      <header className="header"><div className="wordmark"><img className="brand-logo" src={logo} alt="Simplified Management" /></div><span className="header-note">Your properties. Your workspace.</span></header>
      <main>
        <section className="login" aria-labelledby="login-title">
          <p className="eyebrow">A little less admin. A little more possibility.</p>
          <div className="welcome-heading"><h1 id="login-title">{recovery ? "Let’s get you back in." : "Property management, simplified."}</h1></div>
          <p className="intro">{recovery ? "Enter the email you use for your workspace." : "A clearer start to your property day."}</p>
          <form onSubmit={submit}>
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" autoComplete="username" placeholder="you@company.com" required onChange={() => setMessage("")} />
            {!recovery && <>
              <div className="label-row"><label htmlFor="password">Password</label><button type="button" className="text-button" onClick={switchMode}>Forgot password?</button></div>
              <div className="password-field"><input id="password" name="password" type={visible ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" required onChange={() => setMessage("")} /><button className="visibility" type="button" aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible} onClick={() => setVisible(!visible)}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>{visible && <path d="m3 3 18 18" stroke="currentColor" strokeWidth="1.5"/>}</svg></button></div>
              <label className="remember"><input type="checkbox" name="remember" />Keep me signed in</label>
            </>}
            <button type="submit" className="submit">{recovery ? "Send reset link" : "Sign in to your workspace"}<span aria-hidden="true">→</span></button>
            {message && <p className="notice" role="status">{message}</p>}
            {recovery && <button type="button" className="back text-button" onClick={switchMode}>← Back to sign in</button>}
          </form>
          <div className="workspace-note"><span className="status-dot" />One place for every property.</div>
          <p className="support">Need a hand? <a href="mailto:support@simplifiedmanagement.in">Contact your support team</a></p>
        </section>
        <aside className="property-panel" aria-label="A peaceful property courtyard">
          <div className="panel-copy"><p className="panel-eyebrow">SPACE TO FOCUS</p><h2>Good spaces.<br />Better days.</h2><p>A thoughtful place to look after<br />the places people call home.</p></div>
          <svg className="property-art" viewBox="0 0 600 470" role="img" aria-label="Illustration of a sunlit home with trees and a quiet courtyard">
            <defs><linearGradient id="sky" x2="0" y2="1"><stop stopColor="#e7edf5"/><stop offset="1" stopColor="#f3f1eb"/></linearGradient><linearGradient id="wall" x2="1" y2="1"><stop stopColor="#f8f3e7"/><stop offset="1" stopColor="#ded9c9"/></linearGradient></defs>
            <rect width="600" height="470" fill="url(#sky)"/><circle cx="438" cy="80" r="41" fill="#f5eed8"/>
            <path d="M0 348Q150 297 300 332T600 313V470H0Z" fill="#d7e0e8"/>
            <path d="m115 200 228-70 150 91v145H115Z" fill="#b4c1ce"/>
            <path d="M115 200h228v166H115Z" fill="url(#wall)"/><path d="m343 200 150 21v145H343Z" fill="#cecdbd"/>
            <path d="m95 201 248-83 170 100-170-31Z" fill="#748da9"/><path d="m95 201 248-14v13H95Z" fill="#42658f"/>
            <path d="M223 366v-99a34 34 0 0 1 68 0v99Z" fill="#6283aa"/><path d="M231 365v-96a26 26 0 0 1 52 0v96Z" fill="#97acc3"/><circle cx="274" cy="316" r="3" fill="#e7dcc2"/>
            <g fill="#89a2bf" stroke="#eee9db" strokeWidth="5"><rect x="143" y="244" width="49" height="62" rx="2"/><rect x="309" y="243" width="23" height="61" rx="2"/><path d="m379 250 42 6v62l-42-5Z"/></g>
            <g stroke="#eee9db" strokeWidth="3"><path d="M168 244v62M143 273h49M400 254v61"/></g>
            <path d="M211 366h92l104 104H122Z" fill="#e8e1cf"/><path d="m212 378 93 1M191 400h137M164 431h191" stroke="#d6d0bf" strokeWidth="2"/>
            <g fill="#a6b9c9"><ellipse cx="89" cy="341" rx="66" ry="22"/><ellipse cx="420" cy="365" rx="59" ry="18"/></g>
            <path d="M63 375V190M529 373V172" stroke="#8d98a1" strokeWidth="10"/>
            <g fill="#8ba6b0"><ellipse cx="65" cy="206" rx="43" ry="76"/><ellipse cx="530" cy="193" rx="44" ry="82"/></g><g fill="#a1bac0"><ellipse cx="42" cy="192" rx="30" ry="54"/><ellipse cx="513" cy="168" rx="30" ry="58"/></g>
            <path d="M0 423q55-35 114-4M456 434q67-37 144-18" fill="none" stroke="#bdcdd4" strokeWidth="25"/>
            <rect x="365" y="339" width="36" height="37" rx="5" fill="#b7a98e"/><path d="M383 340v-39m0 25-17-13m17 5 15-16" stroke="#7f9ca8" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <p className="panel-caption">A simpler way to manage your properties, every day.</p>
        </aside>
      </main>
      <p className="legal-notice">By continuing, you agree to our <a href="https://www.simplifiedmanagement.in/terms" target="_blank" rel="noopener noreferrer"><strong>Terms of Service</strong></a> and <a href="http://127.0.0.1:4173/privacy" target="_blank" rel="noopener noreferrer"><strong>Privacy Policy</strong></a>.</p>
      <footer><span>© {new Date().getFullYear()} Simplified Management</span><span className="footer-right">Built for better property days.<span className="preview-tag">Design preview</span></span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><LoginPage /></React.StrictMode>);


