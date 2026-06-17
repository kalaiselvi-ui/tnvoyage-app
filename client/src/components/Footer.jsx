import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoTwitter } from "react-icons/bi";
import { PiLinkedinLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="text-white bg-[#111111]">
      {/* Bottom Footer */}
      <div className="container mx-auto px-5">
        <div className="flex gap-2 justify-center items-center pt-10 pb-4 border-b border-gray-600 text-gray-400">
          <Link
            to="/"
            aria-label="instagram"
            className="hover:text-secondary transition ease-in duration-300 hover:-translate-y-1.5"
          >
            <BsInstagram />
          </Link>
          <Link
            to="/"
            aria-label="facebook"
            className="hover:text-secondary transition ease-in duration-300 hover:-translate-y-1.5"
          >
            <GrFacebookOption />
          </Link>
          <Link
            to="/"
            aria-label="twitter"
            className="hover:text-secondary transition ease-in duration-300 hover:-translate-y-1.5"
          >
            <BiLogoTwitter />
          </Link>
          <Link
            to="/"
            aria-label="linkedin"
            className="hover:text-secondary transition ease-in duration-300 hover:-translate-y-1.5"
          >
            <PiLinkedinLogo />
          </Link>
        </div>
        <div className="py-5 flex flex-col justify-center items-center gap-4 ">
          <p className="text-center text-gray-500 italic">
            © {new Date().getFullYear()} TNVoyage. All rights reserved.
          </p>

          <div className="flex gap-6 text-secondary">
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
