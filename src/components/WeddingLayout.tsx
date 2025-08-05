import VisuallyCraftedStories from "./VisuallyCraftedStories";
import ImageCollage from "./ImageCollage";
import WeddingVideos from "./WeddingVideos";

const WeddingLayout = () => {
  return (
    <div className="min-h-screen bg-background pt-8 pb-8 md:pt-16 md:pb-16">
      <div className="max-w-7xl mx-auto relative">
        <VisuallyCraftedStories />
        <ImageCollage />
        <WeddingVideos />
      </div>
    </div>
  );
};

export default WeddingLayout;
