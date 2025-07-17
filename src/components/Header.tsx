import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">
              <span className="text-gold">Luxe</span>Gems
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-gold transition-colors">
              Collections
            </a>
            <a href="#" className="text-foreground hover:text-gold transition-colors">
              Rings
            </a>
            <a href="#" className="text-foreground hover:text-gold transition-colors">
              Necklaces
            </a>
            <a href="#" className="text-foreground hover:text-gold transition-colors">
              Earrings
            </a>
            <a href="#" className="text-foreground hover:text-gold transition-colors">
              Bracelets
            </a>
            <a href="#" className="text-foreground hover:text-gold transition-colors">
              About
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-gold text-charcoal rounded-full flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-2">
            <a href="#" className="block px-3 py-2 text-foreground hover:text-gold transition-colors">
              Collections
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-gold transition-colors">
              Rings
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-gold transition-colors">
              Necklaces
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-gold transition-colors">
              Earrings
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-gold transition-colors">
              Bracelets
            </a>
            <a href="#" className="block px-3 py-2 text-foreground hover:text-gold transition-colors">
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;