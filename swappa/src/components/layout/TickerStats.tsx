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
  { num: '₦2.4B+', label: 'Total trade volume' },
  { num: '8,200+', label: 'Verified listings sold' },
  { num: '99.1%', label: 'Escrow success rate' },
  { num: '< 2min', label: 'Avg. bot response' },
];

export default function TickerStats() {
  const doubled = [...ASSETS, ...ASSETS];

  return (
    <div style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>

      {/* Ticker */}
      <div style={{ overflow: 'hidden', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="ticker-track anim-ticker">
          {doubled.map((a, i) => (
            <div key={i} className="ticker-item">
              <span>{a.emoji}</span>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container" style={{ padding: '48px 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} className={`anim-fade-up d-${(i + 1) * 100}`} style={{
              textAlign: 'center', padding: '24px 16px',
            }}>
              <div className="stat-num" style={{ marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--ink-3)', fontWeight: 400 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}