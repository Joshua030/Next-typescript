import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "app/_components"
    );
    return config;
  },
  output: "standalone",
};

export default nextConfig;
