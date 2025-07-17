import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
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
            <ProductCard key={product.id} product={product} />
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