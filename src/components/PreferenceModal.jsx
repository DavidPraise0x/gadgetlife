import React from 'react';

export default function PreferenceModal({ onClose, onSavePreferences, userPreferences }) {
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
          <span className="badge-bento badge-bento-purple" style={{ marginBottom: '8px' }}>ORDER PREFERENCE PROFILING</span>
          <h2 style={{ fontSize: '1.6rem', color: '#F8FAFC' }}>Define Buying Preferences</h2>
          <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
            Tailor your vendor matches, delivery speed, and promo codes.
          </p>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          const region = e.target.elements.region.value;
          const budget = e.target.elements.budget.value;
          const urgency = e.target.elements.urgency.value;
          onSavePreferences({ region, budget, urgency });
        }}>
          <label style={{ fontWeight: '700', fontSize: '0.88rem', color: '#F8FAFC' }}>Preferred Region / Location in Nigeria</label>
          <select name="region" className="input-bento" defaultValue={userPreferences?.region || "Enugu"}>
            <option value="Enugu">Enugu (Ogui Rd / New Haven / Independence Layout)</option>
            <option value="Anambra / Onitsha">Anambra (Onitsha Main Market / Nnewi)</option>
            <option value="Anambra / Awka">Anambra (Awka / Unizik Junction)</option>
            <option value="Abia / Aba">Abia (Aba / Factory Road / St. Michael's)</option>
            <option value="Imo / Owerri">Imo (Owerri / Weatheral Road)</option>
            <option value="Lagos State">Lagos (Computer Village Ikeja / Island)</option>
            <option value="Abuja FCT">Abuja FCT (Garki / Wuse)</option>
            <option value="Nationwide Express Waybill">Other State (Express Waybill)</option>
          </select>

          <label style={{ fontWeight: '700', fontSize: '0.88rem', color: '#F8FAFC' }}>Budget Range (NGN ₦)</label>
          <select name="budget" className="input-bento" defaultValue={userPreferences?.budget || "₦150k - ₦500k"}>
            <option value="Under ₦50,000">Under ₦50,000 (Budget Accessories)</option>
            <option value="₦50,000 - ₦150,000">₦50,000 - ₦150,000 (Mid-tier Gadgets)</option>
            <option value="₦150,000 - ₦500,000">₦150,000 - ₦500,000 (Flagships & Laptops)</option>
            <option value="₦500,000+">₦500,000+ (Ultra High-End & Solar Kits)</option>
          </select>

          <label style={{ fontWeight: '700', fontSize: '0.88rem', color: '#F8FAFC' }}>Delivery Urgency</label>
          <select name="urgency" className="input-bento" defaultValue={userPreferences?.urgency || "Instant Physical Store Pick-Up"}>
            <option value="Instant Physical Store Pick-Up">Instant Physical Store Pick-Up Today</option>
            <option value="24-48 Hours Express Waybill">24-48 Hours Express Regional Waybill</option>
            <option value="Standard 3-5 Days Doorstep">Standard 3-5 Days Doorstep Delivery</option>
          </select>

          <button className="btn-bento btn-bento-purple" style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginTop: '8px' }}>
            🔓 Save & Unlock Personalized Buying Options
          </button>
        </form>
      </div>
    </div>
  );
}
