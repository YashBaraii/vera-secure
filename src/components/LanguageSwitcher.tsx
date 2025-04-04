
import { useState } from "react";
import { useLanguage, Language, languageNames } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronUp, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 px-2 h-8"
          aria-label="Select language"
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:inline-block">
            {languageNames[language]}
          </span>
          {isOpen ? (
            <ChevronUp className="h-3 w-3 opacity-50" />
          ) : (
            <ChevronDown className="h-3 w-3 opacity-50" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px] bg-background">
        {Object.entries(languageNames).map(([langCode, langName]) => (
          <DropdownMenuItem
            key={langCode}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleLanguageChange(langCode as Language)}
          >
            <span>{langName}</span>
            {langCode === language && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
