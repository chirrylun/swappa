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
    title: 'Receive & manage offers',
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
    <section id="how-it-works" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div className="section-label anim-fade-up" style={{ marginBottom: 16 }}>How it works</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <h2 className="anim-fade-up d-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, maxWidth: 520 }}>
              The entire deal happens<br />
              <span style={{ color: 'var(--green)' }}>inside WhatsApp</span>
            </h2>
            <p className="anim-fade-up d-200" style={{ maxWidth: 380, color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.7 }}>
              No apps to download. No dashboards to learn. Every step — browse, offer, negotiate, pay, confirm — runs through simple WhatsApp commands.
            </p>
          </div>
        </div>

        {/* Two tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

          {/* Buyer flow */}
          <FlowCard
            label="For Buyers"
            badge="badge-green"
            steps={BUYER_STEPS}
            accentColor="var(--green)"
          />

          {/* Seller flow */}
          <FlowCard
            label="For Sellers"
            badge="badge-amber"
            steps={SELLER_STEPS}
            accentColor="var(--amber)"
          />

        </div>

        {/* Commands quick ref */}
        <div style={{
          marginTop: 56, background: 'var(--off-white)',
          border: '1px solid var(--border)', borderRadius: 20,
          padding: '36px 40px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--green)">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem' }}>All WhatsApp commands</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              'MENU', 'LISTINGS', 'SELL', 'MY OFFERS', 'MY REQUESTS',
              'VIEW [ID]', 'BUY [ID]', 'OFFER [ID]',
              'ACCEPT [ID]', 'REJECT [ID]', 'COUNTER [ID] [amount]',
              'CANCEL OFFER [ID]', 'HELP', 'NOTIFICATIONS ON', 'NOTIFICATIONS OFF',
            ].map(cmd => (
              <span key={cmd} className="cmd">{cmd}</span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .flow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FlowCard({ label, badge, steps, accentColor }: {
  label: string;
  badge: string;
  steps: typeof BUYER_STEPS;
  accentColor: string;
}) {
  return (
    <div style={{
      background: 'var(--white)', border: '1px solid var(--border)',
      borderRadius: 20, padding: '32px 28px',
    }}>
      <div style={{ marginBottom: 28 }}>
        <span className={`badge ${badge}`}>{label}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {steps.map((step, i) => (
          <div key={step.num} style={{ display: 'flex', gap: 16, paddingBottom: i < steps.length - 1 ? 24 : 0 }}>
            {/* Line + dot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: accentColor === 'var(--green)' ? 'var(--green-lt)' : 'var(--amber-lt)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.68rem', fontWeight: 800, fontFamily: 'Syne',
                color: accentColor, flexShrink: 0,
              }}>
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div style={{ width: 1, flex: 1, background: 'var(--border)', marginTop: 6, marginBottom: 0 }} />
              )}
            </div>
            {/* Content */}
            <div style={{ paddingBottom: i < steps.length - 1 ? 4 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.95rem' }}>{step.title}</span>
                {step.cmd && <span className="cmd">{step.cmd}</span>}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}