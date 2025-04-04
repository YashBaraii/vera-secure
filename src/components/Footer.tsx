
import { Shield, Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-vera-blue-500" strokeWidth={1.5} />
              <span className="text-xl font-bold">VERA</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t("saferDigitalWorld")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-vera-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vera-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vera-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vera-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vera-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  {t("features")}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  {t("howItWorks")}
                </a>
              </li>
              <li>
                <a href="#partners" className="text-gray-400 hover:text-white transition-colors">
                  {t("partners")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("pricing")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("aboutUs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("resources")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("knowledgeBase")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("developerDocs")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("apiReference")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("blog")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("faqs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-vera-blue-500 mr-2" />
                <a href="mailto:contact@veraidentity.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@veraidentity.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-vera-blue-500 mr-2" />
                <a href="tel:+1-800-VERA-ID" className="text-gray-400 hover:text-white transition-colors">
                  +1-800-VERA-ID
                </a>
              </li>
            </ul>
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-2">{t("subscribeNewsletter")}</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t("yourEmail")}
                  className="flex-grow px-3 py-2 bg-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-vera-blue-500 text-white"
                />
                <button className="bg-vera-blue-600 hover:bg-vera-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                  {t("subscribe")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} VERA Digital Identity. {t("allRightsReserved")}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                {t("privacyPolicy")}
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                {t("termsOfService")}
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                {t("security")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
