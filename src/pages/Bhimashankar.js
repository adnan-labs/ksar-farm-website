/* =============================================
   BHIMASHANKAR PAGE
   Place this in: src/pages/Bhimashankar.js
   ============================================= */

import React from 'react';
import bhimashankarImg from '../assets/images/bhimashankar.png.jpeg';
function Bhimashankar() {
  return (
    <div className="ksar-page">
      {/* ============================================= 
          HERO SECTION 
          ============================================= */}
      <section className="ksar-hero">
        <div className="ksar-hero-inner">
          <span className="ksar-eyebrow">Sacred Pilgrimage</span>
          <h1 className="ksar-h1">Bhimashankar Temple</h1>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '24px' }}>
            One of 12 Jyotirlingas • 35 km from KSAR Farms • Ancient Hindu Temple • Sahyadri Mountains
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-outline">
              📞 Plan Your Visit
            </a>
            <a href="#info" className="ksar-btn ksar-btn-outline">
              Learn More ↓
            </a>
          </div>
        </div>
      </section>

      {/* ============================================= 
          ABOUT SECTION 
          ============================================= */}
      <section className="ksar-section" id="info">
        <div className="ksar-container">
          <div className="ksar-grid-2">
            <div>
              <span className="ksar-eyebrow">About Bhimashankar</span>
              <h2 className="ksar-h2">One of India's Most Sacred Temples</h2>
              <p className="ksar-lead">
                Bhimashankar is one of the 12 sacred Jyotirlingas of Lord Shiva in India. Located in the Sahyadri mountains, 
                just 35 km from KSAR Farms, this ancient temple is a major pilgrimage destination attracting thousands of devotees.
              </p>
              <p>
                The temple sits at an elevation of 1200 meters, surrounded by lush forests and the pristine Bhima River. 
                The spiritual energy and natural beauty make it a perfect destination for both pilgrims and nature lovers.
              </p>
              <p>
                Many KSAR Farms guests combine their stay with a visit to Bhimashankar Temple, making it a memorable spiritual experience.
              </p>
              <a href="tel:+919867610525" className="ksar-btn ksar-btn-green">
                Book & Visit
              </a>
            </div>
           <div className="feature-image">
  <img
    src={bhimashankarImg}
    alt="Bhimashankar"
    style={{
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '4px'
    }}
  />
</div>
          </div>
        </div>
      </section>

      {/* ============================================= 
          KEY FEATURES 
          ============================================= */}
      <section className="ksar-section ksar-section-cream">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">What to Experience</span>
            <h2 className="ksar-h2">Highlights of Bhimashankar</h2>
          </div>

          <div className="ksar-grid-3">
            {[
              { icon: '⛩️', title: 'Ancient Temple', desc: 'One of 12 Jyotirlingas - sacred shrine of Lord Shiva' },
              { icon: '🌲', title: 'Nature Trek', desc: 'Beautiful 2 km forest walk to reach the temple' },
              { icon: '🏞️', title: 'Scenic Views', desc: 'Panoramic views of Sahyadri mountains and valleys' },
              { icon: '🙏', title: 'Spiritual Energy', desc: 'Feel the divine presence at this pilgrimage site' },
              { icon: '💧', title: 'Bhima River', desc: 'Sacred river flowing through the valley' },
              { icon: '📸', title: 'Photography', desc: 'Stunning photo opportunities at every turn' }
            ].map((feature, idx) => (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon">{feature.icon}</div>
                <h3 className="ksar-h3">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= 
          PRACTICAL INFO 
          ============================================= */}
      <section className="ksar-section">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Plan Your Visit</span>
            <h2 className="ksar-h2">Practical Information</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'How far from KSAR Farms?', a: 'Bhimashankar is 35 km away, approximately 1 hour drive from KSAR Farms via scenic routes.' },
              { q: 'What is the best time to visit?', a: 'October to February (winter) is ideal with cool weather. Monsoon months see heavy rainfall but also beautiful waterfalls.' },
              { q: 'Is there an entry fee?', a: 'Entry to the temple is free. Parking is ₹20-30. Prasad (blessed offering) donations are optional.' },
              { q: 'How long does a visit take?', a: 'Plan 3-4 hours including travel, forest walk, darshan (prayers), and exploring the temple complex.' },
              { q: 'Is the trek difficult?', a: 'The trek is easy to moderate - 2 km uphill walk through forest. Anyone with basic fitness can do it.' },
              { q: 'Can KSAR arrange transport?', a: 'Yes! Contact us and we can arrange vehicles, guides, and make it a memorable pilgrimage experience.' }
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
          CTA SECTION 
          ============================================= */}
      <section className="ksar-section ksar-section-forest">
        <div className="ksar-container" style={{ maxWidth: '720px' }}>
          <span className="ksar-eyebrow" style={{ color: 'var(--ksar-gold)' }}>Ready for a Pilgrimage?</span>
          <h2 className="ksar-h2" style={{ color: 'white' }}>Plan Your Spiritual Journey</h2>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Combine your stay at KSAR Farms with a visit to the sacred Bhimashankar Temple. We'll handle the transportation and make it unforgettable.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-primary">
              📞 Book & Plan
            </a>
            <a href="/" className="ksar-btn ksar-btn-outline">
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bhimashankar;