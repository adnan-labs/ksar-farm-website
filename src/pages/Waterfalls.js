import React from 'react';
import karjatImg from '../assets/images/karjat-waterfall.jpg.PNG';
function Waterfalls() {
  return (
    <div className="ksar-page">

      {/* HERO */}
      <section className="ksar-hero">
        <div className="ksar-hero-inner">
          <span className="ksar-eyebrow">Nature's Cascade</span>
          <h1 className="ksar-h1">32+ Waterfalls of Karjat</h1>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '24px' }}>
            Monsoon Paradise • Hidden Cascades • Swimming Pools • On KSAR Property and Nearby
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-outline">Plan Visit</a>
            <a href="#info" className="ksar-btn ksar-btn-outline">Explore More</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ksar-section" id="info">
        <div className="ksar-container">
          <div className="ksar-grid-2">
            <div>
              <span className="ksar-eyebrow">Waterfall Paradise</span>
              <h2 className="ksar-h2">The Waterfall Capital</h2>
              <p className="ksar-lead">
                Karjat is known as the waterfall capital of Maharashtra with over 32 waterfalls scattered
                across the region. During monsoon season (June-September), these waterfalls come alive
                with spectacular cascades and powerful flows.
              </p>
              <p>
                KSAR Farms sits at the heart of this waterfall region. Several waterfalls flow directly
                through our 29-acre property, creating natural swimming pools and scenic spots perfect
                for photography and relaxation.
              </p>
              <p>
                The region's geographical location in the Sahyadri mountains, coupled with heavy monsoon
                rainfall, creates ideal conditions for waterfall formation. From gentle cascades to powerful
                torrents, each waterfall has its own character and charm.
              </p>
              <a href="tel:+919867610525" className="ksar-btn ksar-btn-green">Experience Waterfalls</a>
            </div>
           <div className="feature-image">
  <img
    src={karjatImg}
    alt="karjat waterfall"
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

      {/* WATERFALL TYPES */}
      <section className="ksar-section ksar-section-cream">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Types of Waterfalls</span>
            <h2 className="ksar-h2">Diverse Waterfall Experiences</h2>
          </div>
          <div className="ksar-grid-3">
            {[
              { icon: '💧', title: 'Ribbon Falls', desc: 'Thin, elegant cascades flowing down rock faces' },
              { icon: '🌊', title: 'Plunge Falls', desc: 'Powerful water dropping straight into pools' },
              { icon: '🏞️', title: 'Cascade Falls', desc: 'Water flowing over multiple levels' },
              { icon: '🏊', title: 'Swimming Holes', desc: 'Deep pools perfect for cooling off' },
              { icon: '🎬', title: 'Photography Falls', desc: 'Scenic spots ideal for pictures' },
              { icon: '🛶', title: 'Adventure Spots', desc: 'Canyoning and water trekking locations' },
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

      {/* POPULAR WATERFALLS */}
      <section className="ksar-section">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Must-Visit Waterfalls</span>
            <h2 className="ksar-h2">Top Waterfalls Near KSAR Farms</h2>
          </div>
          <div className="ksar-grid-2">
            {[
              {
                name: 'KSAR Property Waterfalls',
                desc: 'Direct access from KSAR! Multiple cascades on our 29-acre property with natural swimming pools. Accessible year-round, spectacular during monsoon.',
                distance: 'On Property'
              },
              {
                name: 'Bhimashankar Waterfalls',
                desc: 'Ancient falls near Bhimashankar Temple. Pristine water flowing through forests. Best during monsoon. 35 km away.',
                distance: '35 km'
              },
              {
                name: 'Kondala Falls',
                desc: 'A series of cascades forming beautiful pools. Popular with swimmers during monsoon. Scenic photography location.',
                distance: '12 km'
              },
              {
                name: 'Panchgani Falls',
                desc: 'Picturesque waterfall surrounded by greenery. Created by the convergence of five mountain streams. Easy to reach.',
                distance: '15 km'
              },
            ].map((waterfall, idx) => (
              <div key={idx} className="amenity-card">
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>💧</div>
                <h3 className="ksar-h3">{waterfall.name}</h3>
                <p>{waterfall.desc}</p>
                <p style={{ fontSize: '14px', color: 'var(--ksar-gold)', fontWeight: 'bold', marginTop: '8px' }}>
                  {waterfall.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONSOON & SAFETY */}
      <section className="ksar-section">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Plan Your Visit</span>
            <h2 className="ksar-h2">Monsoon Magic and Safety</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'When do waterfalls have the best flow?', a: 'June to September (monsoon season) - heavy rainfall creates spectacular cascades. October-November still have good flow as rains subside.' },
              { q: 'Can I swim in the waterfalls?', a: 'Yes! Many waterfalls have deep pools perfect for swimming. Always check depth first, never swim alone, and wear water shoes for slippery rocks.' },
              { q: 'Are waterfalls on KSAR property?', a: 'Yes! Multiple waterfalls flow through our 29-acre property. Guests enjoy exclusive access to these natural pools and cascades.' },
              { q: 'What is the best photography time?', a: 'Early morning light is magical. During monsoon, the volume of water is dramatic. Midday sun creates rainbows in the mist.' },
              { q: 'Is it safe during monsoon?', a: 'Waterfalls are safe during normal monsoon rainfall. Avoid visiting during heavy floods or storm warnings. Trust local guides on safety conditions.' },
              { q: 'How do I reach waterfalls?', a: 'Some are on KSAR property (walk a few minutes). Others require 30-60 minute hikes through forests. Guides help you discover hidden ones.' },
              { q: 'What should I carry?', a: 'Water, snacks, trekking shoes, towel, swimming clothes, camera, sunscreen. Dry bag for camera. KSAR provides guides and snacks on waterfall tours.' },
              { q: 'Can kids visit waterfalls?', a: 'Yes! Easy waterfall walks are kid-friendly. Older kids enjoy full hikes. Always maintain adult supervision near water.' },
            ].map((item, idx) => (
              <div key={idx} className="ksar-faq-item">
                <div className="ksar-faq-q">{item.q}</div>
                <div className="ksar-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="ksar-section ksar-section-cream">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">What to Do</span>
            <h2 className="ksar-h2">Waterfall Activities</h2>
          </div>
          <div className="ksar-grid-3">
            {[
              { icon: '🏊', title: 'Swimming', desc: 'Cool off in natural pools and cascades' },
              { icon: '📸', title: 'Photography', desc: 'Capture stunning waterfall scenery' },
              { icon: '🥾', title: 'Trekking', desc: 'Hike to remote and hidden waterfalls' },
              { icon: '🛶', title: 'Adventure', desc: 'Canyoning and water sports activities' },
              { icon: '🧘', title: 'Meditation', desc: 'Peaceful spots near cascading water' },
              { icon: '🍽️', title: 'Picnicking', desc: 'Pack lunch and dine by waterfalls' },
            ].map((activity, idx) => (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon">{activity.icon}</div>
                <h3 className="ksar-h3">{activity.title}</h3>
                <p>{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ksar-section ksar-section-forest">
        <div className="ksar-container" style={{ maxWidth: '720px' }}>
          <span className="ksar-eyebrow" style={{ color: 'var(--ksar-gold)' }}>Experience the Waterfalls</span>
          <h2 className="ksar-h2" style={{ color: 'white' }}>Discover 32+ Waterfalls from KSAR Farms</h2>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Book your stay at KSAR Farms and explore the waterfall capital of Maharashtra. Monsoon season
            offers the most spectacular views!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-primary">Book Stay</a>
            <a href="/" className="ksar-btn ksar-btn-outline">Back to Home</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Waterfalls;