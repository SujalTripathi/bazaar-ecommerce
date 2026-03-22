import { motion } from "framer-motion";
import electronicsImg from "@/assets/product-headphones.jpg";
import opticsImg from "@/assets/product-glasses.jpg";
import foodImg from "@/assets/product-food.jpg";
import clothingImg from "@/assets/product-clothing.jpg";

const categories = [
  { name: "Electronics", tagline: "Sound, screens & beyond", image: electronicsImg, count: 128 },
  { name: "Optics", tagline: "Frames that define you", image: opticsImg, count: 64 },
  { name: "Food", tagline: "Artisan & organic goods", image: foodImg, count: 92 },
  { name: "Clothing", tagline: "Everyday essentials", image: clothingImg, count: 156 },
];

const CategoryGrid = () => {
  return (
    <section id="categories" className="section-padding py-20 sm:py-28">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">Shop by</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Category</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={`#${cat.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl text-primary-foreground">{cat.name}</h3>
                <p className="text-sm text-primary-foreground/70 mt-0.5">{cat.tagline}</p>
                <span className="inline-block mt-3 text-xs font-medium tracking-wide uppercase text-primary-foreground/50">
                  {cat.count} products
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
