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
    <div className="flex justify-between">
      <div>
        <h3 className="font-semibold text-[16px]">Company</h3>
        <ul className="font-normal text-sm mt-7">
          {company?.map((item) => (
            <li key={item} className="pb-4 text-sm font-normal">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-[16px]">Help</h3>
        <ul className="font-normal text-sm mt-7">
          {help?.map((item) => (
            <li key={item} className="pb-4 text-sm font-normal">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-[16px]">Resources</h3>
        <ul className="font-normal text-sm mt-7">
          {resources?.map((item) => (
            <li key={item} className="pb-4 text-sm font-normal">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-[16px]">Links</h3>
        <ul className="font-normal text-sm mt-7">
          {resources?.map((item) => (
            <li key={item} className="pb-4 text-sm font-normal">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
