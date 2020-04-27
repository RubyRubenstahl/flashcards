const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
var nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "src/index.js",
    path: path.resolve(__dirname, "dist")
  },
  target: "node",
  plugins: [
    new CopyPlugin([
      { from: "config", to: "config" },
      { from: "package.json", to: "package.json" },
      { from: "ecosystem.config.js", to: "ecosystem.config.js" }
    ])
  ],
  externals: [nodeExternals()]
};
