import React from 'react';

export default function Footer({ onOpenLegalModal, onOpenAdmin }) {
  return (
    <footer style={{ 
      borderTop: 'var(--border-subtle)', 
      backgroundColor: 'var(--bg-main)', 
      padding: '36px 20px', 
      marginTop: 'auto' 
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.3rem', marginBottom: '4px', color: '#1A1A1A' }}>
            Gadget Life 🇳🇬
          </div>
          <p style={{ fontSize: '0.85rem', color: '#666', maxWidth: '480px' }}>
            Created by <strong>Chigbo (formerly NIFTECH)</strong>. The ultimate tech review & buyer recommendation platform for Nigerian buyers across all 36 States & FCT Abuja.
          </p>
        </div>

        <div>
          <button 
            className="btn-neo btn-neo-outline" 
            onClick={onOpenAdmin} 
            style={{ fontSize: '0.78rem', color: '#888', borderColor: '#E2DDD5' }}
            title="Admin Passcode Required"
          >
            🔒 Admin Portal
          </button>
        </div>
      </div>
      
      {/* Disclaimer Text & Legal Terms Button Directly Underneath */}
      <div style={{ 
        maxWidth: '1280px', 
        margin: '24px auto 0 auto', 
        borderTop: 'var(--border-subtle)', 
        paddingTop: '20px', 
        fontSize: '0.82rem', 
        color: '#666666', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
        <p style={{ maxWidth: '720px', margin: '0 auto', lineHeight: 1.5 }}>
          Gadget Life operates as an informational and referral platform. Disclaimers apply regarding vendor conduct and post-purchase activities.
        </p>

        {/* Legal Terms & Services Button Placed Directly Under the Disclaimer */}
        <button 
          className="btn-neo btn-neo-outline" 
          onClick={onOpenLegalModal} 
          style={{ fontSize: '0.82rem', padding: '6px 18px', borderColor: '#D2CBC0' }}
        >
          📜 Legal Terms & Terms of Service
        </button>
      </div>
    </footer>
  );
}
