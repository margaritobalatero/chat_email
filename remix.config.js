/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "production"
    ? "./server-vercel.js"
    : undefined,

  // Where your Remix app code lives
  appDirectory: "app",

  // Ignore hidden files
  ignoredRouteFiles: ["**/.*"]
};
