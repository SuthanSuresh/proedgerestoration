import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const EmergencyContact = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Emergency Contact</CardTitle>
        <CardDescription>
          Available 24/7 for immediate assistance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-accent rounded-lg">
            <Phone className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <div className="font-semibold">Emergency Hotline</div>
            <a href="tel:289-224-9612" className="text-primary text-xl font-bold">
              (289) 224-9612
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <a href="mailto:info@proedgerestoration.ca" className="text-primary">
              info@proedgerestoration.ca
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold">Service Area</div>
            <div className="text-muted-foreground">Serving the Greater Toronto Area</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold">Hours</div>
            <div className="text-muted-foreground">24/7 Emergency Response</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContact;
