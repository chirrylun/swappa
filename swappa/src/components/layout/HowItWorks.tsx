'use client';
import { useState } from 'react';

/* ─── WhatsApp icon ──────────────────────────────────────── */
const WA_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '100%', height: '100%' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Step data ──────────────────────────────────────────── */
const BUYER_STEPS = [
  { num: '01', emoji: '🔍', title: 'Browse listings',    cmd: 'LISTINGS',    desc: 'Type LISTINGS to see all verified assets by category — Google Ads, Meta, gift cards and more.' },
  { num: '02', emoji: '👁',  title: 'View a listing',    cmd: 'VIEW ADS-4821',desc: 'See full details — spend history, account age, seller rating and verified status.' },
  { num: '03', emoji: '💬', title: 'Make an offer',      cmd: 'OFFER ADS-4821',desc: 'Buy at list price or negotiate. The offer engine supports counter-offers; seller has 72 hours.' },
  { num: '04', emoji: '🔒', title: 'Pay into escrow',    cmd: 'BUY ADS-4821', desc: 'Funds are held safely until you confirm access. Your money is never at risk.' },
  { num: '05', emoji: '✅', title: 'Confirm & done',     cmd: null,           desc: '48 hours to verify credentials. Confirm, seller gets paid instantly.' },
];

const SELLER_STEPS = [
  { num: '01', emoji: '📤', title: 'List your asset',    cmd: 'SELL',         desc: 'Type SELL and follow the prompts. Upload screenshots for our team to verify.' },
  { num: '02', emoji: '🛡', title: 'Get verified',       cmd: null,           desc: 'Admin review within 24 hours. Priority review available. Rejected? Fix and resubmit in minutes.' },
  { num: '03', emoji: '📩', title: 'Manage offers',      cmd: 'MY OFFERS',    desc: 'Accept, reject or counter any offer — all inside WhatsApp. Full negotiation history tracked.' },
  { num: '04', emoji: '🔑', title: 'Transfer access',   cmd: null,           desc: 'Our team confirms escrow receipt before you share credentials. Completely protected.' },
  { num: '05', emoji: '💰', title: 'Get paid',           cmd: null,           desc: 'Buyer confirms, funds release immediately to your preferred payment method.' },
];

/* ─── Commands ───────────────────────────────────────────── */
const COMMAND_GROUPS = [
  {
    label: 'Browse',
    cmds: ['MENU', 'LISTINGS', 'VIEW [ID]'],
  },
  {
    label: 'Buy',
    cmds: ['BUY [ID]', 'OFFER [ID]', 'ACCEPT [ID]', 'REJECT [ID]', 'COUNTER [ID] [amount]', 'CANCEL OFFER [ID]'],
  },
  {
    label: 'Sell',
    cmds: ['SELL', 'MY OFFERS'],
  },
  {
    label: 'Requests',
    cmds: ['REQUEST', 'MY REQUESTS', 'RESPOND [REQ-ID]', 'CANCEL REQUEST [REQ-ID]'],
  },
  {
    label: 'Settings',
    cmds: ['HELP', 'NOTIFICATIONS ON', 'NOTIFICATIONS OFF'],
  },
];

/* ─── Arrow button ───────────────────────────────────────── */
function ArrowBtn({ dir, onClick, disabled }: { dir: 'left' | 'right'; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 48, height: 48, borderRadius: '50%',
        background: disabled ? 'var(--off)' : 'var(--lime)',
        border: 'none', cursor: disabled ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.18s, transform 0.18s',
        flexShrink: 0,
        color: disabled ? 'var(--ink-3)' : 'var(--forest)',
      }}
      onMouseEnter={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.background = 'var(--lime-mid)'; }}
      onMouseLeave={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.background = 'var(--lime)'; }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'left'
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

/* ─── Step card (Wise testimonial card style) ────────────── */
function StepCard({
  step, bg, dark,
}: {
  step: typeof BUYER_STEPS[0];
  bg: string;
  dark: boolean;
}) {
  const titleC = dark ? '#fff'                   : 'var(--black)';
  const descC  = dark ? 'rgba(255,255,255,0.62)' : 'var(--ink-2)';
  const numC   = dark ? 'rgba(255,255,255,0.18)' : 'rgba(22,51,0,0.08)';
  const numTC  = dark ? 'rgba(255,255,255,0.45)' : 'rgba(22,51,0,0.35)';

  return (
    <div style={{
      background: bg,
      borderRadius: 24,
      padding: '32px 28px',
      minWidth: 260,
      flex: '0 0 260px',
      display: 'flex', flexDirection: 'column',
      gap: 16,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large ghost step number — background decoration */}
      <div style={{
        position: 'absolute', top: 16, right: 20,
        fontWeight: 900, fontSize: '4.5rem', lineHeight: 1,
        color: numTC,
        letterSpacing: '-0.05em',
        userSelect: 'none',
        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
      }}>{step.num}</div>

      {/* Emoji circle */}
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        background: numC,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem',
        flexShrink: 0,
      }}>{step.emoji}</div>

      {/* Title */}
      <div>
        <h3 style={{ color: titleC, fontWeight: 700, marginBottom: 8, fontSize: '1rem' }}>
          {step.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: descC, lineHeight: 1.65, margin: 0 }}>
          {step.desc}
        </p>
      </div>

      {/* Command pill pinned to bottom */}
      {step.cmd && (
        <div style={{ marginTop: 'auto', paddingTop: 8 }}>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.75rem', fontWeight: 700,
            background: dark ? 'rgba(159,232,112,0.15)' : 'rgba(22,51,0,0.08)',
            color: dark ? 'var(--lime)' : 'var(--forest)',
            border: dark ? '1px solid rgba(159,232,112,0.25)' : '1px solid rgba(22,51,0,0.14)',
            padding: '4px 12px', borderRadius: 7,
            display: 'inline-block',
          }}>{step.cmd}</span>
        </div>
      )}
    </div>
  );
}

/* ─── Scrollable step carousel ───────────────────────────── */
function StepCarousel({
  steps, bg, dark, label, labelStyle,
}: {
  steps: typeof BUYER_STEPS;
  bg: string;
  dark: boolean;
  label: string;
  labelStyle: React.CSSProperties;
}) {
  const [index, setIndex] = useState(0);
  const visible = 3; // how many cards to show at a time (CSS handles actual overflow)

  return (
    <div>
      {/* Row header: label + arrows — Wise "FOR PEOPLE GOING PLACES" pattern */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
        <span style={{
          fontWeight: 700, fontSize: '0.75rem',
          textTransform: 'uppercase', letterSpacing: '0.07em',
          padding: '5px 16px', borderRadius: 100,
          display: 'inline-block',
          ...labelStyle,
        }}>{label}</span>

        <div style={{ display: 'flex', gap: 8 }}>
          <ArrowBtn
            dir="left"
            disabled={index === 0}
            onClick={() => setIndex(i => Math.max(0, i - 1))}
          />
          <ArrowBtn
            dir="right"
            disabled={index >= steps.length - visible}
            onClick={() => setIndex(i => Math.min(steps.length - visible, i + 1))}
          />
        </div>
      </div>

      {/* Cards row — sliding window */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', gap: 12,
          transition: 'transform 0.38s cubic-bezier(.4,0,.2,1)',
          transform: `translateX(calc(${index} * -272px))`,
        }}>
          {steps.map(step => (
            <StepCard key={step.num} step={step} bg={bg} dark={dark} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: 'var(--off)' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ marginBottom: 64 }}>
          <span className="section-label anim-fade-up">How it works</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
            {/* Big WA icon */}
            <div className="anim-fade-up d-1" style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'var(--forest)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--lime)', padding: 19,
              boxShadow: '0 8px 40px rgba(22,51,0,0.22)',
            }}>
              {WA_SVG}
            </div>
            <h2 className="anim-fade-up d-2">
              The entire deal<br />inside WhatsApp
            </h2>
          </div>

          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
          }}>
            <p className="anim-fade-up d-3" style={{
              maxWidth: 480, color: 'var(--ink-2)',
              fontSize: '1rem', lineHeight: 1.8, margin: 0,
            }}>
              No apps to download. No dashboards to learn. Every step —
              browse, offer, negotiate, pay, confirm — runs through simple
              WhatsApp commands.
            </p>
            <a
              href="https://wa.me/2347026131523?text=MENU"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-forest anim-fade-up d-4"
            >
              Try it now →
            </a>
          </div>
        </div>

        {/* ── Two carousels ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

          {/* Buyers carousel — lime-tint cards */}
          <StepCarousel
            label="For Buyers"
            steps={BUYER_STEPS}
            bg="var(--lime-lt)"
            dark={false}
            labelStyle={{
              background: 'rgba(22,51,0,0.07)',
              color: 'var(--forest)',
              border: '1px solid rgba(22,51,0,0.14)',
            }}
          />

          {/* Sellers carousel — forest cards */}
          <StepCarousel
            label="For Sellers"
            steps={SELLER_STEPS}
            bg="var(--forest)"
            dark={true}
            labelStyle={{
              background: 'rgba(22,51,0,0.08)',
              color: 'var(--forest)',
              border: '1px solid rgba(22,51,0,0.14)',
            }}
          />
        </div>

        {/* ── Commands reference ── */}
        <div style={{ marginTop: 64 }}>
          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: 14, marginBottom: 28,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'var(--forest)', color: 'var(--lime)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 7, flexShrink: 0,
            }}>
              {WA_SVG}
            </div>
            <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--black)' }}>
              WhatsApp command reference
            </h3>
          </div>

          {/* Command groups grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 12,
          }} className="cmd-grid">
            {COMMAND_GROUPS.map(group => (
              <div key={group.label} style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '20px 18px',
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                {/* Group label */}
                <div style={{
                  fontSize: '0.68rem', fontWeight: 800,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: 'var(--forest)',
                  paddingBottom: 10,
                  borderBottom: '1.5px solid var(--lime-lt)',
                }}>
                  {group.label}
                </div>

                {/* Commands */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {group.cmds.map(cmd => (
                    <span key={cmd} style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '0.74rem', fontWeight: 600,
                      color: 'var(--ink)',
                      background: 'var(--off)',
                      border: '1px solid var(--border)',
                      padding: '5px 10px', borderRadius: 7,
                      display: 'block',
                      lineHeight: 1.4,
                    }}>{cmd}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .cmd-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cmd-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}