import React from 'react';

export default function NerdZone({ specs = {}, gadget = {} }) {
  const gadgetTitle = gadget.name || 'Gadget Item';
  const category = gadget.category || 'Smartphones';
  const brand = gadget.brand || 'NIFTECH';

  // Helper to format keys into clean readable labels
  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .replace('Anc', 'ANC')
      .replace('Ip', 'IP')
      .replace('Dpi', 'DPI')
      .replace('Rgb', 'RGB')
      .replace('Usb', 'USB')
      .replace('Os', 'OS');
  };

  // Convert nerdZoneSpecs object into structured spec sections dynamically
  const getDynamicSections = () => {
    const rawSpecs = gadget.nerdZoneSpecs || specs || {};
    const entries = Object.entries(rawSpecs);

    if (entries.length === 0) {
      return [
        {
          category: "GENERAL SPECS",
          items: [
            { label: "Product Name", value: gadgetTitle },
            { label: "Manufacturer", value: brand },
            { label: "Product Line", value: category }
          ]
        }
      ];
    }

    // Group items into 2-3 logical categories based on total count
    const midpoint = Math.ceil(entries.length / 2);
    const section1Items = entries.slice(0, midpoint).map(([k, v]) => ({
      label: formatLabel(k),
      value: v
    }));

    const section2Items = entries.slice(midpoint).map(([k, v]) => ({
      label: formatLabel(k),
      value: v
    }));

    return [
      {
        category: category === 'Power Banks' ? 'POWER & BATTERY TELEMETRY' :
                  category === 'Earbuds & Audio' ? 'ACOUSTIC & WIRELESS SPECS' :
                  category === 'Smartphones' ? 'HARDWARE & CHIPSET MATRIX' : 'TECHNICAL SPECIFICATIONS',
        items: section1Items
      },
      {
        category: category === 'Power Banks' ? 'PORTS, CHARGING & BUILD' :
                  category === 'Earbuds & Audio' ? 'BATTERY, CASE & INGRESS' :
                  category === 'Smartphones' ? 'CAMERAS, BATTERY & SYSTEM' : 'BUILD & COMPATIBILITY',
        items: section2Items
      }
    ];
  };

  const sections = getDynamicSections();

  return (
    <div className="card-neo" style={{ backgroundColor: '#FFFFFF', border: 'var(--border-subtle)', marginBottom: '32px' }}>
      
      {/* Header Bar */}
      <div style={{ marginBottom: '20px', borderBottom: 'var(--border-subtle)', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.8rem' }}>📱</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#1A1A1A', fontFamily: 'var(--font-heading)' }}>
                Nerd Zone // {gadgetTitle} Specifications
              </h3>
              <span className="badge-neo badge-neo-lime">AUTHENTIC SPECS</span>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#666666', marginTop: '2px' }}>
              Verified technical specification sheet for {brand} {category}.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Structured Hardware Specification Table */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: '#E2DDD5', borderRadius: '12px', overflow: 'hidden', border: 'var(--border-subtle)' }}>
        {sections.map((sec, secIdx) => (
          <div key={secIdx} className="gsm-spec-row" style={{ display: 'grid', gridTemplateColumns: '170px 1fr', backgroundColor: '#FFFFFF' }}>
            
            {/* Category Column */}
            <div className="gsm-category-col" style={{ 
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
            <div style={{ padding: '0 14px' }}>
              {sec.items.map((item, itemIdx) => (
                <div key={itemIdx} className="gsm-item-row" style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '150px 1fr', 
                  padding: '12px 0', 
                  borderBottom: itemIdx < sec.items.length - 1 ? '1px solid #F0ECE4' : 'none',
                  fontSize: '0.9rem',
                  alignItems: 'baseline'
                }}>
                  <span style={{ fontWeight: '700', color: '#666666', fontSize: '0.85rem' }}>
                    {item.label}
                  </span>
                  <span style={{ color: '#1A1A1A', fontWeight: '600', lineHeight: 1.5, wordBreak: 'break-word' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
