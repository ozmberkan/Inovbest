import React from "react";
import Logo from "../UI/Logo";
import { Link } from "react-router-dom";
import { TbPhoneCall } from "react-icons/tb";
import { IoSnow } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSnow } from "~/redux/snowSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { snow } = useSelector((state) => state.snow);

  const toggleSnow = () => {
    dispatch(setSnow(!snow));
  };

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
          <button
            onClick={toggleSnow}
            className="bg-[#202020] text-white p-2 rounded-full"
          >
            <IoSnow size={20} />
          </button>
          <Link className="bg-[#202020] flex items-center gap-x-2 hover:ring-2 ring-offset-2 ring-[#202020] border-grayBorder border-2 text-whiteText hover:border-zinc-700 transition-all duration-300 px-4 py-2 rounded-xl font-semibold">
            <TbPhoneCall size={19} />
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
