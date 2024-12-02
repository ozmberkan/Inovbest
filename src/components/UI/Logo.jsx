import React from "react";
import { Link } from "react-router-dom";
import LogoSVG from "~/assets/inovbest.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoSVG} />
    </Link>
  );
};

export default Logo;
