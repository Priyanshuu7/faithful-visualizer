import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { cn } from "@/lib/utils";
  import { Navbar } from "./Navbar"; 
  
  type ImageCarouselProps = {
    images: { src: string; alt?: string }[];
    className?: string;
  };
  
  export function ImageCarousel({ images, className }: ImageCarouselProps) {
    return (
      <div className={cn("relative w-full h-screen overflow-hidden", className)}>
        {/* Navbar fixed on top of carousel */}
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>
  
        {/* Carousel */}
        <Carousel className="w-full h-full relative">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-screen">
                  <img
                    src={image.src}
                    alt={image.alt || `Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" /> {/* Optional dark overlay */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
  
          {/* Centered navigation buttons */}
          <CarouselPrevious
            className="absolute left-1/2 -translate-x-[160%] top-[95%] z-40 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition"
          />
          <CarouselNext
            className="absolute left-1/2 translate-x-[10%] top-[95%] z-40 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition"
          />
        </Carousel>
      </div>
    );
  }
  