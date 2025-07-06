const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // ...existing code...
  module: {
    rules: [
      // ...existing code...
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // ...existing code...
    ],
  },
  plugins: [
    // ...existing code...
    new MiniCssExtractPlugin(),
    // ...existing code...
  ],
  // ...existing code...
};
