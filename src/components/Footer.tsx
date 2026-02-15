import { Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-16 border-t-4 border-glamongo-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/home/logo.png" 
                alt="Golden Ridgewell Beauty Parlour" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-black font-poppins leading-relaxed">
              Experience luxury beauty booking with elegance and sophistication. Your perfect beauty appointment awaits.
            </p>
            <div className="accent-line" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-xl text-glamongo-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-black hover:text-glamongo-primary transition-colors font-poppins hover:translate-x-2 transform duration-200"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-black hover:text-glamongo-primary transition-colors font-poppins hover:translate-x-2 transform duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-black hover:text-glamongo-secondary transition-colors font-poppins hover:translate-x-2 transform duration-200"
              >
                Services
              </Link>
              <Link 
                to="/booking" 
                className="text-black hover:text-glamongo-primary transition-colors font-poppins hover:translate-x-2 transform duration-200"
              >
                Book Now
              </Link>
              <Link 
                to="/contact" 
                className="text-black hover:text-glamongo-secondary transition-colors font-poppins hover:translate-x-2 transform duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-xl text-glamongo-secondary">Connect With Us</h4>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full bg-glamongo-primary hover:bg-glamongo-accent transition-all duration-300 flex items-center justify-center text-white hover:scale-110 shadow-lg">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-glamongo-secondary hover:bg-black transition-all duration-300 flex items-center justify-center text-white hover:scale-110 shadow-lg">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-black font-poppins leading-relaxed">
              Follow us for beauty inspiration, exclusive offers, and elegant transformations!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black text-center text-sm text-black font-poppins">
          <p>&copy; {new Date().getFullYear()} Golden Ridgewell. All rights reserved. Crafted with elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
