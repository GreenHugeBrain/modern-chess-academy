import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  { q: 'Is there a free trial?', a: 'Yes — 14 days free, no credit card required. You get full access to every feature and course during the trial.' },
  { q: 'Can I cancel any time?', a: 'Absolutely. Cancel from your profile page with one click. You keep access until the end of your billing period.' },
  { q: 'What skill level is this for?', a: 'Beginners through advanced club players (up to ~2000 Elo). Complete beginners should start with our Foundations course.' },
  { q: 'How many courses are included?', a: '25 courses and growing. Every course is included in your subscription — no per-course fees, ever.' },
  { q: 'Can I use it on mobile?', a: 'Yes. The web app is fully responsive. Native iOS and Android apps are in development and will be free for subscribers.' },
  { q: 'What is spaced repetition?', a: 'An evidence-based study technique that schedules reviews at the optimal moment — just before you would forget. You retain more with less practice time.' },
  { q: 'Do you offer team or school plans?', a: 'Yes. Contact us for volume pricing for clubs, schools, and academies. We support up to thousands of seats.' },
  { q: 'Is the content updated?', a: 'Continuously. Theory lines are revised when opening theory evolves. You always study the current main lines.' }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10 dark:border-white/10">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-lg">{q}</span>
        <ChevronDown size={20} className={`shrink-0 text-emerald-600 dark:text-amber-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className="pb-5 text-ink/70 dark:text-ivory/70 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-emerald-50 via-ivory to-amber-50 dark:from-[#04140e] dark:via-ink dark:to-[#100a02] overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-300/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-700 dark:text-amber-400 font-bold">Help</span>
            <h1 className="font-display text-5xl md:text-7xl font-black mt-4 leading-[0.95]">
              Frequently asked <span className="italic shimmer-text">questions</span>
            </h1>
            <p className="mt-6 text-lg text-ink/70 dark:text-ivory/70">Everything you need to know before you start training.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-ivory dark:bg-ink">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="divide-y divide-ink/10 dark:divide-white/10">
              {FAQS.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 rounded-3xl bg-emerald-950 text-ivory p-10 text-center">
              <h2 className="font-display text-3xl font-bold">Still have questions?</h2>
              <p className="mt-3 text-ivory/70">Our support team replies within one business hour.</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-ink font-bold rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}