'use client';

const CATEGORIES = [
  {
    emoji: '🎯',
    name: 'Google Ads Accounts',
    desc: 'Aged accounts with spend history. Clean or suspended. Various currencies and niches.',
    tags: ['Age', 'Spend history', 'Currency', 'Niche'],
    color: '#fef9c3',
    border: '#fde047',
    count: '240+',
  },
  {
    emoji: '📘',
    name: 'Facebook Ad Accounts',
    desc: 'Meta Business Manager accounts with spend limits. Pixel-attached options available.',
    tags: ['Spend limit', 'Pixel', 'Business Mgr', 'Status'],
    color: '#dbeafe',
    border: '#93c5fd',
    count: '180+',
  },
  {
    emoji: '💵',
    name: 'AdSense Sites',
    desc: 'Approved AdSense accounts with earning history. Sites included on request.',
    tags: ['Monthly earn', 'Payment history', 'Site URL', 'Violations'],
    color: '#dcfce7',
    border: '#86efac',
    count: '95+',
  },
  {
    emoji: '📱',
    name: 'Play Console',
    desc: 'Developer accounts with published apps and revenue history. Clean standing.',
    tags: ['Apps count', 'Monthly rev', 'Status', 'Age'],
    color: '#f3e8ff',
    border: '#d8b4fe',
    count: '60+',
  },
  {
    emoji: '🎁',
    name: 'Gift Cards',
    desc: 'Amazon, iTunes, Google Play, Steam and more. Face value sold at discount.',
    tags: ['Brand', 'Face value', 'Region', 'Currency'],
    color: '#ffe4e6',
    border: '#fda4af',
    count: '310+',
  },
  {
    emoji: '🐦',
    name: 'Twitter / X Accounts',
    desc: 'Verified and unverified accounts. Niche-specific audiences. Monetized options.',
    tags: ['Followers', 'Niche', 'Monetized', 'Age'],
    color: '#e0f2fe',
    border: '#7dd3fc',
    count: '140+',
  },
  {
    emoji: '📸',
    name: 'Instagram Accounts',
    desc: 'Niche accounts with real engagement. Monetization-enabled options available.',
    tags: ['Followers', 'Niche', 'Monetized', 'Status'],
    color: '#fdf2f8',
    border: '#f0abfc',
    count: '200+',
  },
  {
    emoji: '🎵',
    name: 'TikTok Accounts',
    desc: 'Creator accounts with LIVE access, monetization enabled, and niche audiences.',
    tags: ['Followers', 'LIVE access', 'Monetized', 'Niche'],
    color: '#f0fdf4',
    border: '#86efac',
    count: '120+',
  },
];

export default function AssetCategories() {
  return (
    <section id="assets" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">

        <div style={{ marginBottom: 56 }}>
          <div className="section-label anim-fade-up" style={{ marginBottom: 16 }}>What we trade</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <h2 className="anim-fade-up d-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
              8 asset categories,<br />hundreds of listings
            </h2>
            <p className="anim-fade-up d-200" style={{ maxWidth: 360, color: 'var(--ink-2)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Every listing is reviewed by our team before going live. Browse by category or use <span className="cmd">LISTINGS</span> on WhatsApp.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.name}
              className={`card anim-fade-up d-${Math.min((i % 4 + 1) * 100, 400)}`}
              style={{ padding: '24px', cursor: 'default' }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: cat.color, border: `1px solid ${cat.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', marginBottom: 16,
              }}>
                {cat.emoji}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.3, maxWidth: '70%' }}>{cat.name}</h3>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700, color: 'var(--green)',
                  background: 'var(--green-lt)', padding: '2px 8px', borderRadius: 100,
                }}>
                  {cat.count}
                </span>
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 14 }}>
                {cat.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {cat.tags.map(t => (
                  <span key={t} style={{
                    fontSize: '0.68rem', fontWeight: 500, color: 'var(--ink-3)',
                    background: 'var(--off-white)', border: '1px solid var(--border)',
                    padding: '2px 8px', borderRadius: 100,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Browse CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="https://wa.me/234XXXXXXXXXX?text=LISTINGS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Browse all listings on WhatsApp →
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .asset-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .asset-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .asset-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}