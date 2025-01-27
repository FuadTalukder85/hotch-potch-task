// button primary
const BtnPrimary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="relative px-3 md:px-5 py-2 md:py-3 rounded-[5px] text-white overflow-hidden cursor-pointer group">
      <span className="absolute inset-0 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] transition-all duration-300 ease-out group-hover:opacity-0"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#5C7FFF] to-[#CB5CFF] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-active:opacity-0"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#0035F5] to-[#A600F5] opacity-0 transition-all duration-300 ease-out group-active:opacity-100"></span>
      <span className="relative z-10 text-sm md:text-[16px] font-medium">
        {children}
      </span>
    </button>
  );
};
// button outline
const BtnOutline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full border border-[#282A37] px-3 md:px-5 py-2 md:py-3 rounded-lg cursor-pointer group">
      <span className="absolute inset-0 bg-gradient-to-r from-[#5C7FFF] opacity-0 to-[#CB5CFF] transition-all duration-300 ease-out group-hover:opacity-100 rounded-lg"></span>
      <span className="relative z-10">{children}</span>
    </div>
  );
};
// backage button
const BtnPackage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full border border-[#12141D] px-3 md:px-5 py-2 md:py-3 rounded-lg cursor-pointer group">
      <span className="absolute inset-0 bg-gradient-to-r from-[#5C7FFF] opacity-0 to-[#CB5CFF] transition-all duration-300 ease-out group-hover:opacity-100 rounded-lg"></span>
      <span className="relative z-10">{children}</span>
    </div>
  );
};
// button full
const BtnFull: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full px-3 md:px-5 py-2 md:py-3 rounded-[5px] text-white overflow-hidden cursor-pointer group">
      <span className="absolute inset-0 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] transition-all duration-300 ease-out group-hover:opacity-0"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#5C7FFF] to-[#CB5CFF] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-active:opacity-0"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#0035F5] to-[#A600F5] opacity-0 transition-all duration-300 ease-out group-active:opacity-100"></span>
      <span className="relative z-10 text-left">{children}</span>
    </div>
  );
};

export { BtnPrimary, BtnOutline, BtnPackage, BtnFull };
