import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const badgeStyles = {
  bestseller: { bg: '#FFF3E0', color: '#E65100', label: '⭐ Bestseller' },
  premium: { bg: '#F3E5F5', color: '#6A1B9A', label: '👑 Premium' },
  pure: { bg: '#E8F5E9', color: '#1B5E20', label: '🌿 Pure' },
  hot: { bg: '#FFEBEE', color: '#C62828', label: '🔥 Hot' },
  sortex: { bg: '#E3F2FD', color: '#0D47A1', label: '✅ Sortex' },
  trending: { bg: '#E8F5E9', color: '#1B7737', label: '📈 Trending' },
}

export default function ProductCard({ product, index = 0 }) {
  const badge = product.badge ? badgeStyles[product.badge] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
    >
      <Link to={`/products/${product.id}`} className="block product-card group">
        {/* Image */}
        <div className="relative overflow-hidden bg-orange-50" style={{ height: '220px' }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="badge-red text-xs" style={{ fontSize: '0.58rem' }}>
              {product.categoryLabel}
            </span>
          </div>

          {/* Quality badge */}
          {badge && (
            <div className="absolute top-3 right-3">
              <span className="badge text-xs" style={{ background: badge.bg, color: badge.color, fontSize: '0.58rem' }}>
                {badge.label}
              </span>
            </div>
          )}

          {/* Quick view overlay */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white bg-opacity-95 rounded-xl px-4 py-2.5 text-center">
              <span className="text-xs font-bold text-brand-red">View Full Details →</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs mb-0.5" style={{ color: '#C0281A', fontStyle: 'italic', fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
            {product.tagline}
          </p>
          <h3 className="font-bold text-base mb-0.5 text-gray-900 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 mb-3">{product.nameHindi}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4"
            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-orange-100">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: '#FFF8E1', color: '#8B6914' }}>
              📦 {product.packing}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-brand-red">
              Explore <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
