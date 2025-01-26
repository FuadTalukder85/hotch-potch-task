const BtnPrimary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="relative px-5 py-3 rounded-[5px] text-white overflow-hidden group">
      <span className="absolute inset-0 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] transition-all duration-300 ease-out group-hover:opacity-0"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#5C7FFF] to-[#CB5CFF] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default BtnPrimary;
