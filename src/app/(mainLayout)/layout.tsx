import Container from "@/components/Container";
import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import React from "react";

const layout = ({ children }) => {
  return (
    <Container>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </Container>
  );
};

export default layout;
