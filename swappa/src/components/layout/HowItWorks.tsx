'use client';
import { useState } from 'react';

/* ─── WhatsApp icon ──────────────────────────────────────── */
const WA_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '100%', height: '100%' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Plain monochrome SVG icons ─────────────────────────── */
const ICONS = {
  search: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  eye: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  messageSquare: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  lock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  checkCircle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  upload: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  inbox: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
    </svg>
  ),
  key: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
    </svg>
  ),
  dollarSign: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
};

/* ─── Step data ──────────────────────────────────────────── */
const BUYER_STEPS = [
  { num: '01', icon: ICONS.search,       title: 'Browse listings',  cmd: 'LISTINGS',      desc: 'Type LISTINGS to see all verified assets by category — Google Ads, Meta, gift cards and more.' },
  { num: '02', icon: ICONS.eye,          title: 'View a listing',   cmd: 'VIEW ADS-4821',  desc: 'See full details — spend history, account age, seller rating and verified status.' },
  { num: '03', icon: ICONS.messageSquare,title: 'Make an offer',    cmd: 'OFFER ADS-4821', desc: 'Buy at list price or negotiate. The offer engine supports counter-offers; seller has 72 hours.' },
  { num: '04', icon: ICONS.lock,         title: 'Pay into escrow',  cmd: 'BUY ADS-4821',   desc: 'Funds are held safely until you confirm access. Your money is never at risk.' },
  { num: '05', icon: ICONS.checkCircle,  title: 'Confirm & done',   cmd: null,             desc: '48 hours to verify credentials. Confirm, seller gets paid instantly.' },
];

const SELLER_STEPS = [
  { num: '01', icon: ICONS.upload,      title: 'List your asset',  cmd: 'SELL',        desc: 'Type SELL and follow the prompts. Upload screenshots for our team to verify.' },
  { num: '02', icon: ICONS.shield,      title: 'Get verified',     cmd: null,          desc: 'Admin review within 24 hours. Priority review available. Rejected? Fix and resubmit in minutes.' },
  { num: '03', icon: ICONS.inbox,       title: 'Manage offers',    cmd: 'MY OFFERS',   desc: 'Accept, reject or counter any offer — all inside WhatsApp. Full negotiation history tracked.' },
  { num: '04', icon: ICONS.key,         title: 'Transfer access',  cmd: null,          desc: 'Our team confirms escrow receipt before you share credentials. Completely protected.' },
  { num: '05', icon: ICONS.dollarSign,  title: 'Get paid',         cmd: null,          desc: 'Buyer confirms, funds release immediately to your preferred payment method.' },
];

/* ─── Commands ───────────────────────────────────────────── */
const COMMAND_GROUPS = [
  { label: 'Browse',   color: '#163300', cmds: ['MENU', 'LISTINGS', 'VIEW [ID]'] },
  { label: 'Buy',      color: '#1a4a00', cmds: ['BUY [ID]', 'OFFER [ID]', 'ACCEPT [ID]', 'REJECT [ID]', 'COUNTER [ID] [amt]', 'CANCEL OFFER [ID]'] },
  { label: 'Sell',     color: '#0f2d00', cmds: ['SELL', 'MY OFFERS'] },
  { label: 'Requests', color: '#163300', cmds: ['REQUEST', 'MY REQUESTS', 'RESPOND [REQ-ID]', 'CANCEL REQUEST [REQ-ID]'] },
  { label: 'Settings', color: '#1a4a00', cmds: ['HELP', 'NOTIFICATIONS ON', 'NOTIFICATIONS OFF'] },
];

/* ─── Arrow button ───────────────────────────────────────── */
function ArrowBtn({ dir, onClick, disabled }: { dir: 'left' | 'right'; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 44, height: 44, borderRadius: '50%',
        background: disabled ? 'var(--off)' : 'var(--lime)',
        border: '1.5px solid ' + (disabled ? 'var(--border)' : 'transparent'),
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.18s',
        flexShrink: 0,
        color: disabled ? 'var(--ink-3)' : 'var(--forest)',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

/* ─── Step card ──────────────────────────────────────────── */
function StepCard({ step, bg, dark }: { step: typeof BUYER_STEPS[0]; bg: string; dark: boolean }) {
  const titleC = dark ? '#fff' : 'var(--black)';
  const descC  = dark ? 'rgba(255,255,255,0.58)' : 'var(--ink-2)';
  const iconBg = dark ? 'rgba(159,232,112,0.12)' : 'rgba(22,51,0,0.07)';
  const iconC  = dark ? 'var(--lime)' : 'var(--forest)';
  const numC   = dark ? 'rgba(255,255,255,0.07)' : 'rgba(22,51,0,0.06)';
  const numTC  = dark ? 'rgba(255,255,255,0.22)' : 'rgba(22,51,0,0.22)';

  return (
    <div style={{
      background: bg, borderRadius: 20, padding: '28px 24px',
      minWidth: 252, flex: '0 0 252px',
      display: 'flex', flexDirection: 'column', gap: 14,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ghost step number */}
      <div style={{
        position: 'absolute', top: 12, right: 18,
        fontWeight: 900, fontSize: '5rem', lineHeight: 1,
        color: numTC, letterSpacing: '-0.06em', userSelect: 'none',
        fontFamily: 'var(--font-display), system-ui, sans-serif',
      }}>{step.num}</div>

      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: iconBg, color: iconC,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>{step.icon}</div>

      <div>
        <h3 style={{ color: titleC, fontWeight: 700, marginBottom: 8, fontSize: '0.97rem' }}>{step.title}</h3>
        <p style={{ fontSize: '0.83rem', color: descC, lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
      </div>

      {step.cmd && (
        <div style={{ marginTop: 'auto', paddingTop: 6 }}>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.72rem', fontWeight: 700,
            background: dark ? 'rgba(159,232,112,0.12)' : 'rgba(22,51,0,0.07)',
            color: iconC,
            border: dark ? '1px solid rgba(159,232,112,0.2)' : '1px solid rgba(22,51,0,0.12)',
            padding: '4px 11px', borderRadius: 7, display: 'inline-block',
          }}>{step.cmd}</span>
        </div>
      )}
    </div>
  );
}

/* ─── Step carousel ──────────────────────────────────────── */
function StepCarousel({ steps, bg, dark, label, labelStyle }: {
  steps: typeof BUYER_STEPS; bg: string; dark: boolean;
  label: string; labelStyle: React.CSSProperties;
}) {
  const [index, setIndex] = useState(0);
  const visible = 3;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{
          fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase',
          letterSpacing: '0.08em', padding: '5px 16px', borderRadius: 100,
          display: 'inline-block', ...labelStyle,
        }}>{label}</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <ArrowBtn dir="left"  disabled={index === 0} onClick={() => setIndex(i => Math.max(0, i - 1))} />
          <ArrowBtn dir="right" disabled={index >= steps.length - visible} onClick={() => setIndex(i => Math.min(steps.length - visible, i + 1))} />
        </div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', gap: 12, transition: 'transform 0.38s cubic-bezier(.4,0,.2,1)',
          transform: `translateX(calc(${index} * -264px))`,
        }}>
          {steps.map(step => <StepCard key={step.num} step={step} bg={bg} dark={dark} />)}
        </div>
      </div>
    </div>
  );
}

/* ─── Commands section ───────────────────────────────────── */
function CommandsSection() {
  return (
    <div style={{
      marginTop: 72,
      background: 'var(--black)',
      borderRadius: 28,
      padding: '48px 48px 52px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle lime glow top-left */}
      <div style={{
        position: 'absolute', top: -80, left: -80,
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(159,232,112,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(159,232,112,0.12)', color: 'var(--lime)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8, flexShrink: 0,
          }}>{WA_SVG}</div>
          <div>
            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem', marginBottom: 2 }}>
              Command reference
            </h3>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              Everything runs through WhatsApp — no app needed
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/2347026131523?text=MENU"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--lime)', color: 'var(--forest)',
            fontFamily: 'var(--font-display), system-ui, sans-serif',
            fontWeight: 700, fontSize: '0.88rem',
            padding: '11px 24px', borderRadius: 100,
            textDecoration: 'none', border: 'none', cursor: 'pointer',
            transition: 'background 0.18s',
          }}
        >
          Try it live →
        </a>
      </div>

      {/* Command groups — horizontal scrollable rows with vertical group labels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {COMMAND_GROUPS.map((group, gi) => (
          <div
            key={group.label}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr',
              gap: 0,
              borderTop: gi === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '20px 0',
              alignItems: 'center',
            }}
          >
            {/* Group label — left column, vertically centered */}
            <div style={{
              fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: 'var(--lime)',
              paddingRight: 24,
            }}>{group.label}</div>

            {/* Commands — pill row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {group.cmds.map(cmd => (
                <span
                  key={cmd}
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '0.78rem', fontWeight: 600,
                    color: 'rgba(255,255,255,0.82)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '6px 14px', borderRadius: 8,
                    display: 'inline-block', lineHeight: 1.4,
                    transition: 'background 0.15s, border-color 0.15s, color 0.15s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(159,232,112,0.1)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(159,232,112,0.3)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--lime)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.82)';
                  }}
                >{cmd}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom footnote */}
      <p style={{ marginTop: 28, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', margin: '28px 0 0' }}>
        Square brackets indicate a variable — replace with the actual listing ID or value.{' '}
        <span style={{ color: 'rgba(255,255,255,0.5)' }}>Type <span style={{ color: 'var(--lime)', fontFamily: 'monospace' }}>HELP</span> on WhatsApp for a live guide.</span>
      </p>
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────── */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: 'var(--off)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <span className="section-label anim-fade-up">How it works</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
            <div className="anim-fade-up d-1" style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'var(--forest)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--lime)', padding: 17,
              boxShadow: '0 8px 40px rgba(22,51,0,0.22)',
            }}>{WA_SVG}</div>
            <h2 className="anim-fade-up d-2">The entire deal<br />inside WhatsApp</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <p className="anim-fade-up d-3" style={{ maxWidth: 480, color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
              No apps to download. No dashboards to learn. Every step — browse, offer, negotiate, pay, confirm — runs through simple WhatsApp commands.
            </p>
            <a href="https://wa.me/2347026131523?text=MENU" target="_blank" rel="noopener noreferrer"
              className="btn btn-forest anim-fade-up d-4">Try it now →</a>
          </div>
        </div>

        {/* Carousels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <StepCarousel
            label="For Buyers" steps={BUYER_STEPS} bg="var(--lime-lt)" dark={false}
            labelStyle={{ background: 'rgba(22,51,0,0.07)', color: 'var(--forest)', border: '1px solid rgba(22,51,0,0.14)' }}
          />
          <StepCarousel
            label="For Sellers" steps={SELLER_STEPS} bg="var(--forest)" dark={true}
            labelStyle={{ background: 'rgba(22,51,0,0.07)', color: 'var(--forest)', border: '1px solid rgba(22,51,0,0.14)' }}
          />
        </div>

        {/* Commands */}
        <CommandsSection />

      </div>
    </section>
  );
}