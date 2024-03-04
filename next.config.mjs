/** @type {import('next').NextConfig} */
import { withObvious } from "@itsobvioustech/next-plugin";

const plugins = [withObvious()];
let nextConfig = {
  transpilePackages: ["@itsobvioustech/embed"], // Optional

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

for (const plugin of plugins) {
  nextConfig = {
    ...nextConfig,
    ...plugin(nextConfig),
  };
}


export default nextConfig;
