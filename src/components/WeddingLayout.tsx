import bridePortrait from "@/assets/bride-portrait.jpg";
import weddingCouple1 from "@/assets/wedding-couple-1.jpg";
import brideElegant from "@/assets/bride-elegant.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import coupleCandid from "@/assets/couple-candid.jpg";
import weddingDetails from "@/assets/wedding-details.jpg";
import destinationWedding from "@/assets/destination-wedding.jpg";
import brideTraditional from "@/assets/bride-traditional.jpg";
import coupleWalking from "@/assets/couple-walking.jpg";
import groomPortrait from "@/assets/groom-portrait.jpg";
import weddingDance from "@/assets/wedding-dance.jpg";
import mehendiHands from "@/assets/mehendi-hands.jpg";
import bridePrep from "@/assets/bride-prep.jpg";
import mandapCeremony from "@/assets/mandap-ceremony.jpg";
import familyPhoto from "@/assets/family-photo.jpg";
import GalaxiesLogo from "@/assets/GalaxiesLogo.png";

const WeddingLayout = () => {
    return (
        <div className="min-h-screen bg-background pt-8 pb-8 md:pt-16 md:pb-16">
            <div className="max-w-7xl mx-auto relative">

                {/* Section 1: Visually Crafted Stories */}
                <section className="w-full max-w-6xl mx-auto text-center px-4 py-12">
                    <h2 className="font-playfair italic text-xl md:text-2xl text-foreground mb-4">
                        “Visually Crafted Stories That Go Beyond the Frame”
                    </h2>
                    <p className="font-inter text-sm md:text-base text-foreground/80 max-w-2xl mx-auto mb-12">
                        "Galaxies Photography is where light meets story — a space where timeless love, raw craft, and authentic emotion unfold frame by frame."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="aspect-[4/5] overflow-hidden w-full">
                                <img
                                    src={weddingCouple1}
                                    alt="Heena & Rahul"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <span className="mt-2 text-sm font-inter text-foreground/80">Heena & Rahul</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="aspect-[4/5] overflow-hidden w-full">
                                <img
                                    src={brideElegant}
                                    alt="Satvir & Bhavandeep"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <span className="mt-2 text-sm font-inter text-foreground/80">Satvir & Bhavandeep</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="aspect-[4/5] overflow-hidden w-full">
                                <img
                                    src={destinationWedding}
                                    alt="Jyoti & Lovejit"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <span className="mt-2 text-sm font-inter text-foreground/80">Jyoti & Lovejit</span>
                        </div>
                    </div>
                </section>

               

                {/* Image Collage */}
                <div
                    className="mb-16 w-full md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw]">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-0 md:gap-0">
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={destinationWedding}
                                alt="Destination wedding"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={brideElegant}
                                alt="Elegant bride"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={weddingCouple1}
                                alt="Wedding couple"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={coupleCandid}
                                alt="Candid couple moment"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={brideTraditional}
                                alt="Traditional bride"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={weddingDetails}
                                alt="Wedding details"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={coupleWalking}
                                alt="Couple walking"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden flex items-center justify-center p-4">
                            <img
                                src={GalaxiesLogo}
                                alt="Galaxies Logo"
                                className="object-contain w-3/4 h-3/4"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={groomPortrait}
                                alt="Groom portrait"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={weddingCeremony}
                                alt="Wedding ceremony"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={weddingDance}
                                alt="Wedding dance"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={mehendiHands}
                                alt="Mehendi hands"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={bridePrep}
                                alt="Bride preparation"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={mandapCeremony}
                                alt="Mandap ceremony"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                        <div className="aspect-square overflow-hidden hidden md:block">
                            <img
                                src={familyPhoto}
                                alt="Family photo"
                                className="w-full h-full object-cover"
                                loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingLayout;
