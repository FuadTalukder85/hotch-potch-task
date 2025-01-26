import { StaticImageData } from "next/image";

export type TTestimonials = {
  reviewImg: string | StaticImageData;
  name: string;
  userName: string;
  icon: string | StaticImageData;
  content: string;
  tag: string;
};
export type TTitle = {
  title: string;
  paragraph: string;
};
export type TCardtools = {
  toolsImg: string | StaticImageData;
  title: string;
  paragraph: string;
};
