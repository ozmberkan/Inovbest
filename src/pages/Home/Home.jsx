import React from "react";
import Hero from "~/components/Hero/Hero";
import { TbBrandSpeedtest, TbShieldChevron } from "react-icons/tb";
import { MdDynamicFeed } from "react-icons/md";

const Home = () => {
  return (
    <div className=" flex justify-start items-start flex-grow flex-col ">
      <Hero />
      <div className="w-full  p-5 grid grid-cols-3 gap-5 container mx-auto ">
        <div className="border border-grayBorder bg-[#202020] text-whiteText p-5 gap-5 flex flex-col items-start justify-start rounded-xl relative overflow-hidden">
          <span className="absolute -top-12 -left-24 rotate-12 z-0 opacity-5">
            <TbShieldChevron size={400} />
          </span>
          <div className="flex flex-col gap-5 z-10">
            <h1 className="font-semibold text-xl">Güvenilir</h1>
            <p className="text-neutral-600 w-full ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
              aliquam! Lorem ipsum dolor sit,
            </p>
            <div className="w-full flex justify-end items-center ">
              <div className="p-3 rounded-md border border-grayBorder text-whiteText">
                <TbShieldChevron />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-grayBorder bg-[#202020] text-whiteText p-5 gap-5 flex flex-col items-start justify-start rounded-xl relative overflow-hidden">
          <span className="absolute -top-12 -left-24 rotate-12 z-0 opacity-5">
            <TbBrandSpeedtest size={400} />
          </span>
          <div className="flex flex-col gap-5 z-10">
            <h1 className="font-semibold text-xl">Hızlı</h1>
            <p className="text-neutral-600 w-full ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
              aliquam! Lorem ipsum dolor sit,
            </p>
            <div className="w-full flex justify-end items-center ">
              <div className="p-3 rounded-md border border-grayBorder text-whiteText">
                <TbBrandSpeedtest />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-grayBorder bg-[#202020] text-whiteText p-5 gap-5 flex flex-col items-start justify-start rounded-xl relative overflow-hidden">
          <span className="absolute -top-12 -left-24 rotate-12 z-0 opacity-5">
            <MdDynamicFeed size={400} />
          </span>
          <div className="flex flex-col gap-5 z-10">
            <h1 className="font-semibold text-xl">Dinamik</h1>
            <p className="text-neutral-600 w-full ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
              aliquam! Lorem ipsum dolor sit,
            </p>
            <div className="w-full flex justify-end items-center ">
              <div className="p-3 rounded-md border border-grayBorder text-whiteText">
                <MdDynamicFeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
