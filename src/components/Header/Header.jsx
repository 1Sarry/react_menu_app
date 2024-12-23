import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logoIcon from "../../assets/Icons/LogoIcon.svg";
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("section1");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the sticky navbar based on the viewport height we want
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleSetActive = (to) => {
    setActiveNavItem(to);
  };

  const navItems = [
    { name: "Salad", id: "section1" },
    { name: "Brunch", id: "section2" },
    { name: "Drinks", id: "section3" },
    { name: "Lunch", id: "section4" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-nav-bg opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-100 cursor-pointer">
          <ScrollLink to="/">
            {" "}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10" src={logoIcon} alt="" />
              <span> MyCafe </span>
            </div>
          </ScrollLink>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <TfiClose
              className="w-8 h-8 text-gray-100 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <CgMenuRight
              className="w-8 h-8 text-gray-100 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-small-txt font-medium"
              className="text-gray-100 hover:text-gray-300 cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="p-4">
            <TfiClose
              className="w-8 h-8 text-gray-800 cursor-pointer mb-4"
              onClick={toggleMenu}
            />
            <nav className="space-y-4">
           
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-small-txt font-medium"
                  className="block border-b pb-2 text-gray-300 hover:text-gray-800"
                  onClick={toggleMenu}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
