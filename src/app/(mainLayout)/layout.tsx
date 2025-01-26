import Container from "@/components/Container";
import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="bg-[#12141D] text-white">
      <Container>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default layout;
