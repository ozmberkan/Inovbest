import React from "react";
import lightLogo from "~/assets/inovbestLight.svg";

const Footer = () => {
  return (
    <div className="w-full border-t p-5 border-neutral-700 ">
      <div className="container mx-auto h-full w-full flex flex-col gap-5">
        {/* Header */}
        <div className="flex justify-start items-start flex-col gap-4 py-5 ">
          <h1 className="font-bold text-2xl text-white">
            İnovasyonu Keşfedin.
          </h1>
          <div className="flex gap-x-2 items-center ">
            <button className="bg-white text-[#202020] border font-medium rounded-md p-2 text-sm">
              Yeni Haberler
            </button>
            <button className="  border border-neutral-600 text-neutral-400 font-medium rounded-md p-2 text-sm">
              İletişime geç
            </button>
          </div>
        </div>
        {/* Section */}
        <div className="w-full grid grid-cols-4 gap-5 py-5">
          <div className="flex flex-col">
            <h1 className="uppercase text-base mb-3 font-semibold text-white">
              Hakkımızda
            </h1>
            <ul className="flex flex-col text-sm gap-y-2 text-zinc-300">
              <li>Bizi Tanıyın</li>
              <li>Müşterilerimiz</li>
              <li>Vizyonumuz</li>
              <li>Misyonumuz</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="uppercase text-base mb-3 font-semibold text-white">
              Politikalar
            </h1>
            <ul className="flex flex-col text-sm gap-y-2 text-zinc-300">
              <li>Çerez Politikası</li>
              <li>Gizlilik Politikası</li>
              <li>Kişisel Verilerin Korunması</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase text-base mb-3 font-semibold text-white">
              Sosyal
            </h1>
            <ul className="flex flex-col text-sm gap-y-2 text-zinc-300">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase text-base mb-3 font-semibold text-white">
              İletişim
            </h1>
            <ul className="flex flex-col text-sm gap-y-2 text-zinc-300">
              <li>Şehitler Mah. Kamil Su Cad. No: 5/7A Şehzadeler MANİSA</li>
              <li>0236 238 31 01</li>
            </ul>
          </div>
        </div>
        {/* Footer */}
        <div className="w-full flex justify-between items-center py-6 border-t border-grayBorder">
          <img src={lightLogo} />
          <p className="text-white font-medium text-sm">
            &copy; 2024 İnovbest™. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
