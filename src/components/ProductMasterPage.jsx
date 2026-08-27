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

  // Key Features extracted dynamically
  const keyFeatures = [
    `⚡ ${gadget.quickFacts?.endurance || 'High-capacity battery with fast generator charging support'}`,
    `☀️ ${gadget.quickFacts?.visibility || 'Outdoor readable display under direct sunlight'}`,
    `🔊 ${gadget.quickFacts?.audio || 'High-clarity audio tuned for noisy environments'}`,
    `🛡️ ${gadget.quickFacts?.toughness || 'Drop tested durable chassis built for daily carry'}`,
    `🛒 Verified Southeast vendor stock with local warranty and promo codes`
  ];

  // Local Gadget Banter & Jokes
  const gadgetJokes = [
    `⚡ "If NEPA brings light for just 5 minutes while you're charging this, you can watch 3 full seasons of movies before the transformer remembers to trip off again!"`,
    `🔊 "The Noise Cancellation is so strong that when your mom calls your name from the kitchen, you can genuinely claim you were listening to high-fidelity audio in good conscience."`,
    `🛡️ "Drop test result: It fell out of a moving Keke in Onitsha, bounced off the gutter onto concrete, and the gutter was the one that sustained structural damage."`,
    `🔋 "This battery lasts so long that your neighbours will start suspecting you own a secret solar farm in your room."`
  ];

  const matrixMetrics = [
    { num: "01", label: "Logistics & Delivery", desc: "Shipping times, waybill costs to Southeast, vendor reliability", score: gadget.matrixScores?.logistics || 9.0 },
    { num: "02", label: "Setup & Friction", desc: "Out-of-the-box experience, manual steps, companion app reliability", score: gadget.matrixScores?.setup || 8.8 },
    { num: "03", label: "Build & Toughness", desc: "Premium feel vs cheap plastic, drop survival on concrete", score: gadget.matrixScores?.build || 9.2 },
    { num: "04", label: "Ergonomics & Comfort", desc: "Daily carry weight, earpiece fatigue, physical comfort", score: gadget.matrixScores?.ergonomics || 8.7 },
    { num: "05", label: "Core Performance", desc: "Actual ANC quality, advertised speed, real-world utility", score: gadget.matrixScores?.performance || 9.4 },
    { num: "06", label: "Battery & Endurance", desc: "Off-the-grid survival, generator fast-charging performance", score: gadget.matrixScores?.battery || 9.5 },
    { num: "07", label: "Software & Connectivity", desc: "App quality, Bluetooth drop-offs, OS update frequency", score: gadget.matrixScores?.software || 8.9 },
    { num: "08", label: "Local Climate Resilience", desc: "Sun heat resistance, overheating threshold, network stability", score: gadget.matrixScores?.climate || 9.1 },
    { num: "09", label: "Customer Care & Support", desc: "Local repair centers in Southeast, warranty response rates", score: gadget.matrixScores?.support || 8.6 },
    { num: "10", label: "Value for Naira", desc: "Price-to-performance ratio and overall bang-for-buck", score: gadget.matrixScores?.value || 9.3 }
  ];

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'flex-start' }}>
          
          {/* Media & Video Link */}
          <div>
            <div style={{ 
              borderRadius: '16px', 
              border: 'var(--border-subtle)', 
              overflow: 'hidden', 
              height: '300px', 
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

          {/* Details, Verdict & Key Features */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <span className="badge-neo badge-neo-purple">{gadget.category}</span>
              <span className="badge-neo badge-neo-cyan">BY {gadget.brand.toUpperCase()}</span>
            </div>

            <h1 style={{ fontSize: '2.4rem', marginBottom: '16px', color: '#1A1A1A' }}>{gadget.name}</h1>
            
            {/* Numeric Rating Score (No 'over 10') */}
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
              <span style={{ fontSize: '2.2rem', fontWeight: '900', color: '#B45309', fontFamily: 'var(--font-mono)' }}>⭐ {gadget.score}</span>
              <div>
                <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#1A1A1A' }}>OVERALL RATING SCORE</div>
                <div style={{ fontSize: '0.78rem', color: '#666', fontWeight: '600' }}>Evaluated across 10 lifecycle metrics</div>
              </div>
            </div>

            {/* Verdict Box with Key Features */}
            <div style={{ 
              padding: '20px', 
              background: 'var(--bg-card-alt)', 
              borderLeft: '5px solid var(--accent-purple)', 
              borderRadius: '14px' 
            }}>
              <h4 style={{ color: 'var(--accent-purple)', fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em', fontWeight: '800' }}>
                ⚡ CHIGBO'S FINAL VERDICT
              </h4>
              <p style={{ fontWeight: '700', fontSize: '1.08rem', color: '#1A1A1A', lineHeight: 1.5, marginBottom: '16px' }}>
                "{gadget.verdict}"
              </p>

              {/* ✨ Key Features Sub-Section */}
              <div style={{ borderTop: '1px solid #E2DDD5', paddingTop: '12px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '900', color: '#1A1A1A', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>✨ Key Standout Features & Highlights</span>
                </div>
                <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', color: '#444444', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {keyFeatures.map((feat, i) => (
                    <li key={i} style={{ fontWeight: '600' }}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Local Gadget Banter & Jokes Section */}
      <div className="card-neo" style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', marginBottom: '32px', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span style={{ fontSize: '1.8rem' }}>😂</span>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#B45309', fontFamily: 'var(--font-heading)' }}>
              Chigbo's Local Gadget Banter & Tech Jokes
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#78350F' }}>
              Relatable real-world tech humor from everyday life in Nigeria.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginTop: '16px' }}>
          {gadgetJokes.map((joke, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #FCD34D', fontSize: '0.9rem', color: '#1A1A1A', fontWeight: '600', lineHeight: 1.5 }}>
              {joke}
            </div>
          ))}
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

      {/* 10-Point Rating Matrix (Structured Editorial Table, No '/ 10') */}
      <div className="card-neo" style={{ backgroundColor: '#FFFFFF', marginBottom: '32px', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#1A1A1A', fontFamily: 'var(--font-heading)' }}>
              📊 The 10-Point Rating Matrix Table
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#666' }}>
              Granular scoring table evaluating the full product lifecycle: from purchase to daily coexistence in Nigeria.
            </p>
          </div>
          <button 
            className={`btn-neo ${showScoreMatrix ? 'btn-neo-purple' : 'btn-neo-outline'}`}
            onClick={() => setShowScoreMatrix(!showScoreMatrix)}
          >
            {showScoreMatrix ? '▲ Hide Matrix Table' : '📊 See Rating Table'}
          </button>
        </div>

        {showScoreMatrix && (
          <div style={{ overflowX: 'auto', borderRadius: '12px', border: 'var(--border-subtle)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#1A1A1A', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                  <th style={{ padding: '14px 16px', width: '60px' }}>#</th>
                  <th style={{ padding: '14px 16px', width: '220px' }}>Lifecycle Metric</th>
                  <th style={{ padding: '14px 16px' }}>Evaluation Criteria</th>
                  <th style={{ padding: '14px 16px', width: '140px', textAlign: 'right' }}>Numeric Rating</th>
                </tr>
              </thead>
              <tbody>
                {matrixMetrics.map((m, idx) => (
                  <tr key={idx} style={{ 
                    borderBottom: '1px solid #E2DDD5', 
                    backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAF7F2' 
                  }}>
                    <td style={{ padding: '14px 16px', fontWeight: '800', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
                      {m.num}
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: '800', color: '#1A1A1A' }}>
                      {m.label}
                    </td>
                    <td style={{ padding: '14px 16px', color: '#555555', lineHeight: 1.4 }}>
                      {m.desc}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                      <span style={{ 
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-pill)',
                        fontWeight: '900',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: m.score >= 9.0 ? '#ECFDF5' : m.score >= 8.5 ? '#FEF3C7' : '#FFF1F2',
                        color: m.score >= 9.0 ? 'var(--accent-green)' : m.score >= 8.5 ? '#B45309' : 'var(--accent-orange)',
                        border: m.score >= 9.0 ? '1px solid #B8E4CD' : m.score >= 8.5 ? '1px solid #FDE68A' : '1px solid #FECDD3'
                      }}>
                        ⭐ {m.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Verified Buying Options */}
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
                  <span style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>⭐ {rev.rating}</span>
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
