import React from "react";
import Logo from "../UI/Logo";
import { Link } from "react-router-dom";
import { TbPhoneCall } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center  px-12 py-5 container mx-auto z-40 ">
        <Logo />
        <div className="flex items-center gap-x-6 text-whiteText">
          <Link className="font-semibold text-grayBorder hover:text-zinc-500">
            Bizi Tanıyın
          </Link>
          <Link className="font-semibold text-grayBorder hover:text-zinc-500">
            Faaliyet Alanları
          </Link>
          <Link className="hover:bg-[#323232] bg-[#202020] border-grayBorder  text-whiteText transition-colors duration-300 px-4 py-2 rounded-xl font-semibold flex items-center gap-x-2">
            <TbPhoneCall size={19} />
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
