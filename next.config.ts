import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"], ///Make a high optimization of pictures.
  },
};

export default nextConfig;
