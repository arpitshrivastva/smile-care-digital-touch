
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: "General Dentistry",
    description: "Comprehensive dental checkups, cleanings, and preventive care to maintain your oral health and prevent issues before they start.",
    icon: "/images/general-dentistry.png"
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our cosmetic procedures including teeth whitening, veneers, and smile makeovers.",
    icon: "/images/cosmetic-dentistry.png"
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Replace missing teeth with state-of-the-art dental implants that look, feel and function just like your natural teeth.",
    icon: "/images/dental-implants.png"
  },
  {
    id: 4,
    title: "Orthodontics",
    description: "Straighten your teeth and correct bite issues with modern orthodontic treatments including clear aligners and braces.",
    icon: "/images/orthodontics.png"
  },
  {
    id: 5,
    title: "Pediatric Dentistry",
    description: "Child-friendly dental care in a comfortable environment, ensuring your little ones develop healthy oral habits for life.",
    icon: "/images/pediatric-dentistry.png"
  },
  {
    id: 6,
    title: "Emergency Care",
    description: "Prompt dental care for emergencies like toothaches, broken teeth, or dental injuries when you need it most.",
    icon: "/images/emergency-care.png"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Dental Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of dental services using the latest technology and techniques to ensure your optimal oral health.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-dental-blue/10 rounded-lg">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-10 h-10 object-contain" 
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-dental-blue p-0">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-dental-blue hover:bg-dental-blue/90">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
