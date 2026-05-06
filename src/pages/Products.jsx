import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import SectionReveal from '../components/SectionReveal'
import { products, categories, getProductsByCategory } from '../data/products'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState(searchParams.get('cat') || 'all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat) setActiveTab(cat)
  }, [searchParams])

  const handleTab = (id) => {
    setActiveTab(id)
    setSearch('')
    if (id === 'all') setSearchParams({})
    else setSearchParams({ cat: id })
  }

  const filtered = getProductsByCategory(activeTab).filter(p =>
    !search || p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.nameHindi.includes(search) || p.categoryLabel.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ background: '#FFFDE7', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 sm:px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0A00, #3D1500)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          {['🌶️','🥜','🫘','✨'].map((e,i) => (
            <span key={i} className="absolute text-7xl" style={{ top:`${i*22+5}%`, left:`${i*24+5}%`, transform:`rotate(${i*18}deg)` }}>{e}</span>
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white mb-4"
              style={{ background: '#C0281A', letterSpacing: '0.15em' }}>✦ OUR CATALOG</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Premium <span style={{ color: '#F5B800' }}>Products</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,253,231,0.65)' }}>
            Sortex-cleaned, handpicked, FSSAI-certified spices and dry fruits.<br />All packing available in 500 gm.
          </motion.p>
        </div>
      </section>

      {/* Sticky Tabs + Search */}
      <div className="sticky top-16 z-30 bg-white border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3">
            {/* Tabs */}
            <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0" style={{ scrollbarWidth: 'none' }}>
              {categories.map(cat => (
                <button key={cat.id} onClick={() => handleTab(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeTab === cat.id ? 'text-white shadow-md' : 'text-gray-600 bg-orange-50 hover:bg-orange-100'
                  }`}
                  style={{
                    background: activeTab === cat.id ? 'linear-gradient(135deg, #C0281A, #E65100)' : undefined,
                    letterSpacing: '0.06em',
                  }}>
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
            {/* Search */}
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="🔍 Search products..."
              className="w-full sm:w-56 px-4 py-2 rounded-full text-sm border-2 outline-none transition-colors focus:border-brand-red bg-orange-50"
              style={{ borderColor: '#F5E6C8', fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-14 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Count */}
          <div className="flex items-center gap-3 mb-8">
            <p className="text-sm font-bold text-gray-500">
              Showing <span className="text-brand-red">{filtered.length}</span> products
              {activeTab !== 'all' && <span> in <span className="text-gray-700">{categories.find(c => c.id === activeTab)?.label}</span></span>}
            </p>
            <div className="flex-1 h-px bg-orange-100" />
            <span className="text-xs text-gray-400 font-semibold">📦 All: 500 gm</span>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center py-24">
                <p className="text-5xl mb-4">🌶️</p>
                <p className="text-gray-500 font-medium">No products found for "{search}"</p>
                <button onClick={() => { setSearch(''); setActiveTab('all') }}
                  className="btn-outline mt-4 text-sm">Clear Search</button>
              </motion.div>
            ) : (
              <motion.div key={activeTab + search}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FSSAI strip */}
      <div className="py-8 px-5 sm:px-8" style={{ background: '#1A0A00' }}>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[['🌿','No Preservatives'],['🎨','No Artificial Color'],['✋','Handpicked'],['🔬','Sortex Cleaned'],['📋','FSSAI Licensed']].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-lg">{icon}</span>
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: 'rgba(255,253,231,0.55)', letterSpacing: '0.12em' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
