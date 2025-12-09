/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildPath: "build/index.js",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  ignoredRouteFiles: ["**/.*"],
  server: "./server-vercel.js",
  serverModuleFormat: "esm",
  serverPlatform: "node",
};
