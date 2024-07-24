import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: string;
  images: StaticImageData;
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
