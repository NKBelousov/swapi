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
};
