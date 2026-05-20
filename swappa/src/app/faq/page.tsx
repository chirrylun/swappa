'use client';
import { useState } from 'react';

/* ─── Schema (paste into layout.tsx <head>) ──────────────── */
// See faqSchema export at bottom of file

/* ─── Data ───────────────────────────────────────────────── */
const FAQ_GROUPS = [
  {
    id: 'general',
    label: 'General',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    faqs: [
      {
        q: 'What is Swappa?',
        a: 'Swappa is Nigeria\'s escrow-protected marketplace for buying and selling digital assets — entirely inside WhatsApp. We support Google Ads accounts, Facebook ad accounts, AdSense sites, Play Console accounts, gift cards, and social media accounts including Instagram, TikTok, and Twitter/X.',
      },
      {
        q: 'Do I need to download an app?',
        a: 'No. Everything happens inside WhatsApp. You browse listings, make offers, pay, and confirm access — all through simple text commands. If you can send a WhatsApp message, you can trade on Swappa.',
      },
      {
        q: 'Is Swappa available outside Nigeria?',
        a: 'We currently focus on Nigerian traders, however buyers and sellers from other African countries are welcome. Payment and escrow options may vary by region. Type HELP on WhatsApp to confirm availability in your area.',
      },
      {
        q: 'How do I get started?',
        a: 'Simply open WhatsApp and send MENU to our number. The bot will walk you through browsing listings, posting a sale, or making a request — no registration form required.',
      },
    ],
  },
  {
    id: 'buying',
    label: 'Buying',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    faqs: [
      {
        q: 'How does buying work?',
        a: 'Send LISTINGS on WhatsApp to see all available assets. Use VIEW [ID] to inspect a specific listing, then BUY [ID] to purchase. Your payment goes into escrow — held safely until you confirm you have full access to the asset. Once you confirm, the seller is paid instantly.',
      },
      {
        q: 'Can I negotiate the price?',
        a: 'Yes. Send OFFER [ID] followed by your price to make a counter-offer. The seller has 72 hours to accept, reject, or counter. You can also counter back with COUNTER [OFFER-ID] [amount]. The entire negotiation happens inside WhatsApp.',
      },
      {
        q: 'What if the asset doesn\'t match the listing?',
        a: 'You have 48 hours after receiving credentials to verify everything is as described. If something is wrong, do not confirm — contact us immediately via HELP and our admin team will investigate and mediate. Your funds remain in escrow throughout.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers and mobile payments in Nigeria. Payment details are provided when you initiate a purchase. All funds are held in escrow until the deal is confirmed by both parties.',
      },
      {
        q: 'How quickly can I complete a purchase?',
        a: 'Most deals complete within a few hours. After you pay into escrow, the seller is notified immediately. They transfer credentials, you verify access, and confirm. The whole process is designed to be fast and frictionless inside WhatsApp.',
      },
    ],
  },
  {
    id: 'selling',
    label: 'Selling',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    faqs: [
      {
        q: 'How do I list an asset for sale?',
        a: 'Send SELL on WhatsApp. The bot will guide you through the listing process step by step — asset type, price, description, and screenshots for verification. Once submitted, our admin team reviews it within 24 hours.',
      },
      {
        q: 'What happens during verification?',
        a: 'Our team checks your screenshots and listing details to confirm the asset is as described and meets our standards. Approved listings go live immediately. If something needs clarification, we\'ll message you directly — you can fix and resubmit in minutes.',
      },
      {
        q: 'When do I get paid?',
        a: 'As soon as the buyer confirms they have full access to the asset, payment is released to you instantly. You are never asked to transfer credentials before escrow is confirmed — this protects both parties.',
      },
      {
        q: 'Can I set my own price?',
        a: 'Yes, you set the listing price. Buyers can purchase at that price or send a lower offer. You choose whether to accept, reject, or counter any offer via MY OFFERS on WhatsApp.',
      },
      {
        q: 'Is there a fee for listing?',
        a: 'Listing is free. Swappa charges a small platform fee on completed transactions. The fee is deducted from the sale amount before payout. Type HELP on WhatsApp for current fee details.',
      },
    ],
  },
  {
    id: 'escrow',
    label: 'Escrow & Safety',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    faqs: [
      {
        q: 'How does escrow protect me?',
        a: 'Escrow means your money is never at risk. When you buy, payment is held by Swappa — not released to the seller — until you personally confirm you have access to the asset. If something goes wrong, the funds are still there. Sellers are equally protected: they only transfer credentials after escrow is confirmed.',
      },
      {
        q: 'Who holds the escrow?',
        a: 'Escrow is managed by trusted individuals — Koji Agudah and Nauman Chaudhary — as well as Swappa Native, our in-house escrow system. All escrow agents are vetted and accountable to Swappa\'s admin team.',
      },
      {
        q: 'What if there\'s a dispute?',
        a: 'Our admin team resolves all disputes within 48 hours. During a dispute, funds remain in escrow — neither party can access them until a resolution is reached. To open a dispute, send HELP on WhatsApp and describe the issue. We mediate based on evidence from both sides.',
      },
      {
        q: 'Can a seller scam me?',
        a: 'It is extremely difficult. Sellers are verified before their listing goes live, and they cannot receive payment until you confirm access. Furthermore, all communication is logged inside WhatsApp, giving our admin team a full record if anything is disputed.',
      },
      {
        q: 'Are listings verified before going live?',
        a: 'Yes. Every listing is reviewed by our team before it appears in the marketplace. We check that the asset exists, matches the description, and meets our quality standards. Listings that fail verification are not published.',
      },
    ],
  },
  {
    id: 'assets',
    label: 'Asset types',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    faqs: [
      {
        q: 'What types of Google Ads accounts are available?',
        a: 'We list aged accounts with verified spend history across various currencies and niches — including clean accounts and suspended accounts where noted. Each listing shows the account age, total spend, currency, and niche so you can find the right fit.',
      },
      {
        q: 'What should I look for when buying a Facebook Ad account?',
        a: 'Key details to check: spend limit, whether a Pixel is attached, Business Manager status, and account standing. All of this is visible in the listing. If you need a specific configuration, you can also post a REQUEST on WhatsApp and sellers will respond.',
      },
      {
        q: 'Do AdSense site listings include the actual website?',
        a: 'Some listings include the website and some are account-only. Each listing specifies what is included — monthly earnings, payment history, site URL if applicable, and any policy violations. Read the listing details carefully before buying.',
      },
      {
        q: 'Can I buy a monetized TikTok or Instagram account?',
        a: 'Yes. We have TikTok accounts with LIVE access and monetization enabled, and Instagram accounts with monetization-eligible follower counts. Each listing shows follower count, niche, monetization status, and account age.',
      },
      {
        q: 'What gift card brands do you carry?',
        a: 'We regularly carry Amazon, iTunes, Google Play, and Steam gift cards, among others. Cards are sold at a discount to face value. Listings show the brand, face value, region, and currency. Send LISTINGS on WhatsApp to see current availability.',
      },
    ],
  },
];

/* ─── WA icon ────────────────────────────────────────────── */
const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CHEVRON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

/* ─── Component ──────────────────────────────────────────── */
export default function FAQPage() {
  const [activeGroup, setActiveGroup] = useState('general');
  const [openIdx, setOpenIdx]         = useState<number | null>(null);

  const group = FAQ_GROUPS.find(g => g.id === activeGroup)!;

  const handleGroup = (id: string) => {
    setActiveGroup(id);
    setOpenIdx(null);
  };

  const handleFaq = (i: number) =>
    setOpenIdx(prev => (prev === i ? null : i));

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        background: 'var(--forest)',
        padding: '96px 0 72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative large text */}
        <div aria-hidden style={{
          position: 'absolute', bottom: -40, right: -20,
          fontWeight: 900, fontSize: '22rem', lineHeight: 1,
          color: 'rgba(255,255,255,0.03)',
          letterSpacing: '-0.06em',
          userSelect: 'none', pointerEvents: 'none',
          fontFamily: 'var(--font-display), system-ui, sans-serif',
        }}>FAQ</div>

        <div className="container" style={{ position: 'relative' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.68rem', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: 'var(--lime)', marginBottom: 20,
          }}>Help centre</span>

          <h1 style={{
            color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900, letterSpacing: '-0.04em',
            lineHeight: 1.05, marginBottom: 20, maxWidth: 640,
          }}>
            Frequently asked<br />questions
          </h1>

          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)',
            maxWidth: 480, lineHeight: 1.8, marginBottom: 36,
          }}>
            Everything you need to know about buying, selling, and escrow on
            Swappa. If you can't find your answer here, our team is one
            WhatsApp message away.
          </p>

          <a
            href="https://wa.me/2348143653652?text=HELP"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--lime)', color: 'var(--forest)',
              fontWeight: 700, fontSize: '0.95rem',
              padding: '13px 28px', borderRadius: 100,
              textDecoration: 'none',
              transition: 'background 0.18s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--lime-mid)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--lime)'}
          >
            {WA_ICON} Ask on WhatsApp
          </a>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ background: 'var(--off)', padding: '64px 0 96px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: 48,
            alignItems: 'start',
          }} className="faq-layout">

            {/* ── Sidebar ── */}
            <div style={{
              position: 'sticky', top: 88,
              background: 'var(--white)',
              border: '1.5px solid var(--border)',
              borderRadius: 20,
              padding: 8,
              boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
            }} className="faq-sidebar">
              {FAQ_GROUPS.map(g => {
                const isActive = g.id === activeGroup;
                return (
                  <button
                    key={g.id}
                    onClick={() => handleGroup(g.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      width: '100%', padding: '11px 14px', borderRadius: 12,
                      border: 'none', cursor: 'pointer', textAlign: 'left',
                      background: isActive ? 'var(--forest)' : 'transparent',
                      color: isActive ? 'var(--lime)' : 'var(--ink-2)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-display), system-ui, sans-serif',
                      transition: 'all 0.18s',
                      marginBottom: 2,
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = 'var(--off)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--black)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                        (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)';
                      }
                    }}
                  >
                    <span style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isActive ? 'var(--lime)' : 'var(--ink-3)',
                      flexShrink: 0,
                    }}>{g.icon}</span>
                    {g.label}
                    {/* Question count pill */}
                    <span style={{
                      marginLeft: 'auto',
                      fontSize: '0.68rem', fontWeight: 700,
                      background: isActive ? 'rgba(159,232,112,0.18)' : 'var(--off)',
                      color: isActive ? 'var(--lime)' : 'var(--ink-3)',
                      border: `1px solid ${isActive ? 'rgba(159,232,112,0.3)' : 'var(--border)'}`,
                      padding: '2px 8px', borderRadius: 100,
                      transition: 'all 0.18s',
                      flexShrink: 0,
                    }}>{g.faqs.length}</span>
                  </button>
                );
              })}

              {/* CTA at bottom of sidebar */}
              <div style={{
                marginTop: 16, padding: '16px 14px',
                background: 'var(--lime-lt)',
                border: '1px solid rgba(22,51,0,0.1)',
                borderRadius: 14,
              }}>
                <p style={{
                  fontSize: '0.78rem', color: 'var(--forest)',
                  fontWeight: 600, lineHeight: 1.55, marginBottom: 10,
                }}>
                  Can't find an answer?
                </p>
                <a
                  href="https://wa.me/2348143653652?text=HELP"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 7,
                    background: 'var(--forest)', color: 'var(--lime)',
                    fontWeight: 700, fontSize: '0.78rem',
                    padding: '9px 14px', borderRadius: 100,
                    textDecoration: 'none', whiteSpace: 'nowrap',
                    transition: 'background 0.18s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--forest-lt)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--forest)'}
                >
                  {WA_ICON} Message us
                </a>
              </div>
            </div>

            {/* ── Accordion panel ── */}
            <div>
              {/* Group heading */}
              <div style={{ marginBottom: 24 }}>
                <h2 style={{
                  fontSize: '1.5rem', fontWeight: 800,
                  color: 'var(--black)', letterSpacing: '-0.025em',
                  marginBottom: 6,
                }}>{group.label}</h2>
                <p style={{
                  fontSize: '0.85rem', color: 'var(--ink-3)', margin: 0,
                }}>
                  {group.faqs.length} question{group.faqs.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* Accordion */}
              <div style={{
                background: 'var(--white)',
                border: '1.5px solid var(--border)',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}>
                {group.faqs.map((faq, i) => {
                  const isOpen  = openIdx === i;
                  const isLast  = i === group.faqs.length - 1;

                  return (
                    <div key={i}>
                      {/* Trigger row */}
                      <button
                        onClick={() => handleFaq(i)}
                        style={{
                          width: '100%', display: 'flex',
                          alignItems: 'center', justifyContent: 'space-between',
                          gap: 16, padding: '22px 24px',
                          border: 'none',
                          borderBottom: (!isLast || isOpen) ? '1px solid var(--border)' : 'none',
                          background: isOpen ? 'var(--off)' : 'transparent',
                          cursor: 'pointer', textAlign: 'left',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => {
                          if (!isOpen)
                            (e.currentTarget as HTMLElement).style.background = 'var(--off)';
                        }}
                        onMouseLeave={e => {
                          if (!isOpen)
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                        }}
                      >
                        {/* Q number + text */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, minWidth: 0 }}>
                          <span style={{
                            flexShrink: 0,
                            width: 26, height: 26, borderRadius: 7,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.68rem', fontWeight: 800,
                            fontFamily: 'var(--font-display), system-ui, sans-serif',
                            background: isOpen ? 'var(--forest)' : 'var(--off)',
                            color: isOpen ? 'var(--lime)' : 'var(--ink-3)',
                            border: `1.5px solid ${isOpen ? 'transparent' : 'var(--border)'}`,
                            transition: 'all 0.18s',
                            marginTop: 1,
                          }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span style={{
                            fontSize: '0.97rem', fontWeight: isOpen ? 700 : 600,
                            color: isOpen ? 'var(--black)' : 'var(--ink)',
                            lineHeight: 1.45,
                            transition: 'color 0.18s',
                          }}>{faq.q}</span>
                        </div>

                        {/* Chevron */}
                        <span style={{
                          flexShrink: 0,
                          width: 30, height: 30, borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: isOpen ? 'var(--forest)' : 'var(--off)',
                          border: `1px solid ${isOpen ? 'transparent' : 'var(--border)'}`,
                          color: isOpen ? 'var(--lime)' : 'var(--ink-3)',
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'all 0.22s',
                        }}>{CHEVRON}</span>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div style={{
                          display: 'flex', alignItems: 'stretch', gap: 0,
                          background: 'var(--off)',
                          borderBottom: !isLast ? '1px solid var(--border)' : 'none',
                          animation: 'faq-fade 0.22s ease both',
                        }}>
                          {/* Accent stripe */}
                          <div style={{ width: 3, flexShrink: 0, background: 'var(--forest)' }} />
                          <p style={{
                            padding: '18px 24px 22px',
                            fontSize: '0.925rem', color: 'var(--ink-2)',
                            lineHeight: 1.82, margin: 0,
                          }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Still need help? */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 16,
                marginTop: 24, padding: '20px 24px',
                background: 'var(--white)',
                border: '1.5px solid var(--border)',
                borderRadius: 16,
              }}>
                <div>
                  <p style={{
                    fontWeight: 700, fontSize: '0.9rem',
                    color: 'var(--black)', marginBottom: 3,
                  }}>Still have questions?</p>
                  <p style={{
                    fontSize: '0.8rem', color: 'var(--ink-3)',
                    margin: 0, lineHeight: 1.6,
                  }}>
                    Our team responds in under a minute on WhatsApp — any time, any day.
                  </p>
                </div>
                <a
                  href="https://wa.me/2348143653652?text=HELP"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'var(--forest)', color: 'var(--lime)',
                    fontWeight: 700, fontSize: '0.875rem',
                    padding: '12px 24px', borderRadius: 100,
                    textDecoration: 'none', whiteSpace: 'nowrap',
                    transition: 'background 0.18s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--forest-lt)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--forest)'}
                >
                  {WA_ICON} Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes faq-fade {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 860px) {
          .faq-layout { grid-template-columns: 1fr !important; }
          .faq-sidebar { position: static !important; display: flex; flex-wrap: wrap; gap: 6px; padding: 12px !important; }
          .faq-sidebar button { width: auto !important; flex: 1; min-width: 120px; }
          .faq-sidebar > div:last-child { display: none; }
        }
        @media (max-width: 480px) {
          .faq-sidebar button { font-size: 0.78rem !important; padding: 9px 10px !important; }
        }
      `}</style>
    </>
  );
}