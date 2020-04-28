const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
var nodeExternals = require("webpack-node-externals");

console.log(`Yes, I'm actually running the new webpack config`)
console.log(`CopyPlugin exists: ${!!CopyPlugin}`);
console.log(`nodeExternals exists: ${!!nodeExternals}`);

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "src/index.js",
    path: path.resolve(__dirname, "dist")
  },
  target: "node",
  plugins: [
    new CopyPlugin([
      { from: "config/**", to: "config/" },
      { from: "package.json" },
      { from: "ecosystem.config.js"}
    ])
  ],
  externals: [nodeExternals()]
};
