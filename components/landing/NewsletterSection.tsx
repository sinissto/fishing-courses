'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    subheading: 'Newsletter',
    heading: 'Subscribe to Our Newsletter',
    description: 'Stay updated with the latest courses, fishing tips, and special offers. Join our community of anglers!',
    placeholder: 'Enter your email address',
    button: 'Subscribe',
    success: 'Thank you for subscribing!',
    error: 'Please enter a valid email address.',
  },
  de: {
    subheading: 'Newsletter',
    heading: 'Abonnieren Sie unseren Newsletter',
    description: 'Bleiben Sie auf dem Laufenden mit den neuesten Kursen, Angeltipps und Sonderangeboten. Werden Sie Teil unserer Angler-Community!',
    placeholder: 'Geben Sie Ihre E-Mail-Adresse ein',
    button: 'Abonnieren',
    success: 'Vielen Dank für Ihre Anmeldung!',
    error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  },
};

export default function NewsletterSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');
    
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1920&h=600&fit=crop)' }}
      />
      <div className="overlay" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="white" />
          </pattern>
          <rect fill="url(#pattern)" width="100%" height="100%" />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <span className="inline-block text-[var(--color-accent)] font-semibold uppercase tracking-wider text-sm mb-2">
            {t.subheading}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.heading}</h2>
          <p className="text-white/80 mb-8">{t.description}</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder={t.placeholder}
                className={`w-full px-5 py-4 rounded-lg text-[var(--color-text-dark)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] ${
                  status === 'error' ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {status === 'error' && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-300">{t.error}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 flex items-center justify-center gap-2"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  {t.success}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t.button}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
