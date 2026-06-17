import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const FeatureCard = ({ cardImg, cardTitle, cardText, altImg }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <img
        src={cardImg}
        className="w-full aspect-4/3 object-cover"
        alt={altImg || "Destination Image"}
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col gap-3 p-5 bg-white/5 shadow-md">
        <h3 className="text-lg text-black font-semibold">
          Destination:{" "}
          <span className="text-green text-bold text-xl italic">
            {cardTitle}
          </span>{" "}
        </h3>
        <p className="text-base text-gray-500 line-clamp-2 min-h-10 h-full">
          {cardText}
        </p>
        <Link
          to="/explore"
          aria-label="Explore"
          className="flex items-center justify-center gap-2 bg-secondary transition ease-in hover:bg-secondary/80 text-white py-1 px-3 rounded-lg"
        >
          Explore
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
