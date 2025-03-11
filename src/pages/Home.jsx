// import { Users, Map, Shield } from 'lucide-react';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCard from '../components/LandingPageFeature';
import ServicesSection from '../components/Services';
import MoreInfo from '../components/More-info';
import CallToAction from '../components/CTA';
import ContactForm from '../components/Contact';
// import Footer from '../components/Footer';


const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <div className="container mx-auto px-4 md:px-6 py-8 overflow-x-hidden">
        <div className="space-y-6"> {/* Added spacing between cards */}
          <FeatureCard
            title="Real-Time Tracking and Updates"
            description="We empower our clients with cutting-edge tracking technology, offering real-time insights into the status of their shipments. Stay connected with up-to-the-minute location updates, estimated delivery times, and instant notifications. Whether it's a single package or bulk freight, our tracking system ensures you're always in the know, fostering trust and confidence."
            images={['/assets/fullmap.png', '/assets/phone.png']}
            isReversed={true}
            largeImageFirst={false}
          />
          
          <FeatureCard
            title="Effective Communication"
            description="At K&A Dispatch Inc., we prioritize clear and consistent communication to ensure every delivery aligns with our clients' expectations. From real-time updates to prompt responses, we keep you informed at every step of the process. Our dedicated support team is always available to address your concerns and provide tailored solutions. Trust us to bridge the gap with seamless communication that enhances reliability and transparency."
            images={['/assets/phonecall..png', '/assets/videocall.png']}
            isReversed={false}
            largeImageFirst={true}
          />
        </div>
      </div>

      <ServicesSection />
      <MoreInfo />
      <CallToAction />
      <ContactForm />
    </div>
  );
};

export default Home;
