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

const STATS = [
  { num: '₦2.4B+',  label: 'Total trade volume',    accent: true  },
  { num: '8,200+',  label: 'Verified listings sold', accent: false },
  { num: '99.1%',   label: 'Escrow success rate',   accent: false },
  { num: '< 2 min', label: 'Avg. bot response',     accent: false },
];

export default function TickerStats() {
  const doubled = [...ASSETS, ...ASSETS];

  return (
    <div style={{
      background: 'var(--black)',
      borderTop: '1.5px solid var(--border)',
    }}>
      {/* Ticker — lime text on black */}
      <div style={{
        overflow: 'hidden',
        padding: '14px 0',
        borderBottom: '1.5px solid rgba(255,255,255,0.08)',
      }}>
        <div className="ticker-track">
          {doubled.map((a, i) => (
            <div key={i} className="ticker-item" style={{
              color: 'rgba(255,255,255,0.5)',
              borderRight: '1px solid rgba(255,255,255,0.1)',
            }}>
              <span>{a.emoji}</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container" style={{ padding: '72px 40px' }}>

        {/* Section label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 48,
        }}>
          <span className="live-dot" />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
          }}>Platform metrics</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          border: '1.5px solid rgba(255,255,255,0.1)',
          borderRadius: 20,
          overflow: 'hidden',
        }} className="stats-grid">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`anim-fade-up d-${(i + 1) * 100}`}
              style={{
                textAlign: 'left',
                padding: '40px 32px',
                background: s.accent ? 'var(--lime)' : 'rgba(255,255,255,0.04)',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                transition: 'background 0.2s',
              }}
            >
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: s.accent ? 'var(--lime-dk)' : '#fff',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: 10,
              }}>{s.num}</div>
              <div style={{
                fontSize: '0.82rem',
                color: s.accent ? 'rgba(45,74,0,0.7)' : 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}