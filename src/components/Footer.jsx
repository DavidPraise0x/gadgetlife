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
            Created by <strong>Chigbo (formerly NIFTECH)</strong>. The ultimate tech review & buyer recommendation platform for Nigerian buyers.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <button className="btn-neo btn-neo-outline" onClick={onOpenLegalModal} style={{ fontSize: '0.85rem' }}>
            📜 Legal & Terms of Service
          </button>
          
          <button 
            className="btn-neo btn-neo-outline" 
            onClick={onOpenAdmin} 
            style={{ fontSize: '0.8rem', color: '#888', borderColor: '#E2DDD5' }}
            title="Admin Login Only"
          >
            🔒 Admin Portal
          </button>
        </div>
      </div>
      
      <div style={{ maxWidth: '1280px', margin: '20px auto 0 auto', borderTop: 'var(--border-subtle)', paddingTop: '16px', fontSize: '0.78rem', color: '#888', textAlign: 'center' }}>
        Gadget Life operates as an informational and referral platform. Disclaimers apply regarding vendor conduct and post-purchase activities.
      </div>
    </footer>
  );
}
