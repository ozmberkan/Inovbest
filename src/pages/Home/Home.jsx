import React from "react";
import Customers from "~/components/Customers/Customers";
import Features from "~/components/Features/Features";
import Hero from "~/components/Hero/Hero";

const Home = () => {
  return (
    <div className="w-full flex-grow  bg-cover">
      <Hero />
      <Features />
      <Customers />
    </div>
  );
};

export default Home;
