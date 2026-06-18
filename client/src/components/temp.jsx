import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const CategoryCard = ({
  id,
  name,
  emoji,
  description,
  image,
  slug,
  placeCount,
  color,
}) => {
  return (
    <Link
      to={`/category/${slug}`}
      aria-label={`Explore ${name}`}
      className="group block rounded-2xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundColor: color || "#000" }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 bg-white/5 backdrop-blur-md">
        {/* Title */}
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 min-h-10">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">{placeCount} places</span>

          <span className="flex items-center gap-1 text-sm font-medium text-secondary group-hover:gap-2 transition-all">
            Explore <FaArrowRight />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
