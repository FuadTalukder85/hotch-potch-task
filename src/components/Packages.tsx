"use client";
import React, { useState } from "react";
import Container from "./Container";
import Title from "./common/Title";
import { BtnFull, BtnPackage } from "./common/Button";

const Packages = () => {
  const [selectedCard, setSelectedCard] = useState("Basic Plan");

  const plans = [
    {
      name: "Starter Plan",
      price: "$29",
      details: [
        "10 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "1 Year Support",
      ],
    },
    {
      name: "Basic Plan",
      price: "$79",
      details: [
        "15 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "5 Year Support",
        "Free Custom Domain",
        "Basic Statistics",
      ],
    },
    {
      name: "Premium Plan",
      price: "$129",
      details: [
        "20 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "Unlimited Support",
        "Free Custom Domain",
        "Full Statistics",
      ],
    },
  ];

  return (
    <div className="py-10 md:py-20 p-3 md:p-0">
      <Container>
        <Title
          title={"Make the wise decision for your business"}
          paragraph={"Choose from our affordable 3 packages"}
        />
        <div className="max-w-5xl mx-auto mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="relative bg-[#282A37] rounded-2xl p-8">
              <p className="text-[#B7B8BB]">{plan.name}</p>
              <h1 className="mt-7 font-semibold text-5xl">
                {plan.price}
                <span className="font-normal text-lg">/month</span>
              </h1>
              <p className="mt-4 text-[#B7B8BB]">
                This package is suitable for teams 1-15 people.
              </p>
              <p className="mt-10 mb-5 font-bold text-[16px]">
                What’s included:
              </p>
              <ul className="text-[#B7B8BB] font-medium text-[16px] space-y-3 pb-24">
                {plan.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <div className="w-full absolute bottom-8 left-0 right-0 px-8">
                <div
                  onClick={() => setSelectedCard(plan.name)}
                  className="w-full text-center"
                >
                  {selectedCard === plan.name ? (
                    <BtnFull>Get Started</BtnFull>
                  ) : (
                    <BtnPackage>Get Started</BtnPackage>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Packages;
