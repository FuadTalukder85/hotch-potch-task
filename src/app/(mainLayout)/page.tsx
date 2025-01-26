import Banner from "@/components/Banner";
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
      <Testimonials></Testimonials>
      <Packages></Packages>
    </div>
  );
};

export default page;
