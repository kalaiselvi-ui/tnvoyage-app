import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const DestinationCard = ({
  place,
  image,
  name,
  category,
  shortDesc,
  slug,
  location,
}) => {
  return (
    <div>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <img
          src={image}
          className="h-48 w-full object-cover"
          alt={name}
          loading="lazy"
          decoding="async"
        />

        <div className="p-4">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
              {name}
            </h2>

            <span className="text-xs font-medium bg-green/10 tracking-wider text-green px-2.5 py-1 rounded-full whitespace-nowrap">
              {category}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1 line-clamp-1">{shortDesc}</p>
          {/* Only this button is the Link now */}
          <div className="flex justify-between items-center mt-3">
            {location && (
              <span className="flex gap-1 text-sm text-secondary items-center">
                <IoLocationOutline />
                {location}
              </span>
            )}
            <Link
              to={`/destinations/${slug}`}
              className="flex justify-center items-center gap-2 transform ease-in duration-200 hover:translate-x-2 hover:tracking-wider text-center text-green text-sm font-medium py-2.5 rounded-lg hover:underline"
            >
              View Details
              <span>
                {" "}
                <FaArrowRight aria-label="right-arrow" />
              </span>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
