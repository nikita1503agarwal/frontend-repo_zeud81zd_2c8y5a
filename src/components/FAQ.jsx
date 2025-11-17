const faqs = [
  {
    q: "Is this a CRM?",
    a: "No. Clutch is a hands-off system focused on one thing: generating bookings and renewals without extra admin.",
  },
  {
    q: "Do I need to learn new software?",
    a: "No dashboards to manage. Connect Google Calendar, choose membership plans, and Clutch runs in the background.",
  },
  {
    q: "How does it fill slow days?",
    a: "We detect gaps on your calendar and reach out to past customers with timely, relevant offers that match your services.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Start with a free trial, and cancel whenever you like—no contracts.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Questions, answered</h2>
          <p className="mt-3 text-slate-600">Short, straight answers so you can get back to work.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
