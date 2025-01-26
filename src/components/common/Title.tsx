const Title = ({ title, paragrapg }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-[42px] font-semibold">{title}</h1>
      <p className="text-lg font-normal text-[#B7B8BB] mt-5 px-20">
        {paragrapg}
      </p>
    </div>
  );
};

export default Title;
