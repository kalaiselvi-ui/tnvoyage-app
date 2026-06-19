import React, { useState } from "react";
import Hero from "../components/Hero";
import { assets } from "../assets/assets";
import PageHero from "../components/PageHero";
import { blogs } from "../data/blogs";
import { blogCategories } from "../data/blogCategories";
import BlogCard from "../components/BlogCard";
import CategoryPill from "../components/CategoryPill";

const Blog = () => {
  const [filterBlogs, setFilterBlogs] = useState("All");

  const filterBlogList =
    filterBlogs === "All"
      ? blogs
      : blogs.filter((b) => b.category === filterBlogs);
  console.log(filterBlogs);

  const latestArticleList = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

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
          <CategoryPill
            onClick={() => setFilterBlogs(item.name)}
            active={filterBlogs === "All"}
            pillText={"All"}
          />
          {blogCategories.map((item) => (
            <CategoryPill
              onClick={() => setFilterBlogs(item.name)}
              active={filterBlogs === item.name}
              key={item.id}
              pillText={item.name}
            />
          ))}
        </div>
      </section>
      {/*Blog Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterBlogList.length > 0 ? (
            filterBlogList.map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                excerpt={blog.excerpt}
                category={blog.category}
                readTime={blog.readTime}
                slug={blog.slug}
              />
            ))
          ) : (
            <div className="w-full col-span-full text-center">
              <p className=" text-lg text-green">No Destinations Found</p>
            </div>
          )}
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

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {latestArticleList.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              category={blog.category}
              date={blog.date}
              slug={blog.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
