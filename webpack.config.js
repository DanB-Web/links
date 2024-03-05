const path = require("path");

const inputDir = path.resolve(__dirname, "./app/src");
const outputDir = path.resolve(__dirname, "./static/js");

module.exports = {
  entry: [inputDir + "/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  output: {
    // needs to be absolute
    path: outputDir,
    filename: "app.js",
  },
};
