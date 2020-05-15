const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'svg-inline-loader'
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app.html",
      filename: "index.html",
    }),
  ],
  externals: {
    moment: "moment",
  },
};