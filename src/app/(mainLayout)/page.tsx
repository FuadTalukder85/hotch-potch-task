import Banner from "@/components/Banner";
import Tools from "@/components/Tools";
import TrustedCustomers from "@/components/TrustedCustomers";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <TrustedCustomers></TrustedCustomers>
      <Tools></Tools>
    </div>
  );
};

export default page;
