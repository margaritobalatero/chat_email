/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildPath: "build/index.js",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  ignoredRouteFiles: ["**/.*"],
  server: process.env.NODE_ENV === "production"
  ? "./server-vercel.js"
  : undefined,

};
