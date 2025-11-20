import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import RequestEstimate from "@/components/RequestEstimate";
import stormDamage from "@/assets/storm-damage.jpg";

const StormDamage = () => {
  const processSteps = [
    {
      title: "Emergency Response",
      description: "Immediate assessment of storm damage and emergency stabilization.",
    },
    {
      title: "Property Protection",
      description: "Temporary repairs, tarping, and board-up to prevent further damage.",
    },
    {
      title: "Debris Removal",
      description: "Safe removal of fallen trees, branches, and storm debris.",
    },
    {
      title: "Water Extraction",
      description: "Remove water intrusion from roof damage or flooding.",
    },
    {
      title: "Complete Restoration",
      description: "Full repairs to roof, siding, windows, and structural components.",
    },
  ];

  const emergencyTips = [
    "Stay safe - avoid damaged structures",
    "Document all damage with photos",
    "Cover broken windows and holes if safe",
    "Turn off utilities if there's damage",
    "Contact your insurance company",
    "Call ProEdge Restoration for emergency service",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Storm Damage Restoration</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mb-8">
            Fast emergency response to storm damage including roof repairs, debris removal, water damage, 
            and complete property restoration. Available 24/7 when severe weather strikes.
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
            src={stormDamage} 
            alt="Storm damage restoration service" 
            className="w-full h-96 object-cover rounded-lg shadow-xl -mt-8"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Rapid Storm Damage Response</h2>
            <p className="text-lg text-muted-foreground mb-6">
              When severe weather damages your property, quick action is critical to prevent further damage. 
              Our emergency response team is available 24/7 to secure your property, remove debris, and begin 
              the restoration process immediately.
            </p>
            <p className="text-lg text-muted-foreground">
              From minor wind damage to major storm destruction, we handle all aspects of storm damage restoration 
              including roofing, siding, windows, water intrusion, and structural repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Storm Damage Restoration Process</h2>
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
              <h2 className="text-3xl font-bold">What to Do After Storm Damage</h2>
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

      {/* Types of Storm Damage */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Types of Storm Damage We Restore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Roof Damage</h3>
                  <p className="text-muted-foreground">Missing shingles, punctures, leaks, and structural damage from wind or hail.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Wind Damage</h3>
                  <p className="text-muted-foreground">Siding damage, broken windows, and structural compromise from high winds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Hail Damage</h3>
                  <p className="text-muted-foreground">Dented roofing, siding, gutters, and damaged outdoor equipment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Flooding</h3>
                  <p className="text-muted-foreground">Water intrusion, basement flooding, and foundation damage.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Tree Damage</h3>
                  <p className="text-muted-foreground">Fallen trees, large branches, and debris impacting structures.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Lightning Damage</h3>
                  <p className="text-muted-foreground">Electrical system damage and fire from lightning strikes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Assistance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Insurance Claim Assistance</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We work directly with insurance companies to streamline your claim process. Our detailed 
              documentation and expertise help ensure you receive fair compensation for storm damage repairs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Complete photo and written documentation of all damage</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Direct Billing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">We can bill insurance directly to simplify the process</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Professional estimates and support throughout your claim</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Storm Damage Assessment</h2>
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
            <h2 className="text-3xl font-bold">24/7 Storm Damage Emergency Service</h2>
          </div>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait when storm damage strikes. Call us now for immediate emergency response.
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

export default StormDamage;
