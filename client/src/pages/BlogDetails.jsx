import React from "react";
import PageHero from "../components/PageHero";
import { assets } from "../assets/assets";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";
import CardInfo from "../components/CardInfo";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  console.log(blog.travelInfo);
  return (
    <div className="">
      <PageHero
        heroTitle="Ultimate Ooty Travel Guide"
        heroSubTitle="By TNVoyage Team • 5 min read"
        HeroImg={assets.ooty}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 my-10">
          {blog?.travelInfo?.map((cardInfo) => (
            <CardInfo
              key={cardInfo.label}
              label={cardInfo.label}
              content={cardInfo.value}
            />
          ))}
        </div>
        <article className="max-w-3xl mx-auto px-4 py-10">
          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Why Visit Ooty?
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            Ooty is one of the most beautiful hill stations in Tamil Nadu.
            Surrounded by tea estates, misty mountains, and lakes, it attracts
            travelers throughout the year.
          </p>

          <img
            src={assets.ooty}
            alt="Ooty"
            className="rounded-xl shadow-md w-full h-[350px] object-cover mb-10"
          />

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Top Places to Visit
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            Ooty Lake, Botanical Garden, Doddabetta Peak, and Tea Museum are
            must-visit attractions.
          </p>

          {/* Optional list style */}
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Ooty Lake – Boating and scenic views</li>
            <li>Botanical Garden – Huge variety of plants</li>
            <li>Doddabetta Peak – Highest viewpoint</li>
            <li>Tea Museum – Learn tea processing</li>
          </ul>
        </article>
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {
              // Related Blogs
              blogs.map((blog) => (
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
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
