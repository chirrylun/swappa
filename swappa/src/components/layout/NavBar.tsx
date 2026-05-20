'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const WA_LINK = 'https://wa.me/2348143653652?text=MENU';

function trackLead() {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
}

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Assets',       href: '#assets'       },
  { label: 'Safety',       href: '#trust'        },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        transition: 'box-shadow 0.25s',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', height: 64,
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/images/swappa-icon.svg" alt="Swappa icon white" aria-hidden="true" className="swappa-logo-icon" />
            <img src="/images/swappa-text.svg" alt="Swappa" className="swappa-logo-text" />
          </Link>

          {/* ── Desktop nav links ── */}
          <div style={{ display: 'flex', gap: 2 }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a
                key={link.label} href={link.href}
                style={{
                  fontWeight: 500, fontSize: '0.9rem',
                  color: 'var(--ink-2)', textDecoration: 'none',
                  padding: '7px 14px', borderRadius: 8,
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = 'var(--black)';
                  el.style.background = 'var(--off)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = 'var(--ink-2)';
                  el.style.background = 'transparent';
                }}
              >{link.label}</a>
            ))}
          </div>

          {/* ── Right side ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: '0.8rem', color: 'var(--ink-3)', fontWeight: 500,
            }} className="desktop-nav">
              <span className="live-dot" style={{ background: 'var(--green)' }} />
              Live marketplace
            </div>

            {/* ── Desktop WhatsApp CTA ── */}
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-lime"
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}
              onClick={trackLead}
            >
              {WA_ICON} Open WhatsApp
            </a>

            <button
              onClick={() => setMobileOpen(o => !o)}
              style={{
                display: 'none', background: 'none', border: 'none',
                cursor: 'pointer', padding: 6, color: 'var(--ink)',
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen
                  ? <><path d="M18 6L6 18M6 6l12 12" /></>
                  : <><path d="M3 7h18M3 12h18M3 17h18" /></>}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div style={{
            background: 'var(--white)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px 24px',
          }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.label} href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '12px 0',
                  fontWeight: 600, fontSize: '1rem',
                  color: 'var(--ink)', textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                }}
              >{link.label}</a>
            ))}

            {/* ── Mobile WhatsApp CTA ── */}
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-lime"
              style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
              onClick={trackLead}
            >
              {WA_ICON} Open WhatsApp
            </a>
          </div>
        )}
      </nav>

      <style>{`
        .swappa-logo-icon { display: block; height: 24px; width: 24px; flex-shrink: 0; }
        .swappa-logo-text { display: block; height: 15px; width: auto; flex-shrink: 0; }
        @media (max-width: 768px) {
          .desktop-nav     { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}