
import { Shield, Fingerprint, Code, Lock, Server } from "lucide-react";
import InteractiveSlideshow from "./InteractiveSlideshow";

const SlideshowFeatures = () => {
  const slides = [
    {
      title: "Blockchain Security",
      description: "Our platform leverages advanced blockchain technology to ensure tamper-proof identity verification and secure data storage.",
      icon: <Shield className="text-vera-blue-500 h-16 w-16" />,
    },
    {
      title: "Biometric Authentication",
      description: "Multi-factor authentication with state-of-the-art biometric verification for unparalleled security and ease of use.",
      icon: <Fingerprint className="text-vera-teal-500 h-16 w-16" />,
    },
    {
      title: "Seamless API Integration",
      description: "Easily integrate our secure identity verification services into your applications with our comprehensive API.",
      icon: <Code className="text-vera-blue-500 h-16 w-16" />,
    },
    {
      title: "End-to-End Encryption",
      description: "Your data is protected with military-grade encryption both in transit and at rest, ensuring complete privacy.",
      icon: <Lock className="text-vera-teal-500 h-16 w-16" />,
    },
    {
      title: "Global Identity Network",
      description: "Connect to our worldwide identity verification network, offering seamless verification across borders and systems.",
      icon: <Server className="text-vera-blue-500 h-16 w-16" />,
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Platform Features</h2>
        <InteractiveSlideshow slides={slides} />
      </div>
    </section>
  );
};

export default SlideshowFeatures;
