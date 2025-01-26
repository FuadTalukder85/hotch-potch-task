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
      <div className="flex justify-between mt-20">
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
