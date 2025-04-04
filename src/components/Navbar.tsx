
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Shield
              className="h-8 w-8 text-vera-blue-600 animate-pulse-slow"
              strokeWidth={1.5}
            />
            <span className="text-xl font-bold text-vera-blue-950 dark:text-white">
              VERA
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-vera-blue-600 dark:after:bg-vera-blue-400 after:transition-all hover:after:w-full"
              >
                {t("features")}
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-vera-blue-600 dark:after:bg-vera-blue-400 after:transition-all hover:after:w-full"
              >
                {t("howItWorks")}
              </a>
              <a
                href="#partners"
                className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-vera-blue-600 dark:after:bg-vera-blue-400 after:transition-all hover:after:w-full"
              >
                {t("partners")}
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-vera-blue-600 dark:after:bg-vera-blue-400 after:transition-all hover:after:w-full"
              >
                {t("pricing")}
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button variant="outline" className="transition-transform hover:scale-105">
                {t("login")}
              </Button>
              <Button className="transition-transform hover:scale-105 hover:bg-vera-blue-700">
                {t("getStarted")}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-slide-in">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("features")}
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("howItWorks")}
            </a>
            <a
              href="#partners"
              className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("partners")}
            </a>
            <a
              href="#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("pricing")}
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full">
                {t("login")}
              </Button>
              <Button className="w-full">
                {t("getStarted")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
