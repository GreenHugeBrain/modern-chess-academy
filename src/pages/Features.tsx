import { Brain, Repeat, Target, BookOpen, Trophy, Bookmark, Zap, Clock, BarChart3, Layers, Sparkles, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import ChessBoard from '../components/ChessBoard';
import { Link } from 'react-router-dom';

const FEATURES = [
  { icon: Target, title: 'Move Trainer', desc: 'Don\'t just watch — play the moves. The trainer puts you in the position and waits for the correct answer. Wrong? See the right move instantly and reschedule the card.', color: 'from-emerald-500 to-teal-600', tag: 'Core' },
  { icon: Repeat, title: 'Spaced Repetition Engine', desc: 'Each line is a card with its own ease factor and interval. Reviews surface precisely when forgetting begins — not a day later, not a day earlier.', color: 'from-amber-500 to-orange-600', tag: 'Science' },
  { icon: Bookmark, title: 'My Lines', desc: 'Every variation you have ever studied, organised by course, chapter, and tag. Replay, reset progress, star favourites, jump back into training.', color: 'from-rose-500 to-pink-600', tag: 'Library' },
  { icon: Trophy, title: 'XP, Levels & Streaks', desc: 'Earn XP per correct move, build daily streaks, unlock level badges. Practice should feel like progress — not homework.', color: 'from-violet-500 to-indigo-600', tag: 'Motivation' },
  { icon: BookOpen, title: '25 Hand-Crafted Courses', desc: 'Openings, middlegames, endgames. Each course built by a titled coach with PGN trainer lines, video lessons, and downloadable notes.', color: 'from-cyan-500 to-blue-600', tag: 'Library' },
  { icon: BarChart3, title: 'Progress Dashboard', desc: 'Due Today, Overdue, New cards. Per‑course progress bars. Accuracy heatmaps. Know exactly where to focus your next session.', color: 'from-fuchsia-500 to-purple-600', tag: 'Analytics' },
  { icon: Layers, title: 'PGN Step-Through Board', desc: 'An interactive board on every lesson. Forward, back, branch into sidelines, flip the board, copy FEN — built for studying, not playing.', color: 'from-lime-500 to-green-600', tag: 'Core' },
  { icon: Clock, title: 'Quick Review Sessions', desc: 'Got 4 minutes between meetings? Smash through your due cards in micro‑sessions. The engine packs efficient reviews into short windows.', color: 'from-orange-500 to-red-600', tag: 'Workflow' },
  { icon: GraduationCap, title: 'Built-in Coach Notes', desc: 'Every lesson ships with the instructor\'s annotated thoughts — the why behind every move, in plain language.', color: 'from-teal-500 to-emerald-600', tag: 'Content' }
];

export default function Features() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-emerald-50 via-ivory to-amber-50 dark:from-[#04140e] dark:via-ink dark:to-[#100a02]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-300/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/30 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-700 dark:text-amber-400 font-bold">Capabilities</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mt-4 leading-[0.95] max-w-5xl">
              Every feature, <br/>
              <span className="italic shimmer-text">designed to improve you.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ink/70 dark:text-ivory/70 max-w-2xl">Nine pillars. One coherent system. Designed by working chess coaches and software engineers who got tired of forgetting their own openings.</p>
          </Reveal>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="py-20 md:py-28 bg-ivory dark:bg-ink">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <div className="group relative h-full rounded-3xl p-7 bg-white dark:bg-emerald-950/40 border border-ink/10 dark:border-white/10 hover:border-emerald-500 dark:hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg`}>
                    <f.icon className="w-7 h-7" />
                  </div>
                  <div className="absolute top-7 right-7 px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider">{f.tag}</div>
                  <h3 className="font-display text-xl font-bold mt-6">{f.title}</h3>
                  <p className="mt-3 text-sm text-ink/70 dark:text-ivory/70 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPACED REPETITION DEEP DIVE */}
      <section className="py-24 bg-emerald-950 text-ivory relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-25" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
                <Brain className="w-4 h-4" /> The science bit
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[1]">Forgetting is a feature. <span className="italic text-amber-400">If you use it right.</span></h2>
              <p className="mt-6 text-lg text-ivory/75">Each line you study becomes a card with three numbers attached: an interval (in days), an ease factor, and a repetition counter. Get a card right and the interval grows — 1 day, 3 days, 7, 14, 30. Get it wrong and the interval resets. The card returns when you're about to forget it, not before, not after.</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: '95%', l: 'Retention rate' },
                  { v: '4 min', l: 'Daily review' },
                  { v: '300+', l: 'Cards/course' }
                ].map((s, i) => (
                  <div key={i} className="border-l-4 border-amber-400 pl-4">
                    <div className="font-display text-3xl font-black text-amber-400">{s.v}</div>
                    <div className="text-xs uppercase tracking-wider text-ivory/60 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/30 to-rose-500/30 rounded-3xl blur-3xl" />
              <div className="relative bg-emerald-900/60 backdrop-blur rounded-3xl p-6 border border-amber-400/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs uppercase tracking-widest text-amber-300 font-bold">Move Trainer · Caro-Kann · 4...Nf6</div>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <ChessBoard />
                <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                  {[
                    { l: 'Reset', v: '0d', c: 'bg-rose-500/20 text-rose-300' },
                    { l: 'Hard', v: '1d', c: 'bg-amber-500/20 text-amber-300' },
                    { l: 'Good', v: '6d', c: 'bg-emerald-500/20 text-emerald-300' },
                    { l: 'Easy', v: '14d', c: 'bg-cyan-500/20 text-cyan-300' }
                  ].map((b, i) => (
                    <button key={i} className={`rounded-xl p-3 ${b.c} hover:scale-105 transition-transform`}>
                      <div className="text-xs font-bold">{b.l}</div>
                      <div className="text-[10px] opacity-75 mt-0.5">{b.v}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTEGRATIONS / GALLERY */}
      <section className="py-24 bg-amber-50 dark:bg-[#0d0a05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-bold">A complete environment</span>
              <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1]">Studio‑quality production. <span className="italic">Every course.</span></h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Recording studio', img: 'interior-0' },
              { title: 'Coach roundtables', img: 'gallery-0' },
              { title: 'Editing booths', img: 'interior-1' },
              { title: 'Live tournaments', img: 'gallery-1' }
            ].map((g, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/%E1%83%A2%E1%83%94%E1%83%A5%E1%83%9C%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98%E1%83%90-${g.img}/1200/800`}
                    alt={g.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <Zap className="w-5 h-5 text-amber-400 mb-2" />
                    <div className="font-display text-xl font-bold">{g.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-rose-500 text-ivory text-center relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-20" />
        <Reveal>
          <div className="relative max-w-3xl mx-auto px-5">
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[1]">All of this. <span className="italic">For ten dollars.</span></h2>
            <p className="mt-5 text-lg text-ivory/85">No upsells, no per‑course pricing, no DLC. One subscription, every feature.</p>
            <Link to="/pricing" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-ink text-amber-400 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all">
              See pricing
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}