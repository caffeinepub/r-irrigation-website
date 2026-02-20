import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesGrid from '../components/ServicesGrid';
import ServiceAreaSection from '../components/ServiceAreaSection';
import ReviewsSection from '../components/ReviewsSection';
import CTABlock from '../components/CTABlock';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesGrid />
      <ServiceAreaSection />
      <ReviewsSection />
      <CTABlock />
    </>
  );
}
