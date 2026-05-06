import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ background: 'linear-gradient(135deg, #C0281A, #F5B800)' }}>
            🌶️
          </div>
          <div>
            <p className="font-bold text-sm leading-tight" style={{ fontFamily: 'Poppins, sans-serif', color: scrolled ? '#1A0A00' : '#1A0A00' }}>
              SOMNATH
            </p>
            <p className="text-xs font-semibold leading-tight" style={{ color: '#C0281A', letterSpacing: '0.1em', fontSize: '0.6rem' }}>
              NUTS & SPICES
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-brand-red pb-1 ${
                location.pathname === link.to ? 'text-brand-red' : 'text-gray-700'
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand-red rounded-full"
                />
              )}
            </Link>
          ))}
          <Link to="/contact"
            className="btn-primary text-sm py-2.5 px-5"
            style={{ fontSize: '0.8rem' }}>
            Enquire Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ background: menuOpen ? 'rgba(192,40,26,0.1)' : 'transparent' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            {[0, 1, 2].map(i => (
              <span key={i} className="block h-0.5 rounded bg-gray-800 transition-all duration-300" style={{
                transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(3px, 3px)' : i === 2 ? 'rotate(-45deg) translate(3px,-3px)' : 'scaleX(0)') : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-orange-100 shadow-lg"
          >
            <div className="px-5 py-5 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link key={link.to} to={link.to}
                  className={`text-sm font-semibold py-1.5 border-b border-orange-50 ${
                    location.pathname === link.to ? 'text-brand-red' : 'text-gray-700'
                  }`}>
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary justify-center text-sm mt-2">
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
