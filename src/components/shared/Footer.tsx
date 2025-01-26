import Container from "../Container";

const company = ["About", "Features", "Works", "Career"];
const help = [
  "Customer Support",
  "Delivery Details",
  "Terms & Conditions",
  "Privacy Policy",
];
const resources = [
  "Free eBooks",
  "Development Tutorial",
  "How to - Blog",
  "Youtube Playlist",
];

const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between items-center bg-gradient-to-r from-[#2B59FF] from-10%  to-[#BB2BFF] to-90% px-12 py-8 rounded-[5px] mt-10">
        <h2 className="font-semibold text-3xl max-w-xl md:pr-20">
          It will help you improve your writing & bring ideas more c learly.
        </h2>
        <div>
          <button className="bg-white text-[#12141D] font-semibold text-[16px] px-5 py-4 rounded-[5px]">
            Start 14 Days Free Trial
          </button>
        </div>
      </div>
      <div className="flex justify-between py-24">
        <div>
          <p className="font-semibold text-[16px]">Company</p>
          <ul className="font-normal text-sm mt-7">
            {company?.map((item) => (
              <li key={item} className="pb-4 text-sm font-normal">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[16px]">Help</p>
          <ul className="font-normal text-sm mt-7">
            {help?.map((item) => (
              <li key={item} className="pb-4 text-sm font-normal">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[16px]">Resources</p>
          <ul className="font-normal text-sm mt-7">
            {resources?.map((item) => (
              <li key={item} className="pb-4 text-sm font-normal">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[16px]">Links</p>
          <ul className="font-normal text-sm mt-7">
            {resources?.map((item) => (
              <li key={item} className="pb-4 text-sm font-normal">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
