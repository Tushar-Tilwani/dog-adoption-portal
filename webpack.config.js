const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    adopt: "./src/adopt/adopt.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["vendor", "main"],
      title: "Dog Adoption",
      template: "./src/index.html",
      filename: "./index.html" //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["vendor", "adopt"],
      title: "Dog Adoption",
      template: "./src/adopt/adopt.html",
      filename: "./adopt.html" //relative to root of the application
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        use: ["file-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]lodash[\\/]|dogs.json/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
