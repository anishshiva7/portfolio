import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../data/content';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_sjw9iwt',
          'template_lzc61ha',
          form.current,
          'gqKvCF9UDgkOiNwem'
        );
        setFormStatus('sent');
        if (form.current) form.current.reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-2 py-10">
      <header className="reveal-up mb-10">
        <span className="section-kicker">Contact</span>
        <h2 className="mt-4 text-3xl font-bold text-slate-50 md:text-5xl">Get in Touch</h2>
        <p className="mt-3 text-slate-300/90">If you are hiring or collaborating, send a note and I will reply.</p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="glass-panel interactive-card reveal-up rounded-2xl p-6">
          <h3 className="tech-chip text-xs uppercase tracking-[0.12em] text-zinc-100/90">Contact</h3>
          <p className="mt-3 text-sm font-medium text-slate-100">{contactInfo.location}</p>

          <div className="mt-6">
            <h4 className="text-sm text-slate-300/80">Email</h4>
            <p className="mt-1 text-sm font-medium text-slate-100">{contactInfo.email}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-sm text-slate-300/80">Socials</h4>
            <div className="mt-2 flex flex-col gap-2">
              {contactInfo.social.github && (
                <a className="text-sm text-zinc-100 hover:underline" href={contactInfo.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {contactInfo.social.linkedin && (
                <a className="text-sm text-zinc-100 hover:underline" href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
              {contactInfo.social.twitter && (
                <a className="text-sm text-zinc-100 hover:underline" href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer">X / Twitter</a>
              )}
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="glass-panel interactive-card reveal-up rounded-2xl p-6 space-y-4">
          <div>
            <label className="mb-1 block text-xs text-slate-300/80">Name</label>
            <input
              name="from_name"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-slate-100 outline-none transition focus:border-zinc-300/70"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-slate-300/80">Email</label>
            <input
              type="email"
              name="reply_to"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-slate-100 outline-none transition focus:border-zinc-300/70"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-slate-300/80">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-slate-100 outline-none transition focus:border-zinc-300/70"
              placeholder="Write a brief message..."
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={formStatus === 'sending' || formStatus === 'sent'}
              className="inline-flex items-center justify-center rounded-md bg-zinc-500/20 px-5 py-2 font-medium text-white ring-1 ring-zinc-200/45 transition hover:bg-zinc-500/30 disabled:opacity-60"
            >
              {formStatus === 'idle' && 'Send Message'}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'sent' && 'Sent'}
              {formStatus === 'error' && 'Retry'}
            </button>

            <span className="text-sm text-slate-300/80">
              {formStatus === 'sent' ? 'Thanks — I will respond soon.' : ''}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
