import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ice-cream.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      
      <div className="container mx-auto px-4 h-screen flex items-center justify-between relative z-10">
        <div className="flex-1 max-w-lg animate-fade-in-up">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
            <span className="text-accent font-medium">The Future of Ice Cream</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Taste the
            </span>
            <br />
            <span className="text-foreground">Future</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience ice cream like never before with our revolutionary flavors 
            and futuristic presentation. Each scoop is a journey through taste and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="group">
              Explore Flavors
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="neon" size="xl">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow-pulse" />
            <img 
              src={heroImage} 
              alt="Futuristic Ice Cream" 
              className="relative z-10 w-96 h-96 object-cover rounded-full animate-float animate-hero-image-hover shadow-glow-primary cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;