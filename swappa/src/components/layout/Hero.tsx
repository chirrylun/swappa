"use client";

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PROVIDERS = [
  { label: "Koji Agudah", bg: "var(--forest)", color: "var(--lime)" },
  { label: "Nauman Chaudhary", bg: "var(--forest-lt)", color: "var(--lime)" },
  { label: "Swappa Native", bg: "var(--lime)", color: "var(--forest)" },
];

function trackLead() {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Lead");
  }
}

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--white)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 64,
      }}
    >
      <div className="container" style={{ padding: "80px 40px 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left ── */}
          <div>
            {/* Escrow strip */}
            <div
              className="anim-fade-up d-1"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "var(--ink-3)",
                  whiteSpace: "nowrap",
                  marginRight: 2,
                }}
              >
                Escrow via
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {PROVIDERS.map((p) => (
                  <span
                    key={p.label}
                    style={{
                      fontSize: "0.73rem",
                      fontWeight: 700,
                      color: p.color,
                      background: p.bg,
                      padding: "5px 12px",
                      borderRadius: 100,
                      whiteSpace: "nowrap",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="anim-fade-up d-2" style={{ marginBottom: 24 }}>
  Buy &amp; sell
  <br />
  social media
  <br />
  &amp; digital accounts.
</h1>

            <p
  className="anim-fade-up d-3"
  style={{
    fontSize: '1.1rem',
    color: 'var(--ink-2)',
    maxWidth: 420,
    lineHeight: 1.75,
    fontWeight: 400,
    marginBottom: 36,
  }}
>
  Buy social media accounts and digital assets safely in Nigeria —
  Instagram, TikTok, Twitter/X, Google Ads, Facebook ad accounts,
  AdSense sites and more. Escrow-protected, entirely inside WhatsApp.
</p>

            {/* CTAs */}
            <div
              className="anim-fade-up d-4"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                flexWrap: "wrap",
                marginBottom: 36,
              }}
            >
              <a
                href="https://wa.me/2348143653652?text=MENU"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime"
                style={{ fontSize: "1rem", padding: "15px 32px", gap: 9 }}
                onClick={trackLead}
              >
                {WA_ICON} Open WhatsApp
              </a>
              <a href="#how-it-works" className="btn btn-ghost">
                See how it works
              </a>
            </div>

            {/* Trust micro-pills */}
            <div
              className="anim-fade-up d-5"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {[
                "✅ Verified listings",
                "🔒 Escrow on every deal",
                "⚡ 48hr dispute resolution",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--ink-2)",
                    fontWeight: 500,
                    background: "var(--off)",
                    border: "1px solid var(--border)",
                    padding: "5px 12px",
                    borderRadius: 100,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: WhatsApp mockup ── */}
          <div
            className="anim-fade-up d-3 hero-mockup-wrap"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="anim-float"
              style={{
                width: "100%",
                maxWidth: 360,
                borderRadius: 24,
                border: "1px solid var(--border)",
                overflow: "hidden",
                boxShadow: "0 8px 48px rgba(0,0,0,0.10)",
                background: "#e5ddd5",
              }}
            >
              {/* Mockup chat header */}
              <div
                style={{
                  background: "var(--forest)",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "var(--lime)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  {/*
                    Avatar icon: 22px inside a 38px circle — fills it comfortably.
                    CSS-only sizing.
                  */}
                  <img
                    src="/images/swappa-icon-white.svg"
                    alt="Swappa escrow marketplace Nigeria"
                    className="swappa-mockup-avatar-icon"
                  />
                </div>

                {/* Name + status */}
                <div>
                  {/*
                    Mockup wordmark: white (via filter), height 12px.
                    At this scale inside the mockup header, 12px sits flush
                    with the "Market" label (0.7rem ≈ 11.2px) beside it.
                    Gap 5px keeps them close without merging.
                  */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      marginBottom: 3,
                    }}
                  >
                    <img
                      src="/images/swappa-text.svg"
                      alt="Swappa"
                      className="swappa-mockup-text"
                    />
                    <span
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.72rem",
                        fontWeight: 500,
                      }}
                    >
                      Market
                    </span>
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.72rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: "var(--lime)",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    />
                    Online now
                  </div>
                </div>
              </div>

              {/* Chat body */}
              <div
                style={{
                  padding: "18px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ maxWidth: 280 }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "12px 12px 12px 2px",
                      padding: "12px 14px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.87rem",
                        marginBottom: 8,
                      }}
                    >
                      👋 Welcome to Swappa!
                    </div>
                    <div
                      style={{
                        color: "var(--ink-2)",
                        fontSize: "0.82rem",
                        marginBottom: 10,
                      }}
                    >
                      What would you like to do?
                    </div>
                    {[
                      "🔍 Browse listings",
                      "💰 Sell an account",
                      "📣 Request an asset",
                    ].map((opt) => (
                      <div
                        key={opt}
                        style={{
                          background: "var(--off)",
                          borderRadius: 8,
                          border: "1px solid var(--border)",
                          padding: "5px 10px",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          marginBottom: 4,
                        }}
                      >
                        {opt}
                      </div>
                    ))}
                    <div className="wa-time">09:41 AM ✓✓</div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div
                    className="wa-bubble-out"
                    style={{ padding: "9px 14px" }}
                  >
                    <span className="cmd">LISTINGS</span>
                    <div className="wa-time">09:41 AM ✓✓</div>
                  </div>
                </div>

                <div style={{ maxWidth: 290 }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "12px 12px 12px 2px",
                      padding: "12px 14px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        marginBottom: 4,
                      }}
                    >
                      🎯 Google Ads Account
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--ink-3)",
                        marginBottom: 10,
                      }}
                    >
                      2yr · $4,200 spent · Nigeria · ✅ Clean
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 800,
                          fontSize: "1rem",
                          color: "var(--forest)",
                        }}
                      >
                        ₦185,000
                      </span>
                      <span className="cmd" style={{ fontSize: "0.7rem" }}>
                        VIEW ADS-4821
                      </span>
                    </div>
                    <div className="wa-time">09:41 AM ✓✓</div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div
                    className="wa-bubble-out"
                    style={{ padding: "9px 14px" }}
                  >
                    <span className="cmd">BUY ADS-4821</span>
                    <div className="wa-time">09:42 AM ✓✓</div>
                  </div>
                </div>
              </div>

              {/* Mockup CTA */}
              <div
                style={{
                  padding: "12px 14px 14px",
                  background: "var(--off)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <a
                  href="https://wa.me/2348143653652?text=MENU"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackLead}
                  style={{
                    display: "block",
                    background: "var(--lime)",
                    color: "var(--forest)",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    textAlign: "center",
                    padding: "11px",
                    borderRadius: 100,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Start trading on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Mockup header logo sizing (CSS-only) ──
           Avatar icon: 22px inside the 38px circle.
           Wordmark: 12px tall, white via filter, width auto. */
        .swappa-mockup-avatar-icon {
          display: block;
          height: 22px;
          width: 22px;
        }
        .swappa-mockup-text {
          display: block;
          height: 12px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-mockup-wrap { display: none !important; }
        }
        @media (max-width: 480px) {
          .container { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </section>
  );
}
