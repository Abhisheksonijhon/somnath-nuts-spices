import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'

const timeline = [
  { year: '2014', title: 'Founded', desc: 'Tirupati Industries established in Barwaha, Khargone MP. Somnath Nuts & Spices brand launched by Akshay Ray.' },
  { year: '2015', title: 'FSSAI Certified', desc: 'Obtained FSSAI License No. 21415890000444 — a commitment to food safety and quality from Day 1.' },
  { year: '2017', title: 'Expanded Range', desc: 'Added premium Nuts & Dry Fruits line alongside the original CTC Spices range. Sortex cleaning introduced.' },
  { year: '2019', title: 'Whole Spices', desc: 'Launched 12+ whole spice varieties — 100% dust and waste free. Pan-India supply network established.' },
  { year: '2024', title: 'Growing Strong', desc: '10+ years of trusted quality. Serving families, hotels, and distributors across Madhya Pradesh and India.' },
]

const values = [
  { icon: '🌿', title: 'Purity', desc: 'Zero artificial colors, preservatives, or flavor enhancers. Always.' },
  { icon: '🤝', title: 'Farmer Trust', desc: 'We partner directly with local farmers in Khargone & across MP for honest sourcing.' },
  { icon: '🔬', title: 'Quality Control', desc: 'Every batch is sortex-cleaned, handpicked, and quality-checked before packing.' },
  { icon: '🌾', title: 'Regional Pride', desc: 'We showcase the best of Madhya Pradesh — its soil, its flavors, its heritage.' },
]

const khargoneProducts = [
  { emoji: '🌶️', name: 'Red Chilli', desc: 'Khargone is a major chilli-growing district. Our CTC chilli powders are sourced from local farms.' },
  { emoji: '🟡', name: 'Coriander (Dhaniya)', desc: 'MP is India\'s top coriander producer. Our freshly ground Dhaniya carries this regional excellence.' },
  { emoji: '🟠', name: 'Soybean', desc: 'Khargone produces abundant soybean — a staple of the region\'s agricultural identity.' },
  { emoji: '🌾', name: 'Wheat (Gehun)', desc: 'Fertile Narmada basin soil makes Khargone one of MP\'s top wheat-producing districts.' },
  { emoji: '🟤', name: 'Cotton (Kapas)', desc: 'White gold of Khargone — the district is one of MP\'s largest cotton producers.' },
  { emoji: '🌽', name: 'Maize (Makka)', desc: 'Khargone\'s river-fed plains are ideal for maize cultivation, supporting diverse agri economy.' },
]

export default function About() {
  return (
    <div style={{ background: '#FFFDE7' }}>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-5 sm:px-8"
        style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #3D1500 60%, #5D2000 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          {['🌶️','🥜','🫘','🌿'].map((e,i) => (
            <span key={i} className="absolute text-7xl" style={{ top:`${i*22+5}%`, left:`${i*24+5}%`, transform:`rotate(${i*15}deg)` }}>{e}</span>
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="anim-fade-up">
            <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white mb-5"
              style={{ background: '#C0281A', letterSpacing: '0.15em' }}>✦ OUR STORY</span>
          </div>
          <h1 className="font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            From Barwaha to<br />
            <span style={{ color: '#F5B800' }}>Your Kitchen</span>
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,253,231,0.65)' }}>
            A decade of passion, purity, and pride. Somnath Nuts & Spices was born from Madhya Pradesh's fertile heartland — bringing authentic regional flavors to homes and businesses across India.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <section className="py-20 px-5 sm:px-8" style={{ background: '#FFFDE7' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <SectionReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '440px' }}>
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=80"
                  alt="Somnath Masale products" className="w-full h-full object-cover" />
              </div>
              {/* Est badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl text-white font-bold"
                style={{ background: 'linear-gradient(135deg, #C0281A, #E65100)' }}>
                <span style={{ fontSize: '0.5rem', letterSpacing: '0.1em' }}>EST.</span>
                <span style={{ fontSize: '1.4rem', fontFamily: 'Playfair Display, serif' }}>2014</span>
              </div>
              {/* FSSAI badge */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-gray-500 font-semibold">Certified by</p>
                <p className="text-sm font-bold" style={{ color: '#1B7737' }}>✅ FSSAI Licensed</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <span className="section-tag mb-4 block">About Us</span>
            <h2 className="section-title mb-5">
              Somnath Hai...<br />
              <span style={{ color: '#C0281A' }}>To Sahi Hai!</span>
            </h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">Somnath Nuts & Spices</strong> is a brand of Tirupati Industries, founded in 2014 by <strong className="text-gray-900">Akshay Ray</strong> in Barwaha, District Khargone, Madhya Pradesh. What began as a vision to supply pure, authentic spices to local communities has grown into a trusted name across India.
              </p>
              <p>
                Our journey began with the abundant chilli production of the Khargone region — one of Madhya Pradesh's most fertile agricultural districts on the banks of the Narmada river. This unique agricultural backdrop gave us direct access to some of India's finest raw spice ingredients.
              </p>
              <p>
                Today, we offer a complete range of CTC Spices, Blended Masale, Whole Spices, and Premium Dry Fruits — each produced under strict FSSAI guidelines, with zero artificial additives and a commitment to the tagline that defines us:
              </p>
              <p className="text-base font-bold italic" style={{ color: '#C0281A', fontFamily: 'Playfair Display, serif' }}>
                "Where Quality Meets Cravings"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[['FSSAI No.', '21415890000444'], ['GST No.', '23CAXPR4654Q2ZJ'], ['Proprietor', 'Akshay Ray'], ['Est. Year', '2014']].map(([label, val]) => (
                <div key={label} className="rounded-xl p-4" style={{ background: '#FFF8E1', border: '1px solid #F5E6C8' }}>
                  <p className="text-xs text-gray-500 mb-0.5 font-semibold uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-bold text-gray-900">{val}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#FFF8E1', borderTop: '1px solid #F5E6C8' }}>
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="section-tag justify-center">What Drives Us</span>
            <h2 className="section-title mt-2">Our Core Values</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <SectionReveal key={i} delay={i * 0.1} direction="scale">
                <div className="card p-6 text-center h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-base mb-2 text-gray-900">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-5 sm:px-8" style={{ background: '#FFFDE7' }}>
        <div className="max-w-3xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="section-tag justify-center">Our Journey</span>
            <h2 className="section-title mt-2">10 Years of Growth</h2>
          </SectionReveal>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #C0281A, #F5B800)' }} />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <SectionReveal key={i} delay={i * 0.12} direction="left">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md relative z-10"
                      style={{ background: 'linear-gradient(135deg, #C0281A, #E65100)', fontFamily: 'Playfair Display, serif', fontSize: '0.85rem' }}>
                      {item.year}
                    </div>
                    <div className="card p-5 flex-1 mt-2">
                      <h4 className="font-bold text-base mb-1 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Khargone District Section */}
      <section className="py-20 px-5 sm:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B7737, #0D5227)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="text-xs font-bold px-4 py-1.5 rounded-full text-white mb-4 inline-block"
              style={{ background: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>📍 OUR ROOTS</span>
            <h2 className="font-bold text-white mt-3 text-3xl md:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Land of<br /><span style={{ color: '#F5B800' }}>Khargone, Madhya Pradesh</span>
            </h2>
            <p className="text-sm mt-4 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
              Barwaha sits in Khargone district on the banks of the sacred Narmada river. This region's black-cotton soil and subtropical climate make it one of India's richest agricultural zones — the natural home of premium spices and grains.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {khargoneProducts.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1} direction="scale">
                <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h4 className="font-bold text-white mb-2 text-sm">{item.name}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-5 sm:px-8 text-center" style={{ background: '#FFF8E1' }}>
        <SectionReveal>
          <div className="max-w-xl mx-auto">
            <h2 className="section-title mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8 text-sm">Have questions about our products or want to become a distributor? We'd love to hear from you.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="btn-primary">Contact Us →</Link>
              <Link to="/products" className="btn-outline">Browse Products</Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
