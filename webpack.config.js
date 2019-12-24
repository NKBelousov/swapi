const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackAutoInjectVersion = require("webpack-auto-inject-version");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "~": __dirname + "/src/",
    },
  },
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    publicPath: "/",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: __dirname + "/src",
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      environment: process.env.NODE_ENV,
      filename: __dirname + "/dist/index.html",
      hash: true,
      minify: isProduction,
      showErrors: !isProduction,
      template: __dirname + "/src/template.ejs",
      title: "Swapi Client",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
