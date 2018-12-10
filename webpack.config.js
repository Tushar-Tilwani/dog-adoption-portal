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
      template: "./src/index.html.ejs",
      filename: "./index.html" //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["vendor", "adopt"],
      template: "./src/index.html.ejs",
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
      },
      {
        test: /\.html$/, // tells webpack to use this loader for all ".html" files
        loader: ["html-loader"]
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
