const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackAutoInjectVersion = require("webpack-auto-inject-version");

module.exports = {
  resolve: {
    alias: {
      "~": __dirname + "/src/",
    },
  },
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: __dirname + "/src",
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      environment: process.env.NODE_ENV,
      filename: __dirname + "/dist/index.html",
      hash: true,
      template: __dirname + "/src/template.ejs",
      title: "Swapi Client",
    }),
    new WebpackAutoInjectVersion({
      components: {
        InjectAsComment: true,
      },
      componentsOptions: {
        InjectAsComment: {
          tag: `Package version: {version} - {date}`,
          dateFormat: "yyyy-mm-dd HH:MM",
        },
      },
    }),
  ],
};
