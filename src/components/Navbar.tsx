import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GalaxiesLogo from "@/assets/GalaxiesLogo.png";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Instagram, Youtube } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Lock scroll and avoid layout shift when menu is open
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [menuOpen]);

  const openMenu = () => {
    setIsClosing(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 500); // match fadeOut duration
  };

  return (
    <header
      className={`w-full z-[9999] ${
        isHomePage ? "absolute top-0 left-0 bg-transparent" : "relative"
      }`}
    >
      <nav className="w-full flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src={GalaxiesLogo}
          alt="Galaxies Logo"
          className="w-28 md:w-40 h-auto object-contain rounded-md brightness-75 contrast-150 drop-shadow-md"
        />

        {/* Desktop NavLinks */}
        <div className="font-saonara hidden md:flex items-center gap-4">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/#work" onClick={closeMenu}>Work</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={openMenu}
            className={`${isHomePage ? "text-[#36454F]" : "text-[#36454F]"}`}
          >
            <TwoLineMenuIcon size={28} color="#36454F" />
          </button>
        </div>
      </nav>

      {/* Overlay (always mounted to avoid layout shift) */}
      <div
        className={`fixed inset-0 bg-background z-[9998] flex flex-col px-6 py-8 transition-opacity duration-500 ${
          menuOpen
            ? isClosing
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo + Close button */}
        <div className="flex justify-between items-center mb-10">
          <Link to="/" onClick={closeMenu}>
            <img
              src={GalaxiesLogo}
              alt="Galaxies Logo"
              className="w-28 md:w-40 h-auto object-contain rounded-md brightness-75 contrast-150 drop-shadow-md"
            />
          </Link>
          <button onClick={closeMenu}>
            <X strokeWidth="1.5" size={32} color="#36454F" />
          </button>
        </div>

        {/* Mobile menu links with bottom border */}
        <div className="flex flex-col items-start gap-1 font-saonara border-b border-[#36454F] pb-4 mb-4">
          <NavLink to="/" onClick={closeMenu} className="text-3xl text-[#36454F]">Home</NavLink>
          <NavLink to="#work" onClick={closeMenu} className="text-3xl text-[#36454F]">Work</NavLink>
          <NavLink to="/about" onClick={closeMenu} className="text-3xl text-[#36454F]">About</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="text-3xl text-[#36454F]">Contact</NavLink>
        </div>

        {/* Social handles icons only */}
        <div className="flex gap-6 mb-4 text-[#36454F]">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition"
            aria-label="Instagram"
          >
            <span className="font-saonara"  color="#36454F">Instagram</span>
          </a>
          <a
            href="https://youtube.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition"
            aria-label="YouTube"
          >
            <span className="font-saonara" color="#36454F">Youtube</span>
            </a>
        </div>

        {/* Get in Touch button centered and shorter */}
        <div className="flex justify-center pt-7">
          <a
            href="/contact"
            onClick={closeMenu}
            className="inline-block px-4 py-3 bg-[#36454F] text-white font-saonara rounded-md hover:bg-[#2B3742] transition w-36 text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

const TwoLineMenuIcon = ({ size = 32, color = "#36454F" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 32 24"
  >
    <line x1="1" y1="8" x2="31" y2="8" />
    <line x1="1" y1="16" x2="31" y2="16" />
  </svg>
);

const NavLink = ({ to, children, onClick, className = "" }) => {
  const isHash = to.startsWith("#") || to.includes("#");
  const Component = isHash ? HashLink : Link;

  return (
    <Component
      smooth
      to={to}
      onClick={onClick}
      className={`block px-4 py-2 text-[#36454F] font-saonara hover:text-gray-500 transition ${className}`}
    >
      {children}
    </Component>
  );
};
