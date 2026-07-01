import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/rajluckgame", destination: "/rajluck-game", permanent: true },
      { source: "/rajluckgamers", destination: "/rajluck-gamers", permanent: true },
      { source: "/rajluckapk", destination: "/rajluck-apk", permanent: true },
      { source: "/rajluckgameapk", destination: "/rajluck-game-apk", permanent: true },
      { source: "/rajluckgameapkdownload", destination: "/raj-luck-game-apk-download", permanent: true },
      { source: "/rajluckapkdownload", destination: "/rajluck-apk-download", permanent: true },
    ];
  },
};

export default nextConfig;
