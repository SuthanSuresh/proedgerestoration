import { FormEvent, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

declare global {
  interface Window {
    grecaptcha: {
      execute: () => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}

const SITE_KEY = "6LfSgRIsAAAAAH4OGqkxmIifmoJbnLvhgtyPlCCZ"; // Replace with your actual V2 site key

const RequestEstimate = () => {
  const [submitted, setSubmitted] = useState(false);

  // Load reCAPTCHA script dynamically
  useEffect(() => {
    if (!document.querySelector("#recaptcha-script")) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      script.id = "recaptcha-script";
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = (formData.get("firstName") || "").toString();
    const lastName = (formData.get("lastName") || "").toString();
    const fullName = `${firstName} ${lastName}`.trim();

    // Dynamic email subject
    formData.set("_subject", fullName ? `New Estimate Request from ${fullName}` : "New Estimate Request");

    if (!window.grecaptcha) {
      console.error("reCAPTCHA not loaded yet");
      return;
    }

    // Use grecaptcha.ready to ensure reCAPTCHA is initialized
    window.grecaptcha.ready(async () => {
      try {
        // V2 invisible reCAPTCHA will automatically use the div's sitekey
        const token = await window.grecaptcha.execute();
        formData.append("g-recaptcha-response", token);

        const response = await fetch("https://formsubmit.co/drizsuresh@gmail.com", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          console.error("FormSubmit returned an error:", response.statusText);
          return;
        }

        setSubmitted(true);
        form.reset();
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Request Free Estimate</CardTitle>
        <CardDescription>Fill out the form and we&apos;ll get back to you within 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input id="firstName" name="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Tell us about your property damage
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please describe the type of damage and when it occurred..."
                rows={4}
                required
              />
            </div>

            {/* V2 Invisible reCAPTCHA */}
            <div className="g-recaptcha" data-sitekey={SITE_KEY} data-size="invisible"></div>

            {/* Hidden inputs for FormSubmit */}
            <input type="hidden" name="_subject" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_ajax" value="true" />

            <Button type="submit" className="w-full" size="lg">
              Request Free Estimate
            </Button>
          </form>
        ) : (
          <p className="text-center text-lg font-medium mt-4">
            Thank you for your inquiry! We will get back to you within 24 hours!
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default RequestEstimate;
