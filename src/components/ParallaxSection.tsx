
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ParallaxSection = () => {
  const { toast } = useToast();

  const handleDemoClick = () => {
    toast({
      title: "Demo Request",
      description: "Thank you for your interest! Our team will contact you to schedule a demo.",
      duration: 4000,
    });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 parallax-bg z-0 opacity-20 dark:opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/80 dark:from-background/90 dark:via-background/70 dark:to-background/90 z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Experience the Future of Identity Verification
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Our secure, seamless solution is trusted by leading enterprises worldwide. 
            See how our platform can transform your identity management systems.
          </p>
          <Button 
            size="lg" 
            className="animate-fade-in hover:scale-105 transition-transform duration-300"
            onClick={handleDemoClick}
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
