import Image from "next/image";
import { TTestimonials } from "../types/Types";
const TestimonialsCard = ({
  reviewImg,
  name,
  userName,
  icon,
  content,
  tag,
}: TTestimonials) => {
  return (
    <div className="bg-white text-[#12141D] ps-5 pr-7 py-6 rounded-[5px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div>
            <Image
              src={reviewImg}
              alt="reviewImg"
              width={50}
              height={50}
            ></Image>
          </div>
          <div>
            <p className="text-[16px] font-semibold">{name}</p>
            <p className="text-[#B7B8BB] text-sm font-normal">{userName}</p>
          </div>
        </div>
        <span className="flex justify-end">
          <Image src={icon} alt="icon" width={20} height={20}></Image>
        </span>
      </div>
      <p className="text-[16px] font-normal mt-6">{content}</p>
      <p className="text-sky-500 text-[16px] font-normal">#{tag}</p>
    </div>
  );
};

export default TestimonialsCard;
