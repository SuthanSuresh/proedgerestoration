import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Flame, Wind, AlertTriangle } from "lucide-react";
import waterDamage from "@/assets/water-damage.jpg";
import fireDamage from "@/assets/fire-damage.jpg";
import moldRemediation from "@/assets/mold-remediation.jpg";
import stormDamage from "@/assets/storm-damage.jpg";

const services = [
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    description: "Emergency water extraction, drying, and restoration to prevent mold and structural damage.",
    image: waterDamage,
  },
  {
    icon: Flame,
    title: "Fire Damage Restoration",
    description: "Complete fire and smoke damage cleanup, odor removal, and structural restoration services.",
    image: fireDamage,
  },
  {
    icon: AlertTriangle,
    title: "Mold Remediation",
    description: "Safe and thorough mold removal, prevention, and air quality restoration for your property.",
    image: moldRemediation,
  },
  {
    icon: Wind,
    title: "Storm Damage Repair",
    description: "Rapid response to storm damage including roof repairs, debris removal, and full restoration.",
    image: stormDamage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional restoration services for all types of property damage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-primary rounded-lg">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
