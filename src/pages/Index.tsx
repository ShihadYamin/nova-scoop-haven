import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FlavorsSection from "@/components/FlavorsSection";
import TypesSection from "@/components/TypesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FlavorsSection />
      <TypesSection />
      <Footer />
    </div>
  );
};

export default Index;
