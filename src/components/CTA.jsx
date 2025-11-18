import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 p-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-blue-500/10"></div>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">Plug into the Cybernet</h3>
              <p className="mt-3 text-slate-300/90">Request early access to our developer platform and join a private cohort exploring neural I/O, agentic workflows, and secure edge orchestration.</p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-slate-900 font-semibold shadow-[0_12px_30px_-6px_rgba(56,189,248,0.45)]">
                Request Access <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
