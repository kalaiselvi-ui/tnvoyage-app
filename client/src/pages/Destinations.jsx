import { useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import CategoryPill from "../components/CategoryPill";
import DestinationCard from "../components/DestinationCard";
import { assets } from "../assets/assets";
// import { destinations } from "../data/destinations";
import { categories } from "../data/categories";
import { useDestination } from "../context/DestinationContext.jsx";
import { useEffect } from "react";

const Destinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { destinations, getAllDestination } = useDestination();

  // 1. Read category from URL
  const urlCategory = searchParams.get("category") || "All";

  useEffect(() => {
    getAllDestination();
  }, []);

  // 2. Filter destinations based on URL
  const filteredDestinations =
    urlCategory === "All"
      ? destinations
      : destinations?.filter((item) => item?.category?.name === urlCategory);
  // 3. Handle category click (update URL)
  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSearchParams({ category: "All" });
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div>
      {/* HERO */}
      <PageHero
        HeroImg={assets.heroPoster}
        heroTitle="Explore Destinations"
        heroSubTitle="Find places by nature, culture, and adventure"
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {/* ALL BUTTON */}
          <CategoryPill
            pillText="All"
            active={urlCategory === "All"}
            onClick={() => handleCategoryChange("All")}
          />

          {/* OTHER CATEGORIES */}
          {categories.map((cat) => (
            <CategoryPill
              key={cat.id}
              pillText={cat.name}
              active={urlCategory === cat.name}
              onClick={() => handleCategoryChange(cat.name)}
            />
          ))}
        </div>

        {/* DESTINATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDestinations.length > 0 ? (
            filteredDestinations?.map((place) => (
              <DestinationCard
                key={place._id}
                image={place.image}
                name={place.name}
                category={place?.category.name}
                shortDesc={place.shortDescription}
                slug={place.slug}
                location={place.location}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No Destinations Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
