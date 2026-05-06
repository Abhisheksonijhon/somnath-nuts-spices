import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#1A0A00' }}>
      {/* Top accent stripe */}
      <div style={{ height: '4px', background: 'linear-gradient(to right, #C0281A, #F5B800, #1B7737, #F5B800, #C0281A)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'linear-gradient(135deg, #C0281A, #F5B800)' }}>🌶️</div>
              <div>
                <p className="font-bold text-sm text-white" style={{ fontFamily: 'Poppins,sans-serif', letterSpacing: '0.08em' }}>SOMNATH</p>
                <p className="text-xs font-semibold" style={{ color: '#F5B800', letterSpacing: '0.14em', fontSize: '0.58rem' }}>NUTS & SPICES</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,253,231,0.5)', maxWidth: '220px' }}>
              Premium spices & dry fruits from Barwaha, Khargone MP. Pure. Natural. Authentic since 2014.
            </p>
            <p className="text-xs font-bold italic" style={{ color: '#F5B800', fontFamily: 'Playfair Display, serif' }}>
              "Where Quality Meets Cravings"
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#F5B800' }}>Products</h4>
            <ul className="space-y-2.5">
              {[['CTC Spices', '/products?cat=ctc-spices'], ['Blended Spices', '/products?cat=blended-spices'], ['Whole Spices', '/products?cat=whole-spices'], ['Nuts & Dry Fruits', '/products?cat=dry-fruits']].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-sm transition-colors duration-200 hover:text-yellow-400" style={{ color: 'rgba(255,253,231,0.5)' }}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#F5B800' }}>Company</h4>
            <ul className="space-y-2.5">
              {[['About Us', '/about'], ['Our Products', '/products'], ['Contact', '/contact'], ['Enquire Now', '/contact']].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-sm transition-colors duration-200 hover:text-yellow-400" style={{ color: 'rgba(255,253,231,0.5)' }}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#F5B800' }}>Contact Us</h4>
            <div className="space-y-3 text-sm" style={{ color: 'rgba(255,253,231,0.55)' }}>
              <p className="flex items-start gap-2"><span>📍</span><span>31, Ganesh Marg, Barwaha, Dist. Khargone (M.P.) 451115</span></p>
              <a href="tel:+918719082006" className="flex items-center gap-2 hover:text-yellow-400 transition-colors"><span>📞</span>+91 87190 82006</a>
              <a href="mailto:somnathmasaleinfo@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-xs break-all"><span>📧</span>somnathmasaleinfo@gmail.com</a>
              <p className="flex items-center gap-2"><span>📋</span><span className="text-xs">FSSAI: 21415890000444</span></p>
              <p className="flex items-center gap-2"><span>🏢</span><span className="text-xs">GST: 23CAXPR4654Q2ZJ</span></p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {year} Tirupati Industries — Somnath Nuts & Spices. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Proprietor: Akshay Ray · Barwaha, Khargone, MP
          </p>
        </div>
      </div>
    </footer>
  )
}
