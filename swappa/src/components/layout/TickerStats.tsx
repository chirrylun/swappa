"use client";

const ASSETS = [
  { label: "Google Ads Accounts" },
  { label: "Facebook Ad Accounts" },
  { label: "AdSense Sites" },
  { label: "Play Console Accounts" },
  { label: "Gift Cards" },
  { label: "Twitter / X Accounts" },
  { label: "Instagram Accounts" },
  { label: "TikTok Accounts" },
];

const TRUST_POINTS = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    num: "₦2.4B+",
    title: "Trusted by thousands",
    desc: "In deals completed safely across Nigeria — and growing.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    num: "99.1%",
    title: "Escrow success rate",
    desc: "Every transaction is protected until both sides confirm.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    num: "8,200+",
    title: "Verified listings sold",
    desc: "Every asset reviewed by our team before it goes live.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    num: "< 2 min",
    title: "24/7 bot response",
    desc: "Disputes resolved within 48 hours by our admin team.",
  },
];

export default function TickerStats() {
  const doubled = [...ASSETS, ...ASSETS];

  return (
    <div>
      {/* ── Ticker ── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--off)",
          overflow: "hidden",
          padding: "14px 0",
        }}
      >
        <div className="ticker-track">
          {doubled.map((a, i) => (
            <div key={i} className="ticker-item" style={{ gap: 10 }}>
              {/* Dot separator instead of emoji */}
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--lime-dk)",
                  opacity: 0.3,
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontWeight: 500,
                  color: "var(--ink-2)",
                  fontSize: "0.82rem",
                }}
              >
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trust / stats section ── */}
      <div className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          {/* Section label */}
          <span className="section-label anim-fade-up">
            Why traders choose Swappa
          </span>

          {/* 2-col layout: big left stat + right grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
            className="swp-trust-layout"
          >
            {/* Left: headline + first trust point large */}
            <div className="anim-fade-up d-1">
              <h2 style={{ marginBottom: 24, lineHeight: 1.0 }}>
                Safe trades.
                <br />
                Every time.
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--ink-2)",
                  lineHeight: 1.8,
                  maxWidth: 380,
                  marginBottom: 40,
                }}
              >
                Swappa combines verified listings, multi-provider escrow, and a
                WhatsApp-native experience so you never have to worry about
                who's on the other side of the deal.
              </p>

              {/* Escrow provider strip */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap", // ← was inline-flex with no wrap
                  gap: 6,
                  marginTop: 4,
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
                  }}
                >
                  Escrow via
                </span>
                {[
                  {
                    label: "Koji Agudah",
                    bg: "var(--forest)",
                    color: "var(--lime)",
                  },
                  {
                    label: "Nauman Chaudhary",
                    bg: "var(--forest-lt)",
                    color: "var(--lime)",
                  },
                  {
                    label: "Swappa Native",
                    bg: "var(--lime)",
                    color: "var(--forest)",
                  },
                ].map((p) => (
                  <span
                    key={p.label}
                    style={{
                      fontSize: "0.72rem",
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

            {/* Right: 2×2 stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {TRUST_POINTS.map((tp, i) => (
                <div
                  key={tp.title}
                  className={`anim-fade-up d-${(i + 1) * 100}`}
                  style={{
                    background: "var(--off)",
                    border: "1px solid var(--border)",
                    borderRadius: 18,
                    padding: "24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    transition:
                      "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-dk)";
                    el.style.boxShadow = "0 6px 24px rgba(0,0,0,0.07)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--forest)",
                      flexShrink: 0,
                    }}
                  >
                    {tp.icon}
                  </div>

                  {/* Stat number */}
                  <div
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: 900,
                      color: "var(--forest)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      fontFamily: "var(--font-display), system-ui, sans-serif",
                    }}
                  >
                    {tp.num}
                  </div>

                  {/* Label + desc */}
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        color: "var(--black)",
                        marginBottom: 4,
                      }}
                    >
                      {tp.title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--ink-3)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {tp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
  @media (max-width: 900px) {
    .swp-trust-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
  }
  @media (max-width: 540px) {
    .swp-trust-layout > div:last-child { grid-template-columns: 1fr !important; }
  }
`}</style>
    </div>
  );
}
