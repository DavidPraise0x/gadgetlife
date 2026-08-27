import React from 'react';

export default function FeedbackSystem({ vendorReviews, productValidations }) {
  return (
    <div>
      <div className="card-neo" style={{ marginBottom: '28px', backgroundColor: '#FFFFFF' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px', color: '#1A1A1A' }}>💬 Verified Community Feedback & Buyer Ratings</h1>
        <p style={{ fontSize: '0.95rem', color: '#666' }}>
          Real ratings and product confirmations from verified buyers across Enugu, Anambra, Abia, Imo, Lagos, and Abuja.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {/* Vendor Reviews */}
        <div className="card-neo">
          <h2 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#1A1A1A' }}>🏢 Vendor Transaction Reviews</h2>
          {vendorReviews.map((rev, idx) => (
            <div key={idx} style={{ background: 'var(--bg-card-alt)', padding: '14px', borderRadius: '10px', border: 'var(--border-subtle)', marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <strong style={{ fontSize: '0.95rem', color: '#1A1A1A' }}>{rev.vendorName}</strong>
                <span className="badge-neo badge-neo-yellow">⭐ {rev.rating}/5 Stars</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#666', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                By {rev.userName} • {rev.commRating}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#444' }}>"{rev.comment}"</p>
            </div>
          ))}
        </div>

        {/* Product Validations */}
        <div className="card-neo">
          <h2 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#1A1A1A' }}>✅ Product Performance Confirmations</h2>
          {productValidations.map((val, idx) => (
            <div key={idx} style={{ background: 'var(--bg-card-alt)', padding: '14px', borderRadius: '10px', border: 'var(--border-subtle)', marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <strong style={{ fontSize: '0.88rem', color: '#1A1A1A' }}>{val.userName}</strong>
                <span className="badge-neo badge-neo-lime">Accurate Review: YES</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#444' }}>"{val.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
