'use client';

const BUYER_STEPS = [
  {
    num: '01',
    title: 'Send LISTINGS',
    desc: 'Type LISTINGS on WhatsApp to browse all verified digital assets by category.',
    cmd: 'LISTINGS',
    detail: 'Categories include Google Ads, Meta, AdSense, Play Console, social accounts, and gift cards.',
  },
  {
    num: '02',
    title: 'View a listing',
    desc: 'Tap any listing to see full details — spend history, status, seller rating, and price.',
    cmd: 'VIEW ADS-4821',
    detail: 'Every listing is admin-verified before going live. Suspended or restricted accounts are flagged.',
  },
  {
    num: '03',
    title: 'Buy or make an offer',
    desc: 'Buy at the listed price instantly, or start a negotiation with the seller.',
    cmd: 'OFFER ADS-4821',
    detail: 'The offer engine supports counter-offers. Seller has 72 hours to respond.',
  },
  {
    num: '04',
    title: 'Pay into escrow',
    desc: 'Send payment to our escrow account. Funds are held until you confirm access.',
    cmd: 'BUY ADS-4821',
    detail: 'Our team contacts you with payment details. Your money is never at risk.',
  },
  {
    num: '05',
    title: 'Confirm & complete',
    desc: 'Once you\'ve verified credentials, confirm receipt. Seller gets paid instantly.',
    cmd: null,
    detail: 'You have 48 hours to verify access. Disputes are handled by our team.',
  },
];

const SELLER_STEPS = [
  {
    num: '01',
    title: 'List your asset',
    desc: 'Type SELL and follow the prompts. Upload screenshots for verification.',
    cmd: 'SELL',
    detail: 'Supported: Google Ads, Meta, AdSense, Play Console, TikTok, IG, Twitter, Gift Cards.',
  },
  {
    num: '02',
    title: 'Get verified',
    desc: 'Our admin team reviews your screenshots within 24 hours before making it live.',
    cmd: null,
    detail: 'Priority review available. Rejected? Fix and resubmit in minutes.',
  },
  {
    num: '03',
    title: 'Manage offers',
    desc: 'Get notified of offers. Accept, reject, or counter directly in WhatsApp.',
    cmd: 'MY OFFERS',
    detail: 'ACCEPT, REJECT, or COUNTER any offer. Full negotiation history tracked.',
  },
  {
    num: '04',
    title: 'Transfer credentials',
    desc: 'Once buyer pays into escrow, share account credentials securely.',
    cmd: null,
    detail: 'Our team confirms escrow receipt before asking you to transfer.',
  },
  {
    num: '05',
    title: 'Get paid',
    desc: 'Buyer confirms access and your payment is released immediately.',
    cmd: null,
    detail: 'Platform fee deducted. Remaining balance sent via your preferred method.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: 'var(--off)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <div className="section-label anim-fade-up">How it works</div>
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
          }}>
            <h2 className="anim-fade-up d-100">
              The entire deal<br />
              <span style={{
                background: 'var(--black)', color: 'var(--lime)',
                padding: '0 8px', borderRadius: 4,
                display: 'inline-block', lineHeight: 1.1,
              }}>inside WhatsApp</span>
            </h2>
            <p className="anim-fade-up d-200" style={{
              maxWidth: 360, color: 'var(--ink-2)',
              fontSize: '1rem', lineHeight: 1.7,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              No apps to download. No dashboards to learn. Every step —
              browse, offer, negotiate, pay, confirm — runs through simple
              WhatsApp commands.
            </p>
          </div>
        </div>

        {/* Two flow cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        }} className="flow-grid">
          <FlowCard
            label="For Buyers"
            accentColor="var(--lime)"
            accentText="var(--lime-dk)"
            steps={BUYER_STEPS}
          />
          <FlowCard
            label="For Sellers"
            accentColor="var(--black)"
            accentText="var(--lime)"
            steps={SELLER_STEPS}
          />
        </div>

        {/* Commands quick ref */}
        <div style={{
          marginTop: 48,
          background: 'var(--black)',
          borderRadius: 20, padding: '36px 40px',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
          }}>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800, fontSize: '0.95rem', color: '#fff',
              textTransform: 'uppercase', letterSpacing: '-0.01em',
            }}>All WhatsApp commands</span>
            <span style={{
              background: 'var(--lime)', color: 'var(--lime-dk)',
              fontSize: '0.68rem', fontWeight: 700,
              padding: '2px 10px', borderRadius: 100,
              textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>Quick ref</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              'MENU', 'LISTINGS', 'SELL', 'MY OFFERS', 'REQUEST', 'MY REQUESTS',
              'RESPOND [REQ-ID]', 'CANCEL REQUEST [REQ-ID]',
              'VIEW [ID]', 'BUY [ID]', 'OFFER [ID]',
              'ACCEPT [ID]', 'REJECT [ID]', 'COUNTER [ID] [amount]',
              'CANCEL OFFER [ID]', 'HELP', 'NOTIFICATIONS ON', 'NOTIFICATIONS OFF',
            ].map(cmd => (
              <span key={cmd} className="cmd" style={{
                padding: '4px 12px', fontSize: '0.8rem',
              }}>{cmd}</span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) { .flow-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function FlowCard({
  label, accentColor, accentText, steps,
}: {
  label: string;
  accentColor: string;
  accentText: string;
  steps: typeof BUYER_STEPS;
}) {
  return (
    <div style={{
      background: 'var(--white)',
      border: '1.5px solid var(--border)',
      borderRadius: 20, padding: '32px 28px',
    }}>
      {/* Label */}
      <div style={{ marginBottom: 32 }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800, fontSize: '1.1rem',
          textTransform: 'uppercase', letterSpacing: '-0.01em',
          background: accentColor, color: accentText,
          padding: '4px 14px', borderRadius: 100,
          display: 'inline-block',
        }}>{label}</span>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: 'flex', gap: 20,
              paddingBottom: i < steps.length - 1 ? 28 : 0,
            }}
          >
            {/* Number column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: accentColor, color: accentText,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.72rem', fontWeight: 800,
                fontFamily: "'Syne', sans-serif",
                flexShrink: 0, letterSpacing: '-0.01em',
              }}>{step.num}</div>
              {i < steps.length - 1 && (
                <div style={{
                  width: 2, flex: 1,
                  background: 'var(--border)',
                  margin: '6px 0',
                }} />
              )}
            </div>

            {/* Content */}
            <div style={{ paddingTop: 4, paddingBottom: i < steps.length - 1 ? 4 : 0 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 6, flexWrap: 'wrap',
              }}>
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800, fontSize: '0.95rem',
                  color: 'var(--black)', letterSpacing: '-0.01em',
                }}>{step.title}</span>
                {step.cmd && <span className="cmd">{step.cmd}</span>}
              </div>
              <p style={{
                fontSize: '0.85rem', color: 'var(--ink-2)',
                lineHeight: 1.65, margin: 0,
                fontFamily: "'Space Grotesk', sans-serif",
              }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}