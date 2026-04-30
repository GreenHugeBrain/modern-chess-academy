import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Reveal from '../components/Reveal';
import Logo from '../components/Logo';

export default function Register() {
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setLoading(true);
    const { error: err } = await register(email, password, displayName);
    setLoading(false);
    if (err) {
      setError(err);
    } else {
      setSuccess(true);
      setTimeout(() => navigate('/'), 3000);
    }
  };

  const handleGoogle = async () => {
    await loginWithGoogle();
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16 px-5 bg-gradient-to-b from-emerald-50 via-ivory to-amber-50 dark:from-[#04140e] dark:via-ink dark:to-[#100a02]">
      <Reveal>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo className="w-14 h-14" />
            </div>
            <h1 className="font-display text-4xl font-black">Start for free</h1>
            <p className="text-ink/60 dark:text-ivory/60 mt-2">14-day trial, no credit card needed</p>
          </div>

          <div className="bg-white dark:bg-white/5 rounded-3xl border border-ink/10 dark:border-white/10 p-8 shadow-xl">
            {success ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="font-display text-2xl font-bold text-emerald-700 dark:text-emerald-400">Account created!</h2>
                <p className="text-ink/60 dark:text-ivory/60 mt-2 text-sm">Check your email to confirm your account. Redirecting…</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-5 p-4 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleGoogle}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-ink/20 dark:border-white/20 hover:bg-ink/5 dark:hover:bg-white/10 transition font-medium mb-5"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>

                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-px bg-ink/10 dark:bg-white/10" />
                  <span className="text-xs text-ink/40 dark:text-ivory/40">or</span>
                  <div className="flex-1 h-px bg-ink/10 dark:bg-white/10" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Display name</label>
                    <input
                      type="text"
                      required
                      value={displayName}
                      onChange={e => setDisplayName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-ink/20 dark:border-white/20 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                      placeholder="GrandmasterFlash"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-ink/20 dark:border-white/20 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Password <span className="text-ink/40 dark:text-ivory/40 text-xs">(min. 8 chars)</span></label>
                    <input
                      type="password"
                      required
                      minLength={8}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-ink/20 dark:border-white/20 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                      placeholder="••••••••"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60"
                  >
                    {loading ? 'Creating account…' : 'Create free account'}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-ink/60 dark:text-ivory/60">
                  Already have an account?{' '}
                  <Link to="/login" className="text-emerald-700 dark:text-amber-400 font-semibold hover:underline">
                    Sign in
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}