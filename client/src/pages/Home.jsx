import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { assets } from "../assets/assets";
import FeatureCard from "../components/FeatureCard";
import { categories } from "../data/categories";
// import { destinations } from "../data/destinations";
import { trending } from "../data/trending";
import CategoryCard from "../components/CategoryCard";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TrendingCard from "../components/TrendingCard";
import API from "../api/axiosInstance.js";
import { useCategory } from "../context/categoryContext.jsx";
import SkeletonCard from "../components/SkeletonCard.jsx";
import { useDestination } from "../context/DestinationContext.jsx";

const Home = () => {
  const { categories, getCategories, loading: categoryLoading } = useCategory();
  const {
    destinations,
    getAllDestination,
    loading: destinationLoading,
  } = useDestination();

  useEffect(() => {
    getCategories();
    getAllDestination();
  }, []);

  const countMap = categories.reduce((acc, cat) => {
    acc[cat.name] = (acc[cat.name] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <Hero
        heroPoster={assets.heroPoster}
        heroVideo={assets.hero_video}
        heroTitle="Discover. Experience South India."
        heroSubTitle="A travel platform showcasing scenic hills, waterfalls, temples, and
          hidden gems across South India."
        buttonText="Start Exploring"
      />
      <section className="max-w-7xl lg:mx-auto py-5 mx-3 md:mx-8">
        <h2 className="text-center text-3xl font-bold mb-5 text-secondary">
          Featured Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4 px-8">
          {categoryLoading
            ? Array.from({ length: 8 }).map((_, index) => {
                return (
                  <div className="xl:w-[calc(25%-1rem)] max-w-sm sm:w-[calc(33%-1rem)] w-full">
                    <SkeletonCard key={`skeleton-${index}`} />
                  </div>
                );
              })
            : // Categories
              categories.map((category, index) => {
                // const placeCount = categories.filter(
                //   (cat) => cat.name === category.name,
                // ).length;
                const placeCount = countMap[category.name] || 0;
                return (
                  <div
                    className="xl:w-[calc(25%-1rem)] max-w-sm sm:w-[calc(33%-1rem)] w-full"
                    key={category._id}
                  >
                    <CategoryCard
                      id={category._id}
                      name={category.name}
                      emoji={category.emoji}
                      description={category.description}
                      image={category.image}
                      slug={category.slug}
                      placeCount={placeCount}
                      color={category.color}
                    />
                  </div>
                );
              })}
        </div>
      </section>
      <section className="max-w-7xl lg:mx-auto py-10 mx-3 md:mx-8">
        <h2 className="text-center text-3xl font-bold mb-5 text-secondary">
          Featured Destinations
        </h2>
        <div className="flex flex-wrap justify-center gap-4 px-8">
          {/* Feature Cards */}
          {destinationLoading
            ? Array.from({ length: 8 }).map((_, index) => {
                return (
                  <div className="xl:w-[calc(25%-1rem)] max-w-sm sm:w-[calc(33%-1rem)] w-full">
                    <SkeletonCard key={`skeleton-${index}`} />
                  </div>
                );
              })
            : destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="w-full md:w-[calc(25%-1rem)] max-w-sm"
                >
                  <FeatureCard
                    cardImg={destination.image}
                    altImg={destination.name}
                    cardTitle={destination.name}
                    cardText={destination.description}
                    slug={destination.slug}
                  />
                </div>
              ))}
        </div>
      </section>
      <section className="max-w-7xl lg:mx-auto py-5 mx-3 md:mx-8 pl-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">🔥 Trending Now</h2>
            <p className="text-gray-500 text-sm mt-1">
              What travelers are loving this week
            </p>
          </div>

          <Link
            to="/trending"
            className="text-secondary flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
          >
            View all <FaArrowRight />
          </Link>
        </div>

        {/* Scroll Container */}
        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
          {trending.map((item) => (
            <TrendingCard
              key={item.id}
              image={item.image}
              name={item.name}
              text={item.reason}
              rating={item.rating}
              trendBadgeName={item.trend}
              BagdeView={item.views}
              slug={item.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
