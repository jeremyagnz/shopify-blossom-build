import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";
import necklaceImage from "@/assets/necklace-1.jpg";
import earringsImage from "@/assets/earrings-1.jpg";
import braceletImage from "@/assets/bracelet-1.jpg";
import ringImage from "@/assets/ring-1.jpg";

const products = [
  {
    id: 1,
    name: "Golden Elegance Necklace",
    price: "$1,299",
    image: necklaceImage,
    category: "Necklaces"
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    price: "$2,199",
    image: earringsImage,
    category: "Earrings"
  },
  {
    id: 3,
    name: "Luxury Gold Bracelet",
    price: "$899",
    image: braceletImage,
    category: "Bracelets"
  },
  {
    id: 4,
    name: "Solitaire Diamond Ring",
    price: "$3,499",
    image: ringImage,
    category: "Rings"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gold">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each piece is carefully crafted to perfection, representing timeless beauty and exceptional quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gold font-medium mb-2">{product.category}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <Button variant="gold" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="premium" size="lg" className="px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;