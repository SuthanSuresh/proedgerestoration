import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Clock className="h-4 w-4" />
            <span className="font-semibold">24/7 Emergency Response</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Expert Property Restoration Services
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
            Fast, professional restoration for water, fire, mold, and storm damage. 
            We restore your property and peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <Button size="lg" variant="default" className="text-lg h-14 px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (289) 224-9612
            </Button>
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8" asChild>
              <a href="#contact">Get Free Estimate</a>
            </Button>
          </div>
          
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500 max-w-sm">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
