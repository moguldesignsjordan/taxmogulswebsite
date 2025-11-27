import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Software from "./pages/Software";
import Home from "./pages/Home";
import BecomeTaxMogul from "./pages/BecomeTaxMogul";
import FileNow from "./pages/FileNow";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  // AUTO THEME — FOLLOW SYSTEM ONLY
  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (e) => {
      document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
    };

    // Set initial system theme
    applyTheme(systemDark);

    // Listen for system theme changes
    systemDark.addEventListener("change", applyTheme);

    return () => {
      systemDark.removeEventListener("change", applyTheme);
    };
  }, []);


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
            <Link to="/file-now">File Now</Link>
            <a 
              href="https://app.thetaxmoguls.com/" 
              target="_blank" 
              rel="noreferrer"
            >
              Refund Calculator
            </a>
            <Link to="/become-a-tax-mogul">Become a Tax Pro</Link>
            <Link to="/software">Tax Software</Link>
          </nav>

          <div className="tm-header-actions">
            {/* REMOVED THE THEME TOGGLE */}

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
        <Route path="/file-now" element={<FileNow />} />
        <Route path="/software" element={<Software />} />
        <Route path="/become-a-tax-mogul" element={<BecomeTaxMogul />} />
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
                <li><a href="https://sa.www4.irs.gov/wmr/" target="_blank" rel="noreferrer">Refund Tracker</a></li>
                <li><a href="#">Credit Services</a></li>
                <li><Link to="/file-now">File Now / App</Link></li>
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
