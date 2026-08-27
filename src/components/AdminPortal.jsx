import React, { useState, useEffect } from 'react';

export default function AdminPortal({ gadgets, vendorReviews, productValidations }) {
  // Always start unauthenticated every time Admin Portal is opened
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('users'); // 'users' | 'analytics' | 'vendors'

  useEffect(() => {
    // Clear any previous session storage on mount
    try {
      sessionStorage.removeItem('gadget_life_admin_auth');
      const saved = JSON.parse(localStorage.getItem('gadget_life_registered_users_list') || '[]');
      setUsers(saved);
    } catch (e) {
      setUsers([]);
    }
  }, []);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Strict admin password check
    if (passcode.trim() === 'chigbosky2004') {
      setIsAdminAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setPasscode('');
    sessionStorage.removeItem('gadget_life_admin_auth');
  };

  const filteredUsers = users.filter(u => 
    (u.name && u.name.toLowerCase().includes(search.toLowerCase())) ||
    (u.email && u.email.toLowerCase().includes(search.toLowerCase())) ||
    (u.phone && u.phone.includes(search)) ||
    (u.location && u.location.toLowerCase().includes(search.toLowerCase()))
  );

  const exportCSV = () => {
    if (!users.length) return;
    const headers = ['ID', 'Full Name', 'Email', 'Phone Number', 'Location', 'Created At'];
    const rows = users.map(u => [
      u.id || '',
      `"${u.name || ''}"`,
      `"${u.email || ''}"`,
      `"${u.phone || ''}"`,
      `"${u.location || ''}"`,
      `"${u.createdAt || ''}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `gadget_life_registered_users_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // PASSCODE CHALLENGE SCREEN (MANDATORY ON EVERY VISIT)
  if (!isAdminAuthenticated) {
    return (
      <div style={{ maxWidth: '480px', margin: '40px auto' }}>
        <div className="card-neo" style={{ textAlign: 'center', backgroundColor: '#FFFFFF', padding: '36px' }}>
          <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>🔒</div>
          <span className="badge-neo badge-neo-lime" style={{ marginBottom: '10px' }}>ADMIN AUTHENTICATION REQUIRED</span>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#1A1A1A' }}>Admin Portal Login</h2>
          <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '24px' }}>
            Enter your admin password to access the registered user directory, vendor vouchers, and site telemetry.
          </p>

          {passcodeError && (
            <div style={{ backgroundColor: '#FEE2E2', color: '#B91C1C', padding: '10px 14px', borderRadius: '12px', fontSize: '0.84rem', fontWeight: '700', marginBottom: '16px' }}>
              ⚠️ Incorrect Password. Access Denied.
            </div>
          )}

          <form onSubmit={handleAdminLogin}>
            <input 
              type="password" 
              placeholder="Enter Admin Password..."
              value={passcode}
              onChange={(e) => { setPasscode(e.target.value); setPasscodeError(false); }}
              className="input-neo"
              style={{ textAlign: 'center', letterSpacing: '0.15em', fontWeight: '800' }}
              required 
              autoFocus
            />
            <button className="btn-neo btn-neo-lime" style={{ width: '100%', padding: '12px', fontSize: '0.95rem', fontWeight: '900' }}>
              🔑 Unlock Admin Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <div>
      {/* Header Banner */}
      <div className="card-neo" style={{ backgroundColor: '#FFFFFF', marginBottom: '28px', borderLeft: '6px solid var(--accent-purple)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '1.6rem' }}>🔐</span>
              <h1 style={{ fontSize: '2rem', color: '#1A1A1A' }}>Admin Command Center</h1>
              <span className="badge-neo badge-neo-purple">AUTHENTICATED ADMIN</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#666' }}>
              Manage registered buyers, monitor Southeast vendor discount codes, and view site analytics.
            </p>
          </div>

          <button className="btn-neo btn-neo-coral" onClick={handleAdminLogout} style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            🔒 Lock Admin Portal
          </button>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '28px' }}>
        <div className="card-neo" style={{ backgroundColor: '#FFFFFF' }}>
          <div style={{ fontSize: '0.78rem', color: '#666', fontWeight: '700', textTransform: 'uppercase' }}>Total Registered Users</div>
          <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--accent-green)', marginTop: '4px' }}>
            👥 {users.length}
          </div>
          <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '4px' }}>With verified phone numbers</div>
        </div>

        <div className="card-neo" style={{ backgroundColor: '#FFFFFF' }}>
          <div style={{ fontSize: '0.78rem', color: '#666', fontWeight: '700', textTransform: 'uppercase' }}>Reviewed Products</div>
          <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--accent-purple)', marginTop: '4px' }}>
            📱 {gadgets?.length || 48}
          </div>
          <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '4px' }}>With 10-point matrix scores</div>
        </div>

        <div className="card-neo" style={{ backgroundColor: '#FFFFFF' }}>
          <div style={{ fontSize: '0.78rem', color: '#666', fontWeight: '700', textTransform: 'uppercase' }}>Vetted Local Vendors</div>
          <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--accent-orange)', marginTop: '4px' }}>
            🏢 12
          </div>
          <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '4px' }}>Enugu, Onitsha, Aba, Awka, Owerri</div>
        </div>

        <div className="card-neo" style={{ backgroundColor: '#FFFFFF' }}>
          <div style={{ fontSize: '0.78rem', color: '#666', fontWeight: '700', textTransform: 'uppercase' }}>Community Feedback</div>
          <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#2563EB', marginTop: '4px' }}>
            💬 {(vendorReviews?.length || 0) + (productValidations?.length || 0)}
          </div>
          <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '4px' }}>Vendor & performance reviews</div>
        </div>
      </div>

      {/* Admin Tab Switcher */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '22px', flexWrap: 'wrap' }}>
        <button 
          className={`btn-neo ${activeTab === 'users' ? 'btn-neo-lime' : 'btn-neo-outline'}`}
          onClick={() => setActiveTab('users')}
        >
          👥 Registered Users ({users.length})
        </button>
        <button 
          className={`btn-neo ${activeTab === 'vendors' ? 'btn-neo-purple' : 'btn-neo-outline'}`}
          onClick={() => setActiveTab('vendors')}
        >
          🏷️ Vendor Vouchers & Discounts
        </button>
      </div>

      {/* TAB 1: REGISTERED USERS DIRECTORY */}
      {activeTab === 'users' && (
        <div className="card-neo" style={{ backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#1A1A1A' }}>Registered User Database</h2>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>
                Full list of user signups including email, phone numbers, and location.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-neo"
                style={{ width: '240px', margin: 0 }}
              />
              <button className="btn-neo btn-neo-lime" onClick={exportCSV} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                📥 Export CSV
              </button>
            </div>
          </div>

          {filteredUsers.length === 0 ? (
            <div style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-card-alt)', borderRadius: '14px', color: '#666' }}>
              <span style={{ fontSize: '2rem' }}>📭</span>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>No registered users found.</p>
              <p style={{ fontSize: '0.82rem', color: '#999' }}>Signups via the Sign In / Sign Up form will automatically populate here!</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto', borderRadius: '14px', border: 'var(--border-subtle)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#1A1A1A', color: '#FFF' }}>
                    <th style={{ padding: '12px 14px' }}>Full Name</th>
                    <th style={{ padding: '12px 14px' }}>Email Address</th>
                    <th style={{ padding: '12px 14px' }}>Phone Number 🇳🇬</th>
                    <th style={{ padding: '12px 14px' }}>Location</th>
                    <th style={{ padding: '12px 14px' }}>Date Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u, idx) => (
                    <tr key={idx} style={{ borderBottom: 'var(--border-subtle)', background: idx % 2 === 0 ? '#FFF' : 'var(--bg-card-alt)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: '800', color: '#1A1A1A' }}>👤 {u.name || 'N/A'}</td>
                      <td style={{ padding: '12px 14px', color: '#444' }}>{u.email || 'N/A'}</td>
                      <td style={{ padding: '12px 14px', fontWeight: '700', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}>📱 {u.phone || 'N/A'}</td>
                      <td style={{ padding: '12px 14px', color: '#666' }}>📍 {u.location || 'N/A'}</td>
                      <td style={{ padding: '12px 14px', fontSize: '0.78rem', color: '#888' }}>
                        {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'Today'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: VENDOR VOUCHERS */}
      {activeTab === 'vendors' && (
        <div className="card-neo" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 style={{ fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '16px' }}>Active Southeast Vendor Vouchers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
              <div style={{ fontWeight: '800', color: '#1A1A1A' }}>Slot Nigeria (Enugu)</div>
              <div style={{ fontSize: '0.82rem', color: '#666', margin: '4px 0' }}>No. 4 Ogui Road, Opp. Polo Park Mall</div>
              <span className="badge-neo badge-neo-lime">CODE: NIFTECH-SLOT</span>
            </div>

            <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
              <div style={{ fontWeight: '800', color: '#1A1A1A' }}>Oraimo Official (Aba)</div>
              <div style={{ fontSize: '0.82rem', color: '#666', margin: '4px 0' }}>Factory Road, Opp. Enyimba Hotel</div>
              <span className="badge-neo badge-neo-purple">CODE: NIFTECH-ORAIMO</span>
            </div>

            <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
              <div style={{ fontWeight: '800', color: '#1A1A1A' }}>3C Hub (Onitsha Main Market)</div>
              <div style={{ fontSize: '0.82rem', color: '#666', margin: '4px 0' }}>New Market Road Plaza</div>
              <span className="badge-neo badge-neo-yellow">CODE: CHIGBO-3CHUB</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
