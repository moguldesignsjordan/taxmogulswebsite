import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Software from "./pages/Software";
import Home from "./pages/Home"; // NEW - your full homepage moved to its own file

gsap.registerPlugin(ScrollTrigger);

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem("tm-theme");
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("tm-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <BrowserRouter>
      {/* HEADER */}
      <header className="tm-header">
        <div className="tm-container tm-header-inner">
          <Link to="/">
            <img
              src="/tax-moguls-logo.png"
              alt="The Tax Moguls"
              className="tm-logo"
            />
          </Link>

          <nav className="tm-nav">
            <Link to="/">Home</Link>
            <a href="/#virtual">Virtual & In-Person</a>
            <a href="/#refund-calculator">Refund calculator</a>
            <a href="/#become-tax-pro">Become a Tax Pro</a>
            <Link to="/software">Tax Software</Link>
          </nav>

          <div className="tm-header-actions">
            <button
              type="button"
              className="tm-theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark or light mode"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <a
              href="https://cal.com/jordan-c-cmbf7z/mogul-consultation"
              className="tm-btn tm-btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
      </Routes>

      {/* FOOTER */}
      <footer className="tm-footer">
        <div className="tm-container tm-footer-inner">
          <div className="tm-footer-brand">
            <img
              src="/tax-moguls-logo.png"
              className="tm-logo-small"
              alt="The Tax Moguls"
            />
            <p>Modern tax preparation for people who think like Moguls.</p>
          </div>

          <div className="tm-footer-columns">
            <div>
              <h4>Tax Services</h4>
              <ul>
                <li><a href="#">Individual Returns</a></li>
                <li><a href="#">Self-Employed</a></li>
                <li><a href="#">LLC / S-Corp</a></li>
                <li><a href="#">Tax Planning</a></li>
              </ul>
            </div>

            <div>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Refund Tracker</a></li>
                <li><a href="#">MogulVault</a></li>
                <li><a href="#">Document Upload</a></li>
                <li><a href="#">Payment Portal</a></li>
              </ul>
            </div>

            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Find Office</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tm-footer-bottom">
          © {new Date().getFullYear()} The Tax Moguls. All rights reserved.
        </div>
      </footer>
    </BrowserRouter>
  );
}
