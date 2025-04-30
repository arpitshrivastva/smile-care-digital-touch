
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Your Smile, Our <span className="text-dental-teal">Passion</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Experience modern dentistry with a gentle touch.
            At Smile Care, we combine cutting-edge technology with compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-dental-teal hover:bg-dental-teal/90 text-white font-medium px-8">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              Our Services
            </Button>
          </div>
        </motion.div>

        {/* 3D Element Placeholder */}
        <motion.div
          className="absolute right-10 bottom-10 md:right-20 md:bottom-20 w-32 h-32 md:w-48 md:h-48"
          animate={{ 
            y: [0, -20, 0],
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/images/3d-tooth.png" 
            alt="3D tooth model" 
            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <motion.div 
            className="w-2 h-2 bg-white/80 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
