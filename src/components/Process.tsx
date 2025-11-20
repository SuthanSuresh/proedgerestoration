import { Phone, Search, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Call our 24/7 emergency line. We'll dispatch a team immediately to assess the damage.",
    step: "01",
  },
  {
    icon: Search,
    title: "Assessment",
    description: "Our experts conduct a thorough inspection and create a detailed restoration plan.",
    step: "02",
  },
  {
    icon: Wrench,
    title: "Restoration",
    description: "We execute the plan using advanced techniques and equipment to restore your property.",
    step: "03",
  },
  {
    icon: CheckCircle2,
    title: "Final Inspection",
    description: "Quality check and walk-through to ensure your complete satisfaction.",
    step: "04",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, efficient, and transparent restoration process from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 mt-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
