import type { NextConfig } from "next";
const config: NextConfig = { output: "export", basePath: process.env.NODE_ENV === "production" ? "/arslan-gartenloewe" : "", images: { unoptimized: true }, trailingSlash: true };
export default config;
