import {Instagram, Youtube} from "lucide-react";
import React from "react";
import GalaxiesLogo from "@/assets/GalaxiesLogo.png";

const Footer : React.FC = () => {
    return (
        <footer
            className="w-full bg-gradient-to-b from-white to-pink-50 border-t ">
            <div
                className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start space-y-5">
                    <img
                        src={GalaxiesLogo}
                        alt="Galaxies Logo"
                        className="w-44 h-auto object-contain rounded-md "/>
                    <p
                        className="text-sm text-zinc-600 font-light tracking-wide italic text-center md:text-left">
                        “Capturing timeless love stories in Jaipur & beyond.”
                    </p>
                </div>

                {/* Socials + Info */}
                <div
                    className="flex flex-col items-center gap-6 text-center md:text-left md:items-start">
                    <div className="flex space-x-5">
                        <a
                            href="https://www.instagram.com/galaxiesphotography"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-3 bg-white rounded-full shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <Instagram className="h-6 w-6 text-pink-500"/>
                        </a>
                        <a
                            href="https://youtube.com/@galaxiesphotography?si=ZjK0CKEiO5f9kz0j"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="p-3 bg-white rounded-full shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <Youtube className="h-6 w-6 text-red-500"/>
                        </a>
                    </div>
                    <p className="text-sm font-saonara text-zinc-700">📍 Jaipur, India</p>
                    <a
                        href="/privacy-policy"
                        className="text-sm font-saonara text-zinc-700 hover:text-pink-500 transition-colors">
                        Privacy Policy
                    </a>
                </div>

                {/* Contact Info */}
                <div
                    className="flex flex-col gap-4 text-sm text-zinc-700 text-center md:text-left">
                    <p>
                        <span className="font-saonara">Phone:</span>{" "}
                        <a href="tel:+919352960101" className="hover:text-pink-500 transition-colors">
                            +91 93529 60101
                        </a>
                    </p>
                    <p>
                        <span className="font-saonara">Email:</span>{" "}
                        <a
                            href="mailto:iamapoorv23@gmail.com"
                            className="hover:text-pink-500 transition-colors">
                            iamapoorv23@gmail.com
                        </a>
                    </p>
                    <a
                        href="/terms-conditions"
                        className="hover:text-pink-500 transition-colors font-saonara">
                        Terms & Conditions
                    </a>
                </div>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center py-3">
                <div className="h-px w-16 bg-zinc-300"></div>
                <span className="mx-2 text-pink-500 text-lg">❀</span>
                <div className="h-px w-16 bg-zinc-300"></div>
            </div>

            {/* Bottom Line */}
            <div className="py-5 text-center">
                <p className="text-xs text-zinc-500">
                    © {new Date().getFullYear()}
                    Galaxies Photography & Film Productions. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
