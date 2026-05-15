'use client';
import { useState } from 'react';

/* ─── WhatsApp icon ──────────────────────────────────────── */
const WA_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '100%', height: '100%' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Icons ──────────────────────────────────────────────── */
const ICONS = {
  search:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  search16:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  eye:     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  message: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  lock:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  lock16:  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  check:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  upload:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>,
  shield:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  shield16:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  inbox:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>,
  inbox16: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>,
  key:     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
  dollar:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  dollar16:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  chevron: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  info:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  wa16:    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
};

/* ─── Data ───────────────────────────────────────────────── */
const TABS = [
  {
    id: 'buyers', label: 'For Buyers', dark: false,
    steps: [
      { num: '01', icon: ICONS.search,  title: 'Browse listings', cmd: 'LISTINGS',       desc: 'Type LISTINGS to see all verified assets by category — Google Ads, Meta, gift cards and more.' },
      { num: '02', icon: ICONS.eye,     title: 'View a listing',  cmd: 'VIEW ADS-4821',  desc: 'See full details — spend history, account age, seller rating and verified status.' },
      { num: '03', icon: ICONS.message, title: 'Make an offer',   cmd: 'OFFER ADS-4821', desc: 'Buy at list price or negotiate. The offer engine supports counter-offers; seller has 72 hours.' },
      { num: '04', icon: ICONS.lock,    title: 'Pay into escrow', cmd: 'BUY ADS-4821',   desc: 'Funds are held safely until you confirm access. Your money is never at risk.' },
      { num: '05', icon: ICONS.check,   title: 'Confirm & done',  cmd: null,             desc: '48 hours to verify credentials. Confirm, and the seller gets paid instantly.' },
    ],
  },
  {
    id: 'sellers', label: 'For Sellers', dark: true,
    steps: [
      { num: '01', icon: ICONS.upload, title: 'List your asset', cmd: 'SELL',      desc: 'Type SELL and follow the prompts. Upload screenshots for our team to verify.' },
      { num: '02', icon: ICONS.shield, title: 'Get verified',    cmd: null,        desc: 'Admin review within 24 hours. Priority review available. Rejected? Fix and resubmit in minutes.' },
      { num: '03', icon: ICONS.inbox,  title: 'Manage offers',   cmd: 'MY OFFERS', desc: 'Accept, reject or counter any offer — all inside WhatsApp. Full negotiation history tracked.' },
      { num: '04', icon: ICONS.key,    title: 'Transfer access', cmd: null,        desc: 'Our team confirms escrow receipt before you share credentials. Completely protected.' },
      { num: '05', icon: ICONS.dollar, title: 'Get paid',        cmd: null,        desc: 'Buyer confirms, funds release immediately to your preferred payment method.' },
    ],
  },
];

const COMMAND_GROUPS = [
  {
    id: 'browse', label: 'Browse', icon: ICONS.search16,
    commands: [
      { cmd: 'MENU',      example: 'MENU',          desc: 'Opens the main menu with all available options.' },
      { cmd: 'LISTINGS',  example: 'LISTINGS',       desc: 'Shows all active listings across every category.' },
      { cmd: 'VIEW [ID]', example: 'VIEW ADS-4821',  desc: 'View full details for a specific listing. Replace [ID] with the listing code, e.g. ADS-4821.' },
    ],
  },
  {
    id: 'buy', label: 'Buy', icon: ICONS.lock16,
    commands: [
      { cmd: 'BUY [ID]',           example: 'BUY ADS-4821',            desc: 'Start a purchase. Funds go into escrow until you confirm access.' },
      { cmd: 'OFFER [ID]',         example: 'OFFER ADS-4821',          desc: 'Make an offer below the listed price. Seller has 72 hours to respond.' },
      { cmd: 'ACCEPT [ID]',        example: 'ACCEPT OFR-109',          desc: 'Accept a counter-offer from the seller.' },
      { cmd: 'REJECT [ID]',        example: 'REJECT OFR-109',          desc: 'Decline a counter-offer without obligation.' },
      { cmd: 'COUNTER [ID] [amt]', example: 'COUNTER OFR-109 160000',  desc: 'Send back a counter with your price. Replace [amt] with your offer amount.' },
      { cmd: 'CANCEL OFFER [ID]',  example: 'CANCEL OFFER OFR-109',    desc: 'Withdraw your offer before the seller responds.' },
    ],
  },
  {
    id: 'sell', label: 'Sell', icon: ICONS.dollar16,
    commands: [
      { cmd: 'SELL',      example: 'SELL',       desc: 'Start the listing flow — guided step by step to submit your asset.' },
      { cmd: 'MY OFFERS', example: 'MY OFFERS',  desc: 'See all incoming offers on your active listings.' },
    ],
  },
  {
    id: 'requests', label: 'Requests', icon: ICONS.inbox16,
    commands: [
      { cmd: 'REQUEST',                 example: 'REQUEST',                    desc: "Post a public request for an asset you're looking for. Sellers can respond." },
      { cmd: 'MY REQUESTS',             example: 'MY REQUESTS',                desc: "View all requests you've posted and their current status." },
      { cmd: 'RESPOND [REQ-ID]',        example: 'RESPOND REQ-047',            desc: "Reply to a buyer's request as a seller. Replace [REQ-ID] with the request code." },
      { cmd: 'CANCEL REQUEST [REQ-ID]', example: 'CANCEL REQUEST REQ-047',     desc: 'Remove a request you posted.' },
    ],
  },
  {
    id: 'settings', label: 'Settings', icon: ICONS.shield16,
    commands: [
      { cmd: 'HELP',              example: 'HELP',               desc: 'Get the full command list sent directly in WhatsApp.' },
      { cmd: 'NOTIFICATIONS ON',  example: 'NOTIFICATIONS ON',   desc: 'Turn on alerts for new listings, offers, and status updates.' },
      { cmd: 'NOTIFICATIONS OFF', example: 'NOTIFICATIONS OFF',  desc: 'Pause all notifications. You can still trade normally.' },
    ],
  },
];

/* ─── Main component ─────────────────────────────────────── */
export default function HowItWorks() {
  const [activeTab,  setActiveTab]  = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [cmdGroup,   setCmdGroup]   = useState('browse');
  const [openCmd,    setOpenCmd]    = useState<string | null>(null);

  const tab  = TABS[activeTab];
  const step = tab.steps[activeStep];
  const dark = tab.dark;

  const handleTabChange = (i: number) => { setActiveTab(i); setActiveStep(0); };
  const handleCmdGroup  = (id: string) => { setCmdGroup(id); setOpenCmd(null); };
  const handleCmd       = (cmd: string) => setOpenCmd(prev => prev === cmd ? null : cmd);

  const activeCmdGroup = COMMAND_GROUPS.find(g => g.id === cmdGroup)!;

  // Per-theme tokens
  const panelBg       = dark ? 'var(--forest)'         : 'var(--lime-lt)';
  const listBg        = dark ? '#0f2600'                : '#dff5c8';
  const listBorder    = dark ? 'rgba(255,255,255,0.07)' : 'rgba(22,51,0,0.1)';
  const titleC        = dark ? '#fff'                   : 'var(--black)';
  const descC         = dark ? 'rgba(255,255,255,0.65)' : 'var(--ink-2)';
  const iconBg        = dark ? 'rgba(159,232,112,0.12)' : 'rgba(22,51,0,0.07)';
  const iconC         = dark ? 'var(--lime)'            : 'var(--forest)';
  const cmdBg         = dark ? 'rgba(159,232,112,0.10)' : 'rgba(22,51,0,0.06)';
  const cmdBorder     = dark ? 'rgba(159,232,112,0.25)' : 'rgba(22,51,0,0.15)';
  const numC          = dark ? 'rgba(255,255,255,0.05)' : 'rgba(22,51,0,0.05)';
  const dotActive     = dark ? 'var(--lime)'            : 'var(--forest)';
  const dotIdle       = dark ? 'rgba(255,255,255,0.2)'  : 'rgba(22,51,0,0.18)';
  const stepActiveRow = dark ? 'rgba(159,232,112,0.09)' : 'rgba(22,51,0,0.07)';
  const stepNumActive = dark ? 'var(--lime)'            : 'var(--forest)';
  const stepNumActC   = dark ? 'var(--forest)'          : '#fff';
  const stepNumIdleC  = dark ? 'rgba(255,255,255,0.28)' : 'var(--ink-3)';
  const stepNumIdleBd = dark ? 'rgba(255,255,255,0.1)'  : 'var(--border-dk)';
  const stepTitleActC = dark ? '#fff'                   : 'var(--black)';
  const stepTitleIdlC = dark ? 'rgba(255,255,255,0.35)' : 'var(--ink-3)';

  return (
    <section id="how-it-works" className="section" style={{ background: 'var(--off)' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ marginBottom: 52 }}>
          <span className="section-label anim-fade-up">How it works</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 18 }}>
            <div className="anim-fade-up d-1" style={{
              width: 60, height: 60, borderRadius: '50%',
              background: 'var(--forest)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--lime)', padding: 14,
              boxShadow: '0 6px 28px rgba(22,51,0,0.2)',
            }}>{WA_SVG}</div>
            <h2 className="anim-fade-up d-2" style={{ margin: 0 }}>
              The entire deal<br />inside WhatsApp
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <p className="anim-fade-up d-3" style={{ maxWidth: 460, color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
              No apps to download. No dashboards to learn. Every step — browse, offer, negotiate, pay, confirm — runs through simple WhatsApp commands.
            </p>
            <a href="https://wa.me/2348143653652?text=MENU" target="_blank" rel="noopener noreferrer"
              className="btn btn-forest anim-fade-up d-4">Try it now →</a>
          </div>
        </div>

        {/* ── Tab switcher ── */}
        <div style={{
          display: 'inline-flex',
          background: 'var(--surface)',
          borderRadius: 100, padding: 4, marginBottom: 28, gap: 4,
        }}>
          {TABS.map((t, i) => (
            <button key={t.id} onClick={() => handleTabChange(i)} style={{
              padding: '10px 28px', borderRadius: 100, border: 'none',
              cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem',
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              letterSpacing: '-0.01em', transition: 'all 0.22s',
              background: activeTab === i ? (i === 1 ? 'var(--forest)' : 'var(--lime-lt)') : 'transparent',
              color: activeTab === i ? (i === 1 ? 'var(--lime)' : 'var(--forest)') : 'var(--ink-3)',
              boxShadow: activeTab === i ? '0 2px 8px rgba(0,0,0,0.12)' : 'none',
            }}>{t.label}</button>
          ))}
        </div>

        {/* ── Main panel ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
          minHeight: 400,
        }} className="swp-hiw-grid">

          {/* Left: step list */}
          <div style={{
            background: listBg,
            borderRight: `1px solid ${listBorder}`,
            padding: '20px 12px',
            display: 'flex', flexDirection: 'column', gap: 2,
            transition: 'background 0.3s',
          }}>
            {tab.steps.map((s, i) => {
              const isActive = i === activeStep;
              return (
                <button key={s.num} onClick={() => setActiveStep(i)} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '11px 12px', borderRadius: 12,
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  transition: 'background 0.18s',
                  background: isActive ? stepActiveRow : 'transparent',
                }}>
                  <span style={{
                    width: 26, height: 26, borderRadius: 7,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, fontSize: '0.68rem', fontWeight: 800,
                    fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                    background: isActive ? stepNumActive : 'transparent',
                    color: isActive ? stepNumActC : stepNumIdleC,
                    border: isActive ? 'none' : `1.5px solid ${stepNumIdleBd}`,
                    transition: 'all 0.18s',
                  }}>{s.num}</span>
                  <span style={{
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? stepTitleActC : stepTitleIdlC,
                    transition: 'color 0.18s', lineHeight: 1.3,
                  }}>{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right: step detail */}
          <div style={{
            background: panelBg,
            padding: '44px 48px',
            position: 'relative', overflow: 'hidden',
            transition: 'background 0.3s',
          }}>
            <div style={{
              position: 'absolute', bottom: -24, right: 32,
              fontWeight: 900, fontSize: '11rem', lineHeight: 1,
              color: numC, letterSpacing: '-0.06em',
              userSelect: 'none', pointerEvents: 'none',
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            }}>{step.num}</div>

            <div key={`${activeTab}-${activeStep}`} style={{ animation: 'swp-fade 0.28s ease both' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: iconBg, color: iconC,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 26,
              }}>{step.icon}</div>

              <h3 style={{
                color: titleC, fontSize: '1.65rem', fontWeight: 800,
                letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.15,
              }}>{step.title}</h3>

              <p style={{
                fontSize: '0.97rem', color: descC,
                lineHeight: 1.78, maxWidth: 460, marginBottom: 30,
              }}>{step.desc}</p>

              {step.cmd && (
                <span style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.82rem', fontWeight: 700,
                  background: cmdBg, color: iconC,
                  border: `1px solid ${cmdBorder}`,
                  padding: '7px 18px', borderRadius: 9,
                  display: 'inline-block',
                }}>{step.cmd}</span>
              )}
            </div>

            <div style={{
              position: 'absolute', bottom: 28, right: 44,
              display: 'flex', gap: 6, alignItems: 'center',
            }}>
              {tab.steps.map((_, i) => (
                <button key={i} onClick={() => setActiveStep(i)} style={{
                  width: i === activeStep ? 22 : 6, height: 6, borderRadius: 3,
                  background: i === activeStep ? dotActive : dotIdle,
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.25s, background 0.25s',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            COMMANDS — same layout, polished visuals
            ══════════════════════════════════════════════ */}
        <div style={{ marginTop: 72 }}>

          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap',
            gap: 16, marginBottom: 28,
          }}>
            <div>
              <span style={{
                display: 'block', fontSize: '0.72rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                color: 'var(--ink-3)', marginBottom: 6,
              }}>Quick reference</span>
              <h3 style={{
                fontWeight: 800, fontSize: '1.35rem',
                color: 'var(--black)', letterSpacing: '-0.02em', margin: 0,
              }}>Every command, at a glance</h3>
            </div>
            <a
              href="https://wa.me/2348143653652?text=HELP"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--forest)', color: 'var(--lime)',
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontWeight: 700, fontSize: '0.85rem',
                padding: '11px 22px', borderRadius: 100,
                textDecoration: 'none', whiteSpace: 'nowrap',
                transition: 'background 0.18s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--forest-lt)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--forest)'}
            >
              {ICONS.wa16} Type HELP on WhatsApp
            </a>
          </div>

          {/* Group tab pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
            {COMMAND_GROUPS.map(g => {
              const isActive = cmdGroup === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => handleCmdGroup(g.id)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    padding: '9px 20px', borderRadius: 100,
                    border: `1.5px solid ${isActive ? 'var(--forest)' : 'var(--border)'}`,
                    background: isActive ? 'var(--forest)' : 'var(--white)',
                    color: isActive ? 'var(--lime)' : 'var(--ink-2)',
                    fontSize: '0.84rem', fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer', transition: 'all 0.18s',
                    fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                    boxShadow: isActive ? '0 2px 12px rgba(22,51,0,0.15)' : 'none',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'var(--border-dk)';
                      el.style.color = 'var(--ink)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'var(--border)';
                      el.style.color = 'var(--ink-2)';
                    }
                  }}
                >
                  <span style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: isActive ? 'var(--lime)' : 'var(--ink-3)',
                    flexShrink: 0,
                  }}>{g.icon}</span>
                  {g.label}
                </button>
              );
            })}
          </div>

          {/* ── Accordion — modernized ── */}
          <div style={{
            background: 'var(--white)',
            border: '1.5px solid var(--border)',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
          }}>
            {activeCmdGroup.commands.map((c, i) => {
              const isOpen = openCmd === c.cmd;
              const isLast = i === activeCmdGroup.commands.length - 1;

              return (
                <div key={c.cmd}>
                  {/* Row trigger */}
                  <button
                    onClick={() => handleCmd(c.cmd)}
                    style={{
                      width: '100%',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 20px', height: 62,
                      border: 'none',
                      borderBottom: (!isLast || isOpen) ? '1px solid var(--border)' : 'none',
                      background: isOpen ? 'var(--off)' : 'transparent',
                      cursor: 'pointer', textAlign: 'left',
                      transition: 'background 0.15s', gap: 16,
                    }}
                    onMouseEnter={e => {
                      if (!isOpen) (e.currentTarget as HTMLElement).style.background = 'var(--off)';
                    }}
                    onMouseLeave={e => {
                      if (!isOpen) (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                      {/* Command pill — flips to forest/lime when open */}
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '0.82rem', fontWeight: 700,
                        letterSpacing: '0.01em',
                        background: isOpen ? 'var(--forest)' : 'var(--off)',
                        color: isOpen ? 'var(--lime)' : 'var(--forest)',
                        border: `1.5px solid ${isOpen ? 'transparent' : 'rgba(22,51,0,0.12)'}`,
                        padding: '5px 14px', borderRadius: 8,
                        display: 'inline-block', flexShrink: 0,
                        transition: 'all 0.18s', whiteSpace: 'nowrap',
                      }}>{c.cmd}</span>

                      {/* One-line preview when collapsed */}
                      {!isOpen && (
                        <span style={{
                          fontSize: '0.82rem', color: 'var(--ink-3)',
                          fontWeight: 400, overflow: 'hidden',
                          textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}>
                          {c.desc.split('.')[0]}.
                        </span>
                      )}
                    </div>

                    {/* Chevron circle */}
                    <span style={{
                      flexShrink: 0,
                      width: 28, height: 28, borderRadius: '50%',
                      background: isOpen ? 'var(--forest)' : 'var(--off)',
                      border: `1px solid ${isOpen ? 'transparent' : 'var(--border)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isOpen ? 'var(--lime)' : 'var(--ink-3)',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'all 0.22s',
                    }}>{ICONS.chevron}</span>
                  </button>

                  {/* Expanded body */}
                  {isOpen && (
                    <div style={{
                      display: 'flex', gap: 0, alignItems: 'stretch',
                      borderBottom: !isLast ? '1px solid var(--border)' : 'none',
                      background: 'var(--off)',
                      animation: 'swp-fade 0.2s ease both',
                    }}>
                      {/* Left accent stripe */}
                      <div style={{
                        width: 3, flexShrink: 0,
                        background: 'var(--forest)',
                      }} />
                      <div style={{ padding: '16px 20px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <p style={{
                          fontSize: '0.875rem', color: 'var(--ink-2)',
                          lineHeight: 1.75, margin: 0,
                        }}>{c.desc}</p>
                        {/* Example */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{
                            fontSize: '0.68rem', fontWeight: 700,
                            textTransform: 'uppercase', letterSpacing: '0.07em',
                            color: 'var(--ink-3)',
                            flexShrink: 0,
                          }}>Example</span>
                          <span style={{
                            fontFamily: "'Courier New', monospace",
                            fontSize: '0.82rem', fontWeight: 700,
                            background: 'var(--forest)', color: 'var(--lime)',
                            padding: '4px 14px', borderRadius: 7,
                            display: 'inline-block', letterSpacing: '0.01em',
                          }}>{c.example}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Hint */}
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 10,
            marginTop: 12, padding: '11px 18px',
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: 12,
          }}>
            <span style={{ color: 'var(--ink-3)', flexShrink: 0, marginTop: 1, display: 'flex' }}>
              {ICONS.info}
            </span>
            <p style={{ fontSize: '0.78rem', color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>
              Replace{' '}
              <code style={{ fontFamily: 'monospace', fontSize: '0.78rem', background: 'var(--off)', padding: '1px 6px', borderRadius: 4, border: '1px solid var(--border)' }}>[ID]</code>
              {' '}and{' '}
              <code style={{ fontFamily: 'monospace', fontSize: '0.78rem', background: 'var(--off)', padding: '1px 6px', borderRadius: 4, border: '1px solid var(--border)' }}>[amt]</code>
              {' '}with the actual listing ID or amount — e.g.{' '}
              <code style={{ fontFamily: 'monospace', fontSize: '0.78rem', background: 'var(--lime-lt)', color: 'var(--forest)', padding: '1px 6px', borderRadius: 4, border: '1px solid rgba(22,51,0,0.12)' }}>ADS-4821</code>
              {' '}or{' '}
              <code style={{ fontFamily: 'monospace', fontSize: '0.78rem', background: 'var(--lime-lt)', color: 'var(--forest)', padding: '1px 6px', borderRadius: 4, border: '1px solid rgba(22,51,0,0.12)' }}>50000</code>.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes swp-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 860px) {
          .swp-hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}