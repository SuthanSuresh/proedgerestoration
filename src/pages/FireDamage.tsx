import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import RequestEstimate from "@/components/RequestEstimate";
import fireDamage from "@/assets/fire-damage.jpg";

const FireDamage = () => {
  const processSteps = [
    {
      title: "Emergency Assessment",
      description: "Immediate safety evaluation and damage assessment of your property.",
    },
    {
      title: "Board-Up & Security",
      description: "Secure your property to prevent further damage and unauthorized entry.",
    },
    {
      title: "Smoke & Soot Removal",
      description: "Specialized cleaning to remove smoke residue and soot from all surfaces.",
    },
    {
      title: "Odor Elimination",
      description: "Advanced deodorization techniques to remove persistent smoke odors.",
    },
    {
      title: "Complete Restoration",
      description: "Full structural repairs and reconstruction to restore your property.",
    },
  ];

  const emergencyTips = [
    "Ensure everyone is safe and out of the property",
    "Contact emergency services if fire is active",
    "Do not enter until cleared by fire department",
    "Avoid touching soot-covered items",
    "Do not attempt to clean smoke damage yourself",
    "Call ProEdge Restoration for professional cleanup",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fire & Smoke Damage Restoration</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mb-8">
            Comprehensive fire damage restoration services including smoke and soot removal, odor elimination, 
            and complete structural restoration. We help you recover from fire damage quickly and completely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8" asChild>
              <a href="tel:289-224-9612">
                <Phone className="mr-2 h-5 w-5" />
                Call: (289) 224-9612
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="#contact">Get Free Estimate</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <img 
            src={fireDamage} 
            alt="Fire damage restoration service" 
            className="w-full h-96 object-cover rounded-lg shadow-xl -mt-8"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Expert Fire Damage Restoration</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fire damage goes beyond what's visible. Smoke, soot, and odors can penetrate walls, HVAC systems, 
              and belongings. Our certified technicians use specialized equipment and techniques to completely 
              remove all traces of fire damage and restore your property to pre-loss condition.
            </p>
            <p className="text-lg text-muted-foreground">
              We handle everything from minor smoke damage to complete fire loss, working directly with your 
              insurance company to streamline the restoration process.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Fire Damage Restoration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">What to Do After a Fire</h2>
            </div>
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {emergencyTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Damage */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Types of Fire Damage We Restore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Structural Damage</h3>
                  <p className="text-muted-foreground">Repairs to walls, ceilings, floors, and load-bearing structures.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Smoke & Soot Damage</h3>
                  <p className="text-muted-foreground">Complete removal of smoke residue from all surfaces and materials.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Odor Removal</h3>
                  <p className="text-muted-foreground">Advanced techniques to eliminate persistent smoke odors.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Water Damage</h3>
                  <p className="text-muted-foreground">Addressing water damage from firefighting efforts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Content Restoration</h3>
                  <p className="text-muted-foreground">Cleaning and restoring salvageable belongings and furniture.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">HVAC Cleaning</h3>
                  <p className="text-muted-foreground">Thorough cleaning of air ducts and ventilation systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Fire Damage Assessment</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <EmergencyContact />
              <RequestEstimate />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="h-8 w-8" />
            <h2 className="text-3xl font-bold">24/7 Fire Damage Emergency Service</h2>
          </div>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fast response to minimize damage and begin your recovery immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8" asChild>
              <a href="tel:289-224-9612">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: (289) 224-9612
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="#contact">Request Free Estimate</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FireDamage;
