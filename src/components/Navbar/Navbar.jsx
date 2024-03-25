import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import navimg from "../../assets/weblogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Featured Projects", link: "projects" },
    { name: "Contact Us", link: "contact" },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="nav">
      <div className="shadow-lg w-full fixed top-0 left-0 z-[999] fade-in">
        <div className="md:px-10 py-2 px-7 md:flex justify-between items-center bg-white">
          <div className="flex items-center justify-between">
            {/* AFK Services text */}
            <span
              className="font-bold text-2xl cursor-pointer w-[60px]"
              onClick={scrollToTop}
            >
              <img src={navimg} alt="" />
            </span>
            {/* Bars icon */}
            <div className="flex md:hidden mr-4 text-3xl items-center ">
              {isMenuOpen ? (
                // Close icon
                <ion-icon name="close-outline" onClick={toggleMenu}></ion-icon>
              ) : (
                // Bars icon
                <ion-icon name="menu-outline" onClick={toggleMenu}></ion-icon>
              )}
            </div>
          </div>

          {/* Navlinks */}
          <ul
            className={`md:flex pl-9 md:pl-0 items-center nav-ul ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="font-semibold my-7 md:my-0 md:ml-8 nav-ul relative cursor-pointer transition duration-300 ease-in-out hover:border-b-2 border-gray-700"
              >
                {/* Use ScrollLink for smooth scrolling */}
                <ScrollLink
                  className="text-gray-800 text-xl items-center nav-list"
                  to={link.link}
                  smooth={true}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
