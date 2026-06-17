import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TrendingCard = ({
  slug,
  image,
  name,
  text,
  rating,
  trendBadgeName,
  BagdeView,
}) => {
  return (
    <Link
      to={`/place/${slug}`}
      className="min-w-[280px] md:min-w-[320px] group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Trend Badge */}
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
          {trendBadgeName}
        </span>

        {/* Views Badge */}
        <span className="absolute top-3 right-3 bg-white/90 text-black text-xs px-2 py-1 rounded-full">
          {BagdeView}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{name}</h3>

        <p className="text-sm text-gray-500 line-clamp-2">{text}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-600">⭐ {rating}</span>

          <span className="text-secondary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore <FaArrowRight />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;
