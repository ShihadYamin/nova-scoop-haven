import FlavorCard from "./FlavorCard";
import { Zap } from "lucide-react";
import vanillaImage from "@/assets/vanilla-future.jpg";
import chocolateImage from "@/assets/chocolate-cyber.jpg";
import strawberryImage from "@/assets/strawberry-holo.jpg";
import mintImage from "@/assets/mint-digital.jpg";

const FlavorsSection = () => {
  const flavors = [
    {
      name: "Cosmic Vanilla",
      description: "A timeless classic reimagined with holographic vanilla extracts and stardust sprinkles.",
      image: vanillaImage,
      rating: 4.9,
      price: "$12.99",
      gradient: "bg-gradient-vanilla"
    },
    {
      name: "Cyber Chocolate",
      description: "Dark chocolate enhanced with neural network algorithms for the perfect taste simulation.",
      image: chocolateImage,
      rating: 4.8,
      price: "$14.99",
      gradient: "bg-gradient-chocolate"
    },
    {
      name: "Holo-Berry",
      description: "Strawberry flavor encoded in quantum particles, delivering bursts of fruity excellence.",
      image: strawberryImage,
      rating: 4.9,
      price: "$13.99",
      gradient: "bg-gradient-strawberry"
    },
    {
      name: "Digital Mint",
      description: "Refreshing mint processed through blockchain technology for ultimate coolness.",
      image: mintImage,
      rating: 4.7,
      price: "$13.49",
      gradient: "bg-gradient-mint"
    }
  ];

  return (
    <section id="flavors" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Zap className="h-8 w-8 text-accent animate-pulse" />
            <span className="text-accent font-medium text-lg">Signature Collection</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Future Flavors
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each flavor is crafted using advanced molecular gastronomy and 
            enhanced with cutting-edge technology for an otherworldly experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FlavorCard {...flavor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;