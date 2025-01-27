import React from "react";
import Container from "./Container";
import Title from "./common/Title";
import BtnOutline from "./common/BtnOutline";

const Packages = () => {
  return (
    <div className="py-10 md:py-20 p-3 md:p-0">
      <Container>
        <Title
          title={"Make the wise decision for your business"}
          paragraph={"Choose from our affordable 3 packages"}
        />
        <div className="max-w-5xl mx-auto mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* card 01 */}
          <div className="relative bg-[#282A37] rounded-2xl p-8">
            <p className="text-[#B7B8BB]">Starter Plan</p>
            <h1 className="mt-7 font-semibold text-5xl">
              $29<span className="font-normal text-lg">/month</span>
            </h1>
            <p className="mt-4 text-[#B7B8BB]">
              This package is suitable for teams 1-15 people.
            </p>
            <p className="mt-10 mb-5 font-bold text-[16px]">What’s included:</p>
            <ul className="text-[#B7B8BB] font-medium text-[16px] space-y-3 pb-24">
              <li>10 GB Dedicated Hosting Free</li>
              <li>Best for Developers, Freelancers</li>
              <li>1 Year Support</li>
            </ul>
            <div className="w-full absolute bottom-8 left-0 right-0 px-8">
              <BtnOutline>Get Started</BtnOutline>
            </div>
          </div>
          {/* card 02 */}
          <div className="relative bg-[#282A37] rounded-2xl p-8">
            <p className="text-[#B7B8BB]">Basic Plan</p>
            <h1 className="mt-7 font-semibold text-5xl">
              $79<span className="font-normal text-lg">/month</span>
            </h1>
            <p className="mt-4 text-[#B7B8BB]">
              This package is suitable for teams 1-15 people.
            </p>
            <p className="mt-10 mb-5 font-bold text-[16px]">What’s included:</p>
            <ul className="text-[#B7B8BB] font-medium text-[16px] space-y-3 pb-24">
              <li>15 GB Dedicated Hosting Free</li>
              <li>Best for Developers, Freelancers</li>
              <li>5 Year Support</li>
              <li>Free Custom Domain</li>
              <li>Basic Statistics</li>
            </ul>
            <div className="w-full absolute bottom-8 left-0 right-0 px-8">
              <BtnOutline>Get Started</BtnOutline>
            </div>
          </div>
          {/* card 03 */}
          <div className="relative bg-[#282A37] rounded-2xl p-8">
            <p className="text-[#B7B8BB]">Premium Plan</p>
            <h1 className="mt-7 font-semibold text-5xl">
              $129<span className="font-normal text-lg">/month</span>
            </h1>
            <p className="mt-4 text-[#B7B8BB]">
              This package is suitable for teams 1-15 people.
            </p>
            <p className="mt-10 mb-5 font-bold text-[16px]">What’s included:</p>
            <ul className="text-[#B7B8BB] font-medium text-[16px] space-y-3 pb-24">
              <li>20 GB Dedicated Hosting Free</li>
              <li>Best for Developers, Freelancers</li>
              <li>Unlimited Support</li>
              <li>Free Custom Domain</li>
              <li>Full Statistics</li>
            </ul>
            <div className="w-full absolute bottom-8 left-0 right-0 px-8">
              <BtnOutline>Get Started</BtnOutline>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Packages;
