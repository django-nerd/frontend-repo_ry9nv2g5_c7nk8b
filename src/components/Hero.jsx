import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/90 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-fuchsia-200 mb-6">
                <Sparkles className="h-4 w-4" />
                Cybernetic Systems For The Next Frontier
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                Building the interface between humans and intelligent machines
              </h1>
              <p className="mt-6 text-lg text-slate-300/90">
                We design neural interfaces, autonomous agents, and adaptive platforms that merge retro ingenuity with tomorrow's tech.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-slate-900 font-semibold shadow-[0_12px_30px_-6px_rgba(56,189,248,0.45)]">
                  Explore Solutions <ArrowRight className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6"/>
        </div>
      </div>

      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-60 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-2xl pointer-events-none"></div>
    </section>
  )
}
