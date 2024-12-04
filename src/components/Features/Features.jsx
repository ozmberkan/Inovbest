import React from "react";
import { TbShieldFilled, TbHelpCircleFilled } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiSpeedometerFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="container mx-auto flex flex-col items-start w-full text-white gap-4 py-5">
      <h1 className="text-5xl font-semibold">Neden Inovbest?</h1>
      <p className="text-neutral-500">
        İnovbest, işletmelerin dijital dönüşüm süreçlerinde ihtiyaç duyduğu tüm
        hizmetleri bir arada sunar. İşletmelerin ihtiyaçlarına özel çözümler
        üreterek, işletmelerin dijital dönüşüm süreçlerinde en iyi hizmeti
        sunmayı hedefler.
      </p>
      <div className="w-full grid grid-cols-3 gap-5">
        <div className="border border-neutral-600 rounded-xl p-5 flex items-start flex-col gap-2">
          <span className="rounded-full p-2 bg-neutral-700 flex items-center gap-x-2 justify-center">
            <RiVerifiedBadgeFill size={20} />
          </span>
          <h2 className="text-lg font-semibold">Kaliteli Hizmet</h2>
          <p className="text-neutral-500">
            İnovbest, işletmelerin dijital dönüşüm süreçlerinde ihtiyaç duyduğu
            tüm hizmetleri bir arada sunar.
          </p>
        </div>
        <div className="border border-neutral-600 rounded-xl p-5 flex items-start flex-col gap-2">
          <span className="rounded-full p-2 bg-neutral-700 flex items-center gap-x-2 justify-center">
            <TbShieldFilled size={20} />
          </span>
          <h2 className="text-lg font-semibold">Güvenilir Hizmet</h2>
          <p className="text-neutral-500">
            İnovbest, güvenilir hizmet anlayışı ile işletmelerin dijital dönüşüm
            süreçlerinde ihtiyaç duyduğu tüm hizmetleri bir arada sunar.
          </p>
        </div>
        <div className="border border-neutral-600 rounded-xl p-5 flex items-start flex-col gap-2">
          <span className="rounded-full p-2 bg-neutral-700 flex items-center gap-x-2 justify-center">
            <PiSpeedometerFill size={20} />
          </span>
          <h2 className="text-lg font-semibold">Hızlı Hizmet</h2>
          <p className="text-neutral-500">
            İnovbest, hızlı hizmet anlayışı ile işletmelerin dijital dönüşüm
            süreçlerinde ihtiyaç duyduğu tüm hizmetleri bir arada sunar.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-3">
        <Link className="bg-whiteText text-[#202020] px-4 py-2 rounded-xl font-semibold">
          Daha fazla
        </Link>
      </div>
    </div>
  );
};

export default Features;
