import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import RequestEstimate from "@/components/RequestEstimate";
import moldRemediation from "@/assets/mold-remediation.jpg";

const MoldRemediation = () => {
  const processSteps = [
    {
      title: "Mold Inspection",
      description: "Comprehensive inspection to identify all mold growth and moisture sources.",
    },
    {
      title: "Containment",
      description: "Isolate affected areas to prevent mold spores from spreading.",
    },
    {
      title: "Air Filtration",
      description: "HEPA filtration to remove airborne mold spores and improve air quality.",
    },
    {
      title: "Mold Removal",
      description: "Safe removal of all mold growth using professional techniques and equipment.",
    },
    {
      title: "Prevention",
      description: "Moisture control and preventive measures to stop future mold growth.",
    },
  ];

  const emergencyTips = [
    "Do not touch or disturb mold growth",
    "Keep affected areas well-ventilated",
    "Turn off HVAC to prevent spore spread",
    "Avoid prolonged exposure to moldy areas",
    "Do not attempt DIY mold removal on large areas",
    "Contact ProEdge Restoration for professional assessment",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mold Remediation Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mb-8">
            Professional mold inspection, removal, and prevention services. Protect your health and property 
            with our certified mold remediation experts and state-of-the-art techniques.
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
            src={moldRemediation} 
            alt="Mold remediation service" 
            className="w-full h-96 object-cover rounded-lg shadow-xl -mt-8"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Professional Mold Remediation is Essential</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Mold can pose serious health risks and cause structural damage to your property. Our certified 
              technicians follow strict industry protocols to safely remove mold, address the underlying moisture 
              issues, and prevent future growth.
            </p>
            <p className="text-lg text-muted-foreground">
              We use advanced detection equipment to find hidden mold, HEPA filtration to remove airborne spores, 
              and proven remediation techniques that eliminate mold at its source while protecting your indoor air quality.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mold Remediation Process</h2>
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
              <h2 className="text-3xl font-bold">What to Do If You Find Mold</h2>
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

      {/* Health & Property Risks */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Risks of Untreated Mold</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle>Health Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Respiratory problems</li>
                    <li>• Allergic reactions</li>
                    <li>• Asthma triggers</li>
                    <li>• Skin irritation</li>
                    <li>• Eye irritation</li>
                    <li>• Compromised immune system</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle>Property Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Structural damage to wood</li>
                    <li>• Damaged drywall and insulation</li>
                    <li>• Decreased property value</li>
                    <li>• Unpleasant musty odors</li>
                    <li>• Damage to belongings</li>
                    <li>• Costly repairs if left untreated</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Common Causes of Mold Growth</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Water Leaks</h3>
                  <p className="text-muted-foreground">Plumbing leaks, roof leaks, or foundation cracks allowing moisture entry.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">High Humidity</h3>
                  <p className="text-muted-foreground">Poor ventilation and excessive moisture in bathrooms and kitchens.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Flooding</h3>
                  <p className="text-muted-foreground">Water damage from storms or floods not properly dried.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Condensation</h3>
                  <p className="text-muted-foreground">Poor insulation causing moisture buildup on cold surfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Mold Inspection</h2>
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
            <h2 className="text-3xl font-bold">Professional Mold Remediation Services</h2>
          </div>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Protect your health and property with our certified mold remediation experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call: (289) 224-9612
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="#contact">Request Free Inspection</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MoldRemediation;
