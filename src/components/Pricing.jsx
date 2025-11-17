export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Straightforward pricing</h2>
          <p className="mt-3 text-slate-600">Start free, prove value, then scale. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Starter</h3>
            <p className="mt-2 text-sm text-slate-600">Perfect for solo operators getting consistent bookings.</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-500"> / 14 days</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Google Calendar insights</li>
              <li>• Slow day fill automation</li>
              <li>• 1 membership plan</li>
            </ul>
            <a href="#get-started" className="mt-8 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Start free</a>
          </div>

          <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-lg relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Growth</h3>
            <p className="mt-2 text-sm text-slate-600">For shops ready to lock in predictable monthly revenue.</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-slate-900">$199</span>
              <span className="text-slate-500"> / month</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Everything in Starter</li>
              <li>• Unlimited membership plans</li>
              <li>• VIP follow-up sequences</li>
              <li>• Priority support</li>
            </ul>
            <a href="#get-started" className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Choose Growth</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Elite</h3>
            <p className="mt-2 text-sm text-slate-600">Hands-on onboarding and campaign setup for multi-bay shops.</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-slate-900">$499</span>
              <span className="text-slate-500"> / month</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Done-for-you setup</li>
              <li>• Custom membership strategy</li>
              <li>• Dedicated success manager</li>
            </ul>
            <a href="#get-started" className="mt-8 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
