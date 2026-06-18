import { useParams } from "react-router-dom";
import { destinations } from "../data/destinations";

const DestinationDetails = () => {
  const { slug } = useParams();

  const place = destinations.find((d) => d.slug === slug);

  if (!place) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Destination not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <img
        src={place.image}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">{place.name}</h1>
      <p className="text-gray-500 mt-2">{place.category}</p>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Best Time</h3>
          <p>{place.bestTime}</p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Budget</h3>
          <p>{place.budget}</p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Category</h3>
          <p>{place.category}</p>
        </div>
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
          {place.places.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationDetails;
