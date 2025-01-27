import Image from "next/image";
import icon from "../../public/images/icon.png";
import { BtnPrimary } from "./common/Button";
import { IoIosPlayCircle } from "react-icons/io";

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

        <button className="relative overflow-hidden cursor-pointer group mt-6">
          <span className="absolute inset-0 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 rounded-md"></span>
          <span className="absolute inset-[1px] bg-[#12141D] py-2 rounded-md"></span>
          <span className="relative flex items-center justify-center gap-2 text-[16px] font-semibold px-10 py-2">
            <span className="flex items-center justify-center w-3 h-3 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-[#2B59FF] group-hover:to-[#BB2BFF] transition-all duration-300 ease-out">
              <Image src={icon} alt="icon" width={6} height={6} />
            </span>
            <span className="text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-[#2B59FF] group-hover:to-[#BB2BFF] transition-all duration-300 ease-out">
              Watch A Demo
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
