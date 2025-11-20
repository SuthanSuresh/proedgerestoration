import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#top" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              ProEdge Restoration
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/#why-us" className="text-foreground hover:text-primary transition-colors">
              Why Choose Us
            </Link>
            <Link to="/#process" className="text-foreground hover:text-primary transition-colors">
              Our Process
            </Link>
            <Link to="/#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:289-224-9612" className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="h-5 w-5" />
              <span>(289) 224-9612</span>
            </a>
            <Button variant="default" size="lg" onClick={(e) => e.preventDefault()}>
              24/7 Emergency Service
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/#services"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/#why-us"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link
                to="/#process"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Process
              </Link>
              <Link
                to="/#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a href="tel:289-224-9612" className="flex items-center gap-2 text-primary font-semibold py-2">
                <Phone className="h-5 w-5" />
                <span>(289) 224-9612</span>
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
