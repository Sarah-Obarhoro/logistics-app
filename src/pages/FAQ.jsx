import { Users, Map, Shield } from 'lucide-react';
import FAQSection from '../components/FAQ';
import ContactForm from '../components/FAQContact';
import Footer from '../components/Footer';


const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
        
      <FAQSection />
      
      <ContactForm />
    </div>
  );
};

export default Home;
