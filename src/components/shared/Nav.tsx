"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Container from "../Container";
import { BtnPrimary } from "../common/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const data = ["Demos", "About", "Blog", "Pages", "Contact"];

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container>
      {/* Desktop menu */}
      <div className="hidden md:flex justify-between items-center md:py-5 font-medium text-[16px]">
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
          <button className="border border-[#252835] px-3 md:px-5 py-2 md:py-3 rounded-[5px]">
            Sign in
          </button>
          <BtnPrimary>Get Started Free</BtnPrimary>
        </div>
      </div>

      {/* Responsive menu */}
      <div className="md:hidden flex justify-between items-center p-3">
        <div
          className="bg-[#282A37] p-2 rounded-md text-2xl cursor-pointer hover:bg-[#2B59FF]"
          onClick={toggleDrawer}
        >
          <AiOutlineMenuUnfold />
        </div>
        <div>
          <Image src={logo} alt="logo" width={80} height={80}></Image>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#282A37] text-white p-3 z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center pb-2 mb-8 border-b border-[#12141D]">
          <div className="flex gap-2">
            <button className="border border-[#12141D] px-3 md:px-5 py-2 md:py-3 rounded-[5px] hover:bg-[#2B59FF]">
              Sign in
            </button>
            <BtnPrimary>Get Started Free</BtnPrimary>
          </div>
          <div
            className="text-2xl cursor-pointer border border-[#12141D] p-1 rounded-[5px] hover:bg-[#2B59FF]"
            onClick={toggleDrawer}
          >
            <IoClose />
          </div>
        </div>
        <ul className="space-y-4">
          {data?.map((item) => (
            <li key={item} className="border-b border-[#12141D] pb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-40" onClick={toggleDrawer}></div>
      )}
    </Container>
  );
};

export default Nav;
