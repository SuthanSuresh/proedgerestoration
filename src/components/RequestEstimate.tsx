import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RequestEstimate = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Request Free Estimate</CardTitle>
        <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" action="https://formsubmit.co/40fc935e628b6063ba8f1f7c8d73d1b2" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <Input id="firstName" name="firstName" placeholder="John" required/>
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <Input id="lastName" name="lastName" placeholder="Doe" required/>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required/>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required/>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Tell us about your property damage
            </label>
            <Textarea id="message" name="message" placeholder="Please describe the type of damage and when it occurred..." rows={4} required/>
          </div>

          <input type="hidden" name="_subject" value="New Estimate Request!" />
          <input type="hidden" name="_captcha" value="true" 
            <input type="hidden" name="_next" value="https://proedgerestoration.ca/"/>

          <Button type="submit" className="w-full" size="lg">
            Request Free Estimate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RequestEstimate;
