import React from "react";

export default function FileNow() {
  return (
    <div className="tm-page">

      {/* ============================
          HERO – MOBILE FILING
      ============================= */}
      <section className="tm-hero tm-section-alt">
        <div className="tm-container" style={{ textAlign: "center" }}>
          
          <p className="tm-kicker">Mobile Filing Available</p>

          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: "800", marginTop: "12px", lineHeight: "1.1" }}>
            File Your Taxes <br></br>Right From Your Phone.
          </h1>

          <p className="tm-hero-sub" style={{ margin: "16px auto 0", maxWidth: "560px" }}>
            Start your return in minutes. Snap pics of your documents, upload securely, 
            and a Tax Mogul Pro will take it from there.
          </p>

          {/* PHONE IMAGE WITH FADE */}
          <div style={{ marginTop: "40px", position: "relative" }}>
            <img
              src="/app.png"
              alt="Mobile filing app preview"
              style={{
                width: "100%",
                maxWidth: "500px", /* 1. Made Bigger */
                margin: "0 auto",
                display: "block",
                /* 2. Fade the bottom into the background */
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                objectFit: "contain"
              }}
            />
          </div>

          {/* ACTIONS (Pulled up to blend with fade) */}
          <div className="tm-hero-actions" style={{ justifyContent: "center", marginTop: "-40px", position: "relative", zIndex: 10 }}>
            <a
              href="https://taxestogo.com/App/Download/99153"
              className="tm-btn tm-btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Start My Return
            </a>

            <a
              href="https://cal.com/jordan-c-cmbf7z/mogul-consultation"
              className="tm-btn tm-btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Talk to a Mogul Pro
            </a>
          </div>

          <ul className="tm-hero-list" style={{ marginTop: "32px" }}>
            <li>✓ Upload W-2s and documents with your camera</li>
            <li>✓ Secure encrypted mobile filing</li>
            <li>✓ Works on all iPhone + Android devices</li>
          </ul>
        </div>
      </section>

      {/* ============================
          TWO WAYS TO FILE
      ============================= */}
      <section className="tm-section">
        <div className="tm-container tm-grid tm-grid-2">

          {/* Self-Filing Option */}
          <div className="tm-feature-card">
            <h2>File On Your Phone</h2>
            <p>Fast, free to start, and guided at every step.</p>

            <ul className="tm-checklist-dark">
              <li>✓ Snap photos of tax documents</li>
              <li>✓ Upload forms securely</li>
              <li>✓ File anytime, anywhere</li>
            </ul>

            <div className="tm-feature-price">$0</div>

            <a
              href="https://taxestogo.com/App/Download/99153"
              className="tm-btn tm-btn-primary tm-btn-full"
              target="_blank"
              rel="noreferrer"
            >
              Download & Start Filing
            </a>
          </div>

          {/* Full Service Option */}
          <div className="tm-feature-card">
            <h2>File With a Mogul Pro</h2>
            <p>Full-service tax preparation done for you.</p>

            <ul className="tm-checklist-dark">
              <li>✓ Virtual or in-person</li>
              <li>✓ Year-round support</li>
              <li>✓ Maximized refund guarantee</li>
            </ul>

            <div className="tm-feature-price">$99</div>

            <a
              href="https://cal.com/jordan-c-cmbf7z/mogul-consultation"
              className="tm-btn tm-btn-primary tm-btn-full"
              target="_blank"
              rel="noreferrer"
            >
              Book With a Tax Pro
            </a>
          </div>
        </div>
      </section>

      {/* ============================
          CTA FOOTER SECTION
      ============================= */}
      <section className="tm-section tm-section-alt">
        <div className="tm-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "800" }}>
            Ready to File Your Taxes the Mogul Way?
          </h2>
          <p style={{ maxWidth: "500px", margin: "12px auto", color: "var(--muted-text)" }}>
            Get started in less than 3 minutes. Mobile, online, or in person
            we meet you where you are.
          </p>

          <a
            href="https://taxestogo.com/App/Download/99153"
            className="tm-btn tm-btn-primary"
            style={{ marginTop: "24px" }}
            target="_blank"
            rel="noreferrer"
          >
            Start Filing Today
          </a>
        </div>
      </section>
    </div>
  );
}