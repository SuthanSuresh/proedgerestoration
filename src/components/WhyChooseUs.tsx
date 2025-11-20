import { Shield, Clock, Award, Users, CheckCircle, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Always available when disaster strikes. Fast response times guaranteed.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified and insured professionals you can trust with your property.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Industry-leading expertise in all types of property restoration.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained technicians using state-of-the-art equipment.",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "We stand behind our work with comprehensive quality guarantees.",
  },
  {
    icon: Headphones,
    title: "Insurance Support",
    description: "We work directly with insurance companies to streamline your claim.",
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
