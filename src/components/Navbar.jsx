import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 shadow ring-1 ring-white/10" />
            <span className="text-lg font-semibold tracking-tight text-slate-900">Clutch</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800 transition">Get started</a>
          </div>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-white/60">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setOpen(false)} />
          <div className="ml-auto h-full w-80 bg-white shadow-xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 shadow ring-1 ring-black/5" />
                <span className="text-lg font-semibold">Clutch</span>
              </div>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-md p-2 hover:bg-slate-100">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-4 grid gap-2">
              <a href="#features" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-base font-medium hover:bg-slate-50">Features</a>
              <a href="#pricing" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-base font-medium hover:bg-slate-50">Pricing</a>
              <a href="#faq" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-base font-medium hover:bg-slate-50">FAQ</a>
              <a href="#get-started" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">Get started</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
