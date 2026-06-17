import React from "react";
import Hero from "../components/Hero";
import { assets } from "../assets/assets";
import PageHero from "../components/PageHero";
import { blogData, categoryPills } from "../data/MockData";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <div>
      <PageHero
        HeroImg={assets.heroPoster}
        heroTitle="Travel Guides & Insights"
        heroSubTitle="Discover tips, hidden gems and budget travel ideas."
      />
      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categoryPills.map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full border hover:bg-primary hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Blog */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Featured blog"
            className="w-full h-full object-cover max-h-[600px]"
          />

          <div className="p-6">
            <span className="text-primary font-medium">Featured Guide</span>

            <h2 className="text-3xl font-bold mt-3">
              Complete Ooty Travel Guide
            </h2>

            <p className="mt-4 text-gray-600">
              Budget, itinerary, best places to visit and travel tips.
            </p>

            <button className="mt-6 bg-primary text-white px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              category={blog.category}
              readTime={blog.readTime}
              slug={blog.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
