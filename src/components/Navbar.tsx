
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              className="h-8 w-8 text-vera-blue-600"
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
                className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#partners"
                className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 transition-colors"
              >
                Partners
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 transition-colors"
              >
                Pricing
              </a>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Log In</Button>
              <Button>Get Started</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-slide-in">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#partners"
              className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partners
            </a>
            <a
              href="#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-vera-blue-600 dark:hover:text-vera-blue-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
