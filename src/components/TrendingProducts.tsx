import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import electronicsImg from "@/assets/product-headphones.jpg";
import opticsImg from "@/assets/product-glasses.jpg";
import foodImg from "@/assets/product-food.jpg";
import clothingImg from "@/assets/product-clothing.jpg";

const products = [
  { id: 1, name: "Studio Pro Headphones", category: "Electronics", price: 4999, originalPrice: 7499, image: electronicsImg, rating: 4.8 },
  { id: 2, name: "Classic Wayfare Frames", category: "Optics", price: 2199, originalPrice: 3499, image: opticsImg, rating: 4.6 },
  { id: 3, name: "Artisan Honey Collection", category: "Food", price: 899, originalPrice: null, image: foodImg, rating: 4.9 },
  { id: 4, name: "Essential Cotton Tee", category: "Clothing", price: 1299, originalPrice: 1799, image: clothingImg, rating: 4.5 },
  { id: 5, name: "Wireless Earbuds Pro", category: "Electronics", price: 3499, originalPrice: 4999, image: electronicsImg, rating: 4.7 },
  { id: 6, name: "Aviator Sunglasses", category: "Optics", price: 2899, originalPrice: null, image: opticsImg, rating: 4.4 },
];

const formatPrice = (p: number) => `₹${p.toLocaleString("en-IN")}`;

const TrendingProducts = () => {
  return (
    <section id="trending" className="section-padding py-20 sm:py-28 bg-card/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between gap-4 flex-wrap"
        >
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">Popular now</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Trending Products</h2>
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors">
            View all →
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-background rounded-lg overflow-hidden transition-shadow duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
              }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <button
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors active:scale-90"
                  aria-label="Add to wishlist"
                >
                  <Heart size={16} />
                </button>
                {p.originalPrice && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    {Math.round((1 - p.price / p.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{p.category}</p>
                <h3 className="mt-1 font-medium text-foreground leading-snug">{p.name}</h3>
                <div className="mt-2 flex items-center gap-1">
                  <span className="text-xs text-accent">★</span>
                  <span className="text-xs font-medium tabular-nums">{p.rating}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-foreground tabular-nums">{formatPrice(p.price)}</span>
                    {p.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through tabular-nums">
                        {formatPrice(p.originalPrice)}
                      </span>
                    )}
                  </div>
                  <button
                    className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-md transition-all duration-200 active:scale-90"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
