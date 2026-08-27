import React from 'react';

export function LegalModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', fontWeight: '900', color: '#94A3B8' }}
        >
          ✕
        </button>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span className="badge-bento badge-bento-coral" style={{ marginBottom: '8px' }}>SECTION 7 PRD REQUIREMENT</span>
          <h2 style={{ fontSize: '1.6rem', color: '#F8FAFC' }}>Legal & Terms of Service</h2>
        </div>

        <div style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6 }}>
          <div style={{ padding: '16px', background: 'rgba(244, 63, 94, 0.1)', borderLeft: '4px solid #F43F5E', borderRadius: '8px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1rem', color: '#FB7185', marginBottom: '4px' }}>🛡️ Liability Disclaimer</h3>
            <p>
              The Gadget Life website operates strictly as an informational review and referral platform. Gadget Life and its creator, Chigbo (formerly NIFTECH), are not accountable for individual commercial behavior, warranties, or unlawful activities by third-party vendors.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #F59E0B', borderRadius: '8px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1rem', color: '#FBBF24', marginBottom: '4px' }}>📦 Post-Purchase Conduct</h3>
            <p>
              While we strive to vet vendors for original product functionality, Gadget Life is not liable for vendor conduct, regional delivery/waybill disputes, or product hardware issues encountered after sale finalization.
            </p>
          </div>
        </div>

        <button className="btn-bento btn-bento-outline" onClick={onClose} style={{ width: '100%', marginTop: '16px' }}>
          Close Terms & Disclaimers
        </button>
      </div>
    </div>
  );
}

export function VideoModal({ onClose, gadget }) {
  if (!gadget) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '800px', padding: '16px' }} onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '12px', right: '16px', background: '#151922', border: '1px solid #262D3D', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: '900', color: '#FFF', zIndex: 10 }}
        >
          ✕
        </button>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', paddingRight: '40px', color: '#F8FAFC' }}>
          🎬 {gadget.name} — Video Essay Review by Chigbo
        </h3>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', border: '1px solid #262D3D' }}>
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
