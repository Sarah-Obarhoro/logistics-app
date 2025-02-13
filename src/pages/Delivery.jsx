import { Users, Map, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/DeliveryHero';
import FeatureCard from '../components/Feature';
import MoreInfo from '../components/More-info';
import CTA from '../components/DeliveryCTA';
import ContactForm from '../components/Contact';
import Footer from '../components/Footer';


const Delivery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <div className="container mx-auto px-6 py-16">
        <FeatureCard
          icon={Users}
          title="Your Trusted Partner for Smooth and Reliable Deliveries"
          description="At K&A Dispatch, our expert team is dedicated to making your freight and last-mile deliveries smooth, reliable, and hassle-free. With years of experience, we handle every step with care, ensuring your shipments arrive on time, every time. Our tailored solutions are designed to meet your unique needs, keeping you informed at every stage so you can focus on growing your business."
          imageUrl="/assets/partner.png"
        />
        
        <FeatureCard
          icon={Map}
          title=""
          description="We prioritize seamless communication to keep you in the loop and offer flexible services that adapt to your needs. From residential to business deliveries, we ensure a stress-free experience that delights your customers. Choose K&A Dispatch for last-mile delivery that’s fast, dependable, and ready to grow with you."
          imageUrl="/assets/communication.png"
          reverse
        />
      </div>

      <MoreInfo />
      <CTA />
      <ContactForm />
    </div>
  );
};

export default Delivery;
