'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, Award, Users, Target, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { teamMembers } from '@/data/team';
import StatsSection from '@/components/landing/StatsSection';

const translations = {
  en: {
    title: 'About Us',
    subtitle: 'Learn more about our mission and the team behind AngelscheinKurse',
    ourStory: 'Our Story',
    storyTitle: 'Helping Germany Fish Since 2010',
    storyP1: 'AngelscheinKurse was founded with a simple mission: to make obtaining a fishing license in Germany accessible, enjoyable, and effective for everyone. What started as a small training center in Berlin has grown into Germany\'s leading fishing license education provider.',
    storyP2: 'Over the past 15 years, we have helped more than 5,000 students achieve their dream of becoming licensed anglers. Our success is built on our commitment to excellence, our passionate instructors, and our comprehensive curriculum that covers everything from fish biology to sustainable fishing practices.',
    storyP3: 'Today, we offer courses in over 25 locations across Germany, as well as online options for those who prefer to learn from home. Whether you\'re a complete beginner or an experienced angler looking to get officially licensed, we have the perfect course for you.',
    ourValues: 'Our Values',
    values: [
      {
        icon: Award,
        title: 'Excellence',
        description: 'We strive for the highest standards in fishing education, ensuring our students are fully prepared for their exams and beyond.',
      },
      {
        icon: Users,
        title: 'Community',
        description: 'We believe in building a community of responsible anglers who respect nature and share their knowledge with others.',
      },
      {
        icon: Target,
        title: 'Results',
        description: 'Our 98% pass rate speaks for itself. We are committed to your success and provide all the tools you need to succeed.',
      },
      {
        icon: Heart,
        title: 'Passion',
        description: 'Fishing is not just a hobby for us—it\'s a way of life. Our instructors share their genuine passion with every student.',
      },
    ],
    whyChooseUs: 'Why Choose Us',
    reasons: [
      'Official certification recognized throughout Germany',
      'Experienced instructors with decades of fishing expertise',
      'Flexible course schedules including weekends and online',
      'Comprehensive study materials and practice exams',
      '98% first-time pass rate',
      'Lifetime support after certification',
      'Multiple locations across Germany',
      'Money-back guarantee if you don\'t pass',
    ],
    ourTeam: 'Meet Our Team',
    teamDescription: 'Our instructors are certified professionals with years of experience in fishing education.',
    ctaTitle: 'Ready to Start Your Fishing Journey?',
    ctaDescription: 'Join thousands of satisfied students who got their fishing license with us.',
    ctaButton: 'Browse Our Courses',
  },
  de: {
    title: 'Über uns',
    subtitle: 'Erfahren Sie mehr über unsere Mission und das Team hinter AngelscheinKurse',
    ourStory: 'Unsere Geschichte',
    storyTitle: 'Wir helfen Deutschland beim Angeln seit 2010',
    storyP1: 'AngelscheinKurse wurde mit einer einfachen Mission gegründet: den Erwerb eines Angelscheins in Deutschland für jeden zugänglich, angenehm und effektiv zu gestalten. Was als kleines Schulungszentrum in Berlin begann, hat sich zum führenden Anbieter von Angelschein-Ausbildung in Deutschland entwickelt.',
    storyP2: 'In den letzten 15 Jahren haben wir mehr als 5.000 Schülern geholfen, ihren Traum vom lizenzierten Angler zu verwirklichen. Unser Erfolg basiert auf unserem Engagement für Exzellenz, unseren leidenschaftlichen Ausbildern und unserem umfassenden Lehrplan, der alles von der Fischbiologie bis zu nachhaltigen Angelpraktiken abdeckt.',
    storyP3: 'Heute bieten wir Kurse an über 25 Standorten in ganz Deutschland sowie Online-Optionen für diejenigen, die lieber von zu Hause aus lernen möchten. Ob Sie ein absoluter Anfänger oder ein erfahrener Angler sind, der sich offiziell lizenzieren lassen möchte – wir haben den perfekten Kurs für Sie.',
    ourValues: 'Unsere Werte',
    values: [
      {
        icon: Award,
        title: 'Exzellenz',
        description: 'Wir streben nach den höchsten Standards in der Angel-Ausbildung und stellen sicher, dass unsere Schüler vollständig auf ihre Prüfungen vorbereitet sind.',
      },
      {
        icon: Users,
        title: 'Gemeinschaft',
        description: 'Wir glauben an den Aufbau einer Gemeinschaft verantwortungsvoller Angler, die die Natur respektieren und ihr Wissen mit anderen teilen.',
      },
      {
        icon: Target,
        title: 'Ergebnisse',
        description: 'Unsere 98% Erfolgsquote spricht für sich. Wir sind Ihrem Erfolg verpflichtet und bieten alle Werkzeuge, die Sie zum Erfolg benötigen.',
      },
      {
        icon: Heart,
        title: 'Leidenschaft',
        description: 'Angeln ist für uns nicht nur ein Hobby – es ist eine Lebensweise. Unsere Ausbilder teilen ihre echte Leidenschaft mit jedem Schüler.',
      },
    ],
    whyChooseUs: 'Warum uns wählen',
    reasons: [
      'Offizielle Zertifizierung, deutschlandweit anerkannt',
      'Erfahrene Ausbilder mit jahrzehntelanger Angelerfahrung',
      'Flexible Kurspläne inkl. Wochenenden und Online',
      'Umfassende Lernmaterialien und Übungsprüfungen',
      '98% Erfolgsquote beim ersten Versuch',
      'Lebenslange Unterstützung nach der Zertifizierung',
      'Mehrere Standorte in ganz Deutschland',
      'Geld-zurück-Garantie bei Nichtbestehen',
    ],
    ourTeam: 'Unser Team',
    teamDescription: 'Unsere Ausbilder sind zertifizierte Fachleute mit jahrelanger Erfahrung in der Angel-Ausbildung.',
    ctaTitle: 'Bereit, Ihre Angel-Reise zu starten?',
    ctaDescription: 'Schließen Sie sich Tausenden zufriedener Schüler an, die ihren Angelschein bei uns erworben haben.',
    ctaButton: 'Unsere Kurse durchsuchen',
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-[var(--color-primary-dark)] py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=1920&h=400&fit=crop)' }}
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="subheading">{t.ourStory}</span>
              <h2 className="heading">{t.storyTitle}</h2>
              <div className="space-y-4 text-[var(--color-text-light)]">
                <p>{t.storyP1}</p>
                <p>{t.storyP2}</p>
                <p>{t.storyP3}</p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
                alt="Fishing instructor teaching"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[var(--color-primary)] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Values Section */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="subheading">{t.ourValues}</span>
            <h2 className="heading">{t.ourValues}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-[var(--color-text-light)] text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=800&h=600&fit=crop"
                alt="Fishing course"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="subheading">{t.whyChooseUs}</span>
              <h2 className="heading">{t.whyChooseUs}</h2>
              <ul className="space-y-3">
                {t.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </span>
                    <span className="text-[var(--color-text-dark)]">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="subheading">{t.ourTeam}</span>
            <h2 className="heading">{t.ourTeam}</h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
              {t.teamDescription}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 6).map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[var(--color-primary-light)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[var(--color-primary)]">
                  {language === 'de' ? member.titleDe : member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1920&h=600&fit=crop)' }}
        />
        <div className="overlay" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">{t.ctaDescription}</p>
          <Link href="/courses" className="btn btn-accent">
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
