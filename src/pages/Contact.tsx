import { useState } from 'react';
import Reveal from '../components/Reveal';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  return (
    <>
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-emerald-50 via-ivory to-amber-50 dark:from-[#04140e] dark:via-ink dark:to-[#100a02] overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-300/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-700 dark:text-amber-400 font-bold">Get in touch</span>
            <h1 className="font-display text-5xl md:text-7xl font-black mt-4 leading-[0.95]">
              We'd love to <span className="italic shimmer-text">hear from you</span>
            </h1>
            <p className="mt-6 text-lg text-ink/70 dark:text-ivory/70">Questions, feedback, partnership inquiries — we reply within one business hour.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-ivory dark:bg-ink">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">Send us a message</h2>
              {sent && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-medium">
                  ✓ Message sent! We'll get back to you shortly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-ink/20 dark:border-white/20 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                      placeholder="Magnus Carlsen"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-ink/20 dark:border-white/20 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                      placeholder="magnus@chess.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink/20 dark:border-white/20 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  >
                    <option value="">Select a topic…</option>
                    <option>General question</option>
                    <option>Billing & subscription</option>
                    <option>Technical support</option>
                    <option>Partnership / schools</option>
                    <option>Content feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-ink/20 dark:border-white/20 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us everything…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      <Send size={18} /> Send message
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-8">Contact details</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-emerald-700 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Office</div>
                      <div className="text-ink/60 dark:text-ivory/60 text-sm mt-1">24 King's Gambit Lane<br />Reykjavík District, Studio 64</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:hello@modernchess.academy" className="text-ink/60 dark:text-ivory/60 text-sm mt-1 hover:text-emerald-600 dark:hover:text-amber-400 transition-colors">hello@modernchess.academy</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-rose-700 dark:text-rose-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-ink/60 dark:text-ivory/60 text-sm mt-1">+1 (415) 555‑0164</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-emerald-950 text-ivory p-8">
                <h3 className="font-display text-xl font-bold mb-2">Response time</h3>
                <p className="text-ivory/70 text-sm leading-relaxed">We aim to reply within <strong className="text-amber-400">one business hour</strong> during weekdays (09:00–18:00 GMT). Weekend messages are answered Monday morning.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}