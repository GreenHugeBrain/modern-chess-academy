import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Twitter, Youtube, Instagram, Github } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer className="relative mt-24 bg-emerald-950 text-ivory overflow-hidden">
      <div className="absolute inset-0 chess-pattern opacity-40" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-20">
        {/* Newsletter */}
        <div className="mb-16 grid lg:grid-cols-2 gap-10 items-center pb-16 border-b border-white/10">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              The opening of the week, <span className="text-amber-400">delivered Monday at 9am</span>
            </h3>
            <p className="text-ivory/70 mt-3 max-w-md">A weekly puzzle, one annotated game, and one repertoire idea — read in 4 minutes.</p>
          </div>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 placeholder:text-ivory/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
            <button type="submit" className="px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-ink font-bold transition-all hover:scale-105 active:scale-95">
              {sent ? '✓ Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo />
              <span className="font-display font-bold text-xl">Modern Chess Academy</span>
            </div>
            <p className="text-ivory/65 text-sm leading-relaxed">
              Science-backed chess training. Spaced repetition, move trainer, and 25 expert courses — all for one fair price.
            </p>
            <div className="flex gap-2 mt-5">
              {[Twitter, Youtube, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-lg bg-white/10 hover:bg-amber-500 hover:text-ink transition-all hover:scale-110">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-amber-400 mb-4 text-sm uppercase tracking-widest">Learn</h4>
            <ul className="space-y-3 text-ivory/70 text-sm">
              <li><Link to="/features" className="hover:text-amber-400 transition-colors">Move Trainer</Link></li>
              <li><Link to="/features" className="hover:text-amber-400 transition-colors">Spaced Repetition</Link></li>
              <li><Link to="/features" className="hover:text-amber-400 transition-colors">My Lines</Link></li>
              <li><Link to="/features" className="hover:text-amber-400 transition-colors">Course Library</Link></li>
              <li><Link to="/features" className="hover:text-amber-400 transition-colors">Live Tournaments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-amber-400 mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-ivory/70 text-sm">
              <li><Link to="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">For Schools</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Coaches Program</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-amber-400 mb-4 text-sm uppercase tracking-widest">Reach Us</h4>
            <ul className="space-y-3 text-ivory/70 text-sm">
              <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-amber-400 shrink-0" /> 24 King's Gambit Lane, Reykjavík District, Studio 64</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-amber-400 shrink-0" /> hello@modernchess.academy</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-amber-400 shrink-0" /> +1 (415) 555‑0164</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ivory/50">
          <p>© {new Date().getFullYear()} Modern Chess Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400">Privacy</a>
            <a href="#" className="hover:text-amber-400">Terms</a>
            <a href="#" className="hover:text-amber-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}