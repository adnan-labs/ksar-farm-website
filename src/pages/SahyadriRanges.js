import React from 'react';
import sahyadriImg from '../assets/images/sahyadri.jpg';

function SahyadriRanges() {
  return (
    <div className="ksar-page">

      {/* HERO */}
      <section className="ksar-hero">
        <div className="ksar-hero-inner">
          <span className="ksar-eyebrow">Mountain Adventure</span>
          <h1 className="ksar-h1">Sahyadri Mountain Ranges</h1>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '24px' }}>
            UNESCO Biodiversity Hotspot • 32+ Waterfalls • Ancient Forts • Home to KSAR Farms
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-outline">Explore Now</a>
            <a href="#info" className="ksar-btn ksar-btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ksar-section" id="info">
        <div className="ksar-container">
          <div className="ksar-grid-2">
            <div>
              <span className="ksar-eyebrow">About Sahyadri</span>
              <h2 className="ksar-h2">The Western Ghats - Nature's Treasure</h2>
              <p className="ksar-lead">
                The Sahyadri Mountains, also known as the Western Ghats, are one of the world's most important
                biodiversity hotspots. Spanning over 1,600 km along the western coast of India, these ancient
                mountains are home to thousands of plant and animal species.
              </p>
              <p>
                KSAR Farms sits in the heart of the Sahyadri range, surrounded by dense forests, cascading
                waterfalls, and pristine nature. The region experiences monsoons from June to September,
                creating spectacular waterfalls and lush green landscapes.
              </p>
              <p>
                Explore ancient trekking routes, discover hidden waterfalls, visit historic forts, and immerse
                yourself in one of India's most ecologically sensitive areas. Every corner offers adventure and
                natural beauty.
              </p>
              <a href="tel:+919867610525" className="ksar-btn ksar-btn-green">Plan Your Adventure</a>
            </div>
           <img
  src={sahyadriImg}
  alt="Sahyadri"
  style={{
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '4px'
  }}
/>
          </div>
        </div>
      </section>

      {/* BIODIVERSITY */}
      <section className="ksar-section ksar-section-cream">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Wildlife and Nature</span>
            <h2 className="ksar-h2">Incredible Biodiversity</h2>
          </div>
          <div className="ksar-grid-3">
            {[
              { icon: '🐅', title: 'Leopards and Tigers', desc: 'Apex predators of the Western Ghats ecosystem' },
              { icon: '🦊', title: 'Wild Animals', desc: 'Deer, wild boar, monkey species, and more' },
              { icon: '🦅', title: 'Bird Paradise', desc: '300+ bird species including eagles and hornbills' },
              { icon: '🌿', title: 'Flora Diversity', desc: '4,000+ plant species, many medicinal and endemic' },
              { icon: '🐍', title: 'Reptiles and Amphibians', desc: 'Rare frogs, snakes, and lizard species' },
              { icon: '🦋', title: 'Butterflies and Insects', desc: 'Thousands of colorful butterfly species' },
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

      {/* ATTRACTIONS */}
      <section className="ksar-section">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Explore the Region</span>
            <h2 className="ksar-h2">Top Attractions in Sahyadri</h2>
          </div>
          <div className="ksar-grid-3">
            {[
              { title: '32+ Waterfalls', desc: 'Monsoon cascades throughout the range' },
              { title: 'Ancient Forts', desc: 'Trek to historic mountain strongholds' },
              { title: 'Scenic Viewpoints', desc: 'Panoramic vistas of valleys and peaks' },
              { title: 'Forest Trails', desc: 'Guided nature walks through pristine wilderness' },
              { title: 'River Adventures', desc: 'River trekking and water activities' },
              { title: 'Photography Spots', desc: "Capture nature's finest moments" },
            ].map((attraction, idx) => (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon">⭐</div>
                <h3 className="ksar-h3">{attraction.title}</h3>
                <p>{attraction.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREKKING FAQ */}
      <section className="ksar-section">
        <div className="ksar-container">
          <div className="ksar-center" style={{ marginBottom: '56px' }}>
            <span className="ksar-eyebrow">Adventure Activities</span>
            <h2 className="ksar-h2">Trekking in Sahyadri</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'What treks are available from KSAR?', a: 'Sidhagad Fort (8 km), Bhimashankar Temple (35 km), waterfall treks, and forest nature walks. All difficulty levels available.' },
              { q: 'Best season for trekking?', a: 'October to February for clear views. Monsoon (June-Sept) for waterfalls and lush scenery. Summer can be hot.' },
              { q: 'What should I carry?', a: 'Water, comfortable trekking shoes, light clothes, sunscreen, hat, camera. We provide guides and snacks.' },
              { q: 'Do you provide guides?', a: 'Yes! Experienced guides are available for all treks. They know local flora, fauna, history, and secret spots.' },
              { q: 'Can beginners trek?', a: 'Absolutely! We have easy, moderate, and challenging treks. Even kids can enjoy family-friendly walks.' },
              { q: 'What wildlife might we see?', a: 'Deer, monkeys, wild boar, various birds, and occasionally leopards. Safe distance always maintained.' },
            ].map((item, idx) => (
              <div key={idx} className="ksar-faq-item">
                <div className="ksar-faq-q">{item.q}</div>
                <div className="ksar-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ksar-section ksar-section-forest">
        <div className="ksar-container" style={{ maxWidth: '720px' }}>
          <span className="ksar-eyebrow" style={{ color: 'var(--ksar-gold)' }}>Adventure Awaits</span>
          <h2 className="ksar-h2" style={{ color: 'white' }}>Explore the Sahyadri Mountains</h2>
          <p className="ksar-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>
            From your base at KSAR Farms, explore this UNESCO biodiversity hotspot. Trek, photograph, and
            discover nature's wonders.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919867610525" className="ksar-btn ksar-btn-primary">Book Trek</a>
            <a href="/" className="ksar-btn ksar-btn-outline">Back to Home</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SahyadriRanges;