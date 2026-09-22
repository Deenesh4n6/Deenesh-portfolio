import { motion } from 'framer-motion'

// Small reusable wrapper that fades + slides content up once when it
// scrolls into view. Framer Motion respects prefers-reduced-motion
// automatically when `transition.duration` collapses via CSS, but we
// also keep the animation subtle by default (12px, short duration).
export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
