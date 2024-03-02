const path = require("path");

const inputDir = path.resolve(__dirname, "./app/src");
const outputDir = path.resolve(__dirname, "./static/js");

module.exports = {
  entry: [inputDir + "/index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  output: {
    // needs to be absolute
    path: outputDir,
    filename: "app.js",
  },
};
