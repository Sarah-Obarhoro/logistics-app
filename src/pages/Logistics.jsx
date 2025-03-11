import { Users, Map, Shield } from 'lucide-react';
// import Navbar from '../components/Navbar';
import Hero from '../components/LogisticsHero';
import FeatureCard from '../components/Feature';
import CTA from '../components/LogisticsCTA';
import ContactForm from '../components/Contact';
// import Footer from '../components/Footer';


const Logistics = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <div className="container mx-auto px-6 py-16">
        <FeatureCard
          icon={Users}
          title="Finding the Right Drivers Made Easy – Let Us Help You Build a Reliable Team"
          description="Finding dependable drivers is simpler than you think. We’ll help you recruit top professionals and provide training programs to ensure consistent, high-quality performance every time."
          imageUrl="/assets/driver.png"
        />
        
        <FeatureCard
          icon={Map}
          title="Elevate Your Operations with Expert Solutions"
          description="Take your operations to the next level with smart strategies and cutting-edge technology. From streamlining inventory management to optimizing delivery schedules, we’ll help you work more efficiently and keep your customers satisfied."
          imageUrl="/assets/operations.png"
          reverse
        />
        
        <FeatureCard
          icon={Shield}
          title="Keeping Your Goods Safe, Every Step of the Way"
          description="Secure your goods with advanced safety strategies. We’ll help you establish reliable systems that protect your shipments and ensure every delivery is completed with care and precision."
          imageUrl="/assets/truck-driver.png"
        />
      </div>

      <CTA />
      <ContactForm />
    </div>
  );
};

export default Logistics;
