import Hero from '../components/AboutHero';
import Vision from '../components/Vision';
import Team from '../components/Team';
import ContactForm from '../components/Contact';


const About = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <Vision />

      <Team />

      <ContactForm />
    </div>
  );
};

export default About;
