import React from "react";
// Removed theme imports and logic

export default function BecomeTaxMogul() {
  // Removed state logic (theme, setTheme) to let App.jsx handle it globally

  return (
    <div className="tm-page">
      {/* HERO / OVERVIEW */}
      <section
        className="tm-section tm-section-dark"
        id="overview"
        style={{ paddingTop: "80px" }}
      >
        <div className="tm-container tm-grid tm-grid-2">
          <div className="tm-pro-copy">
            <p className="tm-kicker tm-kicker-light">
              Partner with The Tax Moguls
            </p>
            <h1
              style={{
                fontSize: "40px",
                lineHeight: 1.1,
                marginTop: "12px",
              }}
            >
              Become a <span className="tm-highlight">Tax Mogul Pro</span>.
            </h1>
            <p className="tm-pro-text" style={{ marginTop: "16px" }}>
              Grow your income this tax season by preparing returns under a
              modern, credible brand — with training, systems, and support
              behind you. Work from home, in-person, or a mix of both.
            </p>

            <ul className="tm-checklist-light" style={{ marginTop: "20px" }}>
              <li>✓ Training & onboarding support</li>
              <li>✓ Done-for-you marketing assets</li>
              <li>✓ Proven client workflows & checklists</li>
              <li>✓ Flexible: part-time or full-time</li>
            </ul>

            <div className="tm-hero-actions" style={{ marginTop: "24px" }}>
              <a
                href="YOUR_TAX_PRO_APPLY_LINK_HERE"
                className="tm-btn tm-btn-primary"
                id="apply"
                target="_blank"
                rel="noreferrer"
              >
                Apply to become a Tax Mogul Pro
              </a>
              <a
                href="https://cal.com/jordan-c-cmbf7z/mogul-consultation"
                className="tm-btn tm-btn-outline-light"
                target="_blank"
                rel="noreferrer"
              >
                Book an info call
              </a>
            </div>

            <p className="tm-pro-small" style={{ marginTop: "10px" }}>
              Already an experienced preparer or EA? Ask about our advanced
              partnership and revenue share options.
            </p>
          </div>

          {/* HERO RIGHT: IMAGE */}
          <div className="tm-hero-media">
            <div className="tm-hero-image-shell">
              <img
                src="/woman-mogul.jpg"
                alt="Tax Mogul Pros working with clients"
                className="tm-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="tm-section" id="benefits">
        <div className="tm-container">
          <div className="tm-feature-card tm-pro-card">
            <h2 style={{ marginBottom: "18px" }}>
              What you get as a Tax Mogul Pro
            </h2>
            <ul className="tm-pro-steps">
              <li>
                <span className="tm-step-label">1</span>
                <div>
                  <h4>Brand & credibility</h4>
                  <p>
                    Operate under The Tax Moguls name or a powered-by setup that
                    still feels like you — with consistent, modern branding.
                  </p>
                </div>
              </li>
              <li>
                <span className="tm-step-label">2</span>
                <div>
                  <h4>Systems & workflows</h4>
                  <p>
                    Proven client intake, document collection, and communication
                    flows to keep your season organized and smooth.
                  </p>
                </div>
              </li>
              <li>
                <span className="tm-step-label">3</span>
                <div>
                  <h4>Tech & support</h4>
                  <p>
                    Access to digital tools, refund estimator, and team support
                    so you never feel like you&apos;re building alone.
                  </p>
                </div>
              </li>
              <li>
                <span className="tm-step-label">4</span>
                <div>
                  <h4>Growth upside</h4>
                  <p>
                    Scale from a handful of clients to a full book of business
                    with guidance on pricing, renewals, and retention.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="tm-section tm-section-alt" id="who">
        <div className="tm-container">
          <p className="tm-kicker">Who this program is for</p>
          <h2 style={{ marginTop: "10px", marginBottom: "30px" }}>
            Designed for real people who think like Moguls.
          </h2>

          <div className="tm-grid tm-grid-2">
            <div className="tm-feature-card">
              <h3>New tax preparers</h3>
              <p style={{ marginTop: "8px", marginBottom: "12px" }}>
                You&apos;re just getting started or recently finished a tax
                course and don&apos;t want to figure everything out alone.
              </p>
              <ul className="tm-checklist-dark">
                <li>✓ Guided launch & onboarding</li>
                <li>✓ Shadowing & review support</li>
                <li>✓ Clear, simple client scripts</li>
              </ul>
              {/* Small CTA */}
              <a
                href="#apply"
                className="tm-btn tm-btn-outline tm-btn-small"
                style={{ marginTop: "16px" }}
              >
                Get started
              </a>
            </div>

            <div className="tm-feature-card">
              <h3>Existing pros & EAs</h3>
              <p style={{ marginTop: "8px", marginBottom: "12px" }}>
                You already prepare taxes but want a stronger brand, better
                systems, or a partner to help you scale.
              </p>
              <ul className="tm-checklist-dark">
                <li>✓ Powered-by Moguls branding options</li>
                <li>✓ Access to Mogul tech & tools</li>
                <li>✓ Growth, pricing & retention support</li>
              </ul>
              {/* Small CTA */}
              <a
                href="#apply"
                className="tm-btn tm-btn-outline tm-btn-small"
                style={{ marginTop: "16px" }}
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EARNING POTENTIAL */}
      <section className="tm-section" id="earnings">
        <div className="tm-container">
          <p className="tm-kicker">Earning potential</p>
          <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>
            Build a Mogul-level tax season.
          </h2>
          <p style={{ maxWidth: "560px", color: "var(--muted-text)" }}>
            Exact numbers depend on your location, pricing, and effort — but
            here&apos;s how fast it can add up when you plug into a proven
            system and consistent brand.
          </p>

          <div
            className="tm-grid"
            style={{ marginTop: "32px", gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            <div className="tm-feature-card">
              <h3>Starter Mogul</h3>
              <p style={{ marginTop: "6px", marginBottom: "10px" }}>
                25–40 clients in a season
              </p>
              <ul className="tm-checklist-dark">
                <li>✓ Average fee: $250–$350</li>
                <li>✓ Ideal for part-time income</li>
                <li>✓ Nights & weekends friendly</li>
              </ul>
            </div>

            <div className="tm-feature-card">
              <h3>Growing Mogul</h3>
              <p style={{ marginTop: "6px", marginBottom: "10px" }}>
                60–100+ clients in a season
              </p>
              <ul className="tm-checklist-dark">
                <li>✓ Mix of individual & self-employed</li>
                <li>✓ Room to add planning services</li>
                <li>✓ Build a strong renewal base</li>
              </ul>
            </div>

            <div className="tm-feature-card">
              <h3>Elite Mogul</h3>
              <p style={{ marginTop: "6px", marginBottom: "10px" }}>
                150+ returning & referral clients
              </p>
              <ul className="tm-checklist-dark">
                <li>✓ Premium pricing & add-ons</li>
                <li>✓ Option to build a small team</li>
                <li>✓ Year-round tax & business services</li>
              </ul>
            </div>
          </div>

          <p
            style={{
              marginTop: "18px",
              fontSize: "13px",
              color: "var(--muted-text)",
            }}
          >
            These are sample scenarios only and not income guarantees. Your
            results will depend on your experience, effort, compliance, and
            local market.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="tm-section" id="how-it-works">
        <div className="tm-container tm-grid tm-grid-2">
          <div className="tm-pro-copy">
            <p className="tm-kicker">How it works</p>
            <h2 style={{ marginTop: "10px" }}>
              A simple path to becoming a Tax Mogul Pro.
            </h2>
            <p
              className="tm-pro-text"
              style={{ marginTop: "10px", maxWidth: "520px" }}
            >
              We keep the process straightforward so you can focus on serving
              clients — not wrestling with tech, paperwork, and branding.
            </p>

            <ol className="tm-pro-steps" style={{ marginTop: "18px" }}>
              <li>
                <span className="tm-step-label">1</span>
                <div>
                  <h4>Apply online</h4>
                  <p>
                    Tell us about your experience, goals, and where you&apos;d
                    like to serve clients (online, in-person, or hybrid).
                  </p>
                </div>
              </li>
              <li>
                <span className="tm-step-label">2</span>
                <div>
                  <h4>Meet with our team</h4>
                  <p>
                    We&apos;ll walk through expectations, compensation, and the
                    tools you&apos;ll use as a Mogul Pro.
                  </p>
                </div>
              </li>
              <li>
                <span className="tm-step-label">3</span>
                <div>
                  <h4>Onboarding & training</h4>
                  <p>
                    Get access to training, scripts, checklists, and tech — plus
                    help setting up your workflow.
                  </p>
                </div>
              </li>
              <li>
                <span className="tm-step-label">4</span>
                <div>
                  <h4>Launch your season</h4>
                  <p>
                    Start serving clients under The Tax Moguls brand and grow
                    your book of business each year.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="tm-feature-card">
            <h3>What we look for</h3>
            <ul className="tm-checklist-dark" style={{ marginTop: "12px" }}>
              <li>✓ Integrity and a client-first mindset</li>
              <li>✓ Willingness to follow compliance rules</li>
              <li>✓ Basic comfort with technology</li>
              <li>✓ Desire to grow your income and skills</li>
            </ul>

            <h3 style={{ marginTop: "24px" }}>Locations & setup</h3>
            <ul className="tm-checklist-dark" style={{ marginTop: "10px" }}>
              <li>✓ Remote / virtual-only options</li>
              <li>✓ In-person locations (where available)</li>
              <li>✓ Hybrid models depending on your market</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tm-section" id="faq">
        <div className="tm-container">
          <p className="tm-kicker">FAQ</p>
          <h2 style={{ marginTop: "10px", marginBottom: "24px" }}>
            Common questions about becoming a Tax Mogul Pro.
          </h2>

          <div className="tm-grid tm-grid-2">
            <div className="tm-feature-card">
              <h3>Do I need prior tax experience?</h3>
              <p style={{ marginTop: "8px" }}>
                Prior experience helps, but it&apos;s not required. We offer
                training and support for motivated people who are serious about
                learning and doing things the right way.
              </p>
            </div>

            <div className="tm-feature-card">
              <h3>Is this a job or a partnership?</h3>
              <p style={{ marginTop: "8px" }}>
                This is a partnership-style opportunity. You operate as an
                independent professional while leveraging The Tax Moguls brand,
                systems, and support. Exact structure may vary by state.
              </p>
            </div>

            <div className="tm-feature-card">
              <h3>How do I get clients?</h3>
              <p style={{ marginTop: "8px" }}>
                We support you with brand assets, online tools, and proven
                referral strategies — and you&apos;ll also be expected to grow
                your own network and presence locally or online.
              </p>
            </div>

            <div className="tm-feature-card">
              <h3>How are fees and payouts handled?</h3>
              <p style={{ marginTop: "8px" }}>
                We&apos;ll walk through pricing, fee splits, and payout timing
                during your info call so you understand the structure before you
                join. Transparency is non-negotiable.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "32px" }}>
            <a
              href="https://cal.com/jordan-c-cmbf7z/mogul-consultation"
              className="tm-btn tm-btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Still have questions? Book a call
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="tm-section tm-section-dark">
        <div className="tm-container tm-grid tm-grid-2">
          <div className="tm-pro-copy">
            <p className="tm-kicker tm-kicker-light">Ready to move?</p>
            <h2 style={{ marginTop: "10px" }}>
              Take the next step toward becoming a Tax Mogul Pro.
            </h2>
            <p className="tm-pro-text">
              Your next tax season doesn&apos;t have to look like your last
              one. Plug into a brand and system built for people who think like
              Moguls.
            </p>
          </div>

          <div className="tm-pro-card">
            <div className="tm-pro-cta">
              <a
                href="YOUR_TAX_PRO_APPLY_LINK_HERE"
                className="tm-btn tm-btn-primary tm-btn-full"
                target="_blank"
                rel="noreferrer"
              >
                Apply to become a Tax Mogul Pro
              </a>
              <a
                href="https://cal.com/jordan-c-cmbf7z/mogul-consultation"
                className="tm-btn tm-btn-outline-light tm-btn-full"
                target="_blank"
                rel="noreferrer"
              >
                Book an info call first
              </a>
              <p className="tm-pro-small" style={{ marginTop: "8px" }}>
                No pressure, no hard sell — just a real conversation about
                whether this is the right fit for you this season.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}