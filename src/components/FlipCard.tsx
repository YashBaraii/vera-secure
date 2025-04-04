
import { ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
}

const FlipCard = ({ front, back }: FlipCardProps) => {
  return (
    <div className="flip-card h-64 w-full perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center shadow-md bg-background border border-border dark:bg-card">
          {front}
        </div>
        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center rotate-y-180 bg-background border border-border dark:bg-card shadow-lg">
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
