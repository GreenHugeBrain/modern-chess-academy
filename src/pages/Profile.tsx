import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { LogOut, User, Mail, Calendar, BarChart3, Zap, Trophy } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const displayName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'Chess Player';
  const joinedDate = user?.created_at ? new Date(user.created_at).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) : '—';

  return (
    <section className="min-h-[80vh] py-16 px-5 bg-gradient-to-b from-emerald-50 via-ivory to-amber-50 dark:from-[#04140e] dark:via-ink dark:to-[#100a02]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-black">My Profile</h1>
              <p className="text-ink/60 dark:text-ivory/60 mt-2">Track your progress and manage your account</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 font-semibold transition-all"
            >
              <LogOut size={18} /> Sign out
            </button>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <div className="md:col-span-1 bg-white dark:bg-white/5 rounded-3xl border border-ink/10 dark:border-white/10 p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center mx-auto mb-4">
                <User size={36} className="text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold">{displayName}</h2>
              <div className="flex items-center justify-center gap-2 mt-2 text-ink/60 dark:text-ivory/60 text-sm">
                <Mail size={14} />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-1 text-ink/60 dark:text-ivory/60 text-sm">
                <Calendar size={14} />
                <span>Joined {joinedDate}</span>
              </div>
              <div className="mt-4 px-4 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
                Free Trial
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: Zap, label: 'XP Earned', value: '0', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30' },
                { icon: BarChart3, label: 'Cards Reviewed', value: '0', color: 'text-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
                { icon: Trophy, label: 'Streak', value: '0 days', color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30' }
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-white/5 rounded-3xl border border-ink/10 dark:border-white/10 p-6 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-3`}>
                    <stat.icon size={22} className={stat.color} />
                  </div>
                  <div className="font-display text-3xl font-black">{stat.value}</div>
                  <div className="text-ink/60 dark:text-ivory/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}

              <div className="sm:col-span-3 bg-white dark:bg-white/5 rounded-3xl border border-ink/10 dark:border-white/10 p-6">
                <h3 className="font-display text-xl font-bold mb-4">Recent Activity</h3>
                <div className="flex flex-col items-center justify-center py-8 text-ink/40 dark:text-ivory/40">
                  <BarChart3 size={40} className="mb-3 opacity-30" />
                  <p className="text-sm">No activity yet. Start a course to begin tracking your progress.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}