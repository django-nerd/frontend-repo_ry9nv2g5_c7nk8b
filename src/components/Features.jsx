import { Shield, Brain, Link, Waves } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Brain,
    title: 'Neural Interfaces',
    desc: 'Non-invasive systems that translate intention into action with millisecond latency.',
    accent: 'from-fuchsia-500 to-cyan-400'
  },
  {
    icon: Link,
    title: 'Agent Mesh',
    desc: 'A network of autonomous agents that collaborate securely across the edge.',
    accent: 'from-cyan-400 to-violet-500'
  },
  {
    icon: Shield,
    title: 'Zero-Trust Core',
    desc: 'Hardware-level cryptography and continuous attestation built-in by design.',
    accent: 'from-violet-500 to-fuchsia-500'
  },
  {
    icon: Waves,
    title: 'Retro Aesthetics',
    desc: 'Futurism with soul: CRT glow, vector grids, and tactile feedback cues.',
    accent: 'from-emerald-400 to-cyan-400'
  }
]

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Systems that feel alive</h2>
          <p className="mt-4 text-slate-300/90">We engineer the stack end‑to‑end: sensors, firmware, models, and the human interface.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((Item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 h-48 w-48 bg-gradient-to-br ${items[idx].accent} opacity-20 blur-2xl rounded-full`}></div>
              <div className="relative">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${items[idx].accent} text-slate-900 grid place-items-center mb-4`}>
                  <Item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{items[idx].title}</h3>
                <p className="mt-2 text-slate-300/80 text-sm">{items[idx].desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-40 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_60%)] blur-2xl"></div>
    </section>
  )
}
