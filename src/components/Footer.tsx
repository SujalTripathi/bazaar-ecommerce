const links = {
  Shop: ["Electronics", "Optics", "Food", "Clothing"],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Support: ["Help Center", "Shipping", "Returns", "Contact"],
};

const Footer = () => (
  <footer className="section-padding py-14 border-t border-border">
    <div className="container-wide">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-xl tracking-tight text-foreground">Bazaar</span>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Your curated multi-category store for electronics, eyewear, artisan food & everyday clothing.
          </p>
        </div>
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <p className="font-medium text-sm text-foreground mb-3">{title}</p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">© 2026 Bazaar. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
