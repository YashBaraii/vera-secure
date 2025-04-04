
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SlideshowProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const InteractiveSlideshow = ({ slides, autoPlayInterval = 5000 }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [isPaused, nextSlide, autoPlayInterval]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-8 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <div className="text-5xl mb-6">{slide.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
            <p className="text-center max-w-xl">{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20">
        <Button 
          size="icon" 
          variant="secondary" 
          onClick={prevSlide}
          className="rounded-full shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20">
        <Button 
          size="icon" 
          variant="secondary" 
          onClick={nextSlide}
          className="rounded-full shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-vera-blue-500" 
                : "w-2.5 bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveSlideshow;
