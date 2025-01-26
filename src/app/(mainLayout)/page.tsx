import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Tools from "@/components/Tools";
import TrustedCustomers from "@/components/TrustedCustomers";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <TrustedCustomers></TrustedCustomers>
      <Tools></Tools>
      <Blog></Blog>
      <Testimonials></Testimonials>
      <Packages></Packages>
    </div>
  );
};

export default page;
