/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

import componentTagger from "@acebuilder/component-tagger";

const withTagger = componentTagger();

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(withTagger(nextConfig));
