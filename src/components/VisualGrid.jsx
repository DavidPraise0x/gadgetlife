import React, { useState } from 'react';
import YouTubeVideoGallery from './YouTubeVideoGallery';

export default function VisualGrid({ gadgets, openGadgetDetail, onSelectVideo }) {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAboutNiftech, setShowAboutNiftech] = useState(false);

  const categories = ['All', 'Smartphones', 'Earbuds & Audio', 'Power Banks', 'Internet & Networking', 'Smart Tech & Accessories'];

  const filteredGadgets = (gadgets || []).filter(g => {
    const matchesCategory = categoryFilter === 'All' || g.category === categoryFilter;
    const matchesSearch = g.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          g.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          g.verdict.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Minimalist Hero Banner */}
      <div className="card-neo" style={{ 
        backgroundColor: '#FFFFFF', 
        marginBottom: '32px', 
        padding: '36px',
        borderLeft: '6px solid var(--accent-green)'
      }}>
        <div style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span className="badge-neo badge-neo-lime">EDITORIAL TECH REVIEWS</span>
            <span className="badge-neo badge-neo-purple">CHIGBO'S TECH FUNNEL</span>
            <span className="badge-neo badge-neo-yellow">{gadgets?.length || 48} PRODUCTS REVIEWED</span>
          </div>

          <h1 style={{ fontSize: '2.4rem', marginBottom: '14px', lineHeight: 1.15, color: '#1A1A1A' }}>
            Everyday Usability & Real-World Tech Realities in Nigeria.
          </h1>
          <p style={{ fontSize: '1.02rem', color: '#555555', marginBottom: '20px', fontWeight: '500', lineHeight: 1.6 }}>
            Translating complex specs into clear layman answers. Read localized real-world tests on sun visibility, generator charging speed, Keke noise drowning, concrete drop durability, and verified Southeast vendor promo codes.
          </p>

          <button 
            className="btn-neo btn-neo-outline" 
            onClick={() => setShowAboutNiftech(!showAboutNiftech)}
            style={{ marginBottom: '22px', fontSize: '0.85rem' }}
          >
            {showAboutNiftech ? '▲ Hide About NIFTECH Story' : '📖 Read the NIFTECH Story by Chigbo →'}
          </button>

          {/* About NIFTECH Collapsible Card */}
          {showAboutNiftech && (
            <div style={{ 
              background: 'var(--bg-card-alt)', 
              padding: '24px', 
              borderRadius: '16px', 
              border: 'var(--border-subtle)', 
              marginBottom: '24px',
              lineHeight: 1.65,
              fontSize: '0.94rem'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#1A1A1A' }}>
                🎙️ About Chigbo & NIFTECH
              </h3>
              <p style={{ color: '#444444', marginBottom: '12px' }}>
                <strong>NIFTECH</strong> (founded by tech reviewer & storyteller <strong>Chigbo</strong>) is a pioneer in Nigerian consumer technology journalism. Built on the channel <a href="https://www.youtube.com/@chigbo-niftech" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-green)', fontWeight: '700' }}>@chigbo-niftech</a>, NIFTECH bridges the gap between high-flying spec sheets and the real-world friction of living and working in Nigeria.
              </p>
              <p style={{ color: '#444444', marginBottom: '12px' }}>
                Instead of regurgitating synthetic benchmarks, Chigbo evaluates gadgets against local realities: <em>Can you read this screen under 12 PM Enugu sunlight? Will 15 minutes of generator fast-charging give you enough battery to survive a 24-hour blackout? Does Active Noise Cancellation actually drown out a roaring Keke engine on New Market Road in Onitsha?</em>
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
                <span className="badge-neo badge-neo-lime">📍 Southeast Regional Focus</span>
                <span className="badge-neo badge-neo-yellow">🛒 Vetted Local Vendors</span>
                <span className="badge-neo badge-neo-purple">🎥 4K Cinematic Field Reviews</span>
              </div>
            </div>
          )}

          {/* Search & Category Filter Pills */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder={`Search across all ${gadgets?.length || 48} gadgets by name or brand...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-neo"
              style={{ maxWidth: '380px', margin: 0 }}
            />
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)',
                    border: categoryFilter === cat ? 'none' : 'var(--border-subtle)',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    color: categoryFilter === cat ? '#FFF' : '#1A1A1A',
                    backgroundColor: categoryFilter === cat ? '#1A1A1A' : 'var(--bg-card-alt)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', flexWrap: 'wrap', gap: '12px' }}>
        <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Reviewed Products ({filteredGadgets.length})</span>
          <span className="badge-neo badge-neo-lime">ALL {gadgets?.length || 48} PRODUCTS LOADED</span>
        </h2>
        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#666' }}>
          Click card to view Product Master Page
        </span>
      </div>

      {/* Editorial Product Cards */}
      <div className="grid-gadgets">
        {filteredGadgets.map(gadget => (
          <div key={gadget.id} className="card-neo" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Image Container */}
              <div 
                onClick={() => openGadgetDetail(gadget.id)}
                style={{ 
                  height: '210px', 
                  borderRadius: '14px', 
                  border: 'var(--border-subtle)', 
                  overflow: 'hidden', 
                  position: 'relative', 
                  cursor: 'pointer',
                  marginBottom: '16px',
                  backgroundColor: '#FAF7F2'
                }}
              >
                <img 
                  src={gadget.thumbnail} 
                  alt={gadget.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <span className="badge-neo badge-neo-purple">{gadget.category}</span>
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <span className="badge-neo badge-neo-yellow" style={{ fontSize: '0.88rem', padding: '5px 12px' }}>
                    ⭐ {gadget.score} / 10
                  </span>
                </div>
              </div>

              {/* Title & Layman Verdict */}
              <h3 onClick={() => openGadgetDetail(gadget.id)} style={{ cursor: 'pointer', fontSize: '1.2rem', marginBottom: '8px', color: '#1A1A1A', lineHeight: 1.3 }}>
                {gadget.name}
              </h3>
              <p style={{ 
                fontSize: '0.88rem', 
                color: '#444444', 
                marginBottom: '16px', 
                fontStyle: 'italic', 
                background: 'var(--bg-card-alt)', 
                padding: '12px', 
                borderLeft: '4px solid var(--accent-purple)', 
                borderRadius: '8px',
                lineHeight: 1.5
              }}>
                "{gadget.verdict}"
              </p>
            </div>

            {/* Footer action */}
            <div style={{ borderTop: 'var(--border-subtle)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#666' }}>
                🏢 {gadget.trustedVendors.length} Verified Vendors
              </span>
              <button className="btn-neo btn-neo-lime" style={{ padding: '7px 16px', fontSize: '0.85rem' }} onClick={() => openGadgetDetail(gadget.id)}>
                Master Page →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Official YouTube Video Library Grid */}
      <YouTubeVideoGallery onSelectVideo={(v) => {
        if (onSelectVideo) onSelectVideo(v);
        else window.open(v.videoUrl, '_blank');
      }} />

    </div>
  );
}
