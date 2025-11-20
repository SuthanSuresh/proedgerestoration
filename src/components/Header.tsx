import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">ProEdge Restoration</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
              Why Choose Us
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              Our Process
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:1-800-PRO-EDGE" className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="h-5 w-5" />
              <span>1-800-PRO-EDGE</span>
            </a>
            <Button variant="default" size="lg">
              24/7 Emergency Service
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#why-us"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a
                href="#process"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Process
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:1-800-PRO-EDGE"
                className="flex items-center gap-2 text-primary font-semibold py-2"
              >
                <Phone className="h-5 w-5" />
                <span>1-800-PRO-EDGE</span>
              </a>
              <Button variant="default" className="w-full">
                24/7 Emergency Service
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
