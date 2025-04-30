
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-bold ${scrolled ? 'text-dental-dark-blue' : 'text-white'}`}>
            Smile<span className="text-dental-teal">Care</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium hover:text-dental-teal transition-colors focus:outline-none focus:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}>Home</Link>
          <Link to="/services" className={`font-medium hover:text-dental-teal transition-colors focus:outline-none focus:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}>Services</Link>
          <Link to="/about" className={`font-medium hover:text-dental-teal transition-colors focus:outline-none focus:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}>About Us</Link>
          <Link to="/contact" className={`font-medium hover:text-dental-teal transition-colors focus:outline-none focus:underline ${scrolled ? 'text-gray-800' : 'text-white'}`}>Contact</Link>
          <Button className="bg-dental-teal hover:bg-dental-teal/90 focus:ring-2 focus:ring-dental-teal focus:ring-offset-2">Book Appointment</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-dental-teal focus:ring-offset-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className={scrolled ? 'text-gray-800' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="font-medium text-gray-800 hover:text-dental-teal py-2 focus:outline-none focus:text-dental-teal" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="font-medium text-gray-800 hover:text-dental-teal py-2 focus:outline-none focus:text-dental-teal" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" className="font-medium text-gray-800 hover:text-dental-teal py-2 focus:outline-none focus:text-dental-teal" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="font-medium text-gray-800 hover:text-dental-teal py-2 focus:outline-none focus:text-dental-teal" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button className="bg-dental-teal hover:bg-dental-teal/90 w-full focus:ring-2 focus:ring-dental-teal focus:ring-offset-2" onClick={() => setIsOpen(false)}>Book Appointment</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
