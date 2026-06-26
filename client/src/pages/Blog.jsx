import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { assets } from "../assets/assets";
import PageHero from "../components/PageHero";
// import { blogs } from "../data/blogs";
// import { blogCategories } from "../data/blogCategories";
import BlogCard from "../components/BlogCard";
import CategoryPill from "../components/CategoryPill";
import { useSearchParams } from "react-router-dom";
import FeaturedBlog from "../components/FeaturedBlog";
import { useBlog } from "../context/BlogContext.jsx";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get("blogCategory") || "All";
  const { blogs, getBlogs, loading: blogLoading } = useBlog();

  useEffect(() => {
    getBlogs();
  }, []);

  const filterBlogList = (
    urlCategory === "All"
      ? blogs
      : blogs.filter((b) => b.catName === urlCategory)
  ).slice(0, 8);

  const latestArticleList = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const handleBlogCategory = (blogCategory) => {
    if (blogCategory === "All") {
      setSearchParams({ blogCategory: "All" });
    } else {
      setSearchParams({ blogCategory });
    }
  };

  return (
    <div>
      <Helmet>
        <title>TN Voyage | Travel Blogs</title>
      </Helmet>
      <PageHero
        HeroImg={assets.heroPoster}
        heroTitle="Travel Guides & Insights"
        heroSubTitle="Discover tips, hidden gems and budget travel ideas."
      />
      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <CategoryPill
            onClick={() => handleBlogCategory("All")}
            active={urlCategory === "All"}
            pillText={"All"}
          />
          {[...new Set(blogs.map((blog) => blog.catName))].map((category) => (
            <CategoryPill
              onClick={() => handleBlogCategory(category)}
              active={urlCategory === category}
              key={category}
              pillText={category}
            />
          ))}
        </div>
      </section>
      {/*Blog Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterBlogList?.length > 0 ? (
            filterBlogList?.map((blog) => (
              <BlogCard
                key={blog._id}
                image={blog.image}
                title={blog.title}
                excerpt={blog.shortDesc}
                category={blog.catName}
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
      <FeaturedBlog
        featuredImg={assets.gunaCave}
        slug={latestArticleList[0]}
        featureTitle={"Complete Ooty Travel Guide"}
        featureDescription={
          "Budget, itinerary, best places to visit and travel tips."
        }
      />

      {/* Latest Blogs */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {latestArticleList.map((blog) => {
            const dateFormat = new Date(blog.createdAt).toLocaleDateString(
              "en-GB",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              },
            );
            return (
              <BlogCard
                key={blog._id}
                image={blog.image}
                title={blog.title}
                excerpt={blog.shortDesc}
                category={blog.catName}
                date={dateFormat}
                slug={blog.slug}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Blog;
