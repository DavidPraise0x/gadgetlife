import React, { useState, useEffect } from 'react';

const GADGET_ITEMS = [
  // Top Region
  { id: 1, icon: '📱', label: '120Hz LTPO OLED', top: '8%', left: '5%', size: '2.4rem', floatDelay: '0s', duration: '11s' },
  { id: 2, icon: '🎧', label: '30dB ANC Active', top: '14%', left: '22%', size: '2.5rem', floatDelay: '1.5s', duration: '13s' },
  { id: 3, icon: '⚡', label: '100W Fast Charge', top: '6%', left: '42%', size: '2.2rem', floatDelay: '3s', duration: '10s' },
  { id: 4, icon: '💻', label: 'Apple M3 Pro Bus', top: '12%', left: '62%', size: '2.7rem', floatDelay: '0.8s', duration: '14s' },
  { id: 5, icon: '📡', label: '220 Mbps Satellite', top: '8%', left: '82%', size: '2.8rem', floatDelay: '2s', duration: '12s' },
  { id: 6, icon: '⌚', label: 'Health Telemetry', top: '18%', left: '94%', size: '2.3rem', floatDelay: '4s', duration: '9s' },

  // Upper Middle Region
  { id: 7, icon: '📷', label: '50MP Sony IMX890 OIS', top: '28%', left: '3%', size: '2.6rem', floatDelay: '2.2s', duration: '15s' },
  { id: 8, icon: '🎮', label: '60ms Low Latency Mode', top: '32%', left: '16%', size: '2.3rem', floatDelay: '1s', duration: '12s' },
  { id: 9, icon: '🔋', label: '24,000mAh PowerCore', top: '26%', left: '35%', size: '2.5rem', floatDelay: '4.5s', duration: '11s' },
  { id: 10, icon: '🔌', label: 'Gan III Fast Adapter', top: '34%', left: '72%', size: '2.2rem', floatDelay: '0.5s', duration: '13s' },
  { id: 11, icon: '🎙️', label: '4-Mic Beamforming', top: '29%', left: '88%', size: '2.4rem', floatDelay: '3.2s', duration: '14s' },

  // Center & Lower Middle Region
  { id: 12, icon: '🪩', label: 'Dolby Atmos Audio', top: '48%', left: '2%', size: '2.4rem', floatDelay: '5s', duration: '12s' },
  { id: 13, icon: '📲', label: '5G Dual SIM Standby', top: '52%', left: '18%', size: '2.5rem', floatDelay: '1.2s', duration: '10s' },
  { id: 14, icon: '🛡️', label: 'Gorilla Glass Victus', top: '45%', left: '82%', size: '2.3rem', floatDelay: '2.8s', duration: '13s' },
  { id: 15, icon: '💡', label: '1,400 nits Peak Lux', top: '49%', left: '95%', size: '2.6rem', floatDelay: '0.3s', duration: '15s' },

  // Lower Region
  { id: 16, icon: '💾', label: '512GB UFS 3.1 Bus', top: '65%', left: '4%', size: '2.4rem', floatDelay: '3.5s', duration: '11s' },
  { id: 17, icon: '🖥️', label: '1.5K LTPO Display', top: '68%', left: '24%', size: '2.7rem', floatDelay: '1.8s', duration: '14s' },
  { id: 18, icon: '⌨️', label: 'Tactile Mechanical Switches', top: '62%', left: '76%', size: '2.4rem', floatDelay: '4.2s', duration: '12s' },
  { id: 19, icon: '🛜', label: 'Wi-Fi 6E Tri-Band', top: '66%', left: '92%', size: '2.5rem', floatDelay: '0.7s', duration: '10s' },

  // Bottom Region
  { id: 20, icon: '🔊', label: 'Stereo Soundstage', top: '82%', left: '6%', size: '2.6rem', floatDelay: '2s', duration: '13s' },
  { id: 21, icon: '🔋', label: '1.5 Days Battery Life', top: '86%', left: '22%', size: '2.5rem', floatDelay: '4s', duration: '11s' },
  { id: 22, icon: '📱', label: 'iOS 17.5 Optimization', top: '84%', left: '45%', size: '2.3rem', floatDelay: '1.1s', duration: '14s' },
  { id: 23, icon: '📡', label: 'IP67 Weatherproof Dish', top: '88%', left: '68%', size: '2.8rem', floatDelay: '3.1s', duration: '12s' },
  { id: 24, icon: '🎧', label: 'Translucent Sliding Case', top: '83%', left: '86%', size: '2.4rem', floatDelay: '0.4s', duration: '15s' },

  // Extra Floating Accents
  { id: 25, icon: '📸', label: 'Periscope 3X Zoom', top: '38%', left: '50%', size: '2.3rem', floatDelay: '2.7s', duration: '11s' },
  { id: 26, icon: '🛰️', label: 'Low Earth Orbit Sync', top: '74%', left: '38%', size: '2.6rem', floatDelay: '1.9s', duration: '13s' },
  { id: 27, icon: '🚀', label: 'MediaTek Dimensity 8200', top: '92%', left: '55%', size: '2.5rem', floatDelay: '0.2s', duration: '10s' },
  { id: 28, icon: '💎', label: 'Premium Metallic Chassis', top: '4%', left: '28%', size: '2.2rem', floatDelay: '3.8s', duration: '14s' }
];

export default function InteractiveGadgetBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clickedGadgets, setClickedGadgets] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 35; // Parallax range
      const y = (e.clientY / innerHeight - 0.5) * 35;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGadgetClick = (id, label) => {
    setClickedGadgets(prev => ({
      ...prev,
      [id]: { active: true, label }
    }));

    setTimeout(() => {
      setClickedGadgets(prev => ({
        ...prev,
        [id]: { active: false, label }
      }));
    }, 2200);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
      opacity: 0.8
    }}>
      {GADGET_ITEMS.map((item) => {
        const isClicked = clickedGadgets[item.id]?.active;

        return (
          <div
            key={item.id}
            onClick={() => handleGadgetClick(item.id, item.label)}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              fontSize: item.size,
              pointerEvents: 'auto',
              cursor: 'pointer',
              userSelect: 'none',
              transform: `translate3d(${mousePos.x * (item.id % 2 === 0 ? 1.3 : -1.3)}px, ${mousePos.y * (item.id % 3 === 0 ? 1.3 : -1.3)}px, 0) ${isClicked ? 'scale(1.4) rotate(360deg)' : 'scale(1)'}`,
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              animation: `floatingGadget ${item.duration} ease-in-out infinite alternate ${item.floatDelay}`,
              filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.1))'
            }}
            title={`Click to inspect ${item.label}`}
          >
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>{item.icon}</span>

              {/* Floating Fact Tooltip on Click */}
              {isClicked && (
                <div style={{
                  position: 'absolute',
                  bottom: '100%',
                  marginBottom: '8px',
                  whiteSpace: 'nowrap',
                  background: '#1A1A1A',
                  color: '#008751',
                  border: '1px solid #008751',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-mono)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                  animation: 'popIn 0.3s ease-out'
                }}>
                  {item.label}
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Keyframe animation definitions embedded */}
      <style>{`
        @keyframes floatingGadget {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-22px) rotate(8deg);
          }
          100% {
            transform: translateY(18px) rotate(-8deg);
          }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
