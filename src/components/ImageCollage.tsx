import destinationWedding from "@/assets/destination-wedding.jpg";
import brideElegant from "@/assets/bride-elegant.jpg";
import weddingCouple1 from "@/assets/wedding-couple-1.jpg";
import coupleCandid from "@/assets/couple-candid.jpg";
import brideTraditional from "@/assets/bride-traditional.jpg";
import weddingDetails from "@/assets/wedding-details.jpg";
import coupleWalking from "@/assets/couple-walking.jpg";
import GalaxiesLogo from "@/assets/GalaxiesLogo.png";
import groomPortrait from "@/assets/groom-portrait.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import weddingDance from "@/assets/wedding-dance.jpg";
import mehendiHands from "@/assets/mehendi-hands.jpg";
import bridePrep from "@/assets/bride-prep.jpg";
import mandapCeremony from "@/assets/mandap-ceremony.jpg";
import familyPhoto from "@/assets/family-photo.jpg";

const ImageCollage = () => {
  return (
    <div className="mb-4 w-full md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw]">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0 md:gap-0">
        <div className="aspect-square overflow-hidden">
          <img src={destinationWedding} alt="Destination wedding" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={brideElegant} alt="Elegant bride" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={weddingCouple1} alt="Wedding couple" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={coupleCandid} alt="Candid couple moment" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={brideTraditional} alt="Traditional bride" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={weddingDetails} alt="Wedding details" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={coupleWalking} alt="Couple walking" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden flex items-center justify-center p-4">
          <img src={GalaxiesLogo} alt="Galaxies Logo" className="object-contain w-3/4 h-3/4" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={groomPortrait} alt="Groom portrait" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={weddingCeremony} alt="Wedding ceremony" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={weddingDance} alt="Wedding dance" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={mehendiHands} alt="Mehendi hands" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={bridePrep} alt="Bride preparation" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src={mandapCeremony} alt="Mandap ceremony" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden hidden md:block">
          <img src={familyPhoto} alt="Family photo" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ImageCollage; 