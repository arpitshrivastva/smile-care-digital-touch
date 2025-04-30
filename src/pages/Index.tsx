
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
import { Button } from '@/components/ui/button';

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
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          
          {/* Call-to-Action Section */}
          <section className="bg-dental-dark-blue py-16 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Book an appointment today and experience our exceptional dental care.
              </p>
              <Button 
                size="lg" 
                className="bg-dental-teal hover:bg-dental-teal/90 text-white px-8 py-6 text-lg font-medium shadow-lg"
              >
                Schedule a Consultation
              </Button>
            </div>
          </section>
          
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
