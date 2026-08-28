import React, { useState, useEffect } from 'react';

const GADGET_ITEMS = [
  // Top Region
  { id: 1, icon: '📱', label: '120Hz LTPO OLED', top: '8%', left: '5%', size: '2.4rem', rainDelay: '0.1s', duration: '11s', zFactor: 1.4 },
  { id: 2, icon: '🎧', label: '30dB ANC Active', top: '14%', left: '22%', size: '2.5rem', rainDelay: '0.3s', duration: '13s', zFactor: -1.2 },
  { id: 3, icon: '⚡', label: '100W Fast Charge', top: '6%', left: '42%', size: '2.2rem', rainDelay: '0.5s', duration: '10s', zFactor: 1.6 },
  { id: 4, icon: '💻', label: 'Apple M3 Pro Bus', top: '12%', left: '62%', size: '2.7rem', rainDelay: '0.2s', duration: '14s', zFactor: -1.5 },
  { id: 5, icon: '📡', label: '220 Mbps Satellite', top: '8%', left: '82%', size: '2.8rem', rainDelay: '0.6s', duration: '12s', zFactor: 1.3 },
  { id: 6, icon: '⌚', label: 'Health Telemetry', top: '18%', left: '94%', size: '2.3rem', rainDelay: '0.4s', duration: '9s', zFactor: -1.1 },

  // Upper Middle Region
  { id: 7, icon: '📷', label: '50MP Sony IMX890 OIS', top: '28%', left: '3%', size: '2.6rem', rainDelay: '0.8s', duration: '15s', zFactor: 1.5 },
  { id: 8, icon: '🎮', label: '60ms Low Latency Mode', top: '32%', left: '16%', size: '2.3rem', rainDelay: '0.7s', duration: '12s', zFactor: -1.3 },
  { id: 9, icon: '🔋', label: '24,000mAh PowerCore', top: '26%', left: '35%', size: '2.5rem', rainDelay: '1.1s', duration: '11s', zFactor: 1.7 },
  { id: 10, icon: '🔌', label: 'Gan III Fast Adapter', top: '34%', left: '72%', size: '2.2rem', rainDelay: '0.9s', duration: '13s', zFactor: -1.4 },
  { id: 11, icon: '🎙️', label: '4-Mic Beamforming', top: '29%', left: '88%', size: '2.4rem', rainDelay: '1.0s', duration: '14s', zFactor: 1.2 },

  // Center & Lower Middle Region
  { id: 12, icon: '🪩', label: 'Dolby Atmos Audio', top: '48%', left: '2%', size: '2.4rem', rainDelay: '1.3s', duration: '12s', zFactor: -1.6 },
  { id: 13, icon: '📲', label: '5G Dual SIM Standby', top: '52%', left: '18%', size: '2.5rem', rainDelay: '1.2s', duration: '10s', zFactor: 1.4 },
  { id: 14, icon: '🛡️', label: 'Gorilla Glass Victus', top: '45%', left: '82%', size: '2.3rem', rainDelay: '1.5s', duration: '13s', zFactor: -1.2 },
  { id: 15, icon: '💡', label: '1,400 nits Peak Lux', top: '49%', left: '95%', size: '2.6rem', rainDelay: '1.4s', duration: '15s', zFactor: 1.8 },

  // Lower Region
  { id: 16, icon: '💾', label: '512GB UFS 3.1 Bus', top: '65%', left: '4%', size: '2.4rem', rainDelay: '1.6s', duration: '11s', zFactor: -1.3 },
  { id: 17, icon: '🖥️', label: '1.5K LTPO Display', top: '68%', left: '24%', size: '2.7rem', rainDelay: '1.7s', duration: '14s', zFactor: 1.5 },
  { id: 18, icon: '⌨️', label: 'Tactile Mechanical Switches', top: '62%', left: '76%', size: '2.4rem', rainDelay: '1.8s', duration: '12s', zFactor: -1.1 },
  { id: 19, icon: '🛜', label: 'Wi-Fi 6E Tri-Band', top: '66%', left: '92%', size: '2.5rem', rainDelay: '1.9s', duration: '10s', zFactor: 1.6 },

  // Bottom Region
  { id: 20, icon: '🔊', label: 'Stereo Soundstage', top: '82%', left: '6%', size: '2.6rem', rainDelay: '2.0s', duration: '13s', zFactor: -1.4 },
  { id: 21, icon: '🔋', label: '1.5 Days Battery Life', top: '86%', left: '22%', size: '2.5rem', rainDelay: '2.1s', duration: '11s', zFactor: 1.3 },
  { id: 22, icon: '📱', label: 'iOS 17.5 Optimization', top: '84%', left: '45%', size: '2.3rem', rainDelay: '1.9s', duration: '14s', zFactor: -1.5 },
  { id: 23, icon: '📡', label: 'IP67 Weatherproof Dish', top: '88%', left: '68%', size: '2.8rem', rainDelay: '2.2s', duration: '12s', zFactor: 1.7 },
  { id: 24, icon: '🎧', label: 'Translucent Sliding Case', top: '83%', left: '86%', size: '2.4rem', rainDelay: '2.0s', duration: '15s', zFactor: -1.2 },

  // Extra Floating Accents
  { id: 25, icon: '📸', label: 'Periscope 3X Zoom', top: '38%', left: '50%', size: '2.3rem', rainDelay: '1.1s', duration: '11s', zFactor: 1.2 },
  { id: 26, icon: '🛰️', label: 'Low Earth Orbit Sync', top: '74%', left: '38%', size: '2.6rem', rainDelay: '1.8s', duration: '13s', zFactor: -1.6 },
  { id: 27, icon: '🚀', label: 'MediaTek Dimensity 8200', top: '92%', left: '55%', size: '2.5rem', rainDelay: '2.3s', duration: '10s', zFactor: 1.5 },
  { id: 28, icon: '💎', label: 'Premium Metallic Chassis', top: '4%', left: '28%', size: '2.2rem', rainDelay: '0.4s', duration: '14s', zFactor: -1.3 }
];

export default function InteractiveGadgetBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isRainingFinished, setIsRainingFinished] = useState(false);
  const [clickedGadgets, setClickedGadgets] = useState({});

  useEffect(() => {
    // 1. Interactive Mouse Parallax tracking
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse offsets (-1 to 1) multiplied by parallax distance
      const x = (e.clientX / innerWidth - 0.5) * 45;
      const y = (e.clientY / innerHeight - 0.5) * 45;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 2. Rainfall intro timer: after 3 seconds, set raining finished so items float smoothly
    const timer = setTimeout(() => {
      setIsRainingFinished(true);
    }, 3200);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
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
      opacity: 0.85
    }}>
      {GADGET_ITEMS.map((item) => {
        const isClicked = clickedGadgets[item.id]?.active;
        const offsetX = mousePos.x * item.zFactor;
        const offsetY = mousePos.y * item.zFactor;

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
              // Combine Rainfall Intro, Stabilized Floating Oscillation, Mouse Parallax, and 360 Click Spin
              transform: `translate3d(${offsetX}px, ${offsetY}px, 0) ${isClicked ? 'scale(1.4) rotate(360deg)' : 'scale(1)'}`,
              transition: 'transform 0.15s ease-out',
              animation: isRainingFinished
                ? `floatingGadget ${item.duration} ease-in-out infinite alternate ${item.rainDelay}`
                : `gadgetRainfall 1.8s cubic-bezier(0.25, 1, 0.5, 1) forwards ${item.rainDelay}`,
              filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.12))'
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
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-mono)',
                  boxShadow: '0 8px 22px rgba(0,0,0,0.3)',
                  animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                  {item.label}
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* CSS Keyframes for Gadget Rainfall Intro and Stabilized Floating Oscillation */}
      <style>{`
        /* 1. Gadget Rainfall Intro Cascade */
        @keyframes gadgetRainfall {
          0% {
            opacity: 0;
            transform: translateY(-120vh) rotate(-180deg) scale(0.4);
          }
          60% {
            opacity: 1;
            transform: translateY(15px) rotate(15deg) scale(1.1);
          }
          80% {
            transform: translateY(-8px) rotate(-6deg) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) rotate(0deg) scale(1);
          }
        }

        /* 2. Stabilized 3D Floating Bobbing */
        @keyframes floatingGadget {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-24px) rotate(10deg);
          }
          100% {
            transform: translateY(20px) rotate(-10deg);
          }
        }

        /* Tooltip PopIn */
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
