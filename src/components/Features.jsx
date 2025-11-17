import { CalendarClock, Repeat2, MessagesSquare, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react'

const features = [
  {
    icon: CalendarClock,
    title: 'Fills slow days automatically',
    desc: 'Connects to Google Calendar to detect gaps and sends targeted offers to fill them with the right customers.',
  },
  {
    icon: Repeat2,
    title: 'Memberships that actually renew',
    desc: 'Simple, pre-built plans that drive predictable monthly revenue without setup headaches.',
  },
  {
    icon: MessagesSquare,
    title: 'Personal follow-ups that convert',
    desc: 'Well-timed texts and emails to past VIPs, written in your voice and sent automatically.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue you can count on',
    desc: 'Weekly pipeline view shows bookings, renewals, and projected revenue at a glance.',
  },
  {
    icon: ShieldCheck,
    title: 'Hands-off, not a CRM',
    desc: 'No pipelines or tags. Clutch runs quietly in the background and just books jobs.',
  },
  {
    icon: Sparkles,
    title: 'Set-and-forget setup',
    desc: '5-minute onboarding. Connect calendar, choose plans, and you’re done.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for busy detailers</h2>
          <p className="mt-3 text-slate-600">Everything centers on predictable bookings and less admin — no dashboards to babysit.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-600/10 text-blue-700 p-2 ring-1 ring-blue-600/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
