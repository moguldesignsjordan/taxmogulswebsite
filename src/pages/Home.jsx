import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [refund, setRefund] = useState(1500);
  const sliderRef = useRef(null);

  const minRefund = 500;
  const maxRefund = 7000;
  const sliderPercent = ((refund - minRefund) / (maxRefund - minRefund)) * 100;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty("--slider-value", `${sliderPercent}%`);
    }
  }, [sliderPercent]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tm-hero-main",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tm-hero",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".tm-hero-card",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tm-hero",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.from(".tm-hero-list li", {
        opacity: 0,
        y: 18,
        duration: 0.45,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tm-hero",
          start: "top 75%",
          once: true,
        },
      });

      gsap.utils
        .toArray(
          ".tm-feature-card h2, .tm-refund-copy h2, .tm-pro-copy h2, .tm-trust h2, .tm-promo h2"
        )
        .forEach((heading) => {
          const section =
            heading.closest("section") ||
            heading.closest(".tm-section-dark") ||
            heading;

          gsap.from(heading, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          });
        });

      gsap.utils
        .toArray(
          ".tm-feature-card, .tm-refund-card, .tm-pro-card, .tm-review-card"
        )
        .forEach((card, index) => {
          const section =
            card.closest("section") ||
            card.closest(".tm-section-dark") ||
            card;

          gsap.from(card, {
            autoAlpha: 0,
            y: 30,
            scale: 0.95,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          });
        });

      gsap.utils
        .toArray(
          ".tm-checklist li, .tm-checklist-dark li, .tm-checklist-large li, .tm-pro-steps li"
        )
        .forEach((item) => {
          const section =
            item.closest("section") ||
            item.closest(".tm-section-dark") ||
            item;

          gsap.from(item, {
            opacity: 0,
            x: -10,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          });
        });

      gsap.to(".tm-promo-right img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".tm-promo",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="tm-page">
      {/* HERO */}
      <section className="tm-hero">
        <div className="tm-container tm-hero-inner">
          <div className="tm-hero-main">
            <p className="tm-kicker">Trusted tax pros for real-life money moves</p>

            <h1 style={{ lineHeight: "1.05" }}>
              Tax refunds,
              <br />
              <span className="tm-highlight">Mogul style.</span>
            </h1>

            <p className="tm-hero-sub">
              The Tax Moguls helps you file fast, maximize your refund, and stay
              compliant all year — online, in-person, or both.
            </p>

            <div className="tm-hero-actions">
              <a
                href="https://taxestogo.com/App/Download/99153"
                className="tm-btn tm-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Start my return
              </a>
              <a
                href="https://cal.com/jordan-c-cmbf7z/mogul-consultation"
                className="tm-btn tm-btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a call
              </a>
            </div>

            <ul className="tm-hero-list">
              <li>✓ Individual & self-employed returns</li>
              <li>✓ Year-round tax planning</li>
              <li>✓ Secure virtual filing</li>
            </ul>
          </div>

          <aside className="tm-hero-card" id="booking">
            <h2>Book a tax pro</h2>
            <p>Answer a few questions and we'll match you with a Mogul.</p>

            <form>
              <label>
                Name
                <input type="text" placeholder="Full name" required />
              </label>

              <label>
                Email
                <input type="email" placeholder="you@example.com" required />
              </label>

              <label>
                Filing situation
                <select defaultValue="">
                  <option disabled value="">
                    Choose an option
                  </option>
                  <option>W-2 employee</option>
                  <option>Self-employed</option>
                  <option>Business owner</option>
                </select>
              </label>

              <button type="submit" className="tm-btn tm-btn-primary tm-btn-full">
                Find my tax pro
              </button>
            </form>
          </aside>
        </div>
      </section>

      {/* MOGUL ADVANCE PROMO */}
      <section className="tm-promo" id="virtual">
        <div className="tm-container tm-promo-inner">
          <div className="tm-promo-left">
            <p className="tm-promo-kicker">THE MOGUL ADVANCE™</p>

            <h2>
              Apply today you could get <br />
              a loan for up to <span className="tm-money">$8,000</span>
            </h2>

            <ul className="tm-checklist">
              <li>✓ Fixed-rate loans up to $8,000</li>
              <li>✓ Fast approval decisions</li>
              <li>✓ Available at select Mogul offices</li>
            </ul>

            <div className="tm-promo-actions">
              <a
                href="https://cal.com/jordan-c-cmbf7z/mogul-consultation"
                className="tm-btn tm-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Make appointment
              </a>
              <a
                href="https://taxestogo.com/App/Download/99153"
                className="tm-btn tm-btn-outline-light"
                target="_blank"
                rel="noreferrer"
              >
                Loan details
              </a>
            </div>
          </div>

          <div className="tm-promo-right">
            <img
              src="/woman-money.png"
              alt="Loan preview"
              style={{
                width: "100%",
                height: "360px",
                borderRadius: "20px",
                marginTop: "20px",
                objectFit: "cover",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="tm-section tm-section-alt" id="services">
        <div className="tm-container tm-grid tm-grid-2">
          <div className="tm-feature-card">
            <h2>File on your own with confidence</h2>
            <p>Self-paced filing with expert upgrades anytime.</p>

            <ul className="tm-checklist-dark">
              <li>✓ Expert help anytime</li>
              <li>✓ Easy steps on any device</li>
            </ul>

            <div className="tm-feature-price">$0</div>
            <a
              href="https://taxestogo.com/App/Download/99153"
              className="tm-btn tm-btn-primary tm-btn-full"
              target="_blank"
              rel="noreferrer"
            >
              File on my own
            </a>
          </div>

          <div className="tm-feature-card">
            <h2>File stress-free with a tax pro</h2>
            <p>Full service. Virtual or in person.</p>

            <ul className="tm-checklist-dark">
              <li>✓ Taxes prepared in as little as 1 hour</li>
              <li>✓ Choose your Mogul or get matched</li>
            </ul>

            <div className="tm-feature-price">$99</div>
            <a
              href="https://taxestogo.com/App/Download/99153"
              className="tm-btn tm-btn-primary tm-btn-full"
              target="_blank"
              rel="noreferrer"
            >
              File with a Mogul
            </a>
          </div>
        </div>
      </section>

      {/* REFUND ESTIMATOR */}
      <section className="tm-section" id="refund-calculator">
        <div className="tm-container tm-grid tm-grid-2">
          <div className="tm-refund-copy">
            <p className="tm-kicker">Refund estimate</p>
            <h2>Curious what your refund might look like?</h2>
            <p className="tm-refund-text">
              Use our Mogul Refund Estimator to see a quick ballpark of your
              potential refund before you file.
            </p>

            <ul className="tm-checklist">
              <li>✓ Takes just a few minutes</li>
              <li>✓ No obligation to file</li>
              <li>✓ Built for real-world situations</li>
            </ul>
          </div>

          <div className="tm-feature-card tm-refund-card">
            <h3>Refund Estimate Preview</h3>
            <p>
              Use the slider to explore a range of potential refunds based
              on your situation.
            </p>

            <div className="tm-slider-shell">
              <div
                className="tm-slider-bubble"
                style={{ left: `${sliderPercent}%` }}
                key={refund}
              >
                ${refund.toLocaleString()}
              </div>

              <input
                ref={sliderRef}
                type="range"
                min={minRefund}
                max={maxRefund}
                step="100"
                className="tm-slider"
                value={refund}
                onChange={(e) => setRefund(Number(e.target.value))}
              />
            </div>

            <a
              href="https://app.thetaxmoguls.com/"
              className="tm-btn tm-btn-primary tm-btn-full"
              target="_blank"
              rel="noreferrer"
            >
              Launch refund estimator
            </a>
          </div>
        </div>
      </section>

      {/* BECOME A TAX PRO */}
      <section className="tm-section" id="become-tax-pro">
        <div className="tm-container tm-grid tm-grid-2">
          <div className="tm-pro-copy">
            <p className="tm-kicker">Partner with The Tax Moguls</p>
            <h2>Become a Tax Mogul Pro this season.</h2>
            <p className="tm-pro-text">
              Grow your income by preparing taxes with a credible brand and
              proven system.
            </p>

            <ul className="tm-checklist">
              <li>✓ Training & onboarding support</li>
              <li>✓ Proven client workflows & checklists</li>
              <li>✓ Marketing assets and automation</li>
              <li>✓ Flexible: part-time or full-time</li>
            </ul>

            <div className="tm-pro-actions">
              <a
                href="#"
                className="tm-btn tm-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Apply to become a Tax Pro
              </a>
            </div>
          </div>

          <div className="tm-pro-image">
            <img src="/woman-mogul.jpg" alt="Tax Mogul Pros" />
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="tm-trust" id="how">
        <div className="tm-container tm-trust-inner">
          <div className="tm-trust-left">
            <h2>
              See why <span className="tm-money">22,000+</span>
              <br />
              Mogul clients trust us each year
            </h2>

            <ul className="tm-checklist-large">
              <li>✓ 100% Accuracy Guarantee</li>
              <li>✓ Maximum refund promise</li>
              <li>✓ No-surprise pricing</li>
            </ul>

            <a href="#booking" className="tm-link">
              See all guarantees →
            </a>
          </div>

          <div className="tm-trust-right">
            <div className="tm-review-card">
              <h3>"The Moguls always take care of me."</h3>
              <p>— Deluxe Online User, June 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
