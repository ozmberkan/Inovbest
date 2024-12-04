import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import homeShape from "~/assets/homeshape.svg";
import homeShape2 from "~/assets/homeshape2.svg";

const Hero = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="w-full flex flex-col gap-4 justify-start items-center z-20 h-screen bg-homeBg bg-top bg-cover relative overflow-hidden">
      <div ref={constraintsRef} className="w-full h-full absolute top-0 left-0">
        <motion.img
          drag
          dragConstraints={constraintsRef}
          src={homeShape}
          initial={{ opacity: 0, x: -100, rotate: 45 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-24 top-80 cursor-grab max-w-32"
        />
        <motion.img
          drag
          dragConstraints={constraintsRef}
          src={homeShape2}
          initial={{ opacity: 0, x: 100, rotate: 45 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          className="absolute right-12 top-12 cursor-grab max-w-32"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center items-center flex-col"
      >
        <h1 className="text-[100px] bg-clip-text text-transparent bg-gradient-to-r from-[#000] to-[#7c7c7c] font-semibold tracking-tighter mt-24">
          {"< İşletmeler için en iyi hizmet />"}
        </h1>
        <p className="font-semibold text-[#8e8f92] text-lg w-1/2 text-center">
          Her müşteri, bizim için yeni bir hikaye, her proje ise bu hikayenin
          bir parçasıdır. Gücümüzü sadece teknolojiden değil, aynı zamanda hayal
          gücünden alıyoruz. Birlikte çalışarak daha akıllı, daha hızlı ve daha
          sürdürülebilir bir dünya yaratabileceğimize inanıyoruz.
        </p>
        <div className="flex justify-between items-center gap-x-5 mt-5">
          <Link className="bg-[#202020] hover:ring-2 ring-offset-2 ring-[#202020] border-grayBorder border-2 text-whiteText hover:border-zinc-700 transition-all duration-300 px-4 py-2 rounded-xl font-semibold">
            İletişim
          </Link>
          <Link className="bg-[#202020] hover:ring-2 ring-offset-2 ring-[#202020] border-grayBorder border-2 text-whiteText hover:border-zinc-700 transition-all duration-300 px-4 py-2 rounded-xl font-semibold">
            Bizi Tanıyın
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
