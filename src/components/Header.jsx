import React from 'react';

export default function Header({ view, setView, user, setUser, setShowAuthModal }) {
  return (
    <header style={{ 
      backgroundColor: 'var(--bg-main)',
      padding: '20px 0',
      borderBottom: 'var(--border-subtle)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        {/* Brand Logo with Creative Gadget Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => { setView('homepage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            color: '#FFF', 
            borderRadius: 'var(--radius-pill)', 
            padding: '8px 22px', 
            fontFamily: 'var(--font-heading)', 
            fontWeight: '900', 
            fontSize: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)'
          }}>
            <span style={{ fontSize: '1.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,240,255,0.4))' }}>📱🎧</span>
            <span>Gadget Life</span>
            <span style={{ 
              display: 'inline-flex', 
              width: '24px', 
              height: '16px', 
              borderRadius: '3px', 
              overflow: 'hidden'
            }}>
              <span style={{ flex: 1, backgroundColor: '#008751' }}></span>
              <span style={{ flex: 1, backgroundColor: '#FFFFFF' }}></span>
              <span style={{ flex: 1, backgroundColor: '#008751' }}></span>
            </span>
          </div>
          <span className="badge-neo badge-neo-lime">CHIGBO REVIEWS ⚡</span>
        </div>

        {/* Clean Header Navigation */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <nav style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button 
              className={`btn-neo ${view === 'feedback' ? 'btn-neo-coral' : 'btn-neo-outline'}`} 
              onClick={() => setView('feedback')}
            >
              / community feedback
            </button>
          </nav>

          {/* User Account / Auth Actions */}
          {user ? (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-green)', fontWeight: '800', fontSize: '0.9rem' }}>👤 {user.name}</span>
              <button onClick={() => setUser(null)} style={{ background: 'var(--accent-orange)', color: '#FFF', border: 'none', borderRadius: '12px', padding: '6px 14px', fontSize: '0.8rem', fontWeight: '800', cursor: 'pointer' }}>Logout</button>
            </div>
          ) : (
            <button 
              className="btn-neo btn-neo-lime"
              onClick={() => setShowAuthModal(true)}
              style={{ 
                padding: '10px 22px', 
                fontSize: '0.92rem', 
                fontWeight: '900',
                boxShadow: '0 6px 18px rgba(0, 135, 81, 0.35)'
              }}
            >
              🔐 Sign In / Sign Up
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
