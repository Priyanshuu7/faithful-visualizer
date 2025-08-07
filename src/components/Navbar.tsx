import { useState } from "react";
import {  useLocation } from "react-router-dom";
import GalaxiesLogo from "@/assets/GalaxiesLogo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`
        w-full z-50
        ${isHomePage ? "absolute top-0 left-0 bg-transparent" : "relative "}
      `}
    >
      <nav className="w-full flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={GalaxiesLogo}
            alt="App Logo"
            className="w-36 h-auto contrast-125 drop-shadow-md"
          />
        </Link>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#work" onClick={() => setMenuOpen(false)}>Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/#faq">FAQ</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className={`${isHomePage ? "text-white" : "text-black"}`}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile NavLinks */}
      <div
        className={`md:hidden  w-full transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-3 px-6 py-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="#work" onClick={() => setMenuOpen(false)}>Work</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/#faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({
    to,
    children,
    onClick,
  }: {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => {
    const isHash = to.startsWith("#") || to.includes("#");
  
    const Component = isHash ? HashLink : Link;
  
    return (
      <Component
        smooth
        to={to}
        onClick={onClick}
        className="block px-4 py-2 text-black text-base font-poppins hover:text-white transition"
      >
        {children}
      </Component>
    );
  };
  
