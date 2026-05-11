'use client';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--white)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 68,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        opacity: 0.5,
      }} />

      {/* Green accent blob top-right */}
      <div style={{
        position: 'absolute', top: '8%', right: '-5%', width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* Left — Text */}
          <div>
            <div className="anim-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span className="badge badge-green">
                <span className="live-dot" style={{ marginRight: 6 }} />
                WhatsApp-native marketplace
              </span>
            </div>

            <h1 className="anim-fade-up d-100" style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.2rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              marginBottom: 24,
            }}>
              Buy & sell<br />
              <span style={{ color: 'var(--green)' }}>digital assets</span><br />
              on WhatsApp
            </h1>

            <p className="anim-fade-up d-200" style={{
              fontSize: '1.15rem',
              color: 'var(--ink-2)',
              maxWidth: 460,
              lineHeight: 1.7,
              marginBottom: 36,
              fontWeight: 300,
            }}>
              Trade Google Ads accounts, Meta pages, AdSense sites, gift cards, and social media accounts — all inside WhatsApp, protected by escrow.
            </p>

            <div className="anim-fade-up d-300" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <a
                href="https://wa.me/234XXXXXXXXXX?text=MENU"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '15px 32px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Open WhatsApp
              </a>
              <a href="#how-it-works" className="btn-ghost" style={{ fontSize: '1rem' }}>
                See how it works →
              </a>
            </div>

            {/* Trust badges */}
            <div className="anim-fade-up d-400" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[
                { icon: '🔒', text: 'Escrow protected' },
                { icon: '✅', text: 'Verified listings' },
                { icon: '⚡', text: 'Instant messaging' },
              ].map(t => (
                <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--ink-2)' }}>
                  <span>{t.icon}</span>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — WhatsApp chat mockup */}
          <div className="anim-fade-up d-300" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="anim-float" style={{
              width: '100%', maxWidth: 380,
              background: 'var(--off-white)',
              borderRadius: 24,
              border: '1px solid var(--border)',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.10)',
            }}>
              {/* Chat header */}
              <div style={{
                background: 'var(--green)', padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem',
                }}>🛍️</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', fontFamily: 'Syne' }}>Swappa Market</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>
                    <span style={{ width: 6, height: 6, background: '#a7f3d0', borderRadius: '50%', display: 'inline-block', marginRight: 4 }} />
                    Online
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 12, background: '#e5ddd5' }}>

                {/* Bot message */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <div className="wa-bubble-in" style={{
                    background: '#fff', borderRadius: '12px 12px 12px 2px',
                    padding: '12px 14px', maxWidth: 280, fontSize: '0.875rem',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  }}>
                    <div style={{ fontWeight: 600, marginBottom: 8 }}>👋 Welcome to Swappa!</div>
                    <div style={{ color: 'var(--ink-2)', marginBottom: 8 }}>What would you like to do?</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {['🛒 Browse listings', '💰 Sell an account', '📋 My offers'].map(opt => (
                        <div key={opt} style={{
                          background: '#f0f0f0', borderRadius: 8,
                          padding: '6px 10px', fontSize: '0.82rem', fontWeight: 500,
                        }}>{opt}</div>
                      ))}
                    </div>
                    <div className="wa-time">09:41 AM ✓✓</div>
                  </div>
                </div>

                {/* User reply */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div className="wa-bubble" style={{ fontSize: '0.875rem' }}>
                    <span className="cmd">LISTINGS</span>
                    <div className="wa-time">09:41 AM ✓✓</div>
                  </div>
                </div>

                {/* Bot: listing result */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{
                    background: '#fff', borderRadius: '12px 12px 12px 2px',
                    padding: '12px 14px', maxWidth: 290, fontSize: '0.875rem',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  }}>
                    <div style={{ fontWeight: 600, marginBottom: 6 }}>🎯 Google Ads Account</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--ink-2)', marginBottom: 8 }}>
                      2yr old · $4,200 spent · Nigeria · ✅ Clean
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontWeight: 700, color: 'var(--green)', fontSize: '0.95rem' }}>₦185,000</div>
                      <div className="cmd" style={{ fontSize: '0.72rem' }}>VIEW ADS-4821</div>
                    </div>
                    <div className="wa-time">09:41 AM ✓✓</div>
                  </div>
                </div>

                {/* User offer */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div className="wa-bubble" style={{ fontSize: '0.875rem' }}>
                    <span className="cmd">OFFER ADS-4821</span>
                    <div className="wa-time">09:42 AM ✓✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
        background: 'linear-gradient(transparent, var(--white))',
        zIndex: 1,
      }} />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}