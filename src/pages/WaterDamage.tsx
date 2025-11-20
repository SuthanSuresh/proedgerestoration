import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import RequestEstimate from "@/components/RequestEstimate";
import waterDamage from "@/assets/water-damage.jpg";

const WaterDamage = () => {
  const processSteps = [
    {
      title: "Emergency Contact",
      description: "Call us immediately. Our team is available 24/7 to respond to water emergencies.",
    },
    {
      title: "Water Extraction",
      description: "We use industrial-grade pumps and vacuums to remove standing water quickly.",
    },
    {
      title: "Drying & Dehumidification",
      description: "Advanced equipment dries affected areas thoroughly to prevent mold growth.",
    },
    {
      title: "Cleaning & Sanitizing",
      description: "We clean and disinfect all affected surfaces and belongings.",
    },
    {
      title: "Restoration",
      description: "Complete restoration including repairs to walls, floors, and structures.",
    },
  ];

  const emergencyTips = [
    "Turn off water source if safe to do so",
    "Turn off electricity in affected areas",
    "Remove valuable items from water",
    "Do not use regular vacuum to remove water",
    "Avoid contact with contaminated water",
    "Call ProEdge Restoration immediately",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Damage Restoration</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mb-8">
            Fast, professional water damage restoration to protect your property from further damage. 
            Our certified technicians respond immediately to minimize damage and restore your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call: (289) 224-9612
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
            src={waterDamage} 
            alt="Water damage restoration service" 
            className="w-full h-96 object-cover rounded-lg shadow-xl -mt-8"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Immediate Action is Critical</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Water damage can escalate quickly. Within 24-48 hours, mold can begin to grow, and structural 
              damage can become severe. Our rapid response team arrives quickly with industrial-grade equipment 
              to extract water, dry affected areas, and prevent secondary damage.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether from burst pipes, flooding, sewage backup, or storm damage, we handle all types of water 
              emergencies with expertise and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Water Damage Restoration Process</h2>
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
              <h2 className="text-3xl font-bold">What to Do During a Water Emergency</h2>
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


      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Water Damage Assessment</h2>
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
            <h2 className="text-3xl font-bold">24/7 Emergency Water Damage Service</h2>
          </div>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Every minute counts during a water emergency. Call us now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: (289) 224-9612
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

export default WaterDamage;
