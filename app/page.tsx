import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import AboutSection from '@/components/landing/AboutSection';
import StatsSection from '@/components/landing/StatsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import TeamSection from '@/components/landing/TeamSection';
import ShopSection from '@/components/landing/ShopSection';
import BlogSection from '@/components/landing/BlogSection';
import NewsletterSection from '@/components/landing/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <TeamSection />
      <ShopSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}
