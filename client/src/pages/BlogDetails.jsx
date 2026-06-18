import React from "react";
import PageHero from "../components/PageHero";
import { assets } from "../assets/assets";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/MockData";
import CardInfo from "../components/CardInfo";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogData.find((blog) => blog.slug === slug);

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
              content={cardInfo.content}
            />
          ))}
        </div>
        <article className="prose prose-lg max-w-none ">
          <h2>Why Visit Ooty?</h2>

          <p>
            Ooty is one of the most beautiful hill stations in Tamil Nadu.
            Surrounded by tea estates, misty mountains, and lakes, it attracts
            travelers throughout the year.
          </p>

          <img src={assets.ooty} alt="" />

          <h2>Top Places to Visit</h2>

          <p>
            Ooty Lake, Botanical Garden, Doddabetta Peak, and Tea Museum are
            must-visit attractions.
          </p>
        </article>
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {
              // Related Blogs
              blogData.map((blog) => (
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
