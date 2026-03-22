import { motion } from "framer-motion";
import { Truck, Shield, RotateCcw, CreditCard } from "lucide-react";

const features = [
  { icon: Truck, label: "Free Shipping", desc: "On orders above ₹999" },
  { icon: Shield, label: "Secure Payments", desc: "UPI, cards & wallets" },
  { icon: RotateCcw, label: "Easy Returns", desc: "7-day return policy" },
  { icon: CreditCard, label: "Razorpay Checkout", desc: "Fast & trusted" },
];

const FeaturesStrip = () => (
  <section className="section-padding py-14 border-y border-border">
    <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <f.icon size={18} />
          </div>
          <div>
            <p className="font-medium text-sm text-foreground">{f.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeaturesStrip;
