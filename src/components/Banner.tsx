import Image from "next/image";
import icon from "../../public/images/icon.png";
import BtnPrimary from "./common/BtnPrimary";

const Banner = () => {
  return (
    <div className="border-b border-[#252835] text-center p-3 md:py-32">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl md:text-6xl font-medium">
          Write better content for your
        </h1>
        <h1 className="relative text-3xl md:text-6xl font-medium inline-block text-transparent bg-gradient-to-r from-[#FC6739] from-10% to-[#FFC947] to-90% bg-clip-text">
          Facebook Ads
          <span className="absolute left-0 bottom-0 h-1 md:h-[6px] w-full bg-gradient-to-r from-[#FC6739] to-[#FFC947]"></span>
        </h1>
        <p className="text-lg font-normal text-[#B7B8BB] mt-10">
          Artificial intelligence writting tool helps you create blogs, social
          media websites and much more.
        </p>
        <div className="mt-10">
          <BtnPrimary>Start 14 Days Free Trial</BtnPrimary>
        </div>
        <button className="flex gap-2 items-center mx-auto mt-6">
          <Image src={icon} alt="icon" width={15} height={15}></Image> Watch A
          Demo
        </button>
      </div>
    </div>
  );
};

export default Banner;
