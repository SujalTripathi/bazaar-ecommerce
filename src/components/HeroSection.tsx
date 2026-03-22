import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide section-padding pb-16 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
        >
          Curated for you
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-2xl"
        >
          Everything you love, one&nbsp;place.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed"
        >
          From electronics to artisan food — discover handpicked products across four distinct worlds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#categories"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
          >
            Explore Categories
          </a>
          <a
            href="#trending"
            className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm transition-all duration-200 hover:bg-muted active:scale-[0.97]"
          >
            Trending Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
