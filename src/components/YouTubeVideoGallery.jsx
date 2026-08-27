import React, { useState } from 'react';
import allVideosData from '../data/chigbo_all_videos.json';

export default function YouTubeVideoGallery({ onSelectVideo }) {
  const [videos] = useState(allVideosData || []);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = videos.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase()) || v.id.includes(searchQuery);
    return matchesSearch;
  });

  return (
    <div className="card-neo" style={{ marginTop: '36px', backgroundColor: '#FFFFFF' }}>
      
      {/* Gallery Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontSize: '1.6rem' }}>🎬</span>
            <h2 style={{ fontSize: '1.6rem', color: '#1A1A1A' }}>
              Official YouTube Video Library (@chigbo-niftech)
            </h2>
            <span className="badge-neo badge-neo-lime">{videos.length} VIDEOS LOADED</span>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#666' }}>
            Browse field reviews, unboxings, camera tests, and Nigerian setup guides from Chigbo's official YouTube channel.
          </p>
        </div>

        <a 
          href="https://www.youtube.com/@chigbo-niftech" 
          target="_blank" 
          rel="noreferrer"
          className="btn-neo btn-neo-coral"
          style={{ textDecoration: 'none', padding: '10px 20px', fontSize: '0.88rem' }}
        >
          ▶ Subscribe on YouTube ↗
        </a>
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: '24px', maxWidth: '420px' }}>
        <input 
          type="text" 
          placeholder={`Search all ${videos.length} videos by keyword or title...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-neo"
          style={{ margin: 0 }}
        />
      </div>

      {/* Video Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
        gap: '20px' 
      }}>
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            style={{ 
              background: 'var(--bg-card-alt)', 
              borderRadius: '16px', 
              border: 'var(--border-subtle)', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            <div>
              {/* Thumbnail Container with Play Overlay */}
              <div 
                onClick={() => onSelectVideo(video)}
                style={{ 
                  height: '160px', 
                  position: 'relative', 
                  cursor: 'pointer',
                  backgroundColor: '#1A1A1A',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'rgba(0,0,0,0.25)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '50%', 
                    background: '#FF0000', 
                    color: '#FFF', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.3)'
                  }}>
                    ▶
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <div style={{ padding: '14px' }}>
                <h4 
                  onClick={() => onSelectVideo(video)}
                  style={{ 
                    fontSize: '0.95rem', 
                    lineHeight: 1.4, 
                    color: '#1A1A1A', 
                    cursor: 'pointer',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {video.title}
                </h4>
              </div>
            </div>

            {/* Actions */}
            <div style={{ padding: '0 14px 14px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                onClick={() => onSelectVideo(video)}
                style={{ 
                  background: 'var(--accent-green)', 
                  color: '#FFF', 
                  border: 'none', 
                  borderRadius: '12px', 
                  padding: '6px 14px', 
                  fontSize: '0.78rem', 
                  fontWeight: '800', 
                  cursor: 'pointer' 
                }}
              >
                ▶ Play Video
              </button>

              <a 
                href={`https://www.youtube.com/watch?v=${video.id}`} 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: '0.78rem', color: '#666', textDecoration: 'none', fontWeight: '600' }}
              >
                YouTube ↗
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
