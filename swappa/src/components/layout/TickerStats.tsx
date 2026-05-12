'use client';

const ASSETS = [
  { emoji: '🎯', label: 'Google Ads Accounts' },
  { emoji: '📘', label: 'Facebook Ad Accounts' },
  { emoji: '💵', label: 'AdSense Sites' },
  { emoji: '📱', label: 'Play Console Accounts' },
  { emoji: '🎁', label: 'Gift Cards' },
  { emoji: '🐦', label: 'Twitter / X Accounts' },
  { emoji: '📸', label: 'Instagram Accounts' },
  { emoji: '🎵', label: 'TikTok Accounts' },
];

/* Wise has 3 trust points with icon circles then a stat row */
const TRUST_POINTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="var(--ink-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Trusted by thousands of traders',
    desc: 'Over ₦2.4 billion in deals completed safely across Nigeria.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="var(--ink-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Verified listings only',
    desc: 'Every asset is reviewed by our team before it goes live.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="var(--ink-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '24/7 escrow support',
    desc: 'Disputes handled within 48 hours by our admin team.',
  },
];

const STATS = [
  { num: '₦2.4B+',  label: 'Total trade volume'    },
  { num: '8,200+',  label: 'Verified listings sold' },
  { num: '99.1%',   label: 'Escrow success rate'    },
  { num: '< 2 min', label: 'Avg. bot response'      },
];

export default function TickerStats() {
  const doubled = [...ASSETS, ...ASSETS];

  return (
    <div>
      {/* Ticker — plain, on off-white like Wise's subtle marquees */}
      <div style={{
        background: 'var(--off)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ overflow: 'hidden', padding: '13px 0' }}>
          <div className="ticker-track">
            {doubled.map((a, i) => (
              <div key={i} className="ticker-item">
                <span>{a.emoji}</span>
                <span>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust triad — Wise icon-circle pattern */}
      <div className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 48,
          }} className="trust-grid">
            {TRUST_POINTS.map((tp, i) => (
              <div
                key={tp.title}
                className={`anim-fade-up d-${(i + 1) * 100}`}
              >
                <div className="icon-circle" style={{ marginBottom: 20 }}>
                  {tp.icon}
                </div>
                <h3 style={{ marginBottom: 8, fontWeight: 700 }}>{tp.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>
                  {tp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats band — forest green like Wise's "MEET MONEY WITHOUT BORDERS" dark panel */}
      <div style={{
        background: 'var(--forest)',
        padding: '72px 0',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          }} className="stats-grid">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`anim-fade-up d-${(i + 1) * 100}`}
                style={{
                  padding: '32px 36px',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 800, letterSpacing: '-0.03em',
                  color: 'var(--lime)', lineHeight: 1, marginBottom: 8,
                }}>{s.num}</div>
                <div style={{
                  fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)',
                  fontWeight: 500,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trust-grid  { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stats-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}