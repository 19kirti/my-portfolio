import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL("https://i.pinimg.com/originals/c7/90/5b/c7905bf66eafd7ead7b40d5f3fac8e31.jpg")],
  },
}

export default nextConfig;
