import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-secondary"
      : "text-black md:text-white hover:text-secondary";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`w-full z-20 ${scroll ? "fixed top-0 bg-black/80" : "fixed top-0"}`}
      >
        <div className="max-w-7xl mx-auto py-5">
          <div className="flex justify-between items-center md:mx-8 mx-3">
            <Link to="/">
              <img
                className="object-contain w-auto h-8"
                src={assets.logo}
                alt="logo"
              />
            </Link>
            <div className="gap-8 hidden md:flex ">
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
              <NavLink to="/blogs" className={activeLink}>
                Blogs
              </NavLink>
              <NavLink to="/explore" className={activeLink}>
                Explore
              </NavLink>
              <NavLink to="/destinations" className={activeLink}>
                Destinations
              </NavLink>
              <NavLink to="/guides" className={activeLink}>
                Guides
              </NavLink>
            </div>
            <button
              onClick={() => navigate("/admin")}
              className="bg-secondary transition ease-in hover:bg-secondary/80  border-none cursor-pointer py-2 px-10 text-white rounded-full hidden md:block"
            >
              Login
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl md:hidden block"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <RiCloseFill className="text-white hover:text-secondary cursor-pointer text-3xl" />
              ) : (
                <BiMenuAltRight className="text-white hover:text-secondary cursor-pointer text-3xl" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 p-5 bg-white">
            <NavLink
              to="/"
              className={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/explore"
              className={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </NavLink>
            <NavLink
              to="/destinations"
              className={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </NavLink>
            <NavLink
              to="/guides"
              className={activeLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Guides
            </NavLink>

            <button
              onClick={() => navigate("/admin")}
              className="bg-secondary py-2 px-6 text-white rounded-full w-full"
            >
              Login
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
