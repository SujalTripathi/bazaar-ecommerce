import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NewsletterSection = () => (
  <section className="section-padding py-20 sm:py-28">
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="container-narrow bg-primary rounded-2xl px-6 sm:px-12 py-14 sm:py-16 text-center"
    >
      <h2 className="font-display text-2xl sm:text-3xl text-primary-foreground tracking-tight">
        Stay in the loop
      </h2>
      <p className="mt-3 text-sm text-primary-foreground/70 max-w-md mx-auto leading-relaxed">
        New arrivals, exclusive deals, and curated picks — delivered to your inbox weekly.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="you@example.com"
          className="flex-1 w-full px-4 py-3 rounded-full bg-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-shadow"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium text-sm transition-all hover:shadow-lg active:scale-[0.97] shrink-0"
        >
          Subscribe <ArrowRight size={14} />
        </button>
      </form>
    </motion.div>
  </section>
);

export default NewsletterSection;
