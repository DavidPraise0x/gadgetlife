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
      {/* 1. First Header Box: Minimalist Hero Banner */}
      <div className="card-neo" style={{ 
        backgroundColor: '#FFFFFF', 
        marginBottom: '24px', 
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
            style={{ marginBottom: showAboutNiftech ? '22px' : 0, fontSize: '0.85rem' }}
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
        </div>
      </div>

      {/* 2. Standalone Separate Search & Filter Box */}
      <div className="card-neo" style={{ 
        backgroundColor: '#FFFFFF', 
        marginBottom: '32px', 
        padding: '24px 32px',
        borderLeft: '6px solid var(--accent-purple)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🔍</span>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#1A1A1A', fontFamily: 'var(--font-heading)' }}>
                  Search & Filter Gadget Reviews
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#666' }}>
                  Filter by gadget category or type any product name / brand below.
                </p>
              </div>
            </div>

            <span className="badge-neo badge-neo-lime">
              SHOWING {filteredGadgets.length} OF {gadgets?.length || 48} GADGETS
            </span>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Search Input Box */}
            <div style={{ flex: '1 1 300px' }}>
              <input 
                type="text" 
                placeholder={`🔍 Type gadget name, brand (e.g. Tecno, Oraimo, Starlink)...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-neo"
                style={{ width: '100%', margin: 0, padding: '12px 18px', fontSize: '0.92rem' }}
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)',
                    border: categoryFilter === cat ? 'none' : 'var(--border-subtle)',
                    fontWeight: '800',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    color: categoryFilter === cat ? '#FFF' : '#1A1A1A',
                    backgroundColor: categoryFilter === cat ? 'var(--accent-purple)' : 'var(--bg-card-alt)',
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

      {/* 3. Official YouTube Videos Gallery */}
      <YouTubeVideoGallery onSelectVideo={onSelectVideo} />

      {/* 4. Product Cards Grid Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: '#1A1A1A' }}>
            📱 All Vetted Gadgets ({filteredGadgets.length})
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#666666' }}>
            Click any gadget card below to open its GSMArena spec sheet, 10-point rating matrix, and verified vendor deals.
          </p>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {filteredGadgets.map(gadget => (
          <div 
            key={gadget.id} 
            className="card-neo" 
            style={{ 
              backgroundColor: '#FFFFFF', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
            onClick={() => openGadgetDetail(gadget.id)}
          >
            <div>
              {/* Product Thumbnail */}
              <div style={{ 
                borderRadius: '12px', 
                border: 'var(--border-subtle)', 
                overflow: 'hidden', 
                height: '180px', 
                marginBottom: '14px',
                backgroundColor: '#FAF7F2',
                position: 'relative'
              }}>
                <img 
                  src={gadget.thumbnail} 
                  alt={gadget.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.target.src = 'https://img.youtube.com/vi/vUOcha0xIpA/hqdefault.jpg';
                  }}
                />
                <span className="badge-neo badge-neo-lime" style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.75rem' }}>
                  ⭐ {gadget.score} / 10
                </span>
              </div>

              {/* Category & Brand Badge */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                <span className="badge-neo badge-neo-purple" style={{ fontSize: '0.7rem' }}>{gadget.category}</span>
                <span className="badge-neo badge-neo-yellow" style={{ fontSize: '0.7rem' }}>{gadget.brand}</span>
              </div>

              {/* Title & Verdict */}
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: '#1A1A1A', lineHeight: 1.3 }}>
                {gadget.name}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#555555', lineHeight: 1.4, marginBottom: '14px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                "{gadget.verdict}"
              </p>
            </div>

            <div>
              <div style={{ borderTop: 'var(--border-subtle)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-green)', fontWeight: '700' }}>
                  🛒 Verified Stores Available
                </span>
                <button className="btn-neo btn-neo-outline" style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
                  Read Review →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
