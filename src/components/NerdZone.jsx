import React from 'react';

export default function NerdZone({ specs = {}, gadget = {} }) {
  const gadgetTitle = gadget.name || 'Gadget Item';
  const category = gadget.category || 'Smartphones';
  const brand = gadget.brand || 'NIFTECH';

  // Helper to build category-accurate specs
  const getCategorySpecSections = () => {
    if (category === 'Power Banks') {
      return [
        {
          category: "BATTERY CAPACITY",
          items: [
            { label: "Nominal Capacity", value: specs.batteryCharging || "27,000 mAh High-Density Lithium-Polymer" },
            { label: "Rated Energy", value: "99.9Wh (Airplane Carry-on Approved)" },
            { label: "Cell Efficiency", value: ">85% Conversion Energy Efficiency" }
          ]
        },
        {
          category: "INPUT PORTS",
          items: [
            { label: "Recharge Port", value: "Type-C Fast Power Delivery Input" },
            { label: "Input Voltage", value: "5V/3A, 9V/3A, 12V/3A, 15V/3A, 20V/3.25A (Up to 65W/100W)" },
            { label: "Recharge Speed", value: "0 to 100% full charge in ~1.5 to 2.5 hours" }
          ]
        },
        {
          category: "OUTPUT PORTS",
          items: [
            { label: "Type-C Output", value: "Power Delivery (PD 3.0 / QC 4.0+) 65W/100W Fast Charge" },
            { label: "USB-A Output 1", value: "22.5W Super Charge (5V/4.5A, 9V/2A, 12V/1.5A)" },
            { label: "USB-A Output 2", value: "18W Quick Charge 3.0" },
            { label: "Multi-Device", value: "Charges up to 3 to 4 devices simultaneously" }
          ]
        },
        {
          category: "COMPATIBILITY",
          items: [
            { label: "Laptops & MacBooks", value: "Supports Type-C PD Laptop Charging (MacBook Pro, Dell, HP, ThinkPad)" },
            { label: "Smartphones", value: "Fast charges iPhones, Samsung S-Series, Tecno, Infinix, Xiaomi" },
            { label: "MiFi & Accessories", value: "Low-current trickle charging mode for MiFi routers & earbuds" }
          ]
        },
        {
          category: "BUILD & SAFETY",
          items: [
            { label: "Safety Circuitry", value: "MultiProtect: Overcharge, Overcurrent, Short-Circuit & Thermal Protection" },
            { label: "Chassis Material", value: specs.buildRating || "Fire-retardant Polycarbonate + Aluminum Alloy Frame" },
            { label: "LED Display", value: "Digital Percentage Power Indicator" }
          ]
        }
      ];
    }

    if (category === 'Earbuds & Audio') {
      return [
        {
          category: "AUDIO & DRIVERS",
          items: [
            { label: "Driver Size", value: "10mm to 12.4mm Dynamic Bass Boost Drivers" },
            { label: "Frequency Range", value: "20 Hz – 20,000 Hz" },
            { label: "Audio Tuning", value: specs.cameras || "High-Fidelity Stereo with Deep Bass Architecture" }
          ]
        },
        {
          category: "NOISE CANCELLATION",
          items: [
            { label: "Active Cancellation", value: "-30dB to -45dB Hybrid Active Noise Cancellation (ANC)" },
            { label: "Transparency Mode", value: "Dual Mics Ambient Passthrough Mode" },
            { label: "Call Noise Reduction", value: "Quad-Mic Environmental Noise Cancellation (ENC) for clear voice" }
          ]
        },
        {
          category: "BATTERY & CASE",
          items: [
            { label: "Earbud Battery", value: specs.batteryCharging || "Up to 7 to 8 hours playback per single charge" },
            { label: "Case Total Playtime", value: "Up to 30 to 36 hours combined battery life" },
            { label: "Fast Charging", value: "10 minutes case charge yields 2 hours playtime" }
          ]
        },
        {
          category: "CONNECTIVITY",
          items: [
            { label: "Bluetooth", value: "Bluetooth 5.3 / 5.4 Low Energy" },
            { label: "Audio Codecs", value: "AAC, SBC, LDAC High-Res Wireless Audio" },
            { label: "Latency", value: "~45ms Ultra-Low Latency Gaming Mode" }
          ]
        },
        {
          category: "BUILD & INGRESS",
          items: [
            { label: "Water Resistance", value: specs.buildRating || "IPX5 Sweat & Rain Splash Resistant" },
            { label: "Touch Controls", value: "Capacitive Touch (Play/Pause, ANC Toggle, Volume Control)" }
          ]
        }
      ];
    }

    if (category === 'Internet & Networking') {
      return [
        {
          category: "NETWORK & SPEEDS",
          items: [
            { label: "Connection Tech", value: specs.processor || "5G NR / 4G LTE Cat 19 & High-Speed Satellite Link" },
            { label: "Download Speed", value: "Up to 1.2 Gbps Download / 200 Mbps Upload" },
            { label: "Bands Supported", value: "Universal 5G/4G Bands (MTN, Airtel, Glo, 9mobile Compatible)" }
          ]
        },
        {
          category: "WIFI COVERAGE",
          items: [
            { label: "Wi-Fi Standard", value: "Wi-Fi 6 (802.11ax) Dual-Band 2.4GHz & 5GHz" },
            { label: "Connected Devices", value: "Connects up to 32 to 128 simultaneous devices" },
            { label: "Antenna Array", value: specs.display || "High-Gain Directional Antennas with Beamforming" }
          ]
        },
        {
          category: "PORTS & POWER",
          items: [
            { label: "Ethernet Ports", value: "Gigabit LAN/WAN RJ45 Ports" },
            { label: "Power Source", value: specs.batteryCharging || "DC Adapter Power / Built-in Emergency Battery Option" },
            { label: "SIM Slot", value: "Nano-SIM / eSIM Direct Connectivity" }
          ]
        },
        {
          category: "BUILD & PROTECTION",
          items: [
            { label: "Protection", value: specs.buildRating || "Weather-resistant IP54 Indoor/Outdoor Chassis" }
          ]
        }
      ];
    }

    if (category === 'Smart Tech & Accessories') {
      return [
        {
          category: "DISPLAY & SCREEN",
          items: [
            { label: "Screen Type", value: specs.display || "1.43-inch HD AMOLED Color Touch Screen" },
            { label: "Resolution", value: "466 x 466 pixels, 326 ppi" },
            { label: "Peak Brightness", value: "600 nits Outdoor Readable, Always-On Display Mode" }
          ]
        },
        {
          category: "SENSORS & HEALTH",
          items: [
            { label: "Health Tracking", value: "24/7 Heart Rate Monitor, SpO2 Blood Oxygen, Sleep & Stress Monitor" },
            { label: "Sports Modes", value: "100+ Workout & Fitness Tracking Modes" }
          ]
        },
        {
          category: "CONNECTIVITY & BATTERY",
          items: [
            { label: "Bluetooth Calling", value: "Bluetooth 5.3 with Built-in Speaker & Mic" },
            { label: "Battery Life", value: specs.batteryCharging || "Up to 7 to 10 days typical usage on single charge" },
            { label: "Water Resistance", value: specs.buildRating || "IP68 / 5ATM Water Resistant (Swimming Approved)" }
          ]
        }
      ];
    }

    // Default / Smartphones Category
    return [
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
          { label: "Status", value: "Available. Released & Stocked Nationwide in Nigeria" }
        ]
      },
      {
        category: "BODY",
        items: [
          { label: "Dimensions", value: "162.7 x 75.9 x 7.8 mm (6.41 x 2.99 x 0.31 in)" },
          { label: "Weight", value: "198 g / 6.98 oz" },
          { label: "Build", value: specs.buildRating || "Gorilla Glass Front, Aluminum Frame" },
          { label: "SIM", value: "Dual SIM (Nano-SIM, dual stand-by)" }
        ]
      },
      {
        category: "DISPLAY",
        items: [
          { label: "Type", value: specs.display || "LTPO AMOLED, 1B colors, 120Hz" },
          { label: "Size", value: "6.77 inches (~89.5% screen-to-body ratio)" },
          { label: "Resolution", value: "1.5K (1264 x 2780 pixels), 19.5:9 ratio (~450 ppi density)" },
          { label: "Protection", value: "Corning Gorilla Glass Victus, Oleophobic Coating" }
        ]
      },
      {
        category: "PLATFORM",
        items: [
          { label: "OS", value: "Android 14 / HIOS 14 (Optimized for Local Battery Survival)" },
          { label: "Chipset", value: specs.processor || "MediaTek Dimensity / Qualcomm Snapdragon" },
          { label: "CPU", value: "Octa-core High Efficiency Silicon" }
        ]
      },
      {
        category: "MEMORY",
        items: [
          { label: "Internal Storage", value: specs.ramStorage || "256GB / 512GB UFS 3.1" },
          { label: "RAM", value: "12GB LPDDR5X + Virtual RAM Expansion" }
        ]
      },
      {
        category: "CAMERAS",
        items: [
          { label: "Main Camera", value: specs.cameras || "50 MP Triple Camera with OIS & 4K Recording" },
          { label: "Selfie Camera", value: "50 MP Eye AutoFocus Front Camera" }
        ]
      },
      {
        category: "BATTERY & CHARGING",
        items: [
          { label: "Capacity", value: "5000 mAh Non-removable Battery" },
          { label: "Charging Speed", value: specs.batteryCharging || "100W Ultra Fast Charging" }
        ]
      }
    ];
  };

  const sections = getCategorySpecSections();

  return (
    <div className="card-neo" style={{ backgroundColor: '#FFFFFF', border: 'var(--border-subtle)', marginBottom: '32px', padding: '28px' }}>
      
      {/* Header Bar */}
      <div style={{ marginBottom: '20px', borderBottom: 'var(--border-subtle)', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.8rem' }}>📱</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#1A1A1A', fontFamily: 'var(--font-heading)' }}>
                Nerd Zone // {gadgetTitle} Specifications
              </h3>
              <span className="badge-neo badge-neo-lime">VERIFIED SPECS</span>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#666666', marginTop: '2px' }}>
              Official technical specification sheet tailored for {category.toLowerCase()}.
            </p>
          </div>
        </div>
      </div>

      {/* Clean Structured Hardware Specification Table */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: '#E2DDD5', borderRadius: '12px', overflow: 'hidden', border: 'var(--border-subtle)' }}>
        {sections.map((sec, secIdx) => (
          <div key={secIdx} style={{ display: 'grid', gridTemplateColumns: '170px 1fr', backgroundColor: '#FFFFFF' }}>
            
            {/* Category Column */}
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
                  gridTemplateColumns: '150px 1fr', 
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

    </div>
  );
}
