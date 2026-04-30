import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Trophy, Zap, Repeat, Target, BookOpen, Star, Quote, Play, Sparkles, Crown, ChevronRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import ChessBoard from '../components/ChessBoard';
import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';

const TESTIMONIALS = [
  {
    quote: 'I went from 1450 to 1820 USCF in eight months. The move trainer is the missing piece every adult improver needs.',
    name: 'Marina Halverson',
    role: 'Community manager · Boston, MA',
    rating: 5,
    img: 'https://picsum.photos/seed/%E1%83%A2%E1%83%94%E1%83%A5%E1%83%9C%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98%E1%83%90-team-0/1200/800'
  },
  {
    quote: 'Spaced repetition for chess — I genuinely don\'t forget my lines anymore. The Caro‑Kann course alone paid for two years.',
    name: 'Dr. Idris Okafor',
    role: 'Cardiologist · Lagos, NG',
    rating: 5,
    img: 'https://picsum.photos/seed/%E1%83%A2%E1%83%94%E1%83%A5%E1%83%9C%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98%E1%83%90-team-1/1200/800'
  },
  {
    quote: 'I run a school chess club. We replaced three subscriptions with this. Kids love the XP system and the streaks.',
    name: 'Henrietta Cole‑Madsen',
    role: 'Coach · Copenhagen, DK',
    rating: 5,
    img: 'https://picsum.photos/seed/%E1%83%A2%E1%83%94%E1%83%A5%E1%83%9C%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98%E1%83%90-team-2/1200/800'
  }
];

const COURSES = [
  { cat: 'Openings', title: 'The Caro-Kann: A Lifetime Repertoire', author: 'GM Sergei Yarov', lessons: 42, level: 'Intermediate', color: 'from-emerald-500 to-teal-600' },
  { cat: 'Middlegames', title: 'Pawn Structures Decoded', author: 'IM Léa Bouchard', lessons: 28, level: 'Advanced', color: 'from-amber-500 to-orange-600' },
  { cat: 'Endgames', title: 'Rook Endgames Without Tears', author: 'GM Tomás Ribeiro', lessons: 31, level: 'All Levels', color: 'from-rose-500 to-pink-600' },
  { cat: 'Openings', title: 'Sharp Sicilian Najdorf', author: 'GM Anjali Subramanian', lessons: 56, level: 'Advanced', color: 'from-violet-500 to-indigo-600' },
  { cat: 'Middlegames', title: 'Calculation Bootcamp', author: 'WGM Hanna Eriksson', lessons: 24, level: 'Intermediate', color: 'from-cyan-500 to-blue-600' },
  { cat: 'Endgames', title: 'King and Pawn Mastery', author: 'IM Joaquín Vidal', lessons: 19, level: 'Beginner', color: 'from-fuchsia-500 to-purple-600' }
];

function Counter({ to, suffix = '', duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, isVisible } = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, to, duration]);
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{val.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  return (
    <>
      {/* HERO ============================================================ */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-emerald-50 to-amber-50 dark:from-ink dark:via-emerald-950 dark:to-[#1a0f00]" />
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-emerald-400/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-amber-400/30 rounded-full blur-[120px]" />

        {/* Big background letterforms */}
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display font-black text-[36vw] md:text-[28vw] leading-none text-emerald-900/[0.04] dark:text-amber-400/[0.04] tracking-tighter">♞</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/10 dark:bg-amber-400/10 border border-emerald-900/15 dark:border-amber-400/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-900 dark:text-amber-300">25 courses · 300+ videos · One plan</span>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[0.95] mt-7 tracking-tight">
                  Stop forgetting<br />
                  <span className="relative inline-block">
                    your <span className="shimmer-text italic">openings</span>.
                    <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                      <path d="M2 8 Q 75 2, 150 6 T 298 4" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
                    </svg>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-7 text-lg md:text-xl text-ink/70 dark:text-ivory/70 max-w-xl leading-relaxed">
                  Modern Chess Academy combines a hand‑crafted move trainer with a
                  <span className="font-semibold text-emerald-700 dark:text-amber-400"> spaced‑repetition engine </span>
                  that reviews each line precisely when you're about to forget it. Boost retention by up to <span className="font-semibold">95%</span>.
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/register"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 text-white text-base font-bold rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.03] active:scale-95 transition-all"
                  >
                    Start free — no card needed
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/features"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-ink/20 dark:border-ivory/20 hover:border-emerald-600 dark:hover:border-amber-400 hover:bg-emerald-600/5 dark:hover:bg-amber-400/5 rounded-2xl font-semibold transition-all"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    See how it works
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={420}>
                <div className="mt-10 flex items-center gap-6 text-sm text-ink/60 dark:text-ivory/60">
                  <div className="flex -space-x-2">
                    {[0, 1, 2, 3].map(i => (
                      <img
                        key={i}
                        src={`https://picsum.photos/seed/%E1%83%A2%E1%83%94%E1%83%A5%E1%83%9C%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98%E1%83%90-team-${i}/1200/800`}
                        alt=""
                        className="w-9 h-9 rounded-full border-2 border-ivory dark:border-ink object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                      <span className="ml-1 font-bold text-ink dark:text-ivory">4.9</span>
                    </div>
                    <div>Trusted by 142,000+ improvers worldwide</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Hero board panel */}
            <div className="lg:col-span-5">
              <Reveal delay={300} y={40}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/40 via-emerald-500/30 to-rose-500/30 rounded-3xl blur-2xl" />
                  <div className="relative bg-white/90 dark:bg-emerald-950/90 backdrop-blur rounded-3xl p-5 md:p-6 border border-emerald-900/10 dark:border-amber-400/20 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-emerald-700 dark:text-amber-400 font-bold">Live Trainer · Italian Game</div>
                        <div className="font-display text-lg font-bold mt-1">3. Bc4 Bc5 — your move</div>
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3" /> +12 XP
                      </div>
                    </div>
                    <ChessBoard />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <button className="px-3 py-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 font-semibold text-sm hover:bg-emerald-200 transition-colors">Hint</button>
                      <button className="px-3 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 font-semibold text-sm hover:bg-amber-200 transition-colors">Show line</button>
                      <button className="px-3 py-2.5 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-200 font-semibold text-sm hover:bg-rose-200 transition-colors">Skip</button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* STATS ROW ====================================================== */}
      <section className="bg-emerald-950 text-ivory py-14 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { num: 142000, suf: '+', label: 'Active learners', color: 'text-amber-400' },
            { num: 95, suf: '%', label: 'Retention boost', color: 'text-rose-400' },
            { num: 25, suf: '', label: 'Expert courses', color: 'text-emerald-400' },
            { num: 1200000, suf: '+', label: 'Reviews completed', color: 'text-cyan-400' }
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center lg:text-left border-l-2 lg:border-l-4 border-amber-400/40 pl-5">
                <div className={`font-display text-5xl md:text-6xl font-black ${s.color}`}>
                  <Counter to={s.num} suffix={s.suf} />
                </div>
                <div className="mt-2 text-ivory/70 text-sm uppercase tracking-widest">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS — three pillars =================================== */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-amber-50 to-ivory dark:from-[#0d0a05] dark:to-ink">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-bold">The method</span>
              <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1]">Watch. Train. Repeat.<br/><span className="text-emerald-700 dark:text-emerald-400">In that order.</span></h2>
              <p className="mt-5 text-lg text-ink/70 dark:text-ivory/70 max-w-2xl">Three phases, each one designed by working coaches who teach this stuff every day. You don't just consume — you internalize.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { num: '01', icon: BookOpen, title: 'Watch the lesson', desc: 'Short, dense videos with instructor notes and an interactive board. Step through every move at your pace.', color: 'bg-emerald-600', tone: 'bg-emerald-50 dark:bg-emerald-950/50' },
              { num: '02', icon: Target, title: 'Train the moves', desc: 'Move trainer drills you on every critical decision. Wrong answer? You see the right one immediately.', color: 'bg-amber-500', tone: 'bg-amber-50 dark:bg-amber-950/40' },
              { num: '03', icon: Repeat, title: 'Review forever', desc: 'Lines you struggled with come back tomorrow. Lines you nailed return in 30 days. The system never forgets.', color: 'bg-rose-500', tone: 'bg-rose-50 dark:bg-rose-950/40' }
            ].map((p, i) => (
              <Reveal key={i} delay={i * 130}>
                <div className={`relative ${p.tone} border border-ink/10 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 h-full`}>
                  <div className={`absolute -top-5 -right-5 ${p.color} text-white font-display text-3xl font-black rounded-2xl px-4 py-2 shadow-xl rotate-3`}>{p.num}</div>
                  <div className={`w-14 h-14 rounded-2xl ${p.color} flex items-center justify-center text-white mb-6`}>
                    <p.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-ink/70 dark:text-ivory/70 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES SHOWCASE =============================================== */}
      <section className="py-24 md:py-32 bg-ivory dark:bg-ink">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-400 font-bold">Featured library</span>
                <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1.05] max-w-2xl">From Caro‑Kann to King's Indian — taught by people who play it.</h2>
              </div>
              <Link to="/features" className="inline-flex items-center gap-2 text-emerald-700 dark:text-amber-400 font-bold hover:gap-4 transition-all">
                Browse all 25 courses <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group relative rounded-3xl overflow-hidden border border-ink/10 dark:border-white/10 hover:border-emerald-500 dark:hover:border-amber-400 transition-all hover:-translate-y-1.5 hover:shadow-2xl bg-white dark:bg-emerald-950/30">
                  <div className={`h-44 bg-gradient-to-br ${c.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 chess-pattern opacity-20" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-wider">{c.cat}</div>
                    <div className="absolute bottom-4 right-4 text-white/90 font-display text-7xl font-black opacity-30">♞</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold leading-tight group-hover:text-emerald-700 dark:group-hover:text-amber-400 transition-colors">{c.title}</h3>
                    <p className="mt-2 text-sm text-ink/60 dark:text-ivory/60">{c.author}</p>
                    <div className="mt-5 pt-5 border-t border-ink/10 dark:border-white/10 flex items-center justify-between text-xs">
                      <span className="font-semibold flex items-center gap-1.5"><Play className="w-3.5 h-3.5 fill-current" /> {c.lessons} lessons</span>
                      <span className="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-semibold">{c.level}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS ===================================================== */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 text-ivory relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-bold">The faculty</span>
              <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1] text-ivory">Coached by people who actually <span className="text-amber-400 italic">play the moves</span>.</h2>
              <p className="mt-5 text-lg text-ivory/75 max-w-2xl">Three Grandmasters, two International Masters, and a roster of titled coaches. Not theorists — practitioners who score points with this stuff.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'GM Sergei Yarov', spec: 'Caro‑Kann · Endgames', img: 0, color: 'bg-amber-500' },
              { name: 'IM Léa Bouchard', spec: 'Pawn structures', img: 1, color: 'bg-rose-500' },
              { name: 'GM Anjali Subramanian', spec: 'Sicilian · Calculation', img: 2, color: 'bg-cyan-500' },
              { name: 'GM Tomás Ribeiro', spec: 'Rook endings', img: 3, color: 'bg-fuchsia-500' }
            ].map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-emerald-900">
                    <img
                      src={`https://picsum.photos/seed/%E1%83%A2%E1%83%94%E1%83%A5%E1%83%9C%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98%E1%83%90-team-${m.img}/1200/800`}
                      alt={m.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
                    <div className={`absolute top-4 left-4 ${m.color} text-ink rounded-xl px-3 py-1 text-xs font-black uppercase tracking-wider`}>Faculty</div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="font-display text-xl font-bold">{m.name}</div>
                    <div className="text-amber-300 text-sm">{m.spec}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS ==================================================== */}
      <section className="py-24 md:py-32 bg-rose-50 dark:bg-[#160810]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 justify-between mb-14">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400 font-bold">In their words</span>
                <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1] max-w-3xl">Real ratings. <span className="italic text-rose-600 dark:text-rose-400">Real improvement.</span></h2>
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <figure className={`bg-white dark:bg-emerald-950/40 rounded-3xl p-8 border border-ink/10 dark:border-white/10 relative h-full flex flex-col ${i === 1 ? 'lg:translate-y-6' : ''}`}>
                  <Quote className="w-10 h-10 text-amber-400/60 mb-4" />
                  <blockquote className="font-display text-xl leading-snug flex-1">"{t.quote}"</blockquote>
                  <div className="flex items-center gap-1 mt-5 mb-4">
                    {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <figcaption className="flex items-center gap-3 pt-5 border-t border-ink/10 dark:border-white/10">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-xs text-ink/60 dark:text-ivory/60">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP ======================================================= */}
      <section className="py-20 bg-amber-400 dark:bg-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-3 text-ink/70">
                <Crown className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.25em] font-bold">One plan, everything unlocked</span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-6xl text-ink leading-[1]">$10 a month. <span className="italic">Every course.</span> Every move trainer. Every review.</h2>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-4">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link to="/pricing" className="px-7 py-4 bg-ink text-amber-400 rounded-2xl font-bold text-center hover:bg-emerald-950 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2">
                See pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/register" className="px-7 py-4 bg-white text-ink rounded-2xl font-bold text-center hover:bg-ivory transition-all hover:scale-105 active:scale-95">
                Start 7-day trial
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GAMIFICATION TEASER ============================================= */}
      <section className="py-24 md:py-32 bg-ivory dark:bg-ink">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-widest">
                <Trophy className="w-4 h-4" /> XP & streaks
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black mt-5 leading-[1]">Practice that actually <span className="italic text-amber-600 dark:text-amber-400">feels good</span>.</h2>
              <p className="mt-5 text-lg text-ink/70 dark:text-ivory/70">Earn XP for every correct move. Build streaks for daily reviews. Unlock badges as you climb levels. We made the dopamine loops on purpose — because chess study should pull you in, not push you away.</p>
              <ul className="mt-7 space-y-3">
                {['+2 XP per correct move in trainer', '+10 XP for clean line completions', '+5 XP for finishing your daily review queue', 'Streak multipliers for consecutive days', 'Badges for milestones — 7‑day streak, 1,000 XP, more'].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/30 to-amber-500/30 rounded-3xl blur-2xl" />
              <div className="relative bg-white dark:bg-emerald-950/60 rounded-3xl p-8 border border-ink/10 dark:border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/60 dark:text-ivory/60 font-bold">Today's progress</div>
                    <div className="font-display text-2xl font-bold mt-1">Level 14 · Tactician</div>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-2xl font-black text-white shadow-lg">14</div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">2,840 XP</span>
                    <span className="text-ink/60 dark:text-ivory/60">3,200 to Level 15</span>
                  </div>
                  <div className="h-3 rounded-full bg-ink/10 dark:bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500" style={{ width: '88%' }} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { l: 'Streak', v: '23🔥', bg: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300' },
                    { l: 'Reviews', v: '14/20', bg: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' },
                    { l: 'Accuracy', v: '92%', bg: 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300' }
                  ].map((s, i) => (
                    <div key={i} className={`rounded-2xl p-4 ${s.bg}`}>
                      <div className="text-xs uppercase tracking-wider font-bold opacity-70">{s.l}</div>
                      <div className="font-display text-2xl font-black mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-ink/10 dark:border-white/10">
                  <div className="text-xs uppercase tracking-widest text-ink/60 dark:text-ivory/60 font-bold mb-3">Recent badges</div>
                  <div className="flex gap-2 flex-wrap">
                    {['🏅 7-day streak', '🎯 First mate', '⚔️ Tactician', '📚 1,000 XP'].map((b, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-ink/5 dark:bg-white/10 text-xs font-semibold">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA ======================================================= */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-950 via-ink to-emerald-950 text-ivory relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <Reveal>
            <Brain className="w-14 h-14 mx-auto text-amber-400" />
            <h2 className="font-display text-5xl md:text-7xl font-black mt-6 leading-[0.95]">
              Your future self is <span className="shimmer-text italic">a strong player</span>.
            </h2>
            <p className="mt-6 text-xl text-ivory/70 max-w-2xl mx-auto">Start today, study a little every day, and let the spaced repetition do the heavy lifting.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="px-8 py-4 bg-amber-400 text-ink rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2">
                Begin free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-ivory/30 hover:border-amber-400 hover:bg-white/5 rounded-2xl font-semibold transition-all">
                Talk to our team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}