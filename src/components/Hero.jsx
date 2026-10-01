import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { siteConfig } from '../data/config.js'

// Nodes/edges for the abstract network visual. Kept as data so the
// visual is easy to tweak without touching the JSX/SVG markup.
const nodes = [
  { x: 60, y: 40 }, { x: 220, y: 30 }, { x: 340, y: 90 },
  { x: 120, y: 130 }, { x: 260, y: 170 }, { x: 40, y: 210 },
  { x: 360, y: 230 }, { x: 190, y: 260 },
]
const edges = [
  [0, 1], [1, 2], [1, 3], [3, 5], [3, 4], [4, 2], [4, 6], [4, 7], [5, 7],
]

function NetworkVisual() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-full" role="img" aria-label="Abstract network topology visualization">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke="url(#lineGradient)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 0.1 * i, ease: 'easeOut' }}
          />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3fd0e0" />
            <stop offset="100%" stopColor="#4c8fff" />
          </linearGradient>
        </defs>
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x} cy={n.y} r={i === 4 ? 7 : 5}
            fill={i === 4 ? '#3ee08a' : '#3fd0e0'}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 * i }}
          />
        ))}
        {/* shield motif, centered */}
        <motion.path
          d="M200 95 L225 108 V138 C225 158 213 172 200 178 C187 172 175 158 175 138 V108 Z"
          fill="rgba(63,208,224,0.08)"
          stroke="#3fd0e0"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="grid-backdrop" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm text-accent-cyan mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Available for internships & collaborations
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-100">
            Building Secure Networks. Exploring Cybersecurity. Creating Technology.
          </h1>

          <p className="mt-6 text-lg text-ink-300 max-w-xl">
            B.E. Computer Science &amp; Engineering student focused on Cybersecurity, Networking,
            Ethical Hacking, and secure technology solutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-base-900 font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.resumeUrl}
              download="Deenesh_A_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg glass-card glow-border text-ink-100 font-semibold px-6 py-3 hover:bg-white/5 transition-colors"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>

          <a href="#contact" className="mt-6 inline-block text-sm text-ink-500 hover:text-accent-cyan transition-colors">
            Let's Connect →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card glow-border relative min-h-[560px] overflow-hidden rounded-2xl p-6 sm:p-8">
            <div className="absolute inset-0 flex items-center justify-center opacity-80" aria-hidden="true">
              <NetworkVisual />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-20 top-4 flex items-end justify-center">
              <img
                src="/deenesh-photo.jpeg"
                alt="Deenesh A."
                className="h-full max-w-full object-contain object-bottom drop-shadow-[0_0_24px_rgba(63,208,224,0.16)]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-3 bg-gradient-to-t from-[#071321] via-[#071321]/95 to-transparent px-4 pb-6 pt-12">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center font-bold text-base-900 text-lg shrink-0">
                DA
              </div>
              <div className="text-left">
                <p className="font-semibold text-ink-100">{siteConfig.name}</p>
                <p className="text-sm text-ink-500">Cybersecurity &amp; Networking Enthusiast</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
