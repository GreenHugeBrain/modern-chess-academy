import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 bg-gradient-to-b from-emerald-50 via-ivory to-amber-50 dark:from-[#04140e] dark:via-ink dark:to-[#100a02]">
      <Reveal>
        <div className="text-center max-w-xl">
          <div className="font-display text-[10rem] font-black leading-none text-emerald-200 dark:text-emerald-900 select-none">
            404
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black -mt-6">Page not found</h1>
          <p className="mt-4 text-ink/60 dark:text-ivory/60 text-lg">
            Looks like this position doesn't exist on the board. Let's get you back to a legal position.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/features"
              className="px-8 py-4 rounded-2xl border-2 border-ink/20 dark:border-white/20 font-bold hover:border-emerald-500 dark:hover:border-amber-400 transition-all"
            >
              Explore features
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}