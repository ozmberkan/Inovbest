import React from "react";
import guleryuz from "~/assets/guleryuz.png";

import Slider from "react-slick";

const Customers = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container mx-auto flex flex-col items-start w-full text-white gap-4 py-[100px]">
      <h1 className="text-5xl font-semibold">İnovbesti Tercih Edenler</h1>
      <p className="text-neutral-500">
        İnovbest müşterileri arasında yer alarak, işletmelerin dijital dönüşüm
        dünyasına adım atın.
      </p>
      <div className="w-full mt-12">
        <Slider {...settings}>
          <div>
            <img src={guleryuz} className="w-44 outline-none " />
          </div>
          <div>
            <img src={guleryuz} className="w-44 outline-none" />
          </div>
          <div>
            <img src={guleryuz} className="w-44 outline-none" />
          </div>
          <div>
            <img src={guleryuz} className="w-44 outline-none" />
          </div>
          <div>
            <img src={guleryuz} className="w-44 outline-none" />
          </div>
          <div>
            <img src={guleryuz} className="w-44 outline-none" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
