import React, { useRef } from "react";
import { TbMessage, TbPhone } from "react-icons/tb";
import { motion, useInView } from "framer-motion";

import contact from "~/assets/contact.svg";
import envelope from "~/assets/envelope.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <form
      ref={ref}
      className="container mx-auto flex flex-col items-center w-full text-white gap-4 py-[100px] relative  "
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, type: "spring", stiffness: 150, delay: 0.5 }}
        className="absolute -left-12 "
      >
        <img src={contact} className="w-64 drop-shadow-4xl  -rotate-12" />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, type: "spring", stiffness: 150, delay: 0.5 }}
        className="absolute -right-12"
      >
        <img src={envelope} className="w-64 drop-shadow-4xl  rotate-12" />
      </motion.div>
      <h1 className="text-5xl font-semibold">Bizimle İletişime Geç</h1>
      <p className="text-neutral-500">
        Aşağıdaki formu doldurarak bizlerle iletişime geçin.
      </p>
      <div className="grid grid-cols-2 gap-5 w-1/2 mt-5">
        <input
          type="text"
          placeholder="İsim Soyisim"
          className="px-4 py-2 placeholder:text-neutral-700 rounded-md bg-transparent border border-neutral-600 outline-none"
        />
        <input
          type="text"
          placeholder="E-Posta"
          className="px-4 py-2 placeholder:text-neutral-700 rounded-md bg-transparent border border-neutral-600 outline-none"
        />
        <input
          type="text"
          placeholder="Telefon"
          className="col-span-2 px-4 py-2 placeholder:text-neutral-700 rounded-md bg-transparent border border-neutral-600 outline-none"
        />
        <textarea
          className="col-span-2 focus-within:h-[200px] duration-500 transition-all h-[100px] placeholder:text-neutral-700 px-4 py-2 rounded-md bg-transparent border border-neutral-600 outline-none"
          placeholder="Mesajınız"
        />
        <div className="flex gap-x-2 items-center">
          <input
            type="checkbox"
            id=""
            className="accent-slate-50 w-5 h-5 checked:accent-[#202020] border-none outline-none"
          />
          <Link className="hover:underline">
            Aydınlatma metnini okudum, kabul ediyorum.
          </Link>
        </div>
        <button className="bg-whiteText col-span-2 hover:bg-neutral-200 transition-colors text-[#202020] px-4 py-2 rounded-xl w-full">
          Gönder
        </button>
      </div>
    </form>
  );
};

export default Contact;
