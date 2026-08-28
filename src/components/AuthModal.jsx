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
    location: 'Lagos, Nigeria'
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

        if (formData.password.length < 6) {
          setErrorMsg('Password must be at least 6 characters long.');
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

        if (!res.success) {
          setErrorMsg(res.error || 'Account creation failed. Please try again.');
          setLoading(false);
          return;
        }

        // Save to registered users list in local storage for admin viewing & password verification
        try {
          const existing = JSON.parse(localStorage.getItem('gadget_life_registered_users_list') || '[]');
          const updated = [{ ...res.user, password: formData.password }, ...existing.filter(u => u.email !== res.user.email)];
          localStorage.setItem('gadget_life_registered_users_list', JSON.stringify(updated));
        } catch (err) {}

        setSuccessMsg('Account created successfully!');
        setTimeout(() => {
          onLoginSuccess(res.user);
        }, 800);

      } else {
        if (!formData.email || !formData.password) {
          setErrorMsg('Please enter both your email address and password.');
          setLoading(false);
          return;
        }

        const res = await signInUser({
          email: formData.email,
          password: formData.password
        });

        if (!res.success) {
          setErrorMsg(res.error || 'Incorrect email or password. Please check your credentials.');
          setLoading(false);
          return;
        }

        setSuccessMsg('Signed in successfully!');
        setTimeout(() => {
          onLoginSuccess(res.user);
        }, 800);
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
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.18)'
        }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.8rem' }}>📱🎧</span>
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1A1A1A', margin: 0 }}>
                {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#666', margin: 0 }}>
                {mode === 'signup' ? 'Join thousands of tech buyers across Nigeria' : 'Sign in to access verified vendor deals nationwide'}
              </p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#888' }}>✕</button>
        </div>

        {/* Mode Switcher Pills */}
        <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-card-alt)', padding: '4px', borderRadius: 'var(--radius-pill)', marginBottom: '24px', border: 'var(--border-subtle)' }}>
          <button 
            onClick={() => setMode('signup')}
            style={{ 
              flex: 1, 
              padding: '8px', 
              borderRadius: 'var(--radius-pill)', 
              border: 'none', 
              fontWeight: '800', 
              fontSize: '0.88rem', 
              cursor: 'pointer',
              backgroundColor: mode === 'signup' ? 'var(--accent-green)' : 'transparent',
              color: mode === 'signup' ? '#FFF' : '#666'
            }}
          >
            Create Account
          </button>
          <button 
            onClick={() => setMode('signin')}
            style={{ 
              flex: 1, 
              padding: '8px', 
              borderRadius: 'var(--radius-pill)', 
              border: 'none', 
              fontWeight: '800', 
              fontSize: '0.88rem', 
              cursor: 'pointer',
              backgroundColor: mode === 'signin' ? 'var(--accent-purple)' : 'transparent',
              color: mode === 'signin' ? '#FFF' : '#666'
            }}
          >
            Sign In
          </button>
        </div>

        {errorMsg && (
          <div style={{ backgroundColor: '#FEE2E2', color: '#B91C1C', padding: '12px 16px', borderRadius: '12px', fontSize: '0.86rem', fontWeight: '800', marginBottom: '16px', border: '1px solid #FECACA' }}>
            ⚠️ {errorMsg}
          </div>
        )}

        {successMsg && (
          <div style={{ backgroundColor: '#DCFCE7', color: '#15803D', padding: '12px 16px', borderRadius: '12px', fontSize: '0.86rem', fontWeight: '800', marginBottom: '16px', border: '1px solid #B8E4CD' }}>
            ✅ {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {mode === 'signup' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A1A1A', marginBottom: '4px' }}>
                Full Name *
              </label>
              <input 
                type="text" 
                name="fullName" 
                placeholder="e.g. Chigbo Nwachukwu" 
                value={formData.fullName} 
                onChange={handleChange} 
                className="input-neo" 
                required 
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A1A1A', marginBottom: '4px' }}>
              Email Address *
            </label>
            <input 
              type="email" 
              name="email" 
              placeholder="name@example.com" 
              value={formData.email} 
              onChange={handleChange} 
              className="input-neo" 
              required 
            />
          </div>

          {mode === 'signup' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A1A1A', marginBottom: '4px' }}>
                Phone Number (Nigerian Format) 🇳🇬 *
              </label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+234 801 234 5678" 
                value={formData.phone} 
                onChange={handleChange} 
                className="input-neo" 
                required 
              />
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A1A1A', marginBottom: '4px' }}>
                State / Location in Nigeria 🇳🇬
              </label>
              <select name="location" value={formData.location} onChange={handleChange} className="input-neo">
                <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                <option value="Abuja (FCT), Nigeria">Abuja (FCT), Nigeria</option>
                <option value="Port Harcourt (Rivers), Nigeria">Port Harcourt (Rivers), Nigeria</option>
                <option value="Kano, Nigeria">Kano, Nigeria</option>
                <option value="Ibadan (Oyo), Nigeria">Ibadan (Oyo), Nigeria</option>
                <option value="Enugu / Anambra, Nigeria">Enugu / Anambra, Nigeria</option>
                <option value="Kaduna, Nigeria">Kaduna, Nigeria</option>
                <option value="Edo / Delta, Nigeria">Edo / Delta, Nigeria</option>
                <option value="Nationwide Delivery">Other / Nationwide Delivery</option>
              </select>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#1A1A1A', marginBottom: '4px' }}>
              Password *
            </label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              value={formData.password} 
              onChange={handleChange} 
              className="input-neo" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className={`btn-neo ${mode === 'signup' ? 'btn-neo-lime' : 'btn-neo-purple'}`} 
            disabled={loading}
            style={{ padding: '14px', fontSize: '0.95rem', fontWeight: '900', marginTop: '8px' }}
          >
            {loading ? 'Processing...' : mode === 'signup' ? '🔐 Create Account & Unlock Deals' : '🔑 Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.82rem', color: '#666' }}>
          {mode === 'signup' ? (
            <span>Already have an account? <strong onClick={() => setMode('signin')} style={{ color: 'var(--accent-purple)', cursor: 'pointer' }}>Sign In here</strong></span>
          ) : (
            <span>Don't have an account? <strong onClick={() => setMode('signup')} style={{ color: 'var(--accent-green)', cursor: 'pointer' }}>Create one now</strong></span>
          )}
        </div>
      </div>
    </div>
  );
}
