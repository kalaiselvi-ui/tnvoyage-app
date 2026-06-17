import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  heroPoster,
  heroVideo,
  heroTitle,
  heroSubTitle,
  buttonText,
}) => {
  return (
    <section className="relative h-screen w-full">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative px-5 md:px-0 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white flex gap-3 flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold">{heroTitle}</h1>
        <p className="text-lg md:text-xl text-gray-100 italic mb-4">
          {heroSubTitle}
        </p>
        {buttonText && (
          <Link
            to="/explore"
            className="tracking-wider py-3 px-8 cursor-pointer transition ease-in bg-white text-black hover:bg-secondary hover:text-white"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
