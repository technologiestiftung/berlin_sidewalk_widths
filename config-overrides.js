const {
  override,
  addWebpackPlugin,
  addBabelPlugin
} = require("customize-cra");

const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = override(
//   addBabelPlugin("babel-plugin-idx"),
//   addWebpackPlugin(new HtmlWebpackPlugin(
//     {
//       'template': 'src/index.html',
//       'meta': {
//           'viewport': 'width=device-width, initial-scale=2, shrink-to-fit=no'
//       }
//     }
//   ))
// );