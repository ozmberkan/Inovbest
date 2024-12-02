import React from "react";
import { BackgroundBeams } from "~/components/UI/Background";

const Home = () => {
  return (
    <div className=" flex justify-center items-center">
      <BackgroundBeams />
      <div className="absolute top-1/4 z-0">
        <h1 className="text-[250px] bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F7] to-[#8E8F92] text-whiteText font-semibold tracking-tighter">
          İnovasyon
        </h1>
      </div>
    </div>
  );
};

export default Home;
