import React from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandX,
  TbBrandYoutube,
} from "react-icons/tb";
import { Link } from "react-router-dom";

const We = () => {
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
      <div className="flex items-center justify-start gap-x-2 mt-2">
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
      </div>
    </div>
  );
};

export default We;
