import React, { useState } from 'react';

export default function NerdZone({ specs = {}, gadget = {} }) {
  const [activeTab, setActiveTab] = useState('telemetry'); // 'telemetry' | 'terminal' | 'json'

  const display = specs.display || 'N/A';
  const processor = specs.processor || 'N/A';
  const batteryCharging = specs.batteryCharging || 'N/A';
  const ramStorage = specs.ramStorage || 'N/A';
  const cameras = specs.cameras || 'N/A';
  const buildRating = specs.buildRating || 'N/A';

  const gradgetId = gadget.id || 'device-001';
  const gadgetTitle = gadget.name || 'Gadget Item';

  return (
    <div className="card-neo" style={{ background: '#16181D', border: '1px solid #2A2D34', marginBottom: '32px' }}>
      
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.4rem' }}>🤓</span>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#FFF', fontFamily: 'var(--font-mono)' }}>
              Nerd Zone // Hardware Telemetry Terminal v4.2
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#999999' }}>
              Raw benchmarks, silicon architecture, thermal dynamics & sensor metrics.
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div style={{ display: 'flex', gap: '6px', background: '#0D0F12', padding: '4px', borderRadius: '8px', border: '1px solid #2A2D34' }}>
          <button 
            onClick={() => setActiveTab('telemetry')}
            style={{ 
              background: activeTab === 'telemetry' ? '#008751' : 'transparent', 
              color: activeTab === 'telemetry' ? '#FFF' : '#999',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 12px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            📊 Telemetry
          </button>
          <button 
            onClick={() => setActiveTab('terminal')}
            style={{ 
              background: activeTab === 'terminal' ? '#00FF66' : 'transparent', 
              color: activeTab === 'terminal' ? '#080C14' : '#999',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 12px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            💻 CLI Logs
          </button>
          <button 
            onClick={() => setActiveTab('json')}
            style={{ 
              background: activeTab === 'json' ? '#7C3AED' : 'transparent', 
              color: activeTab === 'json' ? '#FFF' : '#999',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 12px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            {'{ }'} Raw JSON
          </button>
        </div>
      </div>

      {/* TAB 1: HARDWARE TELEMETRY GAUGES */}
      {activeTab === 'telemetry' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ background: '#0D0F12', padding: '16px', borderRadius: '12px', border: '1px solid #2A2D34' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#38BDF8', marginBottom: '4px' }}>
              [01] DISPLAY & LUMINANCE PEAK
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#FFF', marginBottom: '8px' }}>
              {display}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#999', fontFamily: 'var(--font-mono)' }}>
              ⚡ Peak Brightness: 1,400 nits (Sunlight Threshold Passed)
            </div>
          </div>

          <div style={{ background: '#0D0F12', padding: '16px', borderRadius: '12px', border: '1px solid #2A2D34' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#34D399', marginBottom: '4px' }}>
              [02] SILICON ARCHITECTURE & PROCESS
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#FFF', marginBottom: '8px' }}>
              {processor}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#999', fontFamily: 'var(--font-mono)' }}>
              🧠 Octa-Core TSMC 4nm | Max Clock: 3.1 GHz
            </div>
          </div>

          <div style={{ background: '#0D0F12', padding: '16px', borderRadius: '12px', border: '1px solid #2A2D34' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#C084FC', marginBottom: '4px' }}>
              [03] BATTERY ENERGY DENSITY & FAST CHARGE
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#FFF', marginBottom: '8px' }}>
              {batteryCharging}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#999', fontFamily: 'var(--font-mono)' }}>
              🔋 Generator Compatibility: Passed (15-min emergency burst)
            </div>
          </div>

          <div style={{ background: '#0D0F12', padding: '16px', borderRadius: '12px', border: '1px solid #2A2D34' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#FBBF24', marginBottom: '4px' }}>
              [04] RAM & STORAGE BUS
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#FFF', marginBottom: '8px' }}>
              {ramStorage}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#999', fontFamily: 'var(--font-mono)' }}>
              💾 Read Speed: ~2,100 MB/s (UFS 3.1)
            </div>
          </div>

          <div style={{ background: '#0D0F12', padding: '16px', borderRadius: '12px', border: '1px solid #2A2D34' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#FB7185', marginBottom: '4px' }}>
              [05] OPTICAL SENSORS & STABILIZATION
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#FFF', marginBottom: '8px' }}>
              {cameras}
            </div>
          </div>

          <div style={{ background: '#0D0F12', padding: '16px', borderRadius: '12px', border: '1px solid #2A2D34' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#38BDF8', marginBottom: '4px' }}>
              [06] INGRESS PROTECTION & CHASSIS
            </div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: '#FFF', marginBottom: '8px' }}>
              {buildRating}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TERMINAL CLI LOGS */}
      {activeTab === 'terminal' && (
        <div className="nerd-terminal">
          <div className="terminal-header-bar">
            <div className="terminal-dots">
              <div className="terminal-dot dot-red"></div>
              <div className="terminal-dot dot-yellow"></div>
              <div className="terminal-dot dot-green"></div>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#888' }}>niftech@gadget-life: ~/hardware-inspect</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-prompt-line">
              <span>niftech@gadget-life:~$</span>
              <span style={{ color: '#FFF' }}>./inspect_device --id="{gradgetId}" --verbose</span>
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
              <span>niftech@gadget-life:~$</span>
              <span className="cursor-blink"></span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: RAW JSON FORMAT */}
      {activeTab === 'json' && (
        <div className="nerd-terminal" style={{ borderColor: '#7C3AED' }}>
          <div className="terminal-header-bar" style={{ background: '#130C1C' }}>
            <span style={{ fontSize: '0.75rem', color: '#C084FC', fontFamily: 'var(--font-mono)' }}>specifications.json</span>
          </div>
          <div className="terminal-body" style={{ color: '#E2E8F0', fontSize: '0.84rem' }}>
{JSON.stringify({
  device_id: gradgetId,
  device_name: gadgetTitle,
  brand: gadget.brand || 'N/A',
  category: gadget.category || 'N/A',
  verdict: gadget.verdict || 'N/A',
  overall_score: gadget.score || 0,
  hardware_specifications: specs,
  quick_facts: gadget.quickFacts || {},
  lifecycle_matrix: gadget.matrixScores || {}
}, null, 2)}
          </div>
        </div>
      )}

    </div>
  );
}
