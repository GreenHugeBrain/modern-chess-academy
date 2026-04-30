import { Check, X, Crown, Zap, Building2, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TIERS = [
  {
    name: 'Free Tab',
    price: 0,
    annual: 0,
    desc: 'Sample the method. Three preview lessons per course, no card.',
    cta: 'Start free',
    href: '/register',
    accent: 'from-zinc-400 to-zinc-600',
    bg: 'bg-white dark:bg-emerald-950/30',
    badge: null,
    featured: false,
    inc: ['3 free preview lessons per course', 'Basic move trainer (limited)', 'Daily puzzle of the day', 'Community forum access'],
    exc: ['Spaced repetition reviews', 'Full course library', 'My Lines library', 'XP & badges system']
  },
  {
    name: 'Member',
    price: 10,
    annual: 96,
    desc: 'The full Modern Chess Academy. Every course, every feature, forever.',
    cta: 'Become a member',
    href: '/register',
    accent: 'from-emerald-500 via-amber-500 to-rose-500',
    bg: 'bg-gradient-to-br from-emerald-700 to-emerald-950 text-ivory',
    badge: 'Most popular',
    featured: true,
    inc: [
      'All 25 courses · 300+ videos',
      'Unlimited move trainer sessions',
      'Spaced repetition engine',
      'My Lines: every variation saved',
      'XP, streaks, levels & badges',
      'Quick review sessions',
      'New courses added monthly',
      'Priority email support'
    ],
    exc: []
  },
  {
    name: 'Schools',
    price: 79,
    annual: 790,
    desc: 'Manage classrooms, track student progress, custom content.',
    cta: 'Talk to us',
    href: '/contact',
    accent: 'from-amber-500 to-rose-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    badge: 'For institutions',
    featured: false,
    inc: [
      'Up to 30 student seats',
      'Teacher dashboard & roster',
      'Class progress reports',
      'Custom curriculum builder',
      'Bulk PGN imports',
      'Live group sessions',
      'Dedicated success manager'
    ],
    exc: []
  }
];

const COMPARE = [
  { f: 'Number of courses', v: ['3 previews', 'All 25', 'All 25 + custom'] },
  { f: 'Move trainer sessions', v: ['10/day', 'Unlimited', 'Unlimited'] },
  { f: 'Spaced repetition', v: [false, true, true] },
  { f: 'My Lines library', v: [false, true, true] },
  { f: 'XP & badges', v: [false, true, true] },
  { f: 'Class management', v: [false, false, true] },
  { f: 'API access', v: [false, false, true] },
  { f: 'Priority support', v: [false, true, true] }
];

const TIER_ICONS = [Zap, Crown, Building2];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-ivory via-amber-50 to-emerald-50 dark:from-ink dark:via-[#100a02] dark:to-[#04140e] overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-300/20 rounded-full blur-[140px]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400 font-bold">Honest pricing</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mt-4 leading-[0.95]">
              One plan. <br />
              <span className="italic shimmer-text">All knowledge.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ink/70 dark:text-ivory/70 max-w-2xl mx-auto">
              No premium tiers. No course bundles. No nickel‑and‑diming. Pay $10/month and study like a Grandmaster.
            </p>

            <div className="mt-10 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-ink/5 dark:bg-white/10">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  !annual ? 'bg-emerald-600 text-white shadow' : 'text-ink/60 dark:text-ivory/60'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  annual ? 'bg-emerald-600 text-white shadow' : 'text-ink/60 dark:text-ivory/60'
                }`}
              >
                Annual{' '}
                <span className="px-2 py-0.5 rounded-md bg-amber-400 text-ink text-[10px]">−20%</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-ivory dark:bg-ink pb-16 -mt-10 relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {TIERS.map((t, i) => {
              const Icon = TIER_ICONS[i];
              const displayPrice = annual ? Math.round(t.annual / 12) : t.price;
              const displayAnnual = annual && t.annual > 0;
              return (
                <Reveal key={i} delay={i * 120}>
                  <div
                    className={`relative rounded-3xl p-8 border ${
                      t.featured
                        ? 'border-amber-400/40 shadow-2xl lg:scale-105'
                        : 'border-ink/10 dark:border-white/10'
                    } ${t.bg} h-full flex flex-col`}
                  >
                    {t.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-amber-400 to-rose-500 text-white shadow-lg">
                        {t.badge}
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.accent} flex items-center justify-center`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <h3 className={`font-display text-xl font-bold ${t.featured ? 'text-white' : ''}`}>
                        {t.name}
                      </h3>
                    </div>

                    <p className={`text-sm mb-6 ${t.featured ? 'text-white/75' : 'text-ink/60 dark:text-ivory/60'}`}>
                      {t.desc}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-end gap-1">
                        <span className={`font-display text-5xl font-black ${t.featured ? 'text-white' : ''}`}>
                          ${displayPrice}
                        </span>
                        {t.price > 0 && (
                          <span className={`text-sm mb-2 ${t.featured ? 'text-white/70' : 'text-ink/50 dark:text-ivory/50'}`}>
                            /mo
                          </span>
                        )}
                      </div>
                      {displayAnnual && t.annual > 0 && (
                        <p className={`text-xs mt-1 ${t.featured ? 'text-white/60' : 'text-ink/40 dark:text-ivory/40'}`}>
                          billed ${t.annual}/year
                        </p>
                      )}
                    </div>

                    <Link
                      to={t.href}
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95 mb-8 ${
                        t.featured
                          ? 'bg-white text-emerald-800 shadow-lg'
                          : `bg-gradient-to-r ${t.accent} text-white shadow`
                      }`}
                    >
                      {t.cta} <ArrowRight size={16} />
                    </Link>

                    <div className="flex-1 space-y-3">
                      {t.inc.map((item, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <Check
                            size={16}
                            className={`mt-0.5 shrink-0 ${t.featured ? 'text-amber-300' : 'text-emerald-500'}`}
                          />
                          <span className={`text-sm ${t.featured ? 'text-white/85' : 'text-ink/75 dark:text-ivory/75'}`}>
                            {item}
                          </span>
                        </div>
                      ))}
                      {t.exc.map((item, j) => (
                        <div key={j} className="flex items-start gap-2.5 opacity-40">
                          <X size={16} className="mt-0.5 shrink-0 text-rose-400" />
                          <span className="text-sm line-through">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-ivory dark:bg-ink">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-black text-center mb-12">
              Full feature comparison
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-ink/10 dark:border-white/10 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 bg-ink/5 dark:bg-white/5 px-6 py-4">
                <div className="text-sm font-bold text-ink/50 dark:text-ivory/50 uppercase tracking-widest">Feature</div>
                {TIERS.map((t, i) => (
                  <div key={i} className="text-center text-sm font-bold">
                    {t.name}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {COMPARE.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 px-6 py-4 items-center ${
                    i % 2 === 0 ? 'bg-white dark:bg-white/[0.02]' : 'bg-ink/[0.02] dark:bg-white/[0.04]'
                  }`}
                >
                  <div className="text-sm text-ink/70 dark:text-ivory/70">{row.f}</div>
                  {row.v.map((val, j) => (
                    <div key={j} className="flex justify-center">
                      {typeof val === 'boolean' ? (
                        val ? (
                          <Check size={18} className="text-emerald-500" />
                        ) : (
                          <X size={18} className="text-rose-400 opacity-50" />
                        )
                      ) : (
                        <span className="text-sm font-medium text-center">{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ nudge */}
      <section className="py-16 bg-gradient-to-b from-ivory to-emerald-50 dark:from-ink dark:to-emerald-950/20 text-center">
        <Reveal>
          <p className="text-ink/60 dark:text-ivory/60 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-ink/20 dark:border-white/20 font-semibold hover:bg-ink/5 dark:hover:bg-white/5 transition-all"
            >
              Browse the FAQ <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all"
            >
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}