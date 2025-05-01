
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Element } from 'react-scroll';

const Index = () => {
  const { pathname } = useLocation();

  // Scroll to top when the page loads or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavBar />
        <main>
          <HeroSection />
          <Element name="services">
            <ServicesSection />
          </Element>
          <Element name="about">
            <AboutSection />
          </Element>
          <TestimonialsSection />
          <Element name="contact">
            <ContactSection />
          </Element>
        </main>
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
