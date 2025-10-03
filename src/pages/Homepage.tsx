import HeroSection from '../components/HeroSection';
import IndustrySection from '../components/IndustrySection';
import ServicesSection from '../components/ServicesSection';
// ...existing code...
// ...existing code...

const Homepage = () => {
  return (
  <div className="pt-16">
      <HeroSection />
      <IndustrySection />
      <ServicesSection />
    </div>
  );
};

export default Homepage;