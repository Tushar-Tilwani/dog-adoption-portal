const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    list: "./src/views/list/list.js",
    describe: "./src/views/describe/describe.js"
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["vendor", "list"],
      template: "./src/common/common.html.ejs",
      filename: "./index.html" //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["vendor", "describe"],
      template: "./src/common/common.html.ejs",
      filename: "./views/describe.html" //relative to root of the application
    }),
    new CopyWebpackPlugin(
      [
        {
          from: "./src/assets/images",
          to: "../dist/assets/images",
          force: true
        }
      ],
      {}
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
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
          test: /[\\/]node_modules[\\/](lodash|intersection-observer)[\\/]|dogs.json/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
