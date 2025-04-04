
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface PricingFeature {
  title: string;
  included: boolean;
  tooltip?: string;
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceDetails: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    description: "For individuals getting started with secure identity verification",
    price: "$0",
    priceDetails: "forever",
    features: [
      { title: "Basic identity verification", included: true },
      { title: "Up to 10 verifications per month", included: true },
      { title: "Email support", included: true },
      { title: "Single biometric method", included: true },
      { title: "Community access", included: true },
      { title: "Advanced fraud detection", included: false },
      { title: "Custom branding", included: false },
      { title: "Priority support", included: false },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    description: "Perfect for businesses requiring reliable identity verification",
    price: "$29",
    priceDetails: "per month",
    popular: true,
    features: [
      { title: "Advanced identity verification", included: true },
      { title: "Up to 1,000 verifications per month", included: true },
      { title: "Priority email support", included: true },
      { title: "Multiple biometric methods", included: true },
      { title: "API access", included: true },
      { title: "Advanced fraud detection", included: true },
      { title: "Custom branding", included: true },
      { title: "Priority support", included: false, tooltip: "24/7 phone and email support" },
    ],
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced security and compliance needs",
    price: "Custom",
    priceDetails: "tailored to your needs",
    features: [
      { title: "Enterprise-grade verification", included: true },
      { title: "Unlimited verifications", included: true },
      { title: "24/7 phone and email support", included: true },
      { title: "All biometric methods", included: true },
      { title: "Advanced API access", included: true },
      { title: "AI-powered fraud detection", included: true },
      { title: "White-labeling", included: true },
      { title: "Dedicated account manager", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

const PricingCard = ({ tier, isAnnual }: { tier: PricingTier; isAnnual: boolean }) => {
  const { toast } = useToast();
  
  const handleClick = () => {
    toast({
      title: `${tier.name} Plan Selected`,
      description: `You've selected the ${tier.name} plan. ${tier.name === "Enterprise" ? "Our team will contact you shortly." : "Complete your registration to get started."}`,
      duration: 5000,
    });
  };

  return (
    <Card 
      className={cn(
        "border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl relative",
        tier.popular ? "border-vera-blue-500 dark:border-vera-blue-400 shadow-lg" : "border-gray-200 dark:border-gray-700"
      )}
    >
      {tier.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-vera-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-b-lg">
          Most Popular
        </div>
      )}
      <CardContent className="p-6 pt-8">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm h-12">{tier.description}</p>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {tier.price === "Custom" ? tier.price : isAnnual ? tier.price.replace(/\d+/, (match) => `${parseInt(match) * 10}`) : tier.price}
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">
              {tier.priceDetails}
              {isAnnual && tier.price !== "Custom" ? " (save 20%)" : ""}
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
              )}
              <span className={cn(
                "text-sm",
                feature.included 
                  ? "text-gray-700 dark:text-gray-300" 
                  : "text-gray-500 dark:text-gray-500"
              )}>
                {feature.title}
                {feature.tooltip && (
                  <HelpCircle className="h-4 w-4 text-gray-400 inline ml-1 cursor-help" />
                )}
              </span>
            </div>
          ))}
        </div>

        <Button 
          className={cn(
            "w-full transition-transform hover:scale-105",
            tier.popular 
              ? "bg-vera-blue-600 hover:bg-vera-blue-700 dark:bg-vera-blue-600 dark:hover:bg-vera-blue-700" 
              : ""
          )}
          variant={tier.popular ? "default" : "outline"}
          onClick={handleClick}
        >
          {tier.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <section id="pricing" className="py-20 px-4 md:px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that fits your identity verification needs
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={cn(
              "mr-3 text-sm font-medium", 
              !isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              Monthly
            </span>
            <button
              className={cn(
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                isAnnual ? "bg-vera-blue-600" : "bg-gray-300 dark:bg-gray-600"
              )}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                className={cn(
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                  isAnnual ? "translate-x-5" : "translate-x-0"
                )}
              />
            </button>
            <span className={cn(
              "ml-3 text-sm font-medium", 
              isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              Annual <span className="text-vera-blue-600 dark:text-vera-blue-400 font-semibold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <PricingCard tier={tier} isAnnual={isAnnual} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
