import { Shield, Clock, Award, Users, CheckCircle, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Rapid response within 60 minutes across the Greater Toronto Area. Every minute counts when dealing with water, fire, or storm damage.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "IICRC certified technicians with full liability insurance. Your property and peace of mind are protected throughout the restoration process.",
  },
  {
    icon: Award,
    title: "20 Years Combined Experience",
    description: "Two decades of expertise restoring homes and businesses. We've successfully completed thousands of restoration projects across the GTA.",
  },
  {
    icon: Users,
    title: "IICRC Certified Technicians",
    description: "Our team holds industry certifications in water damage restoration, fire and smoke damage, and mold remediation. Ongoing training ensures we use the latest techniques.",
  },
  {
    icon: CheckCircle,
    title: "Advanced Equipment & Techniques",
    description: "Industrial-grade moisture detection, thermal imaging, and drying equipment. We follow industry best practices to ensure thorough restoration.",
  },
  {
    icon: Headphones,
    title: "Direct Insurance Billing",
    description: "We handle all insurance paperwork and work directly with adjusters. Get your claim processed faster with detailed documentation and estimates.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose ProEdge Restoration?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trust, expertise, and dedication to restoring your property to its original condition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
