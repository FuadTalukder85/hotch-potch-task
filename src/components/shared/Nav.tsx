import React from "react";
import BtnPrimary from "../common/BtnPrimary";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
const data = ["Demos", "About", "Blog", "Pages", "Contact"];
const Nav = () => {
  return (
    <div className="flex justify-between py-5 font-medium text-[16px]">
      <div className="flex gap-14 items-center">
        <div>
          <Image src={logo} alt="logo" width={80} height={80}></Image>
        </div>
        <ul className="flex gap-12 items-center">
          {data?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="border border-[#FAFAFA] px-5 py-3 rounded-[5px]">
          Sign in
        </button>
        <BtnPrimary>Get Started Free</BtnPrimary>
      </div>
    </div>
  );
};

export default Nav;
