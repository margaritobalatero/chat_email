/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "production"
    ? "./server-vercel.js"
    : undefined,

  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"]
};
