import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Atom, Zap, Rocket } from "lucide-react";

const TypesSection = () => {
  const types = [
    {
      icon: Cpu,
      name: "Quantum Cones",
      description: "Edible cones created using quantum 3D printing technology",
      features: ["Zero-gravity texture", "Self-stabilizing", "Flavor-responsive"],
      price: "From $8.99"
    },
    {
      icon: Atom,
      name: "Molecular Cups",
      description: "Biodegradable cups that change flavor as you eat",
      features: ["Color-shifting", "Temperature reactive", "Edible material"],
      price: "From $6.99"
    },
    {
      icon: Zap,
      name: "Energy Sundaes",
      description: "High-tech sundaes with levitating toppings",
      features: ["Magnetic levitation", "LED-enhanced", "Interactive elements"],
      price: "From $19.99"
    },
    {
      icon: Rocket,
      name: "Space Shakes",
      description: "Anti-gravity milkshakes served in hover vessels",
      features: ["Floating presentation", "Holographic garnish", "Voice activation"],
      price: "From $15.99"
    }
  ];

  return (
    <section id="types" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Ice Cream</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Formats
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our revolutionary serving formats, each designed 
            to enhance your ice cream experience through advanced technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {types.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card 
                key={type.name} 
                className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary p-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-glow-pulse">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {type.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{type.price}</span>
                      <Button variant="neon" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TypesSection;