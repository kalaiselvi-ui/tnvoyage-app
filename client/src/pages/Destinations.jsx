import { useEffect, useState } from "react";
import { destinations } from "../data/destinations";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { assets } from "../assets/assets";
import { categories } from "../data/categories";
import DestinationCard from "../components/DestinationCard";
import CategoryPill from "../components/CategoryPill";
const Destinations = () => {
  const [filterCategory, setFilterCategory] = useState("All");

  // const categories = ["All", "Hills", "Temple", "Waterfall", "Nature"];

  const filtered =
    filterCategory === "All"
      ? destinations
      : destinations.filter(
          (d) => d.category.toLowerCase() === filterCategory.toLowerCase(),
        );

  console.log({ filtered });
  console.log(filterCategory);

  return (
    <div>
      <PageHero
        HeroImg={assets.heroPoster}
        heroTitle="Explore Destinations"
        heroSubTitle="Find places by nature, culture, and adventure"
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Hero */}

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <CategoryPill
            active={filterCategory === "All"}
            onClick={() => setFilterCategory("All")}
            pillText={"All"}
          />
          {categories.map((cat) => (
            <CategoryPill
              key={cat.id}
              active={filterCategory === cat.name}
              pillText={cat.name}
              onClick={() => setFilterCategory(cat.name)}
            />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((place) => (
              <div key={place.id.toString()}>
                <DestinationCard
                  place={place}
                  image={place.image}
                  name={place.name}
                  category={place.category}
                  shortDesc={place.shortDescription}
                  slug={place.slug}
                />
              </div>
            ))
          ) : (
            <div className="w-full col-span-full text-center">
              <p className=" text-lg text-green">No Destinations Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
