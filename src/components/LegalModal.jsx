import React from 'react';

export function LegalModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 2000 }}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '32px',
          maxWidth: '640px',
          border: 'var(--border-subtle)',
          position: 'relative'
        }}
      >
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', fontWeight: '900', color: '#888' }}
        >
          ✕
        </button>

        <div style={{ marginBottom: '20px' }}>
          <span className="badge-neo badge-neo-purple" style={{ marginBottom: '8px' }}>LEGAL TERMS & SERVICES</span>
          <h2 style={{ fontSize: '1.6rem', color: '#1A1A1A' }}>Legal Disclaimers & Terms of Service</h2>
        </div>

        <div style={{ fontSize: '0.92rem', color: '#444444', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{ padding: '16px', background: '#FFF1F2', borderLeft: '4px solid var(--accent-orange)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.02rem', color: 'var(--accent-orange)', marginBottom: '4px' }}>
              ℹ️ Informational & Referral Platform Notice
            </h3>
            <p style={{ color: '#1A1A1A', fontSize: '0.88rem' }}>
              Gadget Life operates strictly as an independent consumer technology review and referral platform. Disclaimers apply regarding vendor conduct and post-purchase activities across Nigeria.
            </p>
          </div>

          <div style={{ padding: '16px', background: '#FEF3C7', borderLeft: '4px solid #B45309', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.02rem', color: '#B45309', marginBottom: '4px' }}>
              🏢 Independent Third-Party Vendors & Post-Purchase Conduct
            </h3>
            <p style={{ color: '#1A1A1A', fontSize: '0.88rem' }}>
              While Gadget Life vets vendor physical locations, Instagram store channels, and WhatsApp contacts for authenticity, Gadget Life and its founder <strong>Chigbo (formerly NIFTECH)</strong> are not liable for post-purchase commercial conduct, warranty fulfillment delays, or shipping/waybill disputes handled by third-party vendor shops.
            </p>
          </div>

          <div style={{ padding: '16px', background: '#ECFDF5', borderLeft: '4px solid var(--accent-green)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.02rem', color: 'var(--accent-green)', marginBottom: '4px' }}>
              🎁 Promo Code Redemption & Warranty Terms
            </h3>
            <p style={{ color: '#1A1A1A', fontSize: '0.88rem' }}>
              Custom discount promo codes (e.g. NIFTECH-SLOT) are subject to vendor stock availability. Buyers are advised to inspect hardware seals and confirm warranty terms directly with the authorized vendor before concluding payments.
            </p>
          </div>

        </div>

        <button className="btn-neo btn-neo-purple" onClick={onClose} style={{ width: '100%', marginTop: '24px', padding: '12px' }}>
          Accept & Close Terms
        </button>
      </div>
    </div>
  );
}

export function VideoModal({ onClose, gadget }) {
  if (!gadget) return null;
  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 2000 }}>
      <div className="modal-content" style={{ maxWidth: '820px', padding: '24px', backgroundColor: '#1A1A1A', borderRadius: '24px' }} onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: '#333', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', fontWeight: '900', color: '#FFF', zIndex: 10 }}
        >
          ✕
        </button>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '14px', paddingRight: '40px', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
          🎬 {gadget.name} — Video Review by Chigbo (@chigbo-niftech)
        </h3>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', border: '1px solid #333' }}>
          <iframe 
            src={gadget.videoUrl} 
            title={gadget.name} 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
