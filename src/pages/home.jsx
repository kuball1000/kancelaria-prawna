import Hero from '../components/hero';
import Services from '../components/services';
import ContactForm from '../components/contact_form';
import About from '../components/about';
import Pricing from '../components/pricing';
import Downloads from '../components/downloads';
import GDPRInfo from '../components/gdpr_info';

const Home = () => {
  return (
    <div className="bg-navy-900">
      <Hero />
      <div id="about">
         <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="downloads">
        <Downloads />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <GDPRInfo />
    </div>
  );
};

export default Home;
