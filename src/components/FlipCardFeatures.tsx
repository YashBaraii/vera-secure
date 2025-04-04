
import { Shield, Fingerprint, Lock, Key, Eye, Code } from "lucide-react";
import FlipCard from "./FlipCard";
import CustomTooltip from "./CustomTooltip";
import { useLanguage } from "@/context/LanguageContext";

const FlipCardFeatures = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t("multifactorAuth"),
      icon: <Key className="h-12 w-12 text-vera-blue-600 dark:text-vera-blue-400" />,
      description: t("multifactorAuthDesc"),
      tooltipContent: "Combines something you know, something you have, and something you are for unparalleled protection"
    },
    {
      title: t("advancedBiometrics"),
      icon: <Fingerprint className="h-12 w-12 text-vera-blue-600 dark:text-vera-blue-400" />,
      description: "Fast and secure identity verification using facial recognition, fingerprints and voice analysis",
      tooltipContent: "Advanced liveness detection prevents spoofing attempts"
    },
    {
      title: "Zero-Knowledge Proofs",
      icon: <Eye className="h-12 w-12 text-vera-blue-600 dark:text-vera-blue-400" />,
      description: "Verify identity without revealing sensitive personal information",
      tooltipContent: "A cryptographic method ensuring privacy during verification while maintaining security"
    },
    {
      title: t("blockchainSecurity"),
      icon: <Shield className="h-12 w-12 text-vera-blue-600 dark:text-vera-blue-400" />,
      description: "Immutable record of identity verification for compliance and audit purposes",
      tooltipContent: "Creates tamper-proof verification records that remain private yet verifiable"
    },
    {
      title: t("enterpriseSolutions"),
      icon: <Code className="h-12 w-12 text-vera-blue-600 dark:text-vera-blue-400" />,
      description: "Seamlessly connect to existing identity systems with our comprehensive API",
      tooltipContent: "SDKs available for all major platforms with sample code and documentation"
    },
    {
      title: "End-to-End Encryption",
      icon: <Lock className="h-12 w-12 text-vera-blue-600 dark:text-vera-blue-400" />,
      description: "Military-grade encryption protects all data in transit and at rest",
      tooltipContent: "Uses AES-256 encryption with perfect forward secrecy for maximum data protection"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/50 dark:bg-muted/10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{t("platformCapabilities")}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("flipCardTooltip")}
          <CustomTooltip content="Tooltips provide additional context without cluttering the interface" showIcon={true}>
            <span className="mx-1 font-medium">{t("infoIcons")}</span>
          </CustomTooltip>
          {t("forQuickExplanations")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="h-64">
              <FlipCard
                front={
                  <div className="text-center">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
                      {feature.title}
                      <CustomTooltip content={feature.tooltipContent} showIcon={true} />
                    </h3>
                  </div>
                }
                back={
                  <div className="text-center">
                    <p>{feature.description}</p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCardFeatures;
