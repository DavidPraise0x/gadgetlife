import React, { useState } from 'react';
import NerdZone from './NerdZone';

export default function ProductMasterPage({ 
  gadget, 
  user, 
  setShowAuthModal, 
  setShowVideoModal,
  vendorReviews,
  setVendorReviews,
  productValidations,
  setProductValidations,
  backToGrid 
}) {
  const [showScoreMatrix, setShowScoreMatrix] = useState(true);

  return (
    <div>
      {/* Back Navigation & YouTube Channel Link */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <button className="btn-neo btn-neo-outline" onClick={backToGrid}>
          ← Back to Visual Grid
        </button>

        <a 
          href={gadget.channelUrl || "https://www.youtube.com/@chigbo-niftech"} 
          target="_blank" 
          rel="noreferrer"
          className="btn-neo btn-neo-coral"
          style={{ fontSize: '0.85rem', textDecoration: 'none' }}
        >
          ▶ Subscribe on YouTube (@chigbo-niftech)
        </a>
      </div>

      {/* Hero Card */}
      <div className="card-neo" style={{ backgroundColor: '#FFFFFF', marginBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
          
          {/* Media & Video Link */}
          <div>
            <div style={{ 
              borderRadius: '16px', 
              border: 'var(--border-subtle)', 
              overflow: 'hidden', 
              height: '280px', 
              position: 'relative', 
              marginBottom: '14px', 
              backgroundColor: '#FAF7F2'
            }}>
              <img src={gadget.thumbnail} alt={gadget.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'rgba(26, 26, 26, 0.4)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <button 
                  className="btn-neo btn-neo-coral"
                  onClick={() => setShowVideoModal(true)}
                  style={{ fontSize: '0.95rem', padding: '12px 24px' }}
                >
                  ▶ Watch Video Essay
                </button>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.84rem', color: '#666666', fontWeight: '600', marginBottom: '4px' }}>
                🎥 Official Field Review by Chigbo (@chigbo-niftech)
              </p>
              <a 
                href={gadget.youtubeWatchUrl} 
                target="_blank" 
                rel="noreferrer" 
                style={{ fontSize: '0.78rem', color: 'var(--accent-purple)', fontWeight: '700', textDecoration: 'underline' }}
              >
                Watch on YouTube App ↗
              </a>
            </div>
          </div>

          {/* Details & Verdict */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <span className="badge-neo badge-neo-purple">{gadget.category}</span>
              <span className="badge-neo badge-neo-cyan">BY {gadget.brand.toUpperCase()}</span>
            </div>

            <h1 style={{ fontSize: '2.4rem', marginBottom: '16px', color: '#1A1A1A' }}>{gadget.name}</h1>
            
            {/* Score Badge */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '14px', 
              background: '#FEF3C7', 
              border: '1px solid #FDE68A', 
              borderRadius: 'var(--radius-md)', 
              padding: '12px 20px', 
              marginBottom: '20px' 
            }}>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: '#B45309', fontFamily: 'var(--font-mono)' }}>⭐ {gadget.score}</span>
              <div>
                <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#1A1A1A' }}>AVERAGED 10-STAR SCORE</div>
                <div style={{ fontSize: '0.78rem', color: '#666', fontWeight: '600' }}>Evaluated across 10 lifecycle metrics</div>
              </div>
            </div>

            {/* Verdict Box */}
            <div style={{ 
              padding: '18px', 
              background: 'var(--bg-card-alt)', 
              borderLeft: '4px solid var(--accent-purple)', 
              borderRadius: '12px' 
            }}>
              <h4 style={{ color: 'var(--accent-purple)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.05em' }}>
                ⚡ CHIGBO'S FINAL VERDICT
              </h4>
              <p style={{ fontWeight: '700', fontSize: '1.08rem', color: '#1A1A1A', lineHeight: 1.5 }}>
                "{gadget.verdict}"
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Facts Section */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem' }}>
          <span>⚡ Quick Facts: Everyday Usability Questions</span>
          <span className="badge-neo badge-neo-lime">LAYMAN ANSWERS</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          <div className="card-neo" style={{ borderLeft: '4px solid #D97706', backgroundColor: '#FFFBEB' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: '#B45309' }}>☀️ Sunlight Visibility</h3>
            <p style={{ fontSize: '0.92rem', color: '#1A1A1A' }}>{gadget.quickFacts.visibility}</p>
          </div>

          <div className="card-neo" style={{ borderLeft: '4px solid var(--accent-green)', backgroundColor: '#ECFDF5' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--accent-green)' }}>🔋 Real-World Endurance</h3>
            <p style={{ fontSize: '0.92rem', color: '#1A1A1A' }}>{gadget.quickFacts.endurance}</p>
          </div>

          <div className="card-neo" style={{ borderLeft: '4px solid var(--accent-purple)', backgroundColor: '#F3E8FF' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--accent-purple)' }}>🔊 Volume & Audio Clarity</h3>
            <p style={{ fontSize: '0.92rem', color: '#1A1A1A' }}>{gadget.quickFacts.audio}</p>
          </div>

          <div className="card-neo" style={{ borderLeft: '4px solid var(--accent-orange)', backgroundColor: '#FFF1F2' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--accent-orange)' }}>🛡️ Toughness & Drops</h3>
            <p style={{ fontSize: '0.92rem', color: '#1A1A1A' }}>{gadget.quickFacts.toughness}</p>
          </div>
        </div>
      </div>

      {/* ULTRA-NERDY HARDWARE SPECIFICATION TERMINAL */}
      <NerdZone specs={gadget.nerdZoneSpecs} gadget={gadget} />

      {/* 10-Point Rating Matrix */}
      <div className="card-neo" style={{ backgroundColor: '#FFFFFF', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', color: '#1A1A1A' }}>📊 The 10-Point Rating Matrix</h3>
            <p style={{ fontSize: '0.88rem', color: '#666' }}>
              Granular scoring evaluating the full product lifecycle: from purchase to daily coexistence in Nigeria.
            </p>
          </div>
          <button 
            className={`btn-neo ${showScoreMatrix ? 'btn-neo-purple' : 'btn-neo-outline'}`}
            onClick={() => setShowScoreMatrix(!showScoreMatrix)}
          >
            {showScoreMatrix ? '▲ Hide Breakdown' : '📊 See How I Scored This'}
          </button>
        </div>

        {showScoreMatrix && (
          <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: 'var(--border-subtle)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                { label: "1. Logistics & Delivery", desc: "Shipping times, waybill costs to Southeast, vendor reliability", score: gadget.matrixScores.logistics },
                { label: "2. Setup & Friction", desc: "Out-of-the-box experience, manual steps, companion app bugs", score: gadget.matrixScores.setup },
                { label: "3. Build & Toughness", desc: "Premium feel vs cheap plastic, drop survival on concrete", score: gadget.matrixScores.build },
                { label: "4. Ergonomics & Comfort", desc: "Daily carry weight, earpiece fatigue, physical comfort", score: gadget.matrixScores.ergonomics },
                { label: "5. Core Performance", desc: "Actual ANC quality, advertised speed, real-world utility", score: gadget.matrixScores.performance },
                { label: "6. Battery & Endurance", desc: "Off-the-grid survival, generator fast-charging performance", score: gadget.matrixScores.battery },
                { label: "7. Software & Connectivity", desc: "App quality, Bluetooth drop-offs, OS update frequency", score: gadget.matrixScores.software },
                { label: "8. Local Climate Resilience", desc: "Sun heat resistance, overheating threshold, network stability", score: gadget.matrixScores.climate },
                { label: "9. Customer Care & Support", desc: "Local repair centers in Southeast, warranty response rates", score: gadget.matrixScores.support },
                { label: "10. Value for Naira", desc: "Price-to-performance ratio and overall bang-for-buck", score: gadget.matrixScores.value }
              ].map((metric, idx) => (
                <div key={idx} style={{ background: 'var(--bg-card-alt)', padding: '14px', borderRadius: '10px', border: 'var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.88rem', color: '#1A1A1A' }}>{metric.label}</span>
                    <span style={{ fontWeight: '900', color: 'var(--accent-purple)', fontSize: '0.95rem', fontFamily: 'var(--font-mono)' }}>{metric.score} / 10</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#666', marginBottom: '8px' }}>{metric.desc}</p>
                  <div className="progress-neo-track">
                    <div 
                      className="progress-neo-fill" 
                      style={{ 
                        width: `${(metric.score / 10) * 100}%`,
                        backgroundColor: metric.score >= 9 ? 'var(--accent-green)' : metric.score >= 8 ? '#D97706' : 'var(--accent-orange)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Conversion Zone */}
      <div id="conversion-zone" className="card-neo" style={{ backgroundColor: '#FFFFFF', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span className="badge-neo badge-neo-lime">VERIFIED BUYING OPTIONS</span>
        </div>

        <h2 style={{ fontSize: '1.6rem', marginBottom: '8px', color: '#1A1A1A' }}>🛒 Where to Buy (Southeast & Nationwide)</h2>
        <p style={{ fontSize: '0.92rem', color: '#666', marginBottom: '20px' }}>
          Vetted vendor shops with physical store addresses, direct Instagram links, and exclusive custom promo codes.
        </p>

        {!user ? (
          <div style={{ background: 'var(--bg-card-alt)', padding: '28px', borderRadius: 'var(--radius-md)', border: 'var(--border-subtle)', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔒</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#1A1A1A' }}>Sign In Required to Unlock Buyer Perks</h3>
            <p style={{ fontSize: '0.92rem', color: '#666', maxWidth: '500px', margin: '0 auto 18px auto' }}>
              Sign in to unlock vetted local vendor addresses, Instagram shop links, and exclusive discount codes.
            </p>
            <button className="btn-neo btn-neo-lime" style={{ padding: '12px 28px', fontSize: '0.95rem' }} onClick={() => setShowAuthModal(true)}>
              🔐 Sign In / Sign Up to Unlock Deals
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {gadget.trustedVendors.map((vendor, idx) => (
                <div key={idx} className="card-neo" style={{ backgroundColor: '#FFFFFF' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.15rem', color: '#1A1A1A' }}>{vendor.name}</h3>
                    <span className="badge-neo badge-neo-lime">{vendor.priceNgn}</span>
                  </div>

                  <div style={{ marginBottom: '14px', fontSize: '0.88rem', color: '#555' }}>
                    <strong style={{ display: 'block', color: '#1A1A1A' }}>📍 Physical Address:</strong>
                    <p style={{ margin: '2px 0 8px 0' }}>{vendor.address}</p>

                    <strong style={{ display: 'block', color: '#1A1A1A' }}>🔗 Verified Channels:</strong>
                    <ul style={{ paddingLeft: '18px', margin: '4px 0' }}>
                      <li>Instagram: <a href={`https://instagram.com/${vendor.instagram.replace('@','')}`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-purple)', fontWeight: '700' }}>{vendor.instagram}</a></li>
                      <li>WhatsApp Direct: <a href={`https://wa.me/${vendor.whatsapp.replace('+','')}`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-green)', fontWeight: '700' }}>{vendor.whatsapp}</a></li>
                    </ul>
                  </div>

                  {/* Promo Box */}
                  <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '12px', padding: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: '#B45309', fontFamily: 'var(--font-mono)' }}>
                        🎁 EXCLUSIVE PROMO CODE
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#1A1A1A', fontFamily: 'var(--font-mono)' }}>
                        {vendor.promoCode}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#444' }}>{vendor.discount}</div>
                    </div>
                    <button 
                      className="btn-neo btn-neo-coral" 
                      style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                      onClick={() => {
                        navigator.clipboard.writeText(vendor.promoCode);
                        alert(`Copied promo code ${vendor.promoCode} to clipboard!`);
                      }}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Community Feedback Loop */}
      <div className="card-neo" style={{ backgroundColor: '#FFFFFF', marginBottom: '32px' }}>
        <div style={{ borderBottom: 'var(--border-subtle)', paddingBottom: '16px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.4rem', color: '#1A1A1A' }}>💬 Community Feedback & Validation Loop</h2>
          <p style={{ fontSize: '0.88rem', color: '#666' }}>
            Crowd-sourced buyer ratings confirming if the gadget performed as described in the Gadget Life review.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Validation */}
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#1A1A1A' }}>✅ Buyer Product Validation</h3>

            {productValidations.filter(v => v.gadgetId === gadget.id).map((val, i) => (
              <div key={i} style={{ background: 'var(--bg-card-alt)', padding: '12px', borderRadius: '10px', border: 'var(--border-subtle)', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '0.88rem', color: '#1A1A1A' }}>{val.userName}</strong>
                  <span className="badge-neo badge-neo-lime">Matches Review: YES ✅</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#444' }}>"{val.comment}"</p>
              </div>
            ))}

            {user && (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.elements.valComment.value;
                  if (!comment) return;
                  const newVal = {
                    gadgetId: gadget.id,
                    userName: `${user.name} (Verified Buyer)`,
                    agreesWithReview: true,
                    comment: comment
                  };
                  setProductValidations([newVal, ...productValidations]);
                  e.target.reset();
                  alert("Thank you! Your product validation has been posted.");
                }}
                style={{ marginTop: '14px', background: '#ECFDF5', padding: '14px', borderRadius: '10px', border: '1px solid #B8E4CD' }}
              >
                <h4 style={{ fontSize: '0.88rem', marginBottom: '6px', color: 'var(--accent-green)' }}>Confirm Performance</h4>
                <input name="valComment" placeholder="Did this gadget perform as described?" className="input-neo" style={{ marginBottom: '8px' }} required />
                <button className="btn-neo btn-neo-lime" style={{ padding: '6px 12px', fontSize: '0.8rem', width: '100%' }}>Submit Validation</button>
              </form>
            )}
          </div>

          {/* Vendor Reviews */}
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#1A1A1A' }}>🏢 Vendor Ratings</h3>

            {vendorReviews.filter(r => r.gadgetId === gadget.id).map((rev, i) => (
              <div key={i} style={{ background: 'var(--bg-card-alt)', padding: '12px', borderRadius: '10px', border: 'var(--border-subtle)', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '0.88rem', color: '#1A1A1A' }}>{rev.vendorName}</strong>
                  <span style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>⭐ {rev.rating}/5</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#444' }}>"{rev.comment}"</p>
              </div>
            ))}

            {user && (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const vendor = e.target.elements.vendorName.value;
                  const comment = e.target.elements.revComment.value;
                  if (!comment) return;
                  const newRev = {
                    gadgetId: gadget.id,
                    vendorName: vendor,
                    userName: user.name,
                    rating: 5,
                    commRating: "5/5 Verified",
                    deliveryRating: "5/5 Fast",
                    packagingRating: "5/5 Original",
                    comment: comment
                  };
                  setVendorReviews([newRev, ...vendorReviews]);
                  e.target.reset();
                  alert("Vendor review posted successfully!");
                }}
                style={{ marginTop: '14px', background: '#F3E8FF', padding: '14px', borderRadius: '10px', border: '1px solid #DDD6FE' }}
              >
                <h4 style={{ fontSize: '0.88rem', marginBottom: '6px', color: 'var(--accent-purple)' }}>Rate Vendor</h4>
                <select name="vendorName" className="input-neo" style={{ marginBottom: '8px' }}>
                  {gadget.trustedVendors.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
                </select>
                <input name="revComment" placeholder="How was the delivery speed & service?" className="input-neo" style={{ marginBottom: '8px' }} required />
                <button className="btn-neo btn-neo-purple" style={{ padding: '6px 12px', fontSize: '0.8rem', width: '100%' }}>Post Vendor Review</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
