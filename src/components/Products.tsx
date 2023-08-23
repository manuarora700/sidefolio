import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";

export const Products = () => {
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <div className="grid grid-cols-1  gap-10">
        {products.map((product: Product, idx: number) => (
          <Link
            href={product.href}
            key={product.href}
            className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
          >
            <Image
              src={product.thumbnail}
              alt="thumbnail"
              height="200"
              width="200"
              className="rounded-md"
            />
            <div className="flex flex-col justify-between">
              <div>
                <Heading
                  as="h4"
                  className="font-black text-lg md:text-lg lg:text-lg "
                >
                  {product.title}
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                  {product.description}
                </Paragraph>
              </div>
              <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                {product.stack?.map((stack: string) => (
                  <span
                    key={stack}
                    className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
