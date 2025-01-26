import Banner from "@/components/Banner";
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
    </div>
  );
};

export default page;
