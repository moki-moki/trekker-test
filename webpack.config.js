const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = { plugins: [
  new HTMLWebpackPlugin({ template: "./public/index.html" }),
],
module: { rules: [
  { test: /.js$/,
    exclude: /node_modules/,
    use: { loader: "babel-loader",
      options: { presets: ["@babel/preset-env", "@babel/preset-react"] } } },
  { test: /\.css$/i,
    use: ["style-loader", "css-loader", "postcss-loader"] },
] } };
