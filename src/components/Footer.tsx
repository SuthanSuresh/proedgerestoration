import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ProEdge Restoration</h3>
            <p className="text-primary-foreground/80">
              Your trusted partner in property restoration. Available 24/7 for emergency services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#why-us" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/#process" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Emergency: (289) 224-9612</li>
              <li>Email: info@proedgerestoration.ca</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} ProEdge Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
