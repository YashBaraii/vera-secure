
import { Button } from "@/components/ui/button";
import { ShieldCheck, Fingerprint, Lock, Layers } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden animated-gradient-bg hex-pattern">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-vera-blue-50 dark:bg-vera-blue-900/30 border border-vera-blue-200 dark:border-vera-blue-800 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="h-4 w-4 text-vera-blue-600" />
              <span className="text-sm font-medium text-vera-blue-700 dark:text-vera-blue-300">
                Next-gen Identity Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gray-900 dark:text-white">
                Secure. Seamless. Private.
              </span>{" "}
              <span className="text-gradient">
                The Future of Digital Identity Verification.
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Protecting your digital identity with blockchain-powered security
              and privacy-first biometric authentication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-vera-blue-200 dark:border-vera-blue-700"
              >
                Integrate with Us
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-vera-blue-600/20 to-vera-teal-500/20 rounded-full blur-3xl"></div>
              
              {/* Identity Verification Animation */}
              <div className="relative h-full flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-vera-blue-500/10 to-vera-teal-400/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                  <Fingerprint className="h-32 w-32 text-vera-blue-500 animate-pulse-slow" />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '15s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                      <Lock className="h-6 w-6 text-vera-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                      <Layers className="h-6 w-6 text-vera-teal-600" />
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
            className="text-background"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
