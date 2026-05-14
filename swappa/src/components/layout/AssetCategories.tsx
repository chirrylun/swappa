"use client";
import Image from "next/image";

const CATEGORIES = [
  {
    img: "/images/google-svg.svg",
    name: "Google Ads Accounts",
    count: "240+",
    desc: "Aged accounts with spend history. Clean or suspended. Various currencies and niches.",
    tags: ["Age", "Spend history", "Currency", "Niche"],
  },
  {
    img: "/images/facebook-svg.svg",
    name: "Facebook Ad Accounts",
    count: "180+",
    desc: "Meta Business Manager accounts with spend limits. Pixel-attached options available.",
    tags: ["Spend limit", "Pixel", "Business Mgr", "Status"],
  },
  {
    img: "/images/google-adsense-svg.svg",
    name: "AdSense Sites",
    count: "95+",
    desc: "Approved AdSense accounts with earning history. Sites included on request.",
    tags: ["Monthly earn", "Payment history", "Site URL", "Violations"],
  },
  {
    img: "/images/google-play-svg.svg",
    name: "Play Console",
    count: "60+",
    desc: "Developer accounts with published apps and revenue history. Clean standing.",
    tags: ["Apps count", "Monthly rev", "Status", "Age"],
  },
  {
    img: "/images/amazon-color-svg.svg",
    name: "Gift Cards",
    count: "310+",
    desc: "Amazon, iTunes, Google Play, Steam and more. Face value sold at discount.",
    tags: ["Brand", "Face value", "Region", "Currency"],
  },
  {
    img: "/images/youtube-svg.svg",
    name: "Twitter / X Accounts",
    count: "140+",
    desc: "Verified and unverified accounts. Niche-specific audiences. Monetized options.",
    tags: ["Followers", "Niche", "Monetized", "Age"],
  },
  {
    img: "/images/instagram-svg.svg",
    name: "Instagram Accounts",
    count: "200+",
    desc: "Niche accounts with real engagement. Monetization-enabled options available.",
    tags: ["Followers", "Niche", "Monetized", "Status"],
  },
  {
    img: "/images/tiktok-svg.svg",
    name: "TikTok Accounts",
    count: "120+",
    desc: "Creator accounts with LIVE access, monetization enabled, and niche audiences.",
    tags: ["Followers", "LIVE access", "Monetized", "Niche"],
  },
];

export default function AssetCategories() {
  return (
    <section
      id="assets"
      className="section"
      style={{ background: "var(--off)" }}
    >
      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 56,
          }}
        >
          <div>
            <span className="section-label anim-fade-up">What we trade</span>
            <h2 className="anim-fade-up d-100">
              8 asset categories,
              <br />
              hundreds of listings
            </h2>
          </div>
          <div className="anim-fade-up d-200" style={{ maxWidth: 340 }}>
            <p
              style={{
                color: "var(--ink-2)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: 20,
              }}
            >
              Every listing is reviewed by our team before going live. Browse by
              category or use <span className="cmd">LISTINGS</span> on WhatsApp.
            </p>
            <a
              href="https://wa.me/2348143653652?text=LISTINGS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime"
            >
              Browse all listings →
            </a>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
          className="cat-grid"
        >
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.name}
              className="card anim-fade-up"
              style={{
                padding: "24px",
                animationDelay: `${(i % 4) * 0.07}s`,
                cursor: "pointer",
              }}
            >
              {/* Platform logo */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  flexShrink: 0,
                  overflow: "hidden",
                  padding: 8,
                }}
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={32}
                  height={32}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              {/* Name + count */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                  gap: 8,
                }}
              >
                <h3 style={{ maxWidth: "70%", lineHeight: 1.3 }}>{cat.name}</h3>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--forest)",
                    background: "var(--lime-lt)",
                    padding: "2px 8px",
                    borderRadius: 100,
                    flexShrink: 0,
                  }}
                >
                  {cat.count}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.83rem",
                  color: "var(--ink-2)",
                  lineHeight: 1.65,
                  marginBottom: 14,
                }}
              >
                {cat.desc}
              </p>

              {/* Filter tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {cat.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      color: "var(--ink-3)",
                      background: "var(--off)",
                      border: "1px solid var(--border)",
                      padding: "2px 8px",
                      borderRadius: 100,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .cat-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .cat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
