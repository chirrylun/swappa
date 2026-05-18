'use client';

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const NAV_COLS = [
  {
    heading: 'Marketplace',
    links: [
      { label: 'Browse listings',       href: '#assets' },
      { label: 'Sell an asset',         href: 'https://wa.me/2348143653652?text=SELL' },
      { label: 'Request an asset',      href: 'https://wa.me/2348143653652?text=REQUEST' },
      { label: 'How it works',          href: '#how-it-works' },
    ],
  },
  {
    heading: 'Asset categories',
    links: [
      { label: 'Google Ads Accounts',   href: '#assets' },
      { label: 'Facebook Ad Accounts',  href: '#assets' },
      { label: 'AdSense Sites',         href: '#assets' },
      { label: 'Gift Cards',            href: '#assets' },
      { label: 'Social Accounts',       href: '#assets' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',                 href: '#' },
      { label: 'Safety policy',         href: '#' },
      { label: 'Terms of service',      href: '#' },
      { label: 'Privacy policy',        href: '#' },
      { label: 'Contact us',            href: 'https://wa.me/2348143653652?text=HELP' },
    ],
  },
];

const COMMANDS = ['MENU', 'LISTINGS', 'SELL', 'BUY [ID]', 'HELP'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--forest)', color: 'rgba(255,255,255,0.75)' }}>

      {/* ── CTA band ── */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '56px 0',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 32,
        }}>
          <div>
            <h2 style={{
              color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
              fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1.1, marginBottom: 10,
            }}>
              Ready to trade?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', margin: 0, maxWidth: 340 }}>
              Open WhatsApp and type <span style={{ color: 'var(--lime)', fontFamily: 'monospace', fontWeight: 700 }}>MENU</span> to get started in seconds.
            </p>
          </div>

          <a
            href="https://wa.me/2348143653652?text=MENU"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--lime)', color: 'var(--forest)',
              fontFamily: 'var(--font-display), system-ui, sans-serif',
              fontWeight: 700, fontSize: '1rem',
              padding: '15px 32px', borderRadius: 100,
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'background 0.18s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--lime-mid)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--lime)'}
          >
            {WA_ICON} Open WhatsApp
          </a>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div style={{ padding: '64px 0 48px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr 1fr 1fr 1fr',
            gap: 48, alignItems: 'start',
          }} className="swappa-footer-grid">

            {/* ── Brand column ── */}
            <div>
              {/* Logo: icon + text SVGs side by side */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
              }}>
                <img
                  src="/images/swappa-icon.svg"
                  alt="Swappa icon"
                  width={32}
                  height={32}
                  style={{ display: 'block', flexShrink: 0 }}
                />
                <img
                  src="/images/swappa-text-white.svg"
                  alt="Swappa"
                  height={20}
                  style={{
                    display: 'block',
                 
                  }}
                />
              </div>

              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>
                Nigeria's escrow marketplace for digital assets — entirely inside WhatsApp.
              </p>

              {/* Quick commands */}
              <div style={{ marginBottom: 4 }}>
                <div style={{
                  fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase',
                  letterSpacing: '0.09em', color: 'var(--lime)',
                  marginBottom: 10,
                }}>Quick commands</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {COMMANDS.map(cmd => (
                    <a
                      key={cmd}
                      href={`https://wa.me/2348143653652?text=${encodeURIComponent(cmd.replace(' [ID]', ''))}`}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '0.7rem', fontWeight: 600,
                        color: 'rgba(159,232,112,0.85)',
                        background: 'rgba(159,232,112,0.08)',
                        border: '1px solid rgba(159,232,112,0.16)',
                        padding: '3px 9px', borderRadius: 6,
                        textDecoration: 'none',
                        transition: 'background 0.14s, color 0.14s',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = 'rgba(159,232,112,0.16)';
                        el.style.color = 'var(--lime)';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = 'rgba(159,232,112,0.08)';
                        el.style.color = 'rgba(159,232,112,0.85)';
                      }}
                    >{cmd}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Nav columns */}
            {NAV_COLS.map(col => (
              <div key={col.heading}>
                <div style={{
                  fontSize: '0.65rem', fontWeight: 800,
                  textTransform: 'uppercase', letterSpacing: '0.09em',
                  color: 'var(--lime)', marginBottom: 18,
                }}>{col.heading}</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{
                          fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)',
                          textDecoration: 'none', fontWeight: 500,
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}
                      >{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '22px 0' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
            © {year} Swappa. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .swappa-footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .swappa-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 420px) {
          .swappa-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}