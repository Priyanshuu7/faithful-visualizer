const VisuallyCraftedStories = () => {
    return (
      <section className="w-full max-w-6xl mx-auto text-center px-4 py-12">
        <h1 className="font-playfair italic text-2xl md:text-4xl text-foreground mb-4">
          "Films"
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="aspect-[4/5] md:aspect-video w-full overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/76979871?h=8272103f6e"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Heena & Rahul"
                className="w-full h-full"
              ></iframe>
            </div>
            <span className="mt-2 text-sm font-inter text-foreground/80">Heena & Rahul</span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="aspect-[4/5] md:aspect-video w-full overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/357274789?h=50a0947f73"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Satvir & Bhavandeep"
                className="w-full h-full"
              ></iframe>
            </div>
            <span className="mt-2 text-sm font-inter text-foreground/80">Satvir & Bhavandeep</span>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="aspect-[4/5] md:aspect-video w-full overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/357274789?h=50a0947f73"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Jyoti & Lovejit"
                className="w-full h-full"
              ></iframe>
            </div>
            <span className="mt-2 text-sm font-inter text-foreground/80">Jyoti & Lovejit</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default VisuallyCraftedStories;
  