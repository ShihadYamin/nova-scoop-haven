import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Plus } from "lucide-react";

interface FlavorCardProps {
  name: string;
  description: string;
  image: string;
  rating: number;
  price: string;
  gradient: string;
}

const FlavorCard = ({ name, description, image, rating, price, gradient }: FlavorCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-glow-primary overflow-hidden">
      <div className="relative">
        <div className={`absolute inset-0 ${gradient} opacity-20`} />
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button variant="neon" size="sm" className="group/btn">
            <Plus className="h-4 w-4 group-hover/btn:rotate-90 transition-transform" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FlavorCard;