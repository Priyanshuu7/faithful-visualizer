import bridePortrait from "@/assets/bride-portrait.jpg";
import weddingScene from "@/assets/wedding-scene.jpg";

const WeddingLayout = () => {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight">
            A MODERN APPROACH
          </h1>
          <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-light italic mt-2 mb-4">
            to an
          </h2>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
            AGE OLD TRADITION
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={bridePortrait} 
                alt="Elegant bride portrait" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Center Text */}
          <div className="lg:col-span-1 flex flex-col justify-center px-4">
            <p className="font-inter text-sm md:text-base leading-relaxed text-foreground/80 tracking-wide">
              Considered to be the epitome of Modern Photography and Filmmaking, HOTC has 
              transformed the Indian Wedding landscape on a regular basis. For almost a decade House 
              On The Clouds has been creating photographs and films which are timeless and have been 
              etched in memories of thousands of people forever.
            </p>
            <br />
            <p className="font-inter text-sm md:text-base leading-relaxed text-foreground/80 tracking-wide">
              Awarded as the Wedding Filmmaker of the year for four consecutive years at the 
              Weddingsutra awards along with numerous other awards HOTC is the only company listed 
              on IMDB for its award winning films.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[5/4] overflow-hidden">
              <img 
                src={weddingScene} 
                alt="Wedding scene at mountain terrace" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Magazine Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          <div className="font-playfair text-xl md:text-2xl font-bold tracking-widest">
            VOGUE
          </div>
          <div className="font-inter text-lg md:text-xl font-black tracking-wider">
            COSMOPOLITAN
          </div>
          <div className="font-inter text-lg md:text-xl font-black tracking-wider border-2 border-current px-3 py-1">
            HELLO!
          </div>
          <div className="font-playfair text-xl md:text-2xl font-bold tracking-widest">
            BRIDES
          </div>
          <div className="font-inter text-sm md:text-base font-bold tracking-widest">
            TRAVEL+<br />LEISURE<br />
            <span className="text-xs">INDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingLayout;