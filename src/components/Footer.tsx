
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Simple form validation
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      form.reset();
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Smile<span className="text-dental-teal">Care</span>
            </h3>
            <p className="text-gray-300 mb-6">
              At Smile Care Dental Clinic, we're dedicated to providing exceptional dental care in a comfortable environment using the latest technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-dental-teal transition-colors focus:outline-none focus:text-dental-teal">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-dental-teal transition-colors focus:outline-none focus:text-dental-teal">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-dental-teal transition-colors focus:outline-none focus:text-dental-teal">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-dental-teal transition-colors focus:outline-none focus:text-dental-teal">Contact</Link>
              </li>
              {/* Blog and FAQ links removed as requested */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-dental-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-300">123 Dental Street, Varanasi, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-dental-teal shrink-0" aria-hidden="true" />
                <span className="text-gray-300">+91 979-256-3097</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-dental-teal shrink-0" aria-hidden="true" />
                <span className="text-gray-300">info@smilecaredental.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for dental tips and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 focus:ring-dental-teal"
                required
                aria-label="Email address for newsletter"
              />
              <Button 
                type="submit" 
                className="w-full bg-dental-teal hover:bg-dental-teal/90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Smile Care Dental Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-dental-teal text-sm focus:outline-none focus:text-dental-teal">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-dental-teal text-sm focus:outline-none focus:text-dental-teal">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
