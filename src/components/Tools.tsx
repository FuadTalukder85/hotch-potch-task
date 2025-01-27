import Title from "./common/Title";
import CardTools from "./common/CardTools";
import tools01 from "../../public/images/tool01.png";
import tools02 from "../../public/images/tool02.png";
import tools03 from "../../public/images/tool03.png";
import tools04 from "../../public/images/tool04.png";
import Container from "./Container";

const toolsData = [
  {
    id: 1,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool",
    icon: tools01,
  },
  {
    id: 2,
    title: "Blog Intros",
    description: "Generate a paragraph of blog content using Blog Intros tool",
    icon: tools02,
  },
  {
    id: 3,
    title: "Blog Outline",
    description: "Need an attention-grabbing headline for your article?",
    icon: tools03,
  },
  {
    id: 4,
    title: "Blog Conclusions",
    description: "Write a better conclusions with AI writing tool",
    icon: tools01,
  },
  {
    id: 5,
    title: "Content Rewriter",
    description: "Get AI writer to rewrite your sentence in a different way",
    icon: tools04,
  },
  {
    id: 6,
    title: "Product Description",
    description: "Need an attention-grabbing headline for your article?",
    icon: tools02,
  },
  {
    id: 7,
    title: "PAS Copywriting Formula",
    description: "Get AI writer to rewrite your sentence in a different way",
    icon: tools03,
  },
  {
    id: 8,
    title: "Company About Us",
    description: "Write a better blog title with our AI tool",
    icon: tools01,
  },
];

const Tools = () => {
  return (
    <div className="border-b border-[#252835]">
      <Container>
        <div className="mt-10 md:mt-36 p-3 md:p-0">
          <Title
            title={"54 exciting writing tools"}
            paragraph={
              "AI engines take information from various sources and read them like a human would do."
            }
          ></Title>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14">
            {toolsData?.map((item) => (
              <CardTools
                key={item.id}
                toolsImg={item.icon}
                title={item.title}
                paragraph={item.description}
              ></CardTools>
            ))}
          </div>
          <div className="text-center">
            <button className="text-[16px] font-semibold mx-auto pt-8 md:pt-14 pb-4 md:pb-24">
              See all 54 available tools
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
