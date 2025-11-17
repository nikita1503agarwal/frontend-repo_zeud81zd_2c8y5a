import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">New • Built for auto detailers</span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
                Zero-effort revenue engine for auto detailers
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
                Clutch keeps your schedule full and your income predictable by automatically filling slow days, building recurring revenue with simple memberships, and sending personal, well-timed follow‑ups — all without learning any software.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-white/90">
                  Get started free
                </a>
                <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-slate-900/70 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-slate-900/80">
                  Watch 2‑min demo
                </a>
              </div>
              <div className="mt-6 text-xs text-white/70">No credit card • Cancel anytime</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
    </section>
  )
}
