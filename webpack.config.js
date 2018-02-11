module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    loaders: [
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
