import { StaticImageData } from "next/image";

export type ExplanationModel = {
  type: "explanation";
  text: string;
  second_text?: string;
  third_text?: string;
  img_src?: StaticImageData;
  second_img_src?: StaticImageData;
};
