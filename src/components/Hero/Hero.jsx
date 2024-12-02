import React from "react";
import { Link } from "react-router-dom";
import { BackgroundBeams } from "~/components/UI/Background";

const Hero = () => {
  return (
    <div>
      <BackgroundBeams />
      <div className=" w-full flex flex-col gap-5 justify-start items-center z-20 mt-32 min-h-[700px] ">
        <h1 className="text-[100px] bg-clip-text text-transparent bg-gradient-to-r from-[#F6F7F7] to-[#8E8F92] text-whiteText font-semibold tracking-tighter">
          {"< İşletmeler için en iyi hizmet. />"}
        </h1>
        <p className="font-semibold text-[#8e8f92] text-lg w-1/2 text-center">
          Her müşteri, bizim için yeni bir hikaye, her proje ise bu hikayenin
          bir parçasıdır. Gücümüzü sadece teknolojiden değil, aynı zamanda hayal
          gücünden alıyoruz. Birlikte çalışarak daha akıllı, daha hızlı ve daha
          sürdürülebilir bir dünya yaratabileceğimize inanıyoruz.
        </p>
        <div className="flex justify-between items-center gap-x-5 mt-5">
          <Link className="bg-[#202020] border-grayBorder border-2 text-whiteText hover:border-zinc-700 hover:transition-colors duration-300 px-4 py-2 rounded-xl font-semibold">
            İletişim
          </Link>
          <Link className="bg-[#202020] border-grayBorder border-2 text-whiteText hover:border-zinc-700 hover:transition-colors duration-300 px-4 py-2 rounded-xl font-semibold">
            Bizi Tanıyın
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
