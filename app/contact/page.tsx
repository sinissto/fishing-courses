'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    getInTouch: 'Get in Touch',
    sendMessage: 'Send Us a Message',
    address: 'Address',
    addressValue: 'Musterstraße 123, 10115 Berlin, Germany',
    email: 'Email',
    emailValue: 'info@angelschein-kurse.de',
    phone: 'Phone',
    phoneValue: '+49 30 123 456 789',
    hours: 'Business Hours',
    hoursValue: 'Mon - Fri: 9:00 - 18:00\nSat: 10:00 - 14:00',
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your name',
    emailLabel: 'Your Email',
    emailPlaceholder: 'Enter your email',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'What is this about?',
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message here...',
    submit: 'Send Message',
    success: 'Your message has been sent successfully! We\'ll get back to you soon.',
    error: 'Please fill in all required fields.',
    faq: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How long does it take to get a fishing license?',
        answer: 'The duration depends on the course type. Our basic course takes about 30 hours spread over several weeks, while our intensive weekend course can be completed in just 2 days.',
      },
      {
        question: 'What is the pass rate for your courses?',
        answer: 'We have a 98% first-time pass rate, one of the highest in Germany. Our comprehensive preparation ensures you\'re fully ready for the exam.',
      },
      {
        question: 'Do you offer online courses?',
        answer: 'Yes! We offer fully online courses that you can complete at your own pace. You\'ll have 24/7 access to all materials and can take the exam when you\'re ready.',
      },
      {
        question: 'Is the certificate valid throughout Germany?',
        answer: 'Yes, our certification is officially recognized and valid in all German states. You can fish anywhere in Germany with our certificate.',
      },
    ],
  },
  de: {
    title: 'Kontakt',
    subtitle: 'Haben Sie Fragen? Wir freuen uns von Ihnen zu hören. Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.',
    getInTouch: 'Kontaktieren Sie uns',
    sendMessage: 'Senden Sie uns eine Nachricht',
    address: 'Adresse',
    addressValue: 'Musterstraße 123, 10115 Berlin, Deutschland',
    email: 'E-Mail',
    emailValue: 'info@angelschein-kurse.de',
    phone: 'Telefon',
    phoneValue: '+49 30 123 456 789',
    hours: 'Geschäftszeiten',
    hoursValue: 'Mo - Fr: 9:00 - 18:00\nSa: 10:00 - 14:00',
    nameLabel: 'Ihr Name',
    namePlaceholder: 'Geben Sie Ihren Namen ein',
    emailLabel: 'Ihre E-Mail',
    emailPlaceholder: 'Geben Sie Ihre E-Mail ein',
    subjectLabel: 'Betreff',
    subjectPlaceholder: 'Worum geht es?',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Schreiben Sie Ihre Nachricht hier...',
    submit: 'Nachricht senden',
    success: 'Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns bald bei Ihnen.',
    error: 'Bitte füllen Sie alle erforderlichen Felder aus.',
    faq: 'Häufig gestellte Fragen',
    faqs: [
      {
        question: 'Wie lange dauert es, einen Angelschein zu bekommen?',
        answer: 'Die Dauer hängt vom Kurstyp ab. Unser Grundkurs dauert etwa 30 Stunden über mehrere Wochen, während unser Intensiv-Wochenendkurs in nur 2 Tagen abgeschlossen werden kann.',
      },
      {
        question: 'Wie hoch ist die Erfolgsquote Ihrer Kurse?',
        answer: 'Wir haben eine 98% Erfolgsquote beim ersten Versuch, eine der höchsten in Deutschland. Unsere umfassende Vorbereitung stellt sicher, dass Sie vollständig auf die Prüfung vorbereitet sind.',
      },
      {
        question: 'Bieten Sie Online-Kurse an?',
        answer: 'Ja! Wir bieten vollständige Online-Kurse an, die Sie in Ihrem eigenen Tempo absolvieren können. Sie haben 24/7 Zugang zu allen Materialien und können die Prüfung ablegen, wenn Sie bereit sind.',
      },
      {
        question: 'Ist das Zertifikat in ganz Deutschland gültig?',
        answer: 'Ja, unsere Zertifizierung ist offiziell anerkannt und in allen Bundesländern gültig. Sie können mit unserem Zertifikat überall in Deutschland angeln.',
      },
    ],
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-[var(--color-primary-dark)] py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=1920&h=400&fit=crop)' }}
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.getInTouch}</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://maps.google.com/?q=Musterstraße+123,+10115+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[var(--color-bg-light)] rounded-lg hover:bg-[var(--color-primary-50)] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary-dark)] transition-colors">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.address}</h3>
                    <p className="text-[var(--color-text-light)] text-sm">{t.addressValue}</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@angelschein-kurse.de"
                  className="flex items-start gap-4 p-4 bg-[var(--color-bg-light)] rounded-lg hover:bg-[var(--color-primary-50)] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary-dark)] transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.email}</h3>
                    <p className="text-[var(--color-text-light)] text-sm">{t.emailValue}</p>
                  </div>
                </a>

                <a 
                  href="tel:+4930123456789"
                  className="flex items-start gap-4 p-4 bg-[var(--color-bg-light)] rounded-lg hover:bg-[var(--color-primary-50)] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary-dark)] transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.phone}</h3>
                    <p className="text-[var(--color-text-light)] text-sm">{t.phoneValue}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-[var(--color-bg-light)] rounded-lg">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.hours}</h3>
                    <p className="text-[var(--color-text-light)] text-sm whitespace-pre-line">{t.hoursValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">{t.sendMessage}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t.nameLabel} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t.emailLabel} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.subjectPlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.messageLabel} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">{t.error}</p>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <p>{t.success}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.3965789898!2d13.388860315808!3d52.5200066798103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">{t.faq}</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {t.faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-medium hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[var(--color-text-light)]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
