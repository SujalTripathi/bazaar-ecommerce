import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturesStrip from "@/components/FeaturesStrip";
import TrendingProducts from "@/components/TrendingProducts";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <CategoryGrid />
      <FeaturesStrip />
      <TrendingProducts />
      <NewsletterSection />
    </main>
    <Footer />
  </>
);

export default Index;
