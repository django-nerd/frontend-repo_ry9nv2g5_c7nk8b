import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.10),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.10),transparent_40%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,\n        <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\' viewBox=\'0 0 32 32\' fill=\'none\'>\n          <path d=\'M0 16 H32 M16 0 V32\' stroke=\'rgba(148,163,184,0.08)\' stroke-width=\'1\'/>\n        </svg>')] opacity-40" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="relative py-10 text-center text-xs text-slate-400/70">
        © {new Date().getFullYear()} Cybernetics Corporation — Retro‑future systems
      </footer>
    </div>
  )
}

export default App
