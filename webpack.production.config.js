// var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
var node_modules = path.resolve(__dirname, 'node_modules')
// var pathReact = path.resolve(node_modules, 'react/dist/react.min.js');
// var pathReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var config = {
  entry: [
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [node_modules],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader!' },
      // { test: /\.html$/, loader: 'file-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ],
  },
  resolve: {
    extensions: ['', '.js', 'jsx', '.json']
  },
  // plugins: [new HtmlWebpackPlugin()]
}

module.exports = config