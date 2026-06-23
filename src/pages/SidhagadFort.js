import React from 'react';
import sidhagadImg from '../assets/images/sidhagad-fort.jpg.PNG';
function SidhagadFort() {
  return (
    <div className="ksar-page">

      {/* HERO */}
      <section className="ksar-hero">
        <div className="ksar-hero-inner">
          <span className="ksar-eyebrow">Historic Trek</span>
          <h1 className="ksar-h1">Sidhagad Fort</h1>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '24px' }}>
            Ancient Mountain Fort • Just 8 km from KSAR Farms • Stunning 360° Views • Perfect Day Trek
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-outline">Book Trek</a>
            <a href="#info" className="ksar-btn ksar-btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ksar-section" id="info">
        <div className="ksar-container">
          <div className="ksar-grid-2">
            <div>
              <span className="ksar-eyebrow">About Sidhagad</span>
              <h2 className="ksar-h2">An Ancient Hilltop Fort</h2>
              <p className="ksar-lead">
                Sidhagad Fort is an ancient hilltop fortress located just 8 km from KSAR Farms. Perched at 2,100 feet
                elevation, this historic fort offers breathtaking 360-degree views of the Sahyadri mountains and surrounding valleys.
              </p>
              <p>
                The fort is believed to date back to the Maratha era and is one of the most popular trekking destinations
                near Karjat. The trek takes approximately 2-3 hours round trip and is suitable for all fitness levels.
              </p>
              <p>
                At the summit, you will find ancient structures, watch towers, and the best views in the region.
                On clear days, you can see multiple valleys and distant mountains. Sunset from the fort is particularly magical.
              </p>
              <a href="tel:+919867610525" className="ksar-btn ksar-btn-green">Book Your Trek</a>
            </div>
           <div className="feature-image">
  <img
    src={sidhagadImg}
    alt="sidhagad fort"
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

      {/* TREK HIGHLIGHTS */}
      <section className="ksar-section ksar-section-cream">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Trek Experience</span>
            <h2 className="ksar-h2">What You'll Experience</h2>
          </div>
          <div className="ksar-grid-3">
            {[
              { icon: '🏰', title: 'Historic Fort', desc: 'Explore ancient Maratha era structures and ruins' },
              { icon: '🏔️', title: 'Summit Views', desc: '360 degree panoramic views of Sahyadri mountains' },
              { icon: '🌄', title: 'Sunrise Trek', desc: 'Start early and reach summit at dawn' },
              { icon: '📸', title: 'Photography', desc: 'Capture stunning landscape and fort images' },
              { icon: '🌿', title: 'Nature Walk', desc: 'Pass through forests with diverse flora' },
              { icon: '🏞️', title: 'Scenic Lunch', desc: 'Picnic at the summit with mountain views' },
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

      {/* FAQ */}
      <section className="ksar-section">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Trek Information</span>
            <h2 className="ksar-h2">Everything You Need to Know</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'How far is Sidhagad from KSAR?', a: 'Just 8 km away! Approximately 20 minutes drive to the base. Trek itself is 3-4 hours round trip.' },
              { q: 'What is the difficulty level?', a: 'Moderate. The trail is well-defined but includes steep sections. Average fitness is recommended. Beginners welcome with guides.' },
              { q: 'How many hours does the trek take?', a: 'Base to summit takes 1-1.5 hours. With breaks and summit time, plan 3-4 hours round trip.' },
              { q: 'What is the best time to trek?', a: 'October to February for clear weather and views. Monsoon is green but slippery. Early morning is best.' },
              { q: 'What should I bring?', a: 'Water (2 liters), snacks, trekking shoes, hat, sunscreen, light clothes, camera. We provide guides and first-aid kits.' },
              { q: 'Does KSAR provide guides?', a: 'Yes! Expert guides accompany all treks. They share history, point out wildlife, and ensure safety.' },
              { q: 'Can I do a sunrise trek?', a: 'Absolutely! Early morning treks are magical. We arrange transport at 4:30 AM to reach summit by sunrise.' },
              { q: 'Is it safe for families?', a: 'Yes! Children aged 8 and above can trek with supervision. We adjust pace for families.' },
            ].map((item, idx) => (
              <div key={idx} className="ksar-faq-item">
                <div className="ksar-faq-q">{item.q}</div>
                <div className="ksar-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKING LIST */}
      <section className="ksar-section ksar-section-cream">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '48px' }}>
            <span className="ksar-eyebrow">Packing List</span>
            <h2 className="ksar-h2">Trek Essentials</h2>
          </div>
          <div className="ksar-grid-2">
            <div className="amenity-card">
              <h3 className="ksar-h3">Must Carry</h3>
              <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
                <li>2 liters water</li>
                <li>Trekking shoes (not canvas)</li>
                <li>Light shirt/tee</li>
                <li>Cap or hat</li>
                <li>Sunscreen (SPF 30+)</li>
                <li>Snacks (nuts, fruits, bars)</li>
                <li>Phone for emergencies</li>
              </ul>
            </div>
            <div className="amenity-card">
              <h3 className="ksar-h3">Nice to Have</h3>
              <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
                <li>Camera or phone</li>
                <li>Lightweight jacket</li>
                <li>Insect repellent</li>
                <li>Packed lunch/Picnic</li>
                <li>First-aid kit</li>
                <li>Headlamp (sunrise trek)</li>
                <li>Dry bags for gear</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ksar-section ksar-section-forest">
        <div className="ksar-container" style={{ maxWidth: '720px' }}>
          <span className="ksar-eyebrow" style={{ color: 'var(--ksar-gold)' }}>Ready for Adventure?</span>
          <h2 className="ksar-h2" style={{ color: 'white' }}>Trek to Sidhagad Fort</h2>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Just 8 km from KSAR Farms, this perfect day trek offers history, views, and adventure. Book your trek today!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-primary">Book Trek Now</a>
            <a href="/" className="ksar-btn ksar-btn-outline">Back to Home</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SidhagadFort;