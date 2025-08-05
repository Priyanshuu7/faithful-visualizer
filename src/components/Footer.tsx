import { Instagram, Youtube } from "lucide-react";
import React from "react";
import GalaxiesLogo from "@/assets/GalaxiesLogo.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background py-4">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={GalaxiesLogo}
            alt="Galaxies Logo"
            className="w-40 h-auto object-contain rounded-md"
          />
        </div>

        {/* Socials + Info */}
        <div className="flex flex-col items-center gap-4 text-center md:text-left md:items-start">
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/galaxiesphotography"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
            </a>
            <a
              href="https://youtube.com/@galaxiesphotography?si=ZjK0CKEiO5f9kz0j"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 hover:text-blue-600 transition-colors" />
            </a>
          </div>
          <p className="text-sm text-zinc-600">Jaipur</p>
          <p className="text-sm text-zinc-600">Privacy Policy</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm text-zinc-700 text-center md:text-left">
          <p>
            <span className="font-semibold">Phone:</span> +91 93529 60101
          </p>
          <p>
            <span className="font-semibold">Email:</span> iamapoorv23@gmail.com
          </p>
          <a href="/terms-conditions" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
