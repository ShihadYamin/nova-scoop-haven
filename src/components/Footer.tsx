import { Snowflake, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Snowflake className="h-8 w-8 text-primary animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FrostNova
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Pioneering the future of ice cream through revolutionary technology 
              and molecular gastronomy. Experience flavors beyond imagination.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#flavors" className="text-muted-foreground hover:text-primary transition-colors">Flavors</a></li>
              <li><a href="#types" className="text-muted-foreground hover:text-primary transition-colors">Types</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Neo Tokyo, Sector 7</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) FROST-99</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@frostnova.tech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 FrostNova. All rights reserved. Powered by quantum ice cream technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;