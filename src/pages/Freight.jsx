import { Users, Map, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/FreightHero';
import FeatureCard from '../components/Feature';
// import MoreInfo from '../components/More-info';
import CTA from '../components/FreightCTA';
import ContactForm from '../components/Contact';
import Footer from '../components/Footer';


const Freight = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <div className="container mx-auto px-6 py-16">
        <FeatureCard
          icon={Users}
          title="Your Trusted Partner for Freight Delivery and Load Dispatching"
          description="Connecting your business with efficient, reliable, and tailored logistics solutions that ensure your goods are delivered safely, on time, and with the utmost care. At K&A Dispatch Inc., we prioritize your success by making every load our responsibility."
          imageUrl="/assets/van.png"
        />
        
        <FeatureCard
          icon={Map}
          title="Tailored Freight Solutions for Every Shipment"
          description="From bulk shipments to time-sensitive deliveries, we offer dependable freight solutions designed to meet the unique needs of your business. Your logistics, our expertise."
          imageUrl="/assets/warehouse.png"
          reverse
        />
      </div>

      {/* <MoreInfo /> */}
      <CTA />
      <ContactForm />
    </div>
  );
};

export default Freight;
