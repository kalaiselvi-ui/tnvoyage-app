import { useParams } from "react-router-dom";
// import { destinations } from "../data/destinations";
import PageHero from "../components/PageHero";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import CardInfo from "../components/CardInfo";
import { useDestination } from "../context/DestinationContext.jsx";
import { useEffect } from "react";

const DestinationDetails = () => {
  const { slug } = useParams();
  const { destinations, getAllDestination } = useDestination();

  useEffect(() => {
    getAllDestination();
  }, []);

  const place = destinations.find((d) => d.slug === slug);
  console.log({ place });

  if (!place) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Destination not found</h1>
      </div>
    );
  }

  const relatedDestinations = destinations
    .filter(
      (d) => d.category.name === place.category.name && d._id !== place._id,
    )
    .slice(0, 3);

  // DestinationDetails.jsx line 65
  const placesData = place.places;

  // 1. Safely extract the string and split it by commas
  const placesArray =
    Array.isArray(placesData) && typeof placesData[0] === "string"
      ? placesData[0].split(",")
      : typeof placesData === "string"
        ? placesData.split(",")
        : [];

  return (
    <div>
      {/* Hero */}

      <PageHero
        HeroImg={place.image}
        heroTitle={place.name}
        heroSubTitle={place.category.name}
      />
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <CardInfo label="Best Time" content={place.bestTime} />
          <CardInfo label={"Budget"} content={place.budget} />
          <CardInfo label={"Category"} content={place.category.name} />
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3">About {place.name}</h2>
          <p className="text-gray-600 leading-7">{place.description}</p>
        </div>

        {/* Places */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Places to Visit</h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {placesArray.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {relatedDestinations?.map((item) => (
              <div key={item._id}>
                <DestinationCard
                  image={item.image}
                  name={item.name}
                  category={item.category?.name}
                  shortDesc={item.description}
                  location={item.location}
                  slug={item.slug}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetails;
