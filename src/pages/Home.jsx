import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSlider from '../components/HeroSlider'
import ProductCard from '../components/ProductCard'
import SectionReveal from '../components/SectionReveal'
import { getFeaturedProducts, categories } from '../data/products'

const featured = getFeaturedProducts()

const stats = [
  { value: '10+', label: 'Years in Business', icon: '🏆' },
  { value: '4', label: 'Product Categories', icon: '📦' },
  { value: '30+', label: 'Premium Products', icon: '🌿' },
  { value: '100%', label: 'No Additives', icon: '✅' },
]

const whyUs = [
  { icon: '🔬', title: 'Sortex Cleaned', desc: 'Machine-sorted to remove impurities — only the finest produce reaches you.' },
  { icon: '✋', title: 'Handpicked', desc: 'Every nut and dry fruit is handpicked by experienced staff for consistent quality.' },
  { icon: '🚫', title: 'No Artificial Additives', desc: 'Zero preservatives, colors, or flavor enhancers. Pure and natural, always.' },
  { icon: '📋', title: 'FSSAI Certified', desc: 'Licensed under FSSAI No. 21415890000444 with stringent quality protocols.' },
  { icon: '🌾', title: 'MP Origin', desc: 'Proudly from Barwaha, Khargone — the heart of Madhya Pradesh\'s spice belt.' },
  { icon: '📦', title: 'Hygienic Packing', desc: 'Sealed in food-grade moisture-proof packaging for maximum freshness.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Bar */}
      <section style={{ background: 'linear-gradient(135deg, #C0281A, #9B1F12)' }}>
        <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="text-center text-white">
                <div className="text-3xl mb-1">{s.icon}</div>
                <p className="font-bold text-3xl mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</p>
                <p className="text-xs opacity-80 uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-5 sm:px-8 spice-pattern" style={{ background: '#FFFDE7' }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="section-tag justify-center">Handpicked for You</span>
            <h2 className="section-title mt-2">Featured Products</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Our most-loved spices, masale and dry fruits — each carrying the purity promise of Somnath Nuts & Spices.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>

          <SectionReveal className="text-center mt-12">
            <Link to="/products" className="btn-primary shadow-md">
              View All Products <span>→</span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-5 sm:px-8" style={{ background: '#FFF8E1' }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="section-tag justify-center">Browse By Category</span>
            <h2 className="section-title mt-2">Our Product Range</h2>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.filter(c => c.id !== 'all').map((cat, i) => {
              const imgs = {
                'ctc-spices': 'https://images.unsplash.com/photo-1601504564444-3e825fea18e5?w=400&q=70',
                'blended-spices': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=70',
                'whole-spices': 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&q=70',
                'dry-fruits': 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=70',
              }
              return (
                <SectionReveal key={cat.id} delay={i * 0.12} direction="scale">
                  <Link to={`/products?cat=${cat.id}`}
                    className="relative group block rounded-2xl overflow-hidden shadow-md cursor-pointer"
                    style={{ height: '200px' }}>
                    <img src={imgs[cat.id]} alt={cat.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,10,0,0.85) 30%, rgba(0,0,0,0.1) 100%)' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-2xl mb-1">{cat.icon}</p>
                      <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{cat.label}</p>
                      <p className="text-yellow-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Explore →</p>
                    </div>
                  </Link>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-5 sm:px-8" style={{ background: '#FFFDE7' }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="section-tag justify-center">Our Quality Promise</span>
            <h2 className="section-title mt-2">Why Choose Somnath?</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">
              Every batch we produce carries a decade of trust, tradition, and uncompromising quality standards.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="card p-6 group">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-base mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MP Story Strip */}
      <section className="py-16 px-5 sm:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B7737, #0D5227)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {['🌾', '🌶️', '🫘', '🥜'].map((e, i) => (
            <span key={i} className="absolute text-6xl" style={{ top: `${i * 22}%`, left: `${i * 25}%`, transform: `rotate(${i * 20}deg)` }}>{e}</span>
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <SectionReveal>
            <p className="text-4xl mb-4">🌾</p>
            <h2 className="font-bold text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Proudly from Barwaha, Madhya Pradesh
            </h2>
            <p className="text-sm leading-relaxed opacity-80 max-w-2xl mx-auto mb-8">
              Khargone district is one of India's most fertile agricultural zones — home to premium chilli, coriander, soybean, cotton, and maize. Our roots in this land give us direct access to the finest raw ingredients, supporting local farmers while delivering authentic flavors to your kitchen.
            </p>
            <Link to="/about" className="btn-secondary shadow-lg">
              Learn Our Story →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#FFF8E1' }}>
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-4">Ready to Order?</h2>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Wholesale and retail orders across India. Ideal for families, hotels, restaurants, and distributors. Contact us today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary shadow-md">Get In Touch →</Link>
              <a href="https://wa.me/918719082006" target="_blank" rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2">
                <span>💬</span> WhatsApp Now
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
