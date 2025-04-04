
import { Button } from "@/components/ui/button";
import { ShieldCheck, Fingerprint, Lock, Layers } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const [scrolled, setScrolled] = useState(0);
  const { toast } = useToast();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    toast({
      title: t("getStarted"),
      description: t("learnMore") + " " + t("getStarted").toLowerCase() + "!",
      duration: 3000,
    });
  };

  const handleIntegration = () => {
    toast({
      title: t("integrateWithUs"),
      description: t("learnMore") + " " + t("integrateWithUs").toLowerCase() + ".",
      duration: 3000,
    });
  };

  return (
    <div className="relative pt-20 overflow-hidden animated-gradient-bg hex-pattern dark:after:bg-gray-900/40 dark:before:bg-gray-900/40 transition-colors duration-500">
      <div 
        className="container mx-auto px-4 md:px-6 py-16 md:py-24"
        style={{
          transform: `translateY(${scrolled * 0.1}px)`,
          opacity: 1 - (scrolled * 0.001),
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-vera-blue-50 dark:bg-vera-blue-900/30 border border-vera-blue-200 dark:border-vera-blue-800 rounded-full px-4 py-1.5 mb-6 animate-pulse-slow">
              <ShieldCheck className="h-4 w-4 text-vera-blue-600 dark:text-vera-blue-400" />
              <span className="text-sm font-medium text-vera-blue-700 dark:text-vera-blue-300">
                {t("nextGenIdentity")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gray-900 dark:text-white transition-colors duration-300">
                {t("secureSeamlessPrivate")}
              </span>{" "}
              <span className="text-gradient transition-colors duration-300">
                {t("futureOfIdentity")}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 transition-colors duration-300">
              {t("protectingYourIdentity")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={handleGetStarted}
              >
                {t("getStartedBtn")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-vera-blue-200 dark:border-vera-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={handleIntegration}
              >
                {t("integrateWithUs")}
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-vera-blue-600/20 to-vera-teal-500/20 rounded-full blur-3xl dark:from-vera-blue-600/40 dark:to-vera-teal-500/40 transition-colors duration-500"></div>
              
              {/* Identity Verification Animation */}
              <div className="relative h-full flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-vera-blue-500/10 to-vera-teal-400/10 dark:from-vera-blue-500/20 dark:to-vera-teal-400/20 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-105">
                  <Fingerprint className="h-32 w-32 text-vera-blue-500 dark:text-vera-blue-400 animate-pulse-slow transition-colors duration-300" />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '15s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md transition-colors duration-300 hover:scale-110">
                      <Lock className="h-6 w-6 text-vera-blue-600 dark:text-vera-blue-400" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md transition-colors duration-300 hover:scale-110">
                      <Layers className="h-6 w-6 text-vera-teal-600 dark:text-vera-teal-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-background transition-colors duration-300"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
