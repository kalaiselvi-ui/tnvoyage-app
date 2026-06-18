import React from "react";
import PageHero from "../components/PageHero";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <PageHero
        HeroImg={assets.about_banner}
        heroTitle={"About TNVoyage"}
        heroSubTitle={
          "Discover Tamil Nadu through travel guides,hidden gems, local culture, and unforgettable journeys"
        }
      />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <section className="grid md:grid-cols-2 gap-12 items-center py-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

            <p className="text-gray-600 leading-8">
              TNVoyage helps travelers discover the beauty of Tamil Nadu through
              curated travel guides, destination insights, and practical travel
              tips.
            </p>
          </div>

          <img src={assets.temple2} alt="" className="rounded-2xl" />
        </section>
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            What You'll Find Here
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Destinations</h3>

              <p className="text-sm text-gray-500">
                Explore popular and hidden places.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Travel Guides</h3>

              <p className="text-sm text-gray-500">
                Detailed trip planning resources.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Hidden Gems</h3>

              <p className="text-sm text-gray-500">
                Lesser-known destinations worth visiting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Budget Tips</h3>

              <p className="text-sm text-gray-500">
                Travel smarter without overspending.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why TNVoyage?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary/10 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Curated Destinations</h3>
              <p>Hand-picked places across Tamil Nadu.</p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Local Insights</h3>
              <p>Travel information inspired by real experiences.</p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Easy Planning</h3>
              <p>Everything organized in one place.</p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          <div className="text-center">
            <h3 className="text-4xl font-bold">10+</h3>
            <p>Destinations</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold">20+</h3>
            <p>Travel Guides</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold">5+</h3>
            <p>Categories</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold">100%</h3>
            <p>Tamil Nadu Focused</p>
          </div>
        </section>
        <section className="rounded-3xl p-12 text-center text-white my-10 bg-green">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Explore Tamil Nadu?
          </h2>

          <p className="mb-6">
            Start discovering destinations, guides, and hidden gems today.
          </p>

          <Link
            to="/destinations"
            className="bg-white text-green px-6 py-3 rounded-xl"
          >
            Explore Destinations
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
