import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#12141D] text-white">
      {/* <Nav></Nav> */}
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
