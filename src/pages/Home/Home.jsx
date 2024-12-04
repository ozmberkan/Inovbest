import React from "react";
import Features from "~/components/Features/Features";
import Hero from "~/components/Hero/Hero";

const Home = () => {
  return (
    <div className="w-full flex-grow  bg-cover">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
