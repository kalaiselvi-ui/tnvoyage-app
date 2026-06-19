import React from "react";
import { Link } from "react-router-dom";

const FeaturedBlog = ({
  featuredImg,
  slug,
  featureTitle,
  featureDescription,
}) => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={featuredImg}
            alt="Featured blog"
            className="w-full h-full object-cover max-h-[600px] min-h-[500px]"
          />

          <div className="p-6">
            <span className="text-primary font-medium">Featured Guide</span>

            <h2 className="text-3xl font-bold mt-3">{featureTitle}</h2>

            <p className="my-4 text-gray-600">{featureDescription}</p>

            <Link
              to={`/destinations/${slug}`}
              className="bg-primary text-white px-5 py-2 rounded-lg"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedBlog;
