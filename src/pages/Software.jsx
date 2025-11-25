import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Software() {
  const th = {
    padding: "16px 20px",
    textAlign: "center",
    fontWeight: 600,
    color: "var(--text-color)",
    borderBottom: "1px solid var(--border-subtle)",
    background: "var(--card-bg)",
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      gsap.from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".soft-hero-img img", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.to(".soft-hero-img img", {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // FEATURES
      gsap.from(".feature-card", {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".soft-features-grid",
          start: "top 85%",
        },
      });

      // PRICING
      gsap.from(".pricing-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 80%",
        },
      });

      // TABLE
      gsap.from(".comparison-table", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".comparison-table",
          start: "top 85%",
        },
      });

      // TESTIMONIAL
      gsap.from(".testimonial-card", {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="soft-wrapper" style={{ paddingTop: "40px" }}>
      {/* ================= HERO ================= */}
      <section
        className="soft-section"
        style={{
          padding: "80px 0 100px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="tm-container tm-grid tm-grid-2"
          style={{
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* TEXT */}
          <div style={{ paddingRight: "10px" }}>
            <h1
              className="hero-title"
              style={{
                fontSize: "3.2rem",
                fontWeight: 700,
                color: "var(--text-color)",
                lineHeight: "1.15",
                marginBottom: "20px",
              }}
            >
              Modern Tax Software
              <br />
              Built for Growing Offices
            </h1>

            <p
              className="hero-subtitle"
              style={{
                color: "var(--muted-text)",
                maxWidth: "560px",
                fontSize: "1.1rem",
                lineHeight: "1.7",
              }}
            >
              A clean, cloud-native platform for managing returns, clients, and
              teams. Designed for tax offices that want simplicity, speed, and
              scalability without unnecessary clutter.
            </p>

            <div
              className="hero-buttons"
              style={{
                marginTop: "32px",
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a className="tm-btn tm-btn-primary hover-lift">Book Demo</a>
              <a className="tm-btn tm-btn-outline hover-lift">Request Pricing</a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="soft-hero-img" style={{ textAlign: "right" }}>
            <img
              src="/mogul-software.png"
              alt="Software Box"
              style={{
                width: "100%",
                maxWidth: "520px",
                filter: "drop-shadow(0 14px 36px rgba(0,0,0,0.18))",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES – CLEAN 3-COLUMN GRID ================= */}
      <section
        className="soft-section"
        style={{
          padding: "90px 0",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="tm-container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "48px",
              fontSize: "2.1rem",
              fontWeight: 600,
              color: "var(--text-color)",
            }}
          >
            Designed for Real Tax Workflows
          </h2>

        <div
          className="soft-features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {[
            [
              "Cloud-native tax preparation",
              "Your entire workflow hosted securely in the cloud—no installs required.",
            ],
            [
              "Document vault",
              "Organize and store client files with unlimited encrypted storage.",
            ],
            [
              "Mobile client portal",
              "Clients upload documents, sign, and communicate from any device.",
            ],
            [
              "White-label branding",
              "Offer a fully branded experience under your office name and colors.",
            ],
            [
              "Team permissions & workflows",
              "Assign roles, manage queues, and track performance with clarity.",
            ],
            [
              "Bank products built-in",
              "Offer refund advances and bank products through integrated options.",
            ],
          ].map(([title, text], i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                background: "var(--card-bg)",
                borderRadius: "16px",
                border: "1px solid var(--border-subtle)",
                padding: "26px 24px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0,0,0,0.16)";
                e.currentTarget.style.borderColor = "var(--mogul-green)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "var(--text-color)",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.96rem",
                  color: "var(--muted-text)",
                  lineHeight: "1.6",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Responsive for features grid */}
        <style>{`
          @media (max-width: 1024px) {
            .soft-features-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (max-width: 700px) {
            .soft-features-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </section>

    {/* ================= PRICING — STRIPE STYLE (3-COLUMN) ================= */}
    <section className="soft-section" style={{ padding: "90px 0" }}>
      <div className="tm-container" style={{ textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.2rem",
            marginBottom: "12px",
            fontWeight: 700,
            color: "var(--text-color)",
          }}
        >
          Powerful features for{" "}
          <span style={{ color: "var(--mogul-green)" }}>modern tax pros</span>
        </h2>
        <p style={{ color: "var(--muted-text)", marginBottom: "50px" }}>
          Choose a plan that's right for your office
        </p>

        {/* Pricing grid */}
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "32px",
            alignItems: "stretch",
          }}
        >
          {/* FREEBIE */}
          <div className="pricing-card" style={sideCard}>
            <h3 style={planTitle}>Freebie</h3>
            <p style={planSub}>Ideal for individuals</p>

            <div style={priceLarge}>
              $0<span style={priceMonth}>/month</span>
            </div>

            <a
              className="tm-btn tm-btn-outline hover-lift"
              style={{ width: "100%", marginTop: "12px" }}
            >
              Get Started Now
            </a>

            <ul style={featureList}>
              {[
                ["Unlimited Clients", true],
                ["Access to mobile portal", true],
                ["Document storage", true],
                ["Team dashboard", false],
                ["White-label branding", false],
                ["Priority support", false],
              ].map(([label, ok], i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    color: ok ? "var(--text-color)" : "var(--muted-text)",
                    opacity: ok ? 1 : 0.55,
                    transition: "transform 0.2s ease",
                  }}
                >
                  <span>{ok ? "✔️" : "✖️"}</span> {label}
                </li>
              ))}
            </ul>
          </div>

          {/* PRO — HIGHLIGHTED */}
          <div className="pricing-card" style={centerCard}>
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#ffd700",
                color: "#111",
                padding: "4px 16px",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(255,215,0,0.4)",
              }}
            >
              MOST POPULAR
            </div>
            <h3 style={{ ...planTitle, color: "#fff" }}>Tax Office Pro</h3>
            <p style={{ ...planSub, color: "#d6ffe7" }}>
              Best for growing offices
            </p>

            <div style={priceLargeWhite}>
              $199<span style={priceMonthWhite}>/month</span>
            </div>

            <a
              className="tm-btn tm-btn-primary hover-lift"
              style={{
                width: "100%",
                marginTop: "12px",
                background: "#46ff9c",
                color: "#00361b",
              }}
            >
              Get Started Now
            </a>

            <ul style={featureListWhite}>
              {[
                "Unlimited Clients",
                "Unlimited Team Members",
                "Mobile Document Portal",
                "Team Dashboard",
                "Performance Metrics",
                "White-Label Branding",
                "Priority Support",
              ].map((label, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <span>✔️</span> {label}
                </li>
              ))}
            </ul>
          </div>

          {/* ENTERPRISE */}
          <div className="pricing-card" style={sideCard}>
            <h3 style={planTitle}>Enterprise</h3>
            <p style={planSub}>Ideal for multi-location firms</p>

            <div style={priceLarge}>
              $350<span style={priceMonth}>/month</span>
            </div>

            <a
              className="tm-btn tm-btn-outline hover-lift"
              style={{ width: "100%", marginTop: "12px" }}
            >
              Contact Sales
            </a>

            <ul style={featureList}>
              {[
                "Unlimited Clients",
                "Unlimited Team Seats",
                "Branch Admin Support",
                "Unlimited Storage",
                "Dedicated Account Manager",
              ].map((label, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    transition: "transform 0.2s ease",
                    color: "var(--text-color)",
                  }}
                >
                  <span>✔️</span> {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* responsive */}
        <style>{`
          @media (max-width: 1024px) {
            .pricing-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (max-width: 700px) {
            .pricing-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>

    {/* ================= COMPARISON TABLE ================= */}
    <section className="soft-section" style={{ padding: "90px 0" }}>
      <div className="tm-container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2rem",
            color: "var(--text-color)",
          }}
        >
          Compare to Other Tax Software
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table
            className="comparison-table"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "var(--card-bg)",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              minWidth: "820px",
            }}
          >
            <thead>
              <tr>
                <th style={th}>Feature</th>
                <th style={th}>Mogul</th>
                <th style={th}>Drake</th>
                <th style={th}>CrossLink</th>
                <th style={th}>TaxSlayer</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Cloud Based", "Yes", "No", "Partial", "Yes"],
                ["Mobile Portal", "Yes", "No", "No", "No"],
                ["Doc Vault", "Unlimited", "Limited", "Unlimited", "Limited"],
                ["Branding", "Full", "None", "None", "None"],
                ["Team Dashboard", "Yes", "No", "No", "No"],
                ["Bank Products", "Built-In", "Yes", "Yes", "Yes"],
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{ transition: "background 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(148,163,184,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: "18px 20px",
                        borderBottom: "1px solid var(--border-subtle)",
                        textAlign: j === 0 ? "left" : "center",
                        fontWeight: j === 1 ? 600 : 400,
                        color:
                          j === 1 ? "var(--mogul-green)" : "var(--text-color)",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* ================= TESTIMONIAL ================= */}
    <section className="soft-section" style={{ padding: "70px 0 110px" }}>
      <div className="tm-container">
        <div
          className="testimonial-card"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "46px",
            background: "var(--card-bg)",
            borderRadius: "18px",
            border: "1px solid var(--border-subtle)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "150px",
              height: "150px",
              background: "rgba(13, 143, 82, 0.12)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              fontSize: "3rem",
              color: "var(--mogul-green)",
              marginBottom: "16px",
              opacity: 0.3,
            }}
          >
            "
          </div>
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "10px",
              position: "relative",
              zIndex: 1,
              color: "var(--text-color)",
            }}
          >
            The cleanest, simplest tax software we've ever used.
          </h3>
          <p
            style={{
              color: "var(--muted-text)",
              position: "relative",
              zIndex: 1,
            }}
          >
            — Mogul Office Client, 2025
          </p>
        </div>
      </div>
    </section>

    {/* GLOBAL STYLES FOR THIS PAGE */}
    <style>{`
      .soft-wrapper {
        background: var(--bg);
        color: var(--text-color);
      }
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .hover-lift:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.12);
      }
      .pricing-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
      }
      .pricing-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 32px rgba(0,0,0,0.12);
      }
      .pricing-card li:hover {
        transform: translateX(4px);
      }
    `}</style>
  </div>
  );
}

/* ================= PRICING STYLE OBJECTS ================= */

const sideCard = {
  background: "var(--card-bg)",
  borderRadius: "18px",
  border: "1px solid var(--border-subtle)",
  padding: "34px 28px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const centerCard = {
  background: "linear-gradient(135deg, #00361b 0%, #004d27 100%)",
  borderRadius: "18px",
  padding: "40px 32px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  color: "white",
  boxShadow: "0 20px 40px rgba(0,54,27,0.3)",
  position: "relative",
};

const planTitle = {
  fontSize: "1.3rem",
  marginBottom: "6px",
  fontWeight: 600,
  color: "var(--text-color)",
};

const planSub = {
  color: "var(--muted-text)",
  marginBottom: "14px",
};

const priceLarge = {
  fontSize: "2.4rem",
  fontWeight: 700,
  color: "var(--text-color)",
};

const priceLargeWhite = {
  fontSize: "2.4rem",
  fontWeight: 700,
  color: "white",
};

const priceMonth = {
  fontSize: "1rem",
  marginLeft: "4px",
  color: "var(--muted-text)",
};

const priceMonthWhite = {
  fontSize: "1rem",
  marginLeft: "4px",
  color: "#c5ffe0",
};

const featureList = {
  marginTop: "24px",
  listStyle: "none",
  padding: 0,
  color: "var(--text-color)",
  lineHeight: "1.65",
};

const featureListWhite = {
  marginTop: "24px",
  listStyle: "none",
  padding: 0,
  color: "#fff",
  lineHeight: "1.65",
};
