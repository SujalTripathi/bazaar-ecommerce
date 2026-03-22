import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, User, Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Electronics", href: "#electronics" },
  { label: "Optics", href: "#optics" },
  { label: "Food", href: "#food" },
  { label: "Clothing", href: "#clothing" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={false}
      animate={{
        height: scrolled ? "3.75rem" : "5rem",
        backgroundColor: scrolled
          ? "hsl(var(--background) / 0.92)"
          : "hsl(var(--background) / 0.6)",
        backdropFilter: "blur(16px)",
      }}
      style={{ WebkitBackdropFilter: "blur(16px)" }}
    >
      <nav className="container-wide section-padding h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="font-display text-xl tracking-tight text-foreground shrink-0">
          Bazaar
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1.5px] after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-muted transition-colors active:scale-95"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors active:scale-95" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors active:scale-95" aria-label="Account">
            <User size={18} />
          </button>
          <button className="relative p-2 rounded-full hover:bg-muted transition-colors active:scale-95" aria-label="Cart">
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full leading-none min-w-[18px] min-h-[18px]">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors active:scale-95"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="section-padding py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-foreground block py-2"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
