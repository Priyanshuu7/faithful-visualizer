import { useState } from "react";
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

const images = [
  { src: destinationWedding, alt: "Destination wedding" },
  { src: brideElegant, alt: "Elegant bride" },
  { src: weddingCouple1, alt: "Wedding couple" },
  { src: coupleCandid, alt: "Candid couple moment" },
  { src: brideTraditional, alt: "Traditional bride" },
  { src: weddingDetails, alt: "Wedding details" },
  { src: coupleWalking, alt: "Couple walking" },
  { src: GalaxiesLogo, alt: "Galaxies Logo", logo: true },
  { src: groomPortrait, alt: "Groom portrait" },
  { src: weddingCeremony, alt: "Wedding ceremony" },
  { src: weddingDance, alt: "Wedding dance" },
  { src: mehendiHands, alt: "Mehendi hands" },
  { src: bridePrep, alt: "Bride preparation" },
  { src: mandapCeremony, alt: "Mandap ceremony" },
  { src: familyPhoto, alt: "Family photo", hideMobile: true },
];

const ImageCollage = () => {
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoadedCount((prev) => prev + 1);
    }, 300); // small delay for visual pacing
  };

  return (
    <div
      id="work"
      className="mb-4 w-full md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw]"
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0 md:gap-0">
        {images.map((img, index) => {
          const shouldShow = index <= loadedCount;
          return (
            <div
              key={index}
              className={`aspect-square overflow-hidden ${
                img.logo ? "flex items-center justify-center p-4" : ""
              } ${img.hideMobile ? "hidden md:block" : ""}`}
            >
              {shouldShow ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  onLoad={handleImageLoad}
                  className={`transition-opacity duration-700 ease-in-out ${
                    img.logo
                      ? "object-contain w-3/4 h-3/4"
                      : "w-full h-full object-cover"
                  } ${index === loadedCount ? "opacity-0" : "opacity-100"}`}
                  style={{
                    animation: "fadeIn 0.7s forwards",
                  }}
                />
              ) : (
                <div className="w-full h-full bg-background animate-pulse"></div>
              )}
            </div>
          );
        })}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(1.02); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default ImageCollage;
