import React, { useEffect } from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandX,
  TbBrandYoutube,
  TbClock,
  TbLayout,
} from "react-icons/tb";
import { FaHandshakeAngle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMotionValue, motion, animate, useTransform } from "framer-motion";

const We = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 3 });
    return () => controls.stop();
  }, []);

  return (
    <div className="flex-grow container mx-auto p-8 flex-col flex gap-6">
      <h1 className="text-white text-5xl font-semibold">Bizi tanıyın</h1>
      <p className="text-xl text-white">
        Biz, yenilikçi fikirlerle teknolojiyi birleştirerek çözümler üreten bir
        teknoloji yazılım şirketiyiz. Henüz yolculuğumuzun başındayız ve modern
        yazılım teknolojilerini kullanarak, kullanıcı dostu ve etkili çözümler
        geliştirmek için tutkuyla çalışıyoruz. Misyonumuz, dijital dünyada fark
        yaratacak projeler üretmek ve müşterilerimize en iyi hizmeti sunmaktır.
      </p>

      <hr className="w-full h-px border-neutral-700" />

      <h1 className="text-white text-5xl font-semibold">
        Güveniliriz neden mi?
      </h1>
      <div className="w-full grid grid-cols-3  h-[200px] gap-5  ">
        <span className="text-white gap-4  text-2xl font-bold overflow-hidden relative border-2 rounded-xl border-neutral-700 flex-col w-full h-full flex justify-center items-center">
          <motion.span className="text-5xl">{rounded}</motion.span> Proje
          <TbLayout
            className="absolute -top-10 -left-10 rotate-12 opacity-10"
            size={200}
          />
        </span>
        <span className="text-white gap-4  text-2xl font-bold overflow-hidden relative border-2 rounded-xl border-neutral-700 flex-col w-full h-full flex justify-center items-center">
          <motion.span className="text-5xl">{rounded}</motion.span> Memnuniyet
          <FaHandshakeAngle
            className="absolute -top-10 -left-10 rotate-12 opacity-10"
            size={200}
          />
        </span>
        <span className="text-white gap-4  text-2xl font-bold overflow-hidden relative border-2 rounded-xl border-neutral-700 flex-col w-full h-full flex justify-center items-center">
          <motion.span className="text-5xl">{rounded}</motion.span> Yıllık
          Deneyim
          <TbClock
            className="absolute -top-10 -left-10 rotate-12 opacity-10"
            size={200}
          />
        </span>
      </div>

      {/* <div className="flex items-center justify-start gap-x-2 mt-2">
        <Link className="hover:bg-white/10 p-2 rounded-md transition-all duration-300 border border-transparent hover:border-neutral-700 hover:scale-105   ">
          <TbBrandInstagram size={30} className="text-white   " />
        </Link>
        <Link className="hover:bg-white/10 p-2 rounded-md transition-all duration-300 border border-transparent hover:border-neutral-700 hover:scale-105   ">
          <TbBrandX size={30} className="text-white   " />
        </Link>
        <Link className="hover:bg-white/10 p-2 rounded-md transition-all duration-300 border border-transparent  hover:border-neutral-700  hover:scale-105 ">
          <TbBrandFacebook size={30} className="text-white   " />
        </Link>
        <Link className="hover:bg-white/10 p-2 rounded-md transition-all duration-300 border border-transparent  hover:border-neutral-700 hover:scale-105  ">
          <TbBrandYoutube size={30} className="text-white   " />
        </Link>
      </div> */}
    </div>
  );
};

export default We;
