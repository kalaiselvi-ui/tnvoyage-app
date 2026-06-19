import React from "react";

const PageHero = ({ HeroImg, heroTitle, heroSubTitle, className }) => {
  return (
    <div className={`relative overflow-hidden w-full h-[500px] ${className}`}>
      <img
        src={HeroImg}
        alt={heroTitle}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold">{heroTitle}</h1>
        <p className="text-lg md:text-xl text-gray-100 italic mb-4"></p>
        {heroSubTitle}
      </div>
    </div>
  );
};

export default PageHero;
