import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl mb-16 loading-glitch">CONTACT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-sm opacity-50 mb-2">LOCATION</h2>
            <p className="text-sm">SF BAY AREA CALIFORNIA</p>
          </div>
          <div>
            <h2 className="text-sm opacity-50 mb-2">EMAIL</h2>
            <p className="text-sm">anishshiva7@gmail.com</p>
          </div>
          <div>
            <h2 className="text-sm opacity-50 mb-2">SOCIALS</h2>
            <div className="space-y-2">
              <a href="https://github.com/anishshiva7" target="_blank" rel="noopener noreferrer" className="text-sm block hover:line-through">GITHUB</a>
              <a href="https://linkedin.com/in/anish-shivamurthy" target="_blank" rel="noopener noreferrer" className="text-sm block hover:line-through">LINKEDIN</a>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="space-y-8">
          <input 
            type="text"
            name="from_name"
            placeholder="NAME"
            required
            className="w-full bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <input 
            type="email"
            name="reply_to"
            placeholder="EMAIL"
            required
            className="w-full bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <textarea 
            name="message"
            placeholder="MESSAGE"
            required
            rows={4}
            className="w-full bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <button 
            type="submit"
            className="group px-8 py-2 border border-white relative overflow-hidden"
            disabled={formStatus !== 'idle'}
          >
            <span className="relative z-10 group-hover:text-black transition-colors">
              {formStatus === 'idle' && 'SEND_MESSAGE'}
              {formStatus === 'sending' && 'SENDING...'}
              {formStatus === 'sent' && 'MESSAGE_SENT'}
              {formStatus === 'error' && 'ERROR_RETRY'}
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
}