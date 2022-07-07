const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // outputs the bundled file to the dist folder
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 8080,
    static: path.resolve(__dirname, "dist"),
    hot: true,
  },
  module: {
    rules: [
      {
        // string regex that matches all javascript files in the project directory
        test: /\.(js|jsx)$/,
        // exclude the node modules folder
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            // this object is equivalent to the babel.config.json file
            presets: ["@babel/preset-env", "@babel/preset-react"],
            comments: false,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Services": path.resolve(__dirname, "src/services"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Views": path.resolve(__dirname, "src/views"),
      // ...etc
    },
  },
};
