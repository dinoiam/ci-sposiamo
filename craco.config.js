const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@sections": path.resolve(__dirname, "src/sections"),
      "@svg": path.resolve(__dirname, "src/svg"),
      "@images": path.resolve(__dirname, "src/images"),
    },
  },
};
