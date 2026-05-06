import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    tag: 'Premium Quality Since 2014',
    title: 'Somnath Hai...\nTo Sahi Hai!',
    subtitle: 'Premium spices, masale & dry fruits from the heart of Madhya Pradesh. Pure. Natural. Authentic.',
    cta: { label: 'Explore Products', to: '/products' },
    cta2: { label: 'Our Story', to: '/about' },
    bg: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 50%, #FFE082 100%)',
    accentBg: '#C0281A',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=80',
    pattern: '🌶️',
    badge: '"Where Quality Meets Cravings"',
  },
  {
    id: 2,
    tag: 'Sortex & Handpicked',
    title: 'Finest Nuts &\nDry Fruits',
    subtitle: 'W-grade cashews, premium almonds, pistachios and rare dry fruits — sorted by hand for your health.',
    cta: { label: 'View Dry Fruits', to: '/products?cat=dry-fruits' },
    cta2: { label: 'Contact Us', to: '/contact' },
    bg: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 50%, #CE93D8 100%)',
    accentBg: '#6A1B9A',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=700&q=80',
    pattern: '🥜',
    badge: 'FSSAI Certified · No Additives',
  },
  {
    id: 3,
    tag: '100% Dust & Waste Free',
    title: 'Whole Spices,\nWhole Purity',
    subtitle: 'From cloves to star anise — our whole spices are dust-free, full of essential oils and peak aroma.',
    cta: { label: 'Whole Spices', to: '/products?cat=whole-spices' },
    cta2: { label: 'Get In Touch', to: '/contact' },
    bg: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%)',
    accentBg: '#1B7737',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=700&q=80',
    pattern: '🫘',
    badge: 'Barwaha, Khargone MP',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const slide = slides[current]

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <div className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center"
          style={{ background: slide.bg }}
        >
          {/* Pattern bg */}
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="absolute text-6xl"
                style={{ top: `${(i * 17) % 100}%`, left: `${(i * 23) % 100}%`, transform: `rotate(${i * 18}deg)` }}>
                {slide.pattern}
              </span>
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-12 grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white mb-5"
                  style={{ background: slide.accentBg, letterSpacing: '0.12em' }}>
                  ✦ {slide.tag}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-bold leading-tight mb-5 text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', whiteSpace: 'pre-line' }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base text-gray-600 leading-relaxed mb-8 max-w-md"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to={slide.cta.to} className="btn-primary shadow-lg">
                  {slide.cta.label} <span>→</span>
                </Link>
                <Link to={slide.cta2.to} className="btn-outline">
                  {slide.cta2.label}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {['🌿 No Preservatives', '📋 FSSAI Certified', '🚚 Pan-India Delivery'].map(b => (
                  <span key={b} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white bg-opacity-70 text-gray-700">
                    {b}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="relative hidden md:flex justify-center"
            >
              <div className="relative">
                <div className="w-[420px] h-[420px] rounded-full overflow-hidden shadow-2xl border-4 border-white border-opacity-60">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading="eager" />
                </div>
                {/* EST badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl text-white font-bold"
                  style={{ background: slide.accentBg }}>
                  <span style={{ fontSize: '0.5rem', letterSpacing: '0.1em' }}>EST.</span>
                  <span style={{ fontSize: '1.1rem', fontFamily: 'Playfair Display, serif' }}>2014</span>
                </div>
                {/* Badge card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-xs font-semibold text-gray-500 mb-0.5">Tagline</p>
                  <p className="text-sm font-bold" style={{ color: slide.accentBg, fontFamily: 'Playfair Display, serif' }}>
                    {slide.badge}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-400 rounded-full"
            style={{
              width: i === current ? '32px' : '10px',
              height: '10px',
              background: i === current ? '#C0281A' : 'rgba(192,40,26,0.3)',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white bg-opacity-80 shadow-md flex items-center justify-center hover:bg-opacity-100 transition-all text-gray-700 font-bold">
        ‹
      </button>
      <button onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white bg-opacity-80 shadow-md flex items-center justify-center hover:bg-opacity-100 transition-all text-gray-700 font-bold">
        ›
      </button>
    </div>
  )
}
