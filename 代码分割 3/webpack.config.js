const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  // {
  //   // 多入口配置
  //   main: './src/js/index.js',
  //   test: './src/js/test.js'
  // },
  output: {
    // 取文件名[name]
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  optimization: {
    // 公共js只会打包一份
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
};
