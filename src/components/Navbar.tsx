import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, LogOut, User as UserIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-ivory/85 dark:bg-ink/85 backdrop-blur-xl border-b border-emerald-900/10 dark:border-emerald-100/10'
      : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo />
            <div className="leading-none">
              <div className="font-display font-bold text-lg tracking-tight">Modern Chess Academy</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 mt-0.5">Train · Repeat · Master</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-emerald-700 dark:text-amber-400 bg-emerald-100/60 dark:bg-amber-400/10'
                      : 'text-ink/70 dark:text-ivory/70 hover:text-ink dark:hover:text-ivory hover:bg-ink/5 dark:hover:bg-white/5'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl bg-ink/5 dark:bg-white/10 hover:bg-ink/10 dark:hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {user ? (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/profile" className="p-2.5 rounded-xl bg-ink/5 dark:bg-white/10 hover:bg-ink/10 dark:hover:bg-white/20 transition-all">
                  <UserIcon size={18} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 transition-all"
                  aria-label="Sign out"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="hidden md:inline-flex px-4 py-2 text-sm font-medium hover:text-emerald-700 dark:hover:text-amber-400 transition-colors">
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all"
                >
                  Start free
                </Link>
              </>
            )}

            <button
              className="lg:hidden p-2.5 rounded-xl bg-ink/5 dark:bg-white/10"
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-5 pt-2 space-y-1 border-t border-ink/5 dark:border-white/10">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-100/60 dark:bg-amber-400/10 text-emerald-700 dark:text-amber-400'
                      : 'hover:bg-ink/5 dark:hover:bg-white/5'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-2">
              {user ? (
                <>
                  <Link to="/profile" onClick={() => setOpen(false)} className="px-4 py-3 text-center rounded-lg bg-ink/5 dark:bg-white/10 font-medium">Profile</Link>
                  <button onClick={() => { handleLogout(); setOpen(false); }} className="px-4 py-3 rounded-lg bg-rose-500 text-white font-semibold">Sign out</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="px-4 py-3 text-center rounded-lg bg-ink/5 dark:bg-white/10 font-medium">Log in</Link>
                  <Link to="/register" onClick={() => setOpen(false)} className="px-4 py-3 text-center rounded-lg bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-semibold">Start free</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}