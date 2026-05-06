import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import ProductCard from '../components/ProductCard'
import { getProductById, getRelatedProducts } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tab, setTab] = useState('overview')
  const product = getProductById(id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTab('overview')
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#FFFDE7' }}>
        <div className="text-center py-24 px-8">
          <p className="text-5xl mb-4">🌶️</p>
          <h2 className="text-xl font-bold text-gray-700 mb-3">Product Not Found</h2>
          <Link to="/products" className="btn-primary mt-2">← Back to Products</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product, 4)

  const tabs = [
    { id: 'overview', label: '📋 Overview' },
    { id: 'specs', label: '🔬 Specifications' },
    { id: 'uses', label: '👨‍🍳 Uses & Benefits' },
  ]

  return (
    <div style={{ background: '#FFFDE7', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div className="pt-20 pb-3 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-brand-red transition-colors">Products</Link>
          <span>/</span>
          <Link to={`/products?cat=${product.category}`} className="hover:text-brand-red transition-colors capitalize">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Main detail */}
      <section className="py-8 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '460px' }}>
              <img src={product.heroImage} alt={product.name} className="w-full h-full object-cover" />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="badge-red">{product.categoryLabel}</span>
              </div>
              {/* Pack badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs text-gray-500 font-medium">Pack Size</p>
                <p className="font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>📦 {product.packing}</p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag mb-3 block">{product.categoryLabel}</span>
            <h1 className="font-bold text-gray-900 mb-1 leading-tight" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              {product.name}
            </h1>
            <p className="text-base mb-1 italic" style={{ color: '#C0281A', fontFamily: 'Playfair Display, serif' }}>{product.tagline}</p>
            <p className="text-sm text-gray-400 mb-5">{product.nameHindi}</p>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">{product.longDescription}</p>

            {/* Key specs quick view */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {product.specifications.slice(0, 4).map(s => (
                <div key={s.label} className="rounded-xl px-4 py-3" style={{ background: '#FFF8E1', border: '1px solid #F5E6C8' }}>
                  <p className="text-xs text-gray-500 mb-0.5 font-semibold uppercase tracking-wide">{s.label}</p>
                  <p className="text-sm font-bold text-gray-900">{s.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={`https://wa.me/918719082006?text=${encodeURIComponent(`Hello! I am interested in ordering ${product.name} (${product.packing}). Please share pricing and availability.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary shadow-md">
                💬 Enquire on WhatsApp
              </a>
              <Link to="/contact" className="btn-outline">📋 Send Enquiry</Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {['🌿 No Additives', '✅ FSSAI Certified', '📦 500 gm Pack', '🚚 Pan-India'].map(b => (
                <span key={b} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: '#FFF8E1', color: '#8B6914', border: '1px solid #F5E6C8' }}>{b}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-10 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Tab nav */}
          <div className="flex gap-1 mb-8 border-b border-orange-200 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex-shrink-0 px-5 py-3 text-sm font-semibold transition-all duration-300 ${tab === t.id ? 'tab-active' : 'tab-inactive'}`}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {tab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-7">
                  <h3 className="font-bold text-lg mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>About This Product</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{product.longDescription}</p>
                </div>
                <div className="card p-7">
                  <h3 className="font-bold text-lg mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>Origin & Quality</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📍</span>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Origin</p>
                        <p className="text-sm font-bold text-gray-900">{product.specifications.find(s => s.label === 'Origin')?.value || 'India'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📦</span>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Pack Size</p>
                        <p className="text-sm font-bold text-gray-900">{product.packing}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">⏱️</span>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Shelf Life</p>
                        <p className="text-sm font-bold text-gray-900">{product.specifications.find(s => s.label === 'Shelf Life')?.value || '12 months'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">✅</span>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Certification</p>
                        <p className="text-sm font-bold text-gray-900">FSSAI No. 21415890000444</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === 'specs' && (
              <div className="card overflow-hidden">
                <div className="px-6 py-4 border-b border-orange-100" style={{ background: '#FFF8E1' }}>
                  <h3 className="font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>Technical Specifications</h3>
                </div>
                <div className="divide-y divide-orange-50">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-orange-50/30'}`}>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide w-36 flex-shrink-0 pt-0.5">{spec.label}</span>
                      <span className="text-sm font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === 'uses' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-7">
                  <h3 className="font-bold text-lg mb-5 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    👨‍🍳 Common Uses
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {product.uses.map(use => (
                      <span key={use} className="px-4 py-2 rounded-full text-sm font-semibold"
                        style={{ background: '#FFF8E1', color: '#8B4513', border: '1px solid #F5E6C8' }}>
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card p-7">
                  <h3 className="font-bold text-lg mb-5 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    💚 Health Benefits
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-14 px-5 sm:px-8" style={{ background: '#FFF8E1', borderTop: '1px solid #F5E6C8' }}>
          <div className="max-w-7xl mx-auto">
            <SectionReveal className="flex items-end justify-between mb-10">
              <div>
                <span className="section-tag mb-2 block">More From This Range</span>
                <h2 className="section-title">Related Products</h2>
              </div>
              <Link to={`/products?cat=${product.category}`} className="btn-ghost hidden sm:flex">
                View All →
              </Link>
            </SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
