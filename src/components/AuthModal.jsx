import React, { useState } from 'react';
import { signUpUser, signInUser } from '../lib/supabaseClient';
import InteractiveGadgetBackground from './InteractiveGadgetBackground';

export default function AuthModal({ onClose, onLoginSuccess }) {
  const [mode, setMode] = useState('signup'); // 'signup' | 'signin'
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    location: 'Enugu, Nigeria'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      if (mode === 'signup') {
        if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
          setErrorMsg('Please fill in all required fields including your phone number.');
          setLoading(false);
          return;
        }

        const res = await signUpUser({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          phone: formData.phone,
          location: formData.location
        });

        if (res.success) {
          // Save to registered users list in local storage for admin viewing
          try {
            const existing = JSON.parse(localStorage.getItem('gadget_life_registered_users_list') || '[]');
            const updated = [res.user, ...existing.filter(u => u.email !== res.user.email)];
            localStorage.setItem('gadget_life_registered_users_list', JSON.stringify(updated));
          } catch (err) {}

          setSuccessMsg('Account created successfully!');
          setTimeout(() => {
            onLoginSuccess(res.user);
          }, 800);
        }
      } else {
        if (!formData.email || !formData.password) {
          setErrorMsg('Please enter your email and password.');
          setLoading(false);
          return;
        }

        const res = await signInUser({
          email: formData.email,
          password: formData.password
        });

        if (res.success) {
          setSuccessMsg('Signed in successfully!');
          setTimeout(() => {
            onLoginSuccess(res.user);
          }, 800);
        }
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 2000, overflowY: 'auto' }}>
      
      {/* Background Interactive 3D Gadgets for Auth Screen */}
      <InteractiveGadgetBackground />

      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          maxWidth: '520px', 
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '36px',
          border: 'var(--border-subtle)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '20px', 
            background: 'var(--bg-card-alt)', 
            border: 'var(--border-subtle)', 
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            fontSize: '1rem', 
            cursor: 'pointer', 
            fontWeight: '900', 
            color: '#1A1A1A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ✕
        </button>

        {/* Modal Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#1A1A1A', color: '#FFF', borderRadius: 'var(--radius-pill)', padding: '6px 18px', fontWeight: '900', fontSize: '1.1rem', marginBottom: '12px' }}>
            <span>Gadget Life</span>
            <span style={{ display: 'inline-flex', width: '18px', height: '12px', borderRadius: '2px', overflow: 'hidden' }}>
              <span style={{ flex: 1, backgroundColor: '#008751' }}></span>
              <span style={{ flex: 1, backgroundColor: '#FFFFFF' }}></span>
              <span style={{ flex: 1, backgroundColor: '#008751' }}></span>
            </span>
          </div>

          <h2 style={{ fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '6px' }}>
            {mode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#666' }}>
            {mode === 'signup' 
              ? 'Join Chigbo’s verified buyer network to unlock local Southeast vendor deals & promo codes.' 
              : 'Sign in to access your saved vendor vouchers and preference profile.'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-card-alt)', padding: '6px', borderRadius: '16px', marginBottom: '24px', border: 'var(--border-subtle)' }}>
          <button 
            type="button"
            onClick={() => { setMode('signup'); setErrorMsg(''); setSuccessMsg(''); }}
            style={{ 
              flex: 1, 
              padding: '10px', 
              borderRadius: '12px', 
              border: 'none', 
              fontWeight: '800', 
              fontSize: '0.88rem', 
              cursor: 'pointer',
              backgroundColor: mode === 'signup' ? '#1A1A1A' : 'transparent',
              color: mode === 'signup' ? '#FFFFFF' : '#666',
              transition: 'all 0.2s ease'
            }}
          >
            📝 Create Account
          </button>
          <button 
            type="button"
            onClick={() => { setMode('signin'); setErrorMsg(''); setSuccessMsg(''); }}
            style={{ 
              flex: 1, 
              padding: '10px', 
              borderRadius: '12px', 
              border: 'none', 
              fontWeight: '800', 
              fontSize: '0.88rem', 
              cursor: 'pointer',
              backgroundColor: mode === 'signin' ? '#1A1A1A' : 'transparent',
              color: mode === 'signin' ? '#FFFFFF' : '#666',
              transition: 'all 0.2s ease'
            }}
          >
            🔐 Sign In
          </button>
        </div>

        {/* Alerts */}
        {errorMsg && (
          <div style={{ backgroundColor: '#FEE2E2', color: '#B91C1C', padding: '12px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '16px', border: '1px solid #FECACA' }}>
            ⚠️ {errorMsg}
          </div>
        )}

        {successMsg && (
          <div style={{ backgroundColor: '#E6F5ED', color: '#008751', padding: '12px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '16px', border: '1px solid #B8E4CD' }}>
            ✅ {successMsg}
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <label style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A' }}>Full Name *</label>
              <input 
                name="fullName" 
                type="text" 
                placeholder="e.g. Chinedu Okafor" 
                value={formData.fullName}
                onChange={handleChange}
                className="input-neo" 
                required 
              />

              <label style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A' }}>Phone Number (Nigerian Format 🇳🇬) *</label>
              <div style={{ position: 'relative' }}>
                <input 
                  name="phone" 
                  type="tel" 
                  placeholder="+234 803 123 4567 or 08031234567" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-neo" 
                  required 
                />
                <span style={{ position: 'absolute', right: '14px', top: '18px', fontSize: '1rem' }}>🇳🇬</span>
              </div>

              <label style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A' }}>Primary Location *</label>
              <select 
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input-neo"
                style={{ backgroundColor: '#FFF' }}
              >
                <option value="Enugu, Nigeria">Enugu State (Ogui, Independence Layout, Nsukka)</option>
                <option value="Onitsha, Nigeria">Anambra State (Onitsha, Nnewi, Awka)</option>
                <option value="Aba, Nigeria">Abia State (Aba, Umuahia)</option>
                <option value="Owerri, Nigeria">Imo State (Owerri, Orlu)</option>
                <option value="Lagos, Nigeria">Lagos State (Ikeja, Lekki, Yaba)</option>
                <option value="Abuja, Nigeria">Abuja FCT (Garki, Wuse, Maitama)</option>
              </select>
            </>
          )}

          <label style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A' }}>Email Address *</label>
          <input 
            name="email" 
            type="email" 
            placeholder="chigbo@gadgetlife.ng" 
            value={formData.email}
            onChange={handleChange}
            className="input-neo" 
            required 
          />

          <label style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A' }}>Password *</label>
          <input 
            name="password" 
            type="password" 
            placeholder="••••••••" 
            value={formData.password}
            onChange={handleChange}
            className="input-neo" 
            required 
          />

          <button 
            type="submit"
            disabled={loading}
            className="btn-neo btn-neo-lime" 
            style={{ width: '100%', padding: '14px', fontSize: '0.98rem', fontWeight: '900', marginTop: '8px' }}
          >
            {loading 
              ? '⏳ Authenticating...' 
              : mode === 'signup' 
                ? '🚀 Complete Sign Up & Unlock Deals' 
                : '🔐 Sign In'}
          </button>
        </form>

        {/* Footer Note */}
        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.78rem', color: '#888' }}>
          ⚡ Powered by Supabase Backend & NIFTECH Verified Buyer Network
        </div>
      </div>
    </div>
  );
}
