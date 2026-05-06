import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What products do you offer?', a: 'We offer CTC Spices (Chilli Powder, Turmeric, Coriander), Blended Spices (Shahi Garam Masala, Garam Masala Jordar), Whole Spices (12+ varieties), and Premium Nuts & Dry Fruits (Cashew, Almond, Pista, Walnuts, Makhana & more)!' },
  { q: 'What pack size is available?', a: 'All our products are currently available in 500 gm packing. This ensures freshness and optimal quantity for families and small businesses.' },
  { q: 'Are your products FSSAI certified?', a: 'Yes! All Somnath Nuts & Spices products are manufactured under FSSAI License No. 21415890000444. We follow strict quality control and zero artificial additives.' },
  { q: 'Do you deliver pan-India?', a: 'Yes! We deliver across India. For bulk/wholesale orders please contact us at +91 87190 82006 or email somnathmasaleinfo@gmail.com.' },
  { q: 'Where are you located?', a: 'Our facility is at 31, Ganesh Marg, Barwaha, District Khargone, Madhya Pradesh 451115. We are proud to be rooted in MP\'s rich agricultural heartland!' },
  { q: 'How to place an order?', a: 'You can enquire via:\n• WhatsApp: +91 87190 82006\n• Email: somnathmasaleinfo@gmail.com\n• Contact form on our website\nWe respond within 24 hours!' },
  { q: 'Do you offer wholesale?', a: 'Yes! We supply to retailers, distributors, hotels, and restaurants across India. Contact our proprietor Akshay Ray at +91 87190 82006 for wholesale pricing.' },
  { q: 'What makes you different?', a: 'Great question! What sets us apart:\n✅ Sortex-cleaned & handpicked\n✅ 100% dust & waste-free whole spices\n✅ No artificial colors or preservatives\n✅ Authentic MP regional sourcing\n✅ FSSAI certified since 2014' },
]

const quickReplies = [
  '🛒 Products',
  '📦 Pack Sizes',
  '📋 FSSAI Info',
  '🚚 Delivery',
  '📍 Location',
  '💰 Wholesale',
]

const greetings = [
  'Hello! Welcome to Somnath Nuts & Spices 🌶️',
  'I\'m your virtual assistant. I can help with product info, ordering, and more!',
]

function Message({ msg }) {
  const isBot = msg.sender === 'bot'
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-1"
          style={{ background: 'linear-gradient(135deg, #C0281A, #F5B800)' }}>
          🌶️
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${isBot ? 'chatbot-bubble' : 'user-bubble'}`}
        style={{
          background: isBot ? '#FFF8E1' : '#C0281A',
          color: isBot ? '#1A0A00' : '#fff',
          borderRadius: isBot ? '4px 18px 18px 18px' : '18px 18px 4px 18px',
          border: isBot ? '1px solid #F5E6C8' : 'none',
        }}
      >
        {msg.text}
      </div>
    </motion.div>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: greetings[0] },
    { id: 2, sender: 'bot', text: greetings[1] },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const addMessage = (text, sender = 'user') => {
    setMessages(prev => [...prev, { id: Date.now(), sender, text }])
  }

  const getBotReply = (query) => {
    const q = query.toLowerCase()
    if (q.includes('product') || q.includes('offer') || q.includes('what')) return faqs[0].a
    if (q.includes('pack') || q.includes('size') || q.includes('500') || q.includes('gm')) return faqs[1].a
    if (q.includes('fssai') || q.includes('certif') || q.includes('license')) return faqs[2].a
    if (q.includes('deliver') || q.includes('ship') || q.includes('order')) return faqs[3].a
    if (q.includes('locat') || q.includes('address') || q.includes('where')) return faqs[4].a
    if (q.includes('how') && (q.includes('buy') || q.includes('order') || q.includes('purchase'))) return faqs[5].a
    if (q.includes('wholesale') || q.includes('bulk') || q.includes('distribut') || q.includes('price')) return faqs[6].a
    if (q.includes('different') || q.includes('why') || q.includes('unique') || q.includes('best')) return faqs[7].a
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) return 'Hello! 👋 Great to have you here. How can I help you today? You can ask about our products, ordering, delivery, or anything else!'
    if (q.includes('thank')) return 'You\'re welcome! 😊 Feel free to ask anytime. For urgent queries, WhatsApp us at +91 87190 82006!'
    return 'Thanks for your message! For specific queries, please:\n📞 Call: +91 87190 82006\n📧 Email: somnathmasaleinfo@gmail.com\n\nOr ask me: products, pack sizes, delivery, location, wholesale 😊'
  }

  const handleSend = (text = input.trim()) => {
    if (!text) return
    addMessage(text, 'user')
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      addMessage(getBotReply(text), 'bot')
    }, 900)
  }

  const handleQuick = (qr) => {
    const map = {
      '🛒 Products': 'What products do you offer?',
      '📦 Pack Sizes': 'What pack sizes are available?',
      '📋 FSSAI Info': 'Is your product FSSAI certified?',
      '🚚 Delivery': 'Do you deliver pan India?',
      '📍 Location': 'Where are you located?',
      '💰 Wholesale': 'Do you offer wholesale pricing?',
    }
    handleSend(map[qr] || qr)
  }

  return (
    <>
      {/* Fab */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #C0281A, #F5B800)' }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} className="text-white text-xl font-bold">✕</motion.span>
          ) : (
            <motion.span key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-2xl">💬</motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ height: '500px', border: '1px solid rgba(192,40,26,0.15)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 text-white" style={{ background: 'linear-gradient(135deg, #C0281A, #E65100)' }}>
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-xl">🌶️</div>
              <div className="flex-1">
                <p className="font-bold text-sm">Somnath Assistant</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <p className="text-xs text-orange-100">Online — reply in seconds</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 bg-orange-50 chat-scroll">
              {messages.map(msg => <Message key={msg.id} msg={msg} />)}
              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm" style={{ background: 'linear-gradient(135deg, #C0281A, #F5B800)' }}>🌶️</div>
                  <div className="flex gap-1 px-4 py-3 rounded-xl bg-amber-50 border border-amber-100">
                    {[0,1,2].map(i => (
                      <motion.div key={i} className="w-2 h-2 rounded-full bg-orange-400"
                        animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-3 py-2 bg-white border-t border-orange-100 flex gap-2 overflow-x-auto"
              style={{ scrollbarWidth: 'none' }}>
              {quickReplies.map(qr => (
                <button key={qr} onClick={() => handleQuick(qr)}
                  className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 hover:bg-red-50 hover:border-brand-red"
                  style={{ borderColor: '#F5E6C8', color: '#8B4513', background: '#FFFDE7' }}>
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 px-3 py-3 bg-white border-t border-orange-100">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything..."
                className="flex-1 px-4 py-2.5 rounded-full border-2 text-sm outline-none transition-colors duration-300 focus:border-brand-red"
                style={{ borderColor: '#F5E6C8', background: '#FFFDE7' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => handleSend()}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #C0281A, #E65100)' }}>
                ↑
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
