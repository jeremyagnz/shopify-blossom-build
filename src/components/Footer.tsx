import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gold">Luxe</span>Gems
            </h3>
            <p className="text-cream/80 mb-6">
              Crafting exceptional jewelry since 1985. Every piece tells a story of elegance and timeless beauty.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-cream hover:text-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cream hover:text-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cream hover:text-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Collections</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Warranty</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Stay Connected</h4>
            <p className="text-cream/80 mb-4">Subscribe to receive exclusive offers and new collection updates.</p>
            <div className="flex space-x-2 mb-4">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-warm-gray/30 border-gold/20 text-cream placeholder:text-cream/60"
              />
              <Button variant="gold" size="sm">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2 text-sm text-cream/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@luxegems.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Diamond District, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/20 mt-12 pt-8 text-center text-cream/60">
          <p>&copy; 2024 LuxeGems. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;