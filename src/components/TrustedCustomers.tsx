import Image from "next/image";
import logo01 from "../../public/images/logos/logo01.png";
import logo02 from "../../public/images/logos/logo02.png";
import logo03 from "../../public/images/logos/logo03.png";
import logo04 from "../../public/images/logos/logo04.png";
import logo05 from "../../public/images/logos/logo05.png";
import logo06 from "../../public/images/logos/logo06.png";
import logo07 from "../../public/images/logos/logo07.png";
import logo08 from "../../public/images/logos/logo08.png";
import Container from "./Container";
const logos = [logo01, logo02, logo03, logo04, logo05, logo06, logo07, logo08];

const TrustedCustomers = () => {
  return (
    <Container>
      <div className="mt-10 md:mt-24">
        <h3 className="text-center font-medium text-2xl">
          Trusted by nearly 5000+ paying customers
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20">
          {logos?.map((logo, index) => (
            <li key={index} className="flex justify-center">
              <Image
                src={logo}
                alt="logo01"
                width={150}
                height={150}
                className="opacity-50"
              ></Image>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default TrustedCustomers;
