import React, { useState, useEffect } from 'react';

export default function AdminUsersModal({ onClose }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('gadget_life_registered_users_list') || '[]');
      setUsers(saved);
    } catch (e) {
      setUsers([]);
    }
  }, []);

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

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 2200 }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>
        
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--bg-card-alt)', border: 'var(--border-subtle)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', fontWeight: '900' }}
        >
          ✕
        </button>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontSize: '1.5rem' }}>👥</span>
            <h2 style={{ fontSize: '1.6rem', color: '#1A1A1A' }}>Admin // Registered Users Directory</h2>
            <span className="badge-neo badge-neo-lime">{users.length} REGISTERED</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Live database of registered user accounts, phone numbers, and location profiles.
          </p>
        </div>

        {/* Action Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
          <input 
            type="text" 
            placeholder="Search users by name, email, phone number, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-neo"
            style={{ maxWidth: '420px', margin: 0 }}
          />

          <button 
            className="btn-neo btn-neo-lime" 
            onClick={exportCSV}
            style={{ padding: '9px 18px', fontSize: '0.85rem' }}
          >
            📥 Export CSV ({users.length})
          </button>
        </div>

        {/* Users Table */}
        {filteredUsers.length === 0 ? (
          <div style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-card-alt)', borderRadius: '16px', color: '#666' }}>
            <span style={{ fontSize: '2rem' }}>📭</span>
            <p style={{ marginTop: '8px', fontWeight: '600' }}>No registered users found matching query.</p>
            <p style={{ fontSize: '0.82rem', color: '#999' }}>Users who sign up via the Sign In / Sign Up form will automatically appear here!</p>
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
                  <th style={{ padding: '12px 14px' }}>Date</th>
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
    </div>
  );
}
