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

const WeddingLayout = () => {
    return (
        <div className="min-h-screen bg-background pt-8 pb-8 md:pt-16 md:pb-16">
            <div className="max-w-7xl mx-auto relative">
                {/* Main Header Overlapping Images */}
                <div
                    className="absolute top-[-160px] left-0 w-full z-20 flex flex-col items-center pointer-events-none">
                    {/* Main title lines */}
                    <div
                        className="font-playfair text-3xl md:text-7xl lg:text-6xl font-light tracking-wide leading-tight text-center
                        lg:absolute lg:top-0 lg:left-[5%] lg:text-left">
                        A MODERN APPROACH
                    </div>
                    {/* to an AGE OLD TRADITION */}
                    <div
                        className="
                          flex flex-col items-center gap-0 justify-center
                          md:flex-row md:items-baseline md:gap-4 md:justify-center
                          lg:absolute lg:top-[70px] lg:left-[5%] lg:justify-start
                        ">
                        <span
                            className="font-playfair text-xl md:text-3xl lg:text-4xl font-light italic mt-2 mb-0 md:mb-4">to an</span>
                        <span
                            className="font-playfair text-3xl md:text-7xl lg:text-6xl font-light tracking-wide">AGE OLD TRADITION</span>
                    </div>
                </div>

                {/* Main Content Grid - Adjusted mt to compensate for the header moving up */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start mb-16 mt-[180px] md:mt-[220px] lg:mt-[250px] relative">
                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <div className="aspect-[4/5] overflow-hidden">
                            {/* This image remains grayscale as per original design */}
                            <img
                                src={bridePortrait}
                                alt="Elegant bride portrait"
                                className="w-full h-full object-cover grayscale"/>
                        </div>
                    </div>

                    {/* Center Text */}
                    <div
                        className="lg:col-span-1 flex flex-col justify-center px-4 sm:px-8 lg:px-2 pt-8 lg:pt-0">
                        <p
                            className="font-inter text-sm md:text-base leading-relaxed text-foreground/80 tracking-wide">
                            Considered to be the epitome of Modern Photography and Filmmaking, HOTC has
                            transformed the Indian Wedding landscape on a regular basis. For almost a decade
                            House On The Clouds has been creating photographs and films which are timeless
                            and have been etched in memories of thousands of people forever.
                        </p>
                        <br/>
                        <p
                            className="font-inter text-sm md:text-base leading-relaxed text-foreground/80 tracking-wide">
                            Awarded as the Wedding Filmmaker of the year for four consecutive years at the
                            Weddingsutra awards along with numerous other awards HOTC is the only company
                            listed on IMDB for its award winning films.
                        </p>
                    </div>

                    {/* Right Image - Absolute positioning to lift it up and allow overlap */}
                    <div
                        className="lg:col-span-1 self-start relative lg:absolute lg:top-[-200px] lg:right-0 w-full lg:w-1/3 xl:w-[33.33%] z-10">
                        <div className="aspect-[4/5] overflow-hidden">
                            {/* This image remains grayscale as per original design */}
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1db82b11-0d5e-446f-bfef-3bee15ed4f8a/P1+small.jpg"
                                alt="Elegant bride portrait"
                                className="w-full h-full object-cover grayscale"/>
                        </div>
                    </div>
                </div>

                {/* VOGUE, COSMOPOLITAN section */}
                <div
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 pt-8 pb-16 md:pb-24">
                    <div className="font-playfair text-xl md:text-2xl font-bold tracking-widest">
                        VOGUE
                    </div>
                    <div className="font-inter text-lg md:text-xl font-black tracking-wider">
                        COSMOPOLITAN
                    </div>
                    <div
                        className="font-inter text-lg md:text-xl font-black tracking-wider border-2 border-current px-3 py-1">
                        HELLO!
                    </div>
                    <div className="font-playfair text-xl md:text-2xl font-bold tracking-widest">
                        BRIDES
                    </div>
                    <div className="font-inter text-sm md:text-base font-bold tracking-widest">
                        TRAVEL+<br/>LEISURE<br/>
                        <span className="text-xs">INDIA</span>
                    </div>
                </div>

                {/* Iconic Wedding Images Collage - 15 Images */}
                <div
                    className="mb-16 w-full md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw]">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-0 md:gap-2">
                        {/* Row 1 */}
                        <div className="aspect-square overflow-hidden">
                            <img src={destinationWedding} alt="Destination wedding" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={brideElegant} alt="Elegant bride" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={weddingCouple1} alt="Wedding couple" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={coupleCandid} alt="Candid couple moment" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={brideTraditional} alt="Traditional bride" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="aspect-square overflow-hidden">
                            <img src={weddingDetails} alt="Wedding details" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={coupleWalking} alt="Couple walking" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>

                        {/* Central Text */}
                        <div
                            className="aspect-square bg-background flex flex-col justify-center items-center text-center px-2">
                            <p
                                className="font-inter text-xs md:text-sm tracking-wider text-foreground/70 mb-1">
                                some of the most
                            </p>
                            <h3
                                className="font-playfair text-2xl md:text-4xl lg:text-5xl font-light italic tracking-wide">
                                "ICONIC"
                            </h3>
                            <p
                                className="font-inter text-xs md:text-sm tracking-wider text-foreground/70 mt-1">
                                wedding images
                            </p>
                        </div>

                        <div className="aspect-square overflow-hidden">
                            <img src={groomPortrait} alt="Groom portrait" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={weddingCeremony} alt="Wedding ceremony" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>

                        {/* Row 3 */}
                        <div className="aspect-square overflow-hidden">
                            <img src={weddingDance} alt="Wedding dance" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={mehendiHands} alt="Mehendi hands" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={bridePrep} alt="Bride preparation" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={mandapCeremony} alt="Mandap ceremony" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                        <div className="aspect-square overflow-hidden">
                            <img src={familyPhoto} alt="Family photo" className="w-full h-full object-cover" // REMOVED grayscale
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingLayout;