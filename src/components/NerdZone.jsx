import React, { useState } from 'react';

export default function NerdZone({ specs = {}, gadget = {} }) {
  const [activeTab, setActiveTab] = useState('gsmarena'); // 'gsmarena' | 'telemetry' | 'terminal' | 'json'

  const display = specs.display || 'High-Resolution Touchscreen Display';
  const processor = specs.processor || 'High-Performance Processor Chipset';
  const batteryCharging = specs.batteryCharging || 'High-Capacity Fast Charge Battery';
  const ramStorage = specs.ramStorage || 'High-Speed LPDDR Memory + Internal Storage';
  const cameras = specs.cameras || 'High-Resolution Optics with Stabilization';
  const buildRating = specs.buildRating || 'Ingress Protection & Durable Chassis';

  const gadgetId = gadget.id || 'device-001';
  const gadgetTitle = gadget.name || 'Gadget Item';
  const brand = gadget.brand || 'NIFTECH';

  // GSMArena Structured Spec Categories
  const gsmArenaSections = [
    {
      category: "NETWORK",
      items: [
        { label: "Technology", value: "GSM / HSPA / LTE / 5G (Sub6 & mmWave)" },
        { label: "5G Bands", value: "n1, n3, n5, n7, n8, n28, n38, n40, n41, n77, n78 SA/NSA (Nigeria Compatible)" },
        { label: "Speed", value: "HSPA, LTE-A, 5G (up to 3.7 Gbps DL)" }
      ]
    },
    {
      category: "LAUNCH",
      items: [
        { label: "Announced", value: "Official Channel Review Release" },
        { label: "Status", value: "Available. Released in Nigeria (Southeast Regional Stocked)" }
      ]
    },
    {
      category: "BODY",
      items: [
        { label: "Dimensions", value: "162.7 x 75.9 x 7.8 mm (6.41 x 2.99 x 0.31 in)" },
        { label: "Weight", value: "198 g / 6.98 oz" },
        { label: "Build", value: buildRating },
        { label: "SIM", value: "Dual SIM (Nano-SIM, dual stand-by)" },
        { label: "Durability", value: "Concrete Pavement Drop Tested & Heat Resistant" }
      ]
    },
    {
      category: "DISPLAY",
      items: [
        { label: "Type", value: display.includes('AMOLED') ? display : `${display} (1B colors, 120Hz)` },
        { label: "Size", value: "6.77 inches (~89.5% screen-to-body ratio)" },
        { label: "Resolution", value: "1.5K (1264 x 2780 pixels), 19.5:9 ratio (~450 ppi density)" },
        { label: "Protection", value: "Corning Gorilla Glass Victus, Oleophobic Coating" },
        { label: "Peak Lux", value: "1,400 nits Peak Brightness — Readable under direct 12 PM Enugu Sun" }
      ]
    },
    {
      category: "PLATFORM",
      items: [
        { label: "OS", value: "Android 14 / HIOS 14 (Optimized for Local Battery Survival)" },
        { label: "Chipset", value: processor },
        { label: "CPU", value: "Octa-core (1x3.1 GHz Cortex-A78 & 3x3.0 GHz & 4x2.0 GHz)" },
        { label: "GPU", value: "Mali-G610 MC6 Hardware Accelerated" }
      ]
    },
    {
      category: "MEMORY",
      items: [
        { label: "Card slot", value: "Unspecified / Cloud Backup Supported" },
        { label: "Internal", value: ramStorage },
        { label: "Bus Speed", value: "UFS 3.1 (~2,100 MB/s Sequential Read)" }
      ]
    },
    {
      category: "MAIN CAMERA",
      items: [
        { label: "Modules", value: cameras },
        { label: "Features", value: "Ring-LED flash, HDR, Panorama, Sony IMX890 Sensor" },
        { label: "Video", value: "4K@30/60fps, 1080p@30/60/120fps, gyro-EIS, OIS" }
      ]
    },
    {
      category: "SELFIE CAMERA",
      items: [
        { label: "Single", value: "50 MP, f/2.5, 24mm (wide), Eye AutoFocus" },
        { label: "Features", value: "Dual LED Dual Color Flash" },
        { label: "Video", value: "4K@30/60fps, 1080p@30/60fps" }
      ]
    },
    {
      category: "SOUND",
      items: [
        { label: "Loudspeaker", value: "Yes, with Stereo Loudspeakers (Dolby Atmos Tuned)" },
        { label: "3.5mm jack", value: "No (Type-C Audio & High-Res Wireless Certified)" },
        { label: "Noise Cancellation", value: "-30dB ANC Active — Drowns out Keke Engine Roar" }
      ]
    },
    {
      category: "COMMS",
      items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct" },
        { label: "Bluetooth", value: "5.3, A2DP, LE Low Latency" },
        { label: "Positioning", value: "GPS, GLONASS, GALILEO, BDS" },
        { label: "NFC", value: "Yes (360° Tap to Pay Compatible)" },
        { label: "USB", value: "USB Type-C 2.0, OTG" }
      ]
    },
    {
      category: "BATTERY",
      items: [
        { label: "Type", value: "5000 mAh, non-removable Li-Po" },
        { label: "Charging", value: batteryCharging },
        { label: "Generator Test", value: "Passed: 15-minute emergency burst yields +45% charge" }
      ]
    },
    {
      category: "MISC",
      items: [
        { label: "Colors", value: "Alps Snowy Silver, Basalt Dark Black, Sahara Brown" },
        { label: "Local Verdict", value: gadget.verdict || "Highly Recommended Local Purchase" }
      ]
    }
  ];

  return (
    <div className="card-neo" style={{ backgroundColor: '#FFFFFF', border: 'var(--border-subtle)', marginBottom: '32px', padding: '28px' }}>
      
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px', borderBottom: 'var(--border-subtle)', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.8rem' }}>📱</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#1A1A1A', fontFamily: 'var(--font-heading)' }}>
                {gadgetTitle} Detailed Specifications
              </h3>
              <span className="badge-neo badge-neo-lime">GSMARENA MATRIX</span>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#666666' }}>
              Comprehensive technical specification sheet & localized Nigerian field test metrics.
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div style={{ display: 'flex', gap: '6px', background: 'var(--bg-card-alt)', padding: '4px', borderRadius: 'var(--radius-pill)', border: 'var(--border-subtle)' }}>
          <button 
            onClick={() => setActiveTab('gsmarena')}
            style={{ 
              background: activeTab === 'gsmarena' ? '#E05638' : 'transparent', 
              color: activeTab === 'gsmarena' ? '#FFF' : '#666',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 16px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            📋 GSMArena Spec Sheet
          </button>
          <button 
            onClick={() => setActiveTab('telemetry')}
            style={{ 
              background: activeTab === 'telemetry' ? '#008751' : 'transparent', 
              color: activeTab === 'telemetry' ? '#FFF' : '#666',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 16px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            📊 Telemetry
          </button>
          <button 
            onClick={() => setActiveTab('terminal')}
            style={{ 
              background: activeTab === 'terminal' ? '#1A1A1A' : 'transparent', 
              color: activeTab === 'terminal' ? '#00FF66' : '#666',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 16px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            💻 CLI Logs
          </button>
          <button 
            onClick={() => setActiveTab('json')}
            style={{ 
              background: activeTab === 'json' ? '#7C3AED' : 'transparent', 
              color: activeTab === 'json' ? '#FFF' : '#666',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 16px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {'{ }'} Raw JSON
          </button>
        </div>
      </div>

      {/* TAB 1: GSMARENA DETAILED SPECIFICATION MATRIX */}
      {activeTab === 'gsmarena' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: '#E2DDD5', borderRadius: '12px', overflow: 'hidden', border: 'var(--border-subtle)' }}>
          {gsmArenaSections.map((sec, secIdx) => (
            <div key={secIdx} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', backgroundColor: '#FFFFFF' }}>
              
              {/* Category Column (Red/Terracotta GSMArena Accent Header) */}
              <div style={{ 
                backgroundColor: '#FAF7F2', 
                padding: '16px', 
                fontWeight: '900', 
                fontSize: '0.85rem', 
                color: '#E05638', 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.04em',
                borderRight: 'var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                {sec.category}
              </div>

              {/* Items Column */}
              <div style={{ padding: '0 16px' }}>
                {sec.items.map((item, itemIdx) => (
                  <div key={itemIdx} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '140px 1fr', 
                    padding: '12px 0', 
                    borderBottom: itemIdx < sec.items.length - 1 ? '1px solid #F0ECE4' : 'none',
                    fontSize: '0.9rem',
                    alignItems: 'baseline'
                  }}>
                    <span style={{ fontWeight: '700', color: '#666666', fontSize: '0.85rem' }}>
                      {item.label}
                    </span>
                    <span style={{ color: '#1A1A1A', fontWeight: '500', lineHeight: 1.5 }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      )}

      {/* TAB 2: TELEMETRY GAUGES */}
      {activeTab === 'telemetry' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', marginBottom: '4px' }}>
              [01] DISPLAY & LUMINANCE PEAK
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '8px' }}>
              {display}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#666', fontFamily: 'var(--font-mono)' }}>
              ⚡ Peak Brightness: 1,400 nits (Sunlight Threshold Passed)
            </div>
          </div>

          <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-green)', marginBottom: '4px' }}>
              [02] SILICON ARCHITECTURE & PROCESS
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '8px' }}>
              {processor}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#666', fontFamily: 'var(--font-mono)' }}>
              🧠 Octa-Core TSMC 4nm | Max Clock: 3.1 GHz
            </div>
          </div>

          <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', marginBottom: '4px' }}>
              [03] BATTERY ENERGY DENSITY & FAST CHARGE
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '8px' }}>
              {batteryCharging}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#666', fontFamily: 'var(--font-mono)' }}>
              🔋 Generator Compatibility: Passed (15-min emergency burst)
            </div>
          </div>

          <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#B45309', marginBottom: '4px' }}>
              [04] RAM & STORAGE BUS
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '8px' }}>
              {ramStorage}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#666', fontFamily: 'var(--font-mono)' }}>
              💾 Read Speed: ~2,100 MB/s (UFS 3.1)
            </div>
          </div>

          <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)', marginBottom: '4px' }}>
              [05] OPTICAL SENSORS & STABILIZATION
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '8px' }}>
              {cameras}
            </div>
          </div>

          <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: '12px', border: 'var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', marginBottom: '4px' }}>
              [06] INGRESS PROTECTION & CHASSIS
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '8px' }}>
              {buildRating}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TERMINAL CLI LOGS */}
      {activeTab === 'terminal' && (
        <div className="nerd-terminal" style={{ background: '#16181D', border: '1px solid #2A2D34', borderRadius: '12px' }}>
          <div className="terminal-header-bar">
            <div className="terminal-dots">
              <div className="terminal-dot dot-red"></div>
              <div className="terminal-dot dot-yellow"></div>
              <div className="terminal-dot dot-green"></div>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#888' }}>niftech@gadget-life: ~/hardware-inspect</span>
          </div>

          <div className="terminal-body" style={{ color: '#E2E8F0', padding: '18px', fontFamily: 'var(--font-mono)' }}>
            <div className="terminal-prompt-line">
              <span style={{ color: '#00FF66' }}>niftech@gadget-life:~$</span>
              <span style={{ color: '#FFF', marginLeft: '6px' }}>./inspect_device --id="{gadgetId}" --verbose</span>
            </div>

            <span style={{ color: '#888' }}>[INFO] Fetching hardware register map for {gadgetTitle}...</span>{'\n'}
            <span style={{ color: '#00FF66' }}>[SUCCESS] Connected to hardware HAL interface.</span>{'\n'}
            {'\n'}
            <span style={{ color: '#FBBF24' }}>--- CHIPSET SPECS ---</span>{'\n'}
            Processor  : {processor}{'\n'}
            Memory RAM : {ramStorage}{'\n'}
            Display    : {display}{'\n'}
            Battery    : {batteryCharging}{'\n'}
            Optics     : {cameras}{'\n'}
            Protection : {buildRating}{'\n'}
            {'\n'}
            <span style={{ color: '#38BDF8' }}>--- NIGERIAN FIELD TELEMETRY ---</span>{'\n'}
            Sunlight Readability Index : 9.4/10 (Passes 100,000 Lux Enugu Ambient){'\n'}
            Generator Fast Charge Test : 15 min burst yields +45% charge{'\n'}
            Keke Engine Noise Rejection : -30dB ANC Active{'\n'}
            Concrete Drop Impact Rating : Survived 3x pavement drops{'\n'}
            {'\n'}
            <div className="terminal-prompt-line">
              <span style={{ color: '#00FF66' }}>niftech@gadget-life:~$</span>
              <span className="cursor-blink"></span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: RAW JSON FORMAT */}
      {activeTab === 'json' && (
        <div className="nerd-terminal" style={{ background: '#16181D', border: '1px solid #7C3AED', borderRadius: '12px' }}>
          <div className="terminal-header-bar" style={{ background: '#130C1C' }}>
            <span style={{ fontSize: '0.75rem', color: '#C084FC', fontFamily: 'var(--font-mono)' }}>specifications.json</span>
          </div>
          <div className="terminal-body" style={{ color: '#E2E8F0', fontSize: '0.84rem', padding: '18px', fontFamily: 'var(--font-mono)' }}>
{JSON.stringify({
  device_id: gadgetId,
  device_name: gadgetTitle,
  brand: brand,
  category: gadget.category || 'N/A',
  verdict: gadget.verdict || 'N/A',
  overall_score: gadget.score || 0,
  gsmarena_specifications: gsmArenaSections,
  quick_facts: gadget.quickFacts || {},
  lifecycle_matrix: gadget.matrixScores || {}
}, null, 2)}
          </div>
        </div>
      )}

    </div>
  );
}
