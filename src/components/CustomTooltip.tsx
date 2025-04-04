
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { ReactNode } from "react";

interface CustomTooltipProps {
  content: ReactNode;
  children?: ReactNode;
  showIcon?: boolean;
  delay?: number;
}

const CustomTooltip = ({
  content,
  children,
  showIcon = false,
  delay = 300,
}: CustomTooltipProps) => {
  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center cursor-help">
            {children}
            {showIcon && !children && (
              <InfoIcon className="h-4 w-4 text-muted-foreground ml-1" />
            )}
            {showIcon && children && (
              <InfoIcon className="h-4 w-4 text-muted-foreground ml-1" />
            )}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-popover/95 backdrop-blur-sm border-border text-sm">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
