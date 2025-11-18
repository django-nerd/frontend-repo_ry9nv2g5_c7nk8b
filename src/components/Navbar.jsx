import { useState } from 'react'
import { Menu, X, ScanLine, Cpu, Rocket } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-sm text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-blue-500/10"></div>
          <div className="relative flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-slate-900 shadow-[0_0_40px_rgba(168,85,247,0.45)]">
                <ScanLine className="h-6 w-6" />
              </div>
              <div className="leading-tight">
                <div className="text-white text-lg font-semibold tracking-tight">Cybernetics Corporation</div>
                <div className="text-[11px] uppercase tracking-widest text-fuchsia-300/70">Futures engineered</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink>Solutions</NavLink>
              <NavLink>Research</NavLink>
              <NavLink>Security</NavLink>
              <NavLink>Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/20 transition">
                <Cpu className="h-4 w-4" /> Platform
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-slate-900 font-semibold shadow-[0_12px_30px_-6px_rgba(56,189,248,0.45)]">
                <Rocket className="h-4 w-4" /> Get Started
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-white/15 text-slate-200">
              {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                <NavLink>Solutions</NavLink>
                <NavLink>Research</NavLink>
                <NavLink>Security</NavLink>
                <NavLink>Contact</NavLink>
                <div className="pt-2 flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200">
                    <Cpu className="h-4 w-4" /> Platform
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-slate-900 font-semibold">
                    <Rocket className="h-4 w-4" /> Start
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
