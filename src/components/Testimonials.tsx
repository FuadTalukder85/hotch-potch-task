import React from "react";
import Container from "./Container";
import Title from "./common/Title";
import pro01 from "../../public/images/pro01.png";
import pro02 from "../../public/images/pro02.png";
import pro03 from "../../public/images/pro03.png";
import pro04 from "../../public/images/pro04.png";
import pro05 from "../../public/images/pro05.png";
import pro06 from "../../public/images/pro06.png";
import pro07 from "../../public/images/pro07.png";
import pro08 from "../../public/images/pro08.png";
import twitter from "../../public/images/twitter.png";
import TestimonialsCard from "./common/TestimonialsCard";
const testimonials = [
  {
    name: "Darrell Steward",
    username: "@darrels",
    avatar: pro01,
    content:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtags: ["another"],
  },
  {
    name: "Guy Hawkins",
    username: "@jennywilson",
    avatar: pro05,
    content:
      "This is a top quality product. No need to think twice before making it live on web.",
    hashtags: ["make_it_fast"],
  },
  {
    name: "Leslie Alexander",
    username: "@lesslie",
    avatar: pro02,
    content:
      "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    hashtags: ["postcrafts"],
  },
  {
    name: "Marvin McKinney",
    username: "@jennywilson",
    avatar: pro06,
    content:
      "With Postcrafts, it's quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I'm all for the efficiency.",
    hashtags: ["dev", "tools"],
  },
  {
    name: "Jenny Wilson",
    username: "@jennywilson",
    avatar: pro03,
    content:
      "This is a top quality product. No need to think twice before making it live on web.",
    hashtags: ["make_it_fast"],
  },
  {
    name: "Annette Black",
    username: "@jennywilson",
    avatar: pro07,
    content:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtags: ["another"],
  },
  {
    name: "Kristin Watson",
    username: "@kristinwatson2",
    avatar: pro04,
    content:
      "Finally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    hashtags: ["postcrafts"],
  },

  {
    name: "Floyd Miles",
    username: "@jennywilson",
    avatar: pro08,
    content:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtags: ["postcrafts"],
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#171924] border-b border-[#252835] py-20 mt-32">
      <Container>
        <Title
          title={"What our customers say"}
          paragraph={
            "Read why thousands of marketers, writers, and entrepreneurs love us so much."
          }
        ></Title>
        <div
          className="columns-1 md:columns-4 mt-20"
          style={{
            columnGap: "24px",
          }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="mb-6">
              <TestimonialsCard
                reviewImg={item.avatar}
                name={item.name}
                userName={item.username}
                icon={twitter}
                content={item.content}
                tag={item.hashtags}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
