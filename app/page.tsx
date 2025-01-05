import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import QuoteSection from '@/components/quote-section';
import WaitlistForm from '@/components/waitlist-form';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <FeaturesSection />
      <QuoteSection />
      <div id="waitlist">
        <WaitlistForm />
      </div>
      <Footer />
    </main>
  );
}

