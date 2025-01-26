import Image from "next/image";
import React from "react";

const CardTools = ({ toolsImg, title, paragraph }) => {
  return (
    <div>
      <div className="flex gap-4 bg-[#282A37] px-6 py-7 rounded-[10px]">
        <div>
          <Image src={toolsImg} alt="toolsImg" width={35} height={35}></Image>
        </div>
        <div>
          <p className="text-[16px] font-semibold">{title}</p>
          <p className="text-sm font-normal text-[#B7B8BB]">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTools;
