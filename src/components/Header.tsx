import { Button } from "@/components/ui/button";
import { Snowflake, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Snowflake className="h-8 w-8 text-primary animate-pulse" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            FrostNova
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#flavors" className="text-foreground hover:text-primary transition-colors">
            Flavors
          </a>
          <a href="#types" className="text-foreground hover:text-primary transition-colors">
            Types
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="neon" size="sm">
            Order Now
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;