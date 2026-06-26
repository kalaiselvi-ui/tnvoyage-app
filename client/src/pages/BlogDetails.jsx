import React, { useEffect } from "react";
import PageHero from "../components/PageHero";
import { assets } from "../assets/assets";
import BlogCard from "../components/BlogCard";
// import { blogs } from "../data/blogs";
import CardInfo from "../components/CardInfo";
import { useBlocker, useParams } from "react-router-dom";
import { useBlog } from "../context/BlogContext.jsx";

const BlogDetails = () => {
  const { slug } = useParams();
  console.log({ slug });
  const { blogs, getBlogs, loading: blogLoading } = useBlog();

  useEffect(() => {
    getBlogs();
  }, []);

  const blog = blogs?.find((b) => b.slug === slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }
  const relatedBlogs = blogs
    .filter((b) => b.catName == blog.catName && blog.catName !== blog)
    .slice(0, 3);

  const placesData = blog.places;
  const placesArray =
    Array.isArray(placesData) && typeof placesData[0] === "string"
      ? placesData[0].split(",")
      : typeof placesData === "string"
        ? placesData.split(",")
        : [];

  return (
    <div className="">
      <PageHero
        heroTitle={blog.title}
        heroSubTitle={`By TNVoyage Team • ${blog.readTime} read`}
        HeroImg={blog.image}
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
            {`Why Visit ${blog.title}`}?
          </h2>

          <p className="text-gray-600 leading-7 mb-6">{blog.shortDesc}</p>

          <img
            src={blog.image}
            alt="Ooty"
            className="rounded-xl shadow-md w-full h-[350px] object-cover mb-10"
          />

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Top Places to Visit
          </h2>

          <p className="text-gray-600 leading-7 mb-6">{blog.description}</p>

          {/* Optional list style */}
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {placesArray.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </article>
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {
              // Related Blogs
              relatedBlogs?.map((blog) => (
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
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
