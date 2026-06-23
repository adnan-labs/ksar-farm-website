/* =============================================
   HOME PAGE COMPONENT
   Place this in: src/pages/Home.js
   ============================================= */

import React from 'react';
import '../styles/home.css';

function Home() {
  return (
    <div className="ksar-page">
      {/* ============================================= 
          SECTION 1: HERO 
          ============================================= */}
      <section className="ksar-hero">
        <div className="ksar-hero-inner">
          <span className="ksar-eyebrow">Welcome to Paradise</span>
          <h1 className="ksar-h1">Escape to Nature. Farm. Relax.</h1>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '24px' }}>
            92 km from Mumbai • 29 acres • 32+ Waterfalls • Organic Farm • Swimming Pools
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-outline">
              📞 Call to Book
            </a>
            <a href="#features" className="ksar-btn ksar-btn-outline">
              Explore More ↓
            </a>
          </div>
        </div>
      </section>

      {/* ============================================= 
          SECTION 2: QUICK HIGHLIGHTS 
          ============================================= */}
      <section className="ksar-section" id="features">
        <div className="ksar-container">
          <div className="ksar-grid-4">
            {[
              { number: '92 KM', label: 'From Mumbai' },
              { number: '29', label: 'Acres of Nature' },
              { number: '32+', label: 'Waterfalls' },
              { number: '31', label: 'Guest Capacity' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= 
          SECTION 3: ABOUT KSAR FARMS 
          ============================================= */}
      <section className="ksar-section ksar-section-cream">
        <div className="ksar-container">
          <div className="ksar-grid-2">
            <div>
              <span className="ksar-eyebrow">Our Story</span>
              <h2 className="ksar-h2">A Farm, a Home, a Sanctuary</h2>
              <p className="ksar-lead">
                KSAR Farms is the best farmhouse in Karjat—a 29-acre gated paradise 92 km from Mumbai. 
                Surrounded by the Sahyadri mountain range, we blend luxury stays with organic farming, 
                nature immersion, and adventure.
              </p>
              <p>
                Whether you're seeking a weekend escape, family reunion, corporate retreat, or camping 
                under stars, KSAR Farms offers the perfect balance of comfort and authentic farm life.
              </p>
              <p>
                Our mission: connect you to nature, organic living, and memories that last forever.
              </p>
              <a href="#booking" className="ksar-btn ksar-btn-green">
                Start Your Adventure
              </a>
            </div>
            <div className="feature-image">
              <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #5A7A4A 0%, #2C4A2E 100%)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px' }}>
                🌾 Farm Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= 
          SECTION 4: AMENITIES & FACILITIES 
          ============================================= */}
      <section className="ksar-section">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">What Awaits</span>
            <h2 className="ksar-h2">World-Class Amenities</h2>
          </div>

          <div className="ksar-grid-3">
            {[
              { icon: '🏊‍♂️', title: 'Swimming Pools', desc: 'Private pool, kids mini pool, and 3 lakh litre agri pool' },
              { icon: '🌾', title: 'Organic Farm', desc: 'Walk through 2 acres of mangoes, cashews, and seasonal vegetables' },
              { icon: '⛺', title: 'Camping Zone', desc: 'Experience nature under stars with 10-guest capacity' },
              { icon: '🔥', title: 'BBQ & Bonfire', desc: 'Live BBQ dinners and cozy bonfires every evening' },
              { icon: '🏛️', title: 'Adventure Ready', desc: 'Trek to Sidhagad Fort and explore 32+ waterfalls' },
              { icon: '⚡', title: 'Eco-Friendly', desc: 'Solar power and sustainable farming practices' }
            ].map((amenity, idx) => (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon">{amenity.icon}</div>
                <h3 className="ksar-h3">{amenity.title}</h3>
                <p>{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= 
          SECTION 5: ATTRACTIONS NEARBY 
          ============================================= */}
      <section className="ksar-section ksar-section-forest">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px', color: 'white' }}>
            <span className="ksar-eyebrow" style={{ color: 'var(--ksar-gold)' }}>Explore Around</span>
            <h2 className="ksar-h2" style={{ color: 'white' }}>Famous Attractions Near KSAR</h2>
          </div>

          <div className="ksar-grid-3">
            {[
              { title: 'Bhimashankar Temple', distance: '35 km away', emoji: '⛩️' },
              { title: 'Sidhagad Fort Trek', distance: '8 km away', emoji: '🏔️' },
              { title: 'Sahyadri Waterfalls', distance: 'On our property', emoji: '💧' }
            ].map((attraction, idx) => (
              <div key={idx} className="attraction-card">
                <div className="attraction-emoji">{attraction.emoji}</div>
                <h3 style={{ color: 'white', marginBottom: '8px' }}>{attraction.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>{attraction.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= 
          SECTION 6: FAQ 
          ============================================= */}
      <section className="ksar-section">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Have Questions?</span>
            <h2 className="ksar-h2">Frequently Asked Questions</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'How far is KSAR Farms from Mumbai?', a: 'KSAR Farms is 92 km from Mumbai, approximately 2 hours 15 minutes drive via NH 548 (Pune Highway).' },
              { q: 'What is the capacity?', a: 'We can accommodate 21 guests indoors (villa + cottage) and 10 in camping, total 31 people.' },
              { q: 'Is there a swimming pool?', a: 'Yes! We have a private pool, kids mini pool, and a 3 lakh litre agricultural pool.' },
              { q: 'What\'s the best time to visit?', a: 'Monsoon (June-Sept) for 32+ waterfalls, Winter (Oct-Feb) for trekking, Summer for pool time.' },
              { q: 'Can I do a day visit?', a: 'Yes! Day packages include pool access, farm walk, BBQ lunch, and sports area.' },
              { q: 'How do I book?', a: 'Call +91 9867610525 or +91 8652034820 for custom packages and pricing.' }
            ].map((item, idx) => (
              <div key={idx} className="ksar-faq-item">
                <div className="ksar-faq-q">{item.q}</div>
                <div className="ksar-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= 
          SECTION 7: BOOKING CTA 
          ============================================= */}
      <section className="ksar-section ksar-section-dark" id="booking">
        <div className="ksar-container" style={{ maxWidth: '720px' }}>
          <span className="ksar-eyebrow" style={{ color: 'var(--ksar-gold)' }}>Ready to Escape?</span>
          <h2 className="ksar-h2" style={{ color: 'white' }}>Book Your Stay at the Best Farmhouse in Karjat</h2>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Whether it's a romantic getaway, family reunion, or corporate retreat—KSAR Farms is 92 km away and waiting. Weekends fill fast.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-primary">
              📞 Call to Book
            </a>
            <a href="mailto:info@ksarfarms.com" className="ksar-btn ksar-btn-outline">
              ✉️ Email Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;