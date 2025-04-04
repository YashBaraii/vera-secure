
import { 
  Fingerprint,
  ShieldCheck, 
  LockKeyhole, 
  Database, 
  Layers, 
  RefreshCw, 
  Users, 
  Code 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

const FeatureCard = ({ icon, title, description, className, delay = 0, onClick }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={cn(
        "border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all overflow-hidden group", 
        isHovered ? "transform -translate-y-2" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ 
        animationDelay: `${delay}ms`,
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={cn(
          "mb-4 p-3 rounded-full bg-vera-blue-50 dark:bg-vera-blue-900/30 text-vera-blue-600 dark:text-vera-blue-400 transition-all duration-300",
          isHovered ? "scale-110 rotate-3" : ""
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Multi-factor Authentication",
    description: "Enhance security with multiple verification layers including biometrics, smart devices, and knowledge-based verification."
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Blockchain-powered Security",
    description: "Immutable digital identity records using distributed ledger technology to prevent tampering and fraud."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Seamless API Integration",
    description: "Easy integration with your existing systems through comprehensive SDKs and RESTful APIs."
  },
  {
    icon: <LockKeyhole className="h-8 w-8" />,
    title: "Privacy-first Encryption",
    description: "End-to-end encryption with zero-knowledge proofs ensuring your identity data stays private."
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Decentralized Storage",
    description: "Your identity is stored securely across distributed nodes, eliminating single points of failure."
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Continuous Verification",
    description: "Ongoing identity verification that adapts to new threats and changing security landscapes."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Enterprise Solutions",
    description: "Scalable identity verification for organizations of all sizes with custom security policies."
  },
  {
    icon: <Fingerprint className="h-8 w-8" />,
    title: "Advanced Biometrics",
    description: "Cutting-edge facial, fingerprint, and behavioral biometric verification technologies."
  }
];

const Features = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature: { title: string; description: string }) => {
    toast({
      title: feature.title,
      description: `Learn more about ${feature.title.toLowerCase()}`,
      duration: 3000,
    });
  };

  return (
    <section id="features" className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Advanced Security Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our platform combines cutting-edge technologies to provide the most secure and user-friendly identity verification experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
                onClick={() => handleFeatureClick(feature)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
