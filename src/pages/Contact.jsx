import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'

const productOptions = [
  'General Enquiry', 'Chilli Powder (Red Velvet)', 'Chilli Powder (Teja)',
  'Turmeric Powder', 'Coriander Powder', 'Shahi Garam Masala',
  'Garam Masala Jordar', 'Whole Spices', 'Cashews (Kaju)',
  'Almonds (Badam)', 'Walnuts (Akhrot)', 'Other Dry Fruits',
  'Wholesale / Distribution', 'Custom Order',
]

const info = [
  { icon: '📍', title: 'Address', lines: ['31, Ganesh Marg, Barwaha', 'Dist. Khargone (M.P.) 451115'] },
  { icon: '📞', title: 'Phone / WhatsApp', lines: ['+91 87190 82006'] },
  { icon: '📧', title: 'Email', lines: ['somnathmasaleinfo@gmail.com'] },
  { icon: '🕐', title: 'Business Hours', lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 3:00 PM'] },
]

const faqs = [
  { q: 'What is the minimum order quantity?', a: 'For retail: 1 pack (500 gm). For wholesale: MOQ varies by product — please contact us for details.' },
  { q: 'Do you ship across India?', a: 'Yes! We ship to all states in India. Contact us for shipping rates to your location.' },
  { q: 'Are products FSSAI certified?', a: 'Yes, FSSAI License No. 21415890000444 covers all our products under Tirupati Industries.' },
  { q: 'Can I become a distributor?', a: 'We welcome distributor enquiries! Contact Akshay Ray at +91 87190 82006 for distributor pricing and terms.' },
]

const validate = (f) => {
  const e = {}
  if (!f.name.trim()) e.name = 'Name is required'
  if (!f.phone.trim()) e.phone = 'Phone is required'
  else if (!/^[6-9]\d{9}$/.test(f.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit mobile number'
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address'
  if (!f.message.trim()) e.message = 'Please describe your enquiry'
  return e
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: 'General Enquiry', message: '', city: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
  }

  return (
    <div style={{ background: '#FFFDE7', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 sm:px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0A00, #3D1500)' }}>
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white mb-4"
              style={{ background: '#C0281A', letterSpacing: '0.15em' }}>✦ GET IN TOUCH</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Let&apos;s <span style={{ color: '#F5B800' }}>Connect</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="text-sm" style={{ color: 'rgba(255,253,231,0.6)' }}>
            For wholesale enquiries, retail orders, distribution partnerships, or general questions — we're here!
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {info.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.1} direction="scale">
              <div className="card p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#C0281A' }}>{item.title}</p>
                {item.lines.map((l, j) => (
                  <p key={j} className="text-sm font-semibold text-gray-800 leading-snug">{l}</p>
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-16 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            <SectionReveal>
              <div className="card p-8">
                <span className="section-tag mb-3 block">Send Enquiry</span>
                <h2 className="section-title mb-7">Enquiry Form</h2>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-14">
                      <div className="text-6xl mb-5">🎉</div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Thank You, {form.name}!
                      </h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Your enquiry has been received. We'll contact you at <strong>{form.phone}</strong> within 24 hours.
                      </p>
                      <div className="flex gap-4 justify-center flex-wrap">
                        <button onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', product: 'General Enquiry', message: '', city: '' }) }}
                          className="btn-outline text-sm">
                          Send Another Enquiry
                        </button>
                        <a href="https://wa.me/918719082006" target="_blank" rel="noopener noreferrer"
                          className="btn-primary text-sm">
                          💬 WhatsApp Us
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                      {/* Row 1 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                            Full Name *
                          </label>
                          <input name="name" value={form.name} onChange={handleChange}
                            placeholder="Your full name" className={`spice-input ${errors.name ? 'border-red-400' : ''}`} />
                          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                            Phone / WhatsApp *
                          </label>
                          <input name="phone" value={form.phone} onChange={handleChange}
                            placeholder="10-digit mobile number" className={`spice-input ${errors.phone ? 'border-red-400' : ''}`} />
                          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                        </div>
                      </div>
                      {/* Row 2 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                            Email Address
                          </label>
                          <input name="email" type="email" value={form.email} onChange={handleChange}
                            placeholder="Optional" className={`spice-input ${errors.email ? 'border-red-400' : ''}`} />
                          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                            City / State
                          </label>
                          <input name="city" value={form.city} onChange={handleChange}
                            placeholder="Your city or state" className="spice-input" />
                        </div>
                      </div>
                      {/* Product */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                          Product Interest
                        </label>
                        <select name="product" value={form.product} onChange={handleChange} className="spice-input">
                          {productOptions.map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                          Your Message *
                        </label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                          placeholder="Describe your requirements — product names, quantities, delivery location, purpose (retail/wholesale)..."
                          className={`spice-input resize-none ${errors.message ? 'border-red-400' : ''}`} />
                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                      </div>
                      <button type="submit" disabled={loading}
                        className="btn-primary w-full justify-center text-base py-3.5"
                        style={{ opacity: loading ? 0.75 : 1, cursor: loading ? 'wait' : 'pointer' }}>
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
                            Sending Enquiry...
                          </span>
                        ) : '📤 Send Enquiry'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-5">
            {/* WhatsApp CTA */}
            <SectionReveal delay={0.1}>
              <a href="https://wa.me/918719082006?text=Hello! I want to enquire about Somnath Nuts & Spices."
                target="_blank" rel="noopener noreferrer"
                className="block rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group"
                style={{ background: 'linear-gradient(135deg, #e8faf0, #d5f5e3)', border: '2px solid rgba(37,211,102,0.3)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#1a7a3a' }}>WhatsApp — Fastest Reply</p>
                    <p className="text-xs text-green-700">+91 87190 82006</p>
                  </div>
                </div>
                <p className="text-xs text-green-800 leading-relaxed mb-3">
                  Chat directly for instant pricing, availability, and quick order placement. 9am–8pm daily.
                </p>
                <span className="text-xs font-bold text-green-700 group-hover:underline">Start WhatsApp Chat →</span>
              </a>
            </SectionReveal>

            {/* Hours */}
            <SectionReveal delay={0.15}>
              <div className="card p-6">
                <span className="section-tag mb-3 block">Business Hours</span>
                {[['Monday – Friday', '9:00 AM – 7:00 PM', false], ['Saturday', '9:00 AM – 6:00 PM', false], ['Sunday', '10:00 AM – 3:00 PM', false]].map(([d, h, closed]) => (
                  <div key={String(d)} className="flex justify-between items-center py-2.5 border-b border-orange-100 last:border-0 text-xs">
                    <span className="text-gray-600 font-medium">{String(d)}</span>
                    <span className="font-bold" style={{ color: closed ? '#C0281A' : '#1B7737' }}>{String(h)}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Map placeholder */}
            <SectionReveal delay={0.2}>
              <div className="card overflow-hidden" style={{ height: '180px' }}>
                <div className="w-full h-full flex flex-col items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #FFF8E1, #F5E6C8)' }}>
                  <div className="text-4xl mb-3">🗺️</div>
                  <p className="text-sm font-bold text-gray-800">Barwaha, Khargone MP</p>
                  <p className="text-xs text-gray-500 mt-1 text-center px-4">31, Ganesh Marg, Dist. Khargone (M.P.) 451115</p>
                  <a href="https://maps.google.com/?q=Barwaha+Khargone+Madhya+Pradesh"
                    target="_blank" rel="noopener noreferrer"
                    className="mt-3 text-xs font-bold" style={{ color: '#C0281A' }}>
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#FFF8E1', borderTop: '1px solid #F5E6C8' }}>
        <div className="max-w-3xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="section-tag justify-center mb-3">Common Questions</span>
            <h2 className="section-title mt-2">Frequently Asked Questions</h2>
          </SectionReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="card overflow-hidden">
                  <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p className="font-semibold text-sm text-gray-900">{faq.q}</p>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-all duration-300"
                      style={{
                        background: openFaq === i ? '#C0281A' : '#F5E6C8',
                        color: openFaq === i ? '#fff' : '#8B4513',
                        transform: openFaq === i ? 'rotate(45deg)' : 'none',
                      }}>+</span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                    <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
