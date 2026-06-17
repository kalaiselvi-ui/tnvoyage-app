import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, excerpt, category, readTime, slug }) => {
  return (
    <article className="overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-56 object-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        <span className="w-fit px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {category}
        </span>

        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 min-h-20">
          {title}
        </h3>

        <p className="text-gray-600 line-clamp-3 min-h-[72px]">{excerpt}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-500">⏱ {readTime}</span>

          <Link
            to={`/blog/${slug}`}
            className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Read More
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
