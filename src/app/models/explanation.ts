import { StaticImageData } from "next/image";

export type ExplanationModel = {
    type: 'explanation',
    text: string;
    img_src: StaticImageData;
};