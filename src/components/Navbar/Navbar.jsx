import React from "react";
import Logo from "../UI/Logo";
import { Link } from "react-router-dom";
import { TbPhoneCall } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  px-12 py-5 container mx-auto z-20">
      <Logo />
      <div className="flex items-center gap-x-6 text-whiteText">
        <Link className="font-semibold text-whiteText hover:text-zinc-300">
          Bizi Tanıyın
        </Link>
        <Link className="font-semibold text-whiteText hover:text-zinc-300">
          Faaliyet Alanları
        </Link>
        <Link className="bg-white hover:bg-[#202020] hover:border-grayBorder  border border-transparent hover:text-whiteText transition-colors duration-300 text-[#202020] px-4 py-2 rounded-xl font-semibold flex items-center gap-x-2">
          <TbPhoneCall size={19} />
          İletişim
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
