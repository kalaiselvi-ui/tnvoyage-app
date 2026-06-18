import { useState } from "react";
import { destinations } from "../data/destinations";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Hills", "Temple", "Waterfall", "Nature"];

  const filtered =
    filter === "All"
      ? destinations
      : destinations.filter((d) => d.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Explore Destinations</h1>
        <p className="text-gray-500 mt-2">
          Find places by nature, culture, and adventure
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat ? "bg-black text-white" : "bg-white text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((place) => (
          <Link
            to={`/destinations/${place.slug}`}
            key={place.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={place.image}
              className="h-48 w-full object-cover"
              alt={place.name}
            />

            <div className="p-4">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {place.category}
              </span>

              <h2 className="text-xl font-semibold mt-2">{place.name}</h2>

              <p className="text-gray-500 text-sm mt-1">{place.shortDesc}</p>

              <p className="text-blue-600 mt-3 text-sm">View Details →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
