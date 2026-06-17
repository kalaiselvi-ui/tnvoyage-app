import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.webp"
      >
        <source src={assets.hero_video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative px-5 md:px-0 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white flex gap-3 flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Discover. Experience South India.
        </h1>
        <p className="text-lg md:text-xl text-gray-100 italic mb-4">
          A travel platform showcasing scenic hills, waterfalls, temples, and
          hidden gems across South India.
        </p>
        <Link
          to="/explore"
          className="tracking-wider py-3 px-8 cursor-pointer transition ease-in bg-white text-black hover:bg-secondary hover:text-white"
        >
          Start Exploring
        </Link>
      </div>
    </section>
  );
};

export default Hero;
