
import { 
  ShieldCheck, 
  Fingerprint, 
  CheckCircle, 
  UserPlus, 
  ShieldLock, 
  Key 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const ProcessStep = ({ number, title, description, icon, isLast }: ProcessStepProps) => {
  return (
    <div className="flex items-start group">
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-vera-blue-100 dark:bg-vera-blue-900/30 flex items-center justify-center border-2 border-vera-blue-500 text-vera-blue-600 dark:text-vera-blue-400 font-bold text-lg z-10 group-hover:bg-vera-blue-500 group-hover:text-white transition-colors duration-300">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-vera-blue-200 dark:bg-vera-blue-800/40 my-2"></div>
        )}
      </div>
      <div className="pb-10">
        <div className="flex items-center mb-2">
          <div className="mr-3 text-vera-blue-600 dark:text-vera-blue-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-md">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-vera-teal-50 dark:bg-vera-teal-900/30 border border-vera-teal-200 dark:border-vera-teal-800 rounded-full px-4 py-1.5 mb-4">
            <CheckCircle className="h-4 w-4 text-vera-teal-600" />
            <span className="text-sm font-medium text-vera-teal-700 dark:text-vera-teal-300">
              Simple Process, Powerful Security
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How VERA Verification Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our streamlined process makes identity verification secure and simple without compromising on privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Process steps */}
          <div className="space-y-6">
            <ProcessStep
              number={1}
              title="Secure Registration"
              description="Create your digital identity with our secure registration process. Add your basic information and set up your private encryption keys."
              icon={<UserPlus className="h-6 w-6" />}
            />
            
            <ProcessStep
              number={2}
              title="Biometric Verification"
              description="Verify your identity using your choice of biometric authentication including facial recognition, fingerprint, or voice identification."
              icon={<Fingerprint className="h-6 w-6" />}
            />
            
            <ProcessStep
              number={3}
              title="Blockchain Certification"
              description="Your verified identity is encrypted and certified on the blockchain, creating a tamper-proof digital identity that you control."
              icon={<ShieldLock className="h-6 w-6" />}
            />
            
            <ProcessStep
              number={4}
              title="Seamless Authentication"
              description="Use your secure digital identity to authenticate across platforms without sharing your personal data."
              icon={<Key className="h-6 w-6" />}
              isLast
            />
          </div>
          
          {/* Visual representation */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-vera-blue-600/10 to-vera-teal-500/10 rounded-xl blur-md"></div>
              
              <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="h-1.5 w-full bg-gradient-to-r from-vera-blue-500 to-vera-teal-500"></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <ShieldCheck className="h-8 w-8 text-vera-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Identity Verification
                      </h3>
                    </div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full rounded-full animate-pulse-slow"></div>
                    </div>
                    
                    <div className="flex items-center justify-between px-1">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Verification Steps</span>
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">Complete</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center mb-3">
                      <Fingerprint className="h-5 w-5 text-vera-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Biometric Match
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {['Fingerprint', 'Facial', 'Voice'].map((method, i) => (
                        <div
                          key={i}
                          className={cn(
                            "text-xs rounded-full px-2.5 py-1 flex items-center",
                            i === 0 
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          )}
                        >
                          {i === 0 && <CheckCircle className="h-3 w-3 mr-1" />}
                          {method}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
