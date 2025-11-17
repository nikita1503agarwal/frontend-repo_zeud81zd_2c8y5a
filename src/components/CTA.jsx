export default function CTA() {
  return (
    <section id="get-started" className="relative py-24 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Start filling your calendar this week</h2>
            <p className="mt-3 text-white/80">Connect Google Calendar, pick membership plans, and let Clutch quietly bring in bookings. We’ll help you import past customers.</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• 14-day free trial</li>
              <li>• No credit card required</li>
              <li>• Cancel anytime</li>
            </ul>
          </div>
          <form className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
            <label className="block text-sm font-medium">Work email</label>
            <input type="email" placeholder="you@shop.com" className="mt-2 w-full rounded-md bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none" />
            <button type="button" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Get started free</button>
            <p className="mt-3 text-xs text-white/60">By continuing, you agree to our Terms and Privacy Policy.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
