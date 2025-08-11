import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import GalaxiesLogo from "@/assets/GalaxiesLogo.png";
import { X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMobile = useIsMobile();

  // Lock scroll & avoid layout shift — only on mobile
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [menuOpen, isMobile]);

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
      className={`w-full z-[9999] ${isHomePage ? "absolute top-0 left-0 bg-transparent" : "relative"
        }`}
    >
      <nav className="w-full flex items-center justify-between px-6 py-4">
        {/* Mobile: menu icon + logo */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button
            onClick={openMenu}
            className="text-[#36454F] w-8"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <TwoLineMenuIcon size={28} color="#36454F" />
          </button>

          <div className="flex justify-center">
            <Link to="/" onClick={closeMenu}>
              <img
                src={GalaxiesLogo}
                alt="Galaxies Logo"
                className="w-28 h-auto object-contain rounded-md brightness-75 contrast-150 drop-shadow-md"
              />
            </Link>
          </div>
          <div className="w-8" /> {/* Spacer to balance layout */}
        </div>

        {/* Desktop: logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={GalaxiesLogo}
            alt="Galaxies Logo"
            className="hidden md:block w-28 md:w-40 h-auto object-contain rounded-md brightness-75 contrast-150 drop-shadow-md"
          />
        </Link>

        {/* Desktop NavLinks */}
        <div className="font-saonara hidden md:flex items-center gap-6">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/#work" onClick={closeMenu}>
            Work
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/faq" onClick={closeMenu}>
            FAQ
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className={`fixed inset-0 bg-background z-[9998] transition-opacity duration-500 ${isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
            } md:hidden flex flex-col h-full`}
        >
          {/* Fixed Header for Close Button and Logo */}
          <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-background z-[9999]">
            <button
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="text-[#36454F] w-8"
            >
              <X strokeWidth="1.5" size={32} color="#36454F" />
            </button>
            <div className="flex justify-center">
              <Link to="/" onClick={closeMenu}>
                <img
                  src={GalaxiesLogo}
                  alt="Galaxies Logo"
                  className="w-28 h-auto object-contain rounded-md brightness-75 contrast-150 drop-shadow-md"
                />
              </Link>
            </div>
            <div className="w-8" /> {/* Spacer to balance layout */}
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col flex-1 px-8 mt-20">
            {/* Mobile Menu Links */}
            <div
              className={`flex flex-col items-start gap-1 font-saonara pb-4 ${isClosing ? "animate-slideOutDown" : "animate-slideInUp"
                }`}
            >
              <NavLink to="/" onClick={closeMenu} className="text-3xl text-[#36454F]">
                Home
              </NavLink>
              <NavLink
                to="/#work"
                onClick={closeMenu}
                className="text-3xl text-[#36454F]"
              >
                Work
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className="text-3xl text-[#36454F]">
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="text-3xl text-[#36454F]"
              >
                Contact
              </NavLink>
            </div>

            {/* Social Links */}
            <div className="border-t border-[#36454F] pt-4 flex gap-6 text-[#36454F]">
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
                aria-label="Instagram"
              >
                <span className="font-saonara">Instagram</span>
              </a>
              <a
                href="https://youtube.com/@yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
                aria-label="YouTube"
              >
                <span className="font-saonara">Youtube</span>
              </a>
            </div>

            {/* Get in Touch Button */}
            <div
              className={`mt-auto pb-8 flex items-center justify-center ${isClosing ? "animate-slideOutDown" : "animate-slideInUp"
                }`}
            >
              <a
                href="/contact"
                onClick={closeMenu}
                className="inline-block px-4 py-2 bg-[#36454F] text-white font-saonara rounded-md hover:bg-[#2B3742] transition w-40 text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

/* Menu Icon */
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

/* Nav Link Component */
const NavLink = ({ to, children, onClick, className = "" }) => {
  const isHash = to.startsWith("#") || to.includes("#");
  const Component = isHash ? HashLink : Link;

  return (
    <Component
      {...(isHash && { smooth: true })}
      to={to}
      onClick={onClick}
      className={`block px-4 py-2 text-[#36454F] font-saonara hover:text-gray-500 transition ${className}`}
    >
      {children}
    </Component>
  );
};