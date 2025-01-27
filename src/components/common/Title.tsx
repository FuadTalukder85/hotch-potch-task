import { TTitle } from "../types/Types";

const Title = ({ title, paragraph }: TTitle) => {
  return (
    <div className="max-w-[580px] mx-auto text-center">
      <h1 className="text-3xl md:text-[42px] font-semibold  md:leading-[50px]">
        {title}
      </h1>
      <p className="text-lg font-normal text-[#B7B8BB] mt-5 md:px-20">
        {paragraph}
      </p>
    </div>
  );
};

export default Title;
