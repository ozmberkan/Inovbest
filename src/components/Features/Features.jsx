import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { features } from "~/data/data";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="container mx-auto flex flex-col items-start w-full text-white gap-4 py-5"
    >
      <h1 className="text-5xl font-semibold">Neden İnovbest?</h1>
      <p className="text-neutral-500">
        İnovbest, işletmelerin dijital dönüşüm süreçlerinde ihtiyaç duyduğu tüm
        hizmetleri bir arada sunar. İşletmelerin ihtiyaçlarına özel çözümler
        üreterek, işletmelerin dijital dönüşüm süreçlerinde en iyi hizmeti
        sunmayı hedefler.
      </p>
      <div className="w-full grid grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
            }}
            className="border border-neutral-600 rounded-xl p-5 flex items-start flex-col gap-2"
          >
            <span className="rounded-full p-2 bg-neutral-700 flex items-center gap-x-2 justify-center">
              <feature.icon />
            </span>
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="text-neutral-500">{feature.description}</p>
          </motion.div>
        ))}
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
