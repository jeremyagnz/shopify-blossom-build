import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-charcoal/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Timeless
          <span className="block text-gold">Elegance</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-cream/90">
          Discover our curated collection of exquisite jewelry crafted with precision and passion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" className="text-lg px-8 py-3">
            Shop Collection
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-3">
            Custom Design
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;