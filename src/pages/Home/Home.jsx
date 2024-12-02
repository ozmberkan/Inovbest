import React from "react";
import { Link } from "react-router-dom";
import { BackgroundBeams } from "~/components/UI/Background";

const Home = () => {
  return (
    <div className=" flex justify-start items-start py-5 flex-grow ">
      <BackgroundBeams />
      <div className=" w-full flex flex-col gap-5 justify-center items-center z-20 mt-24">
        <h1 className="text-[100px] bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F7] to-[#8E8F92] text-whiteText font-semibold tracking-tighter">
          İşletmeler için en iyi hizmet
        </h1>
        <p className="font-semibold text-[#8e8f92] text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          laudantium eius veritatis dignissimos excepturi! Quis tempora
          architecto harum quisquam quae.
        </p>
        <div className="flex justify-between items-center gap-x-5 mt-5">
          <Link className="bg-whiteText text-[#202020] px-4 py-2 rounded-xl font-semibold">
            İletişim
          </Link>
          <Link className="bg-whiteText text-[#202020] px-4 py-2 rounded-xl font-semibold">
            Bizi Tanıyın
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
