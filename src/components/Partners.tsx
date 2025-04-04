
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Quote, 
  Star, 
  BadgeCheck
} from "lucide-react";

const partnerLogos = [
  { name: "Amazon", logo: "AWS" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Google", logo: "Google Cloud" },
  { name: "Salesforce", logo: "Salesforce" },
  { name: "Adobe", logo: "Adobe" },
  { name: "Oracle", logo: "Oracle" },
  { name: "IBM", logo: "IBM" },
  { name: "SAP", logo: "SAP" },
];

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "VERA has transformed our customer onboarding process. The digital identity verification is seamless for users while providing us the security we need.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "FinSecure Banking"
  },
  {
    quote: "Implementing VERA's identity verification has reduced our fraud cases by 98%. The blockchain-based security gives us complete confidence.",
    author: "Michael Chen",
    role: "Head of Security",
    company: "E-Commerce Plus"
  },
  {
    quote: "The API integration was incredibly smooth. We were up and running with VERA's verification system in just days, not weeks.",
    author: "Jessica Williams",
    role: "Product Manager",
    company: "HealthTech Solutions"
  }
];

const Testimonial = ({ quote, author, role, company }: TestimonialProps) => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-10 w-10 text-vera-blue-400/30 mb-4" />
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{quote}</p>
        <div className="flex items-start mt-auto">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vera-blue-500 to-vera-teal-500 flex items-center justify-center text-white font-bold">
              {author.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <h4 className="font-semibold text-gray-900 dark:text-white mr-2">{author}</h4>
              <BadgeCheck className="h-4 w-4 text-vera-blue-500" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{role}, {company}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="partners" className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            VERA is the preferred identity verification solution for companies across industries. Here's what our partners say.
          </p>
        </div>

        {/* Partner logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {partnerLogos.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-16 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-vera-blue-700 to-vera-teal-600 bg-clip-text text-transparent">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 ${
                index === activeIndex ? 'md:scale-105 md:shadow-lg z-10' : 'scale-100'
              }`}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
