const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const node_modules = path.resolve(__dirname, 'node_modules')
// const pathReact = path.resolve(node_modules, 'react/dist/react.min.js');
// const pathReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
// const pathReactRouter = path.resolve(node_modules, 'react-router/dist/react-router.min.js');
const sourceDir = 'src'
const outputDir = 'dist'
const contentDir = path.join(outputDir)
const devServerHost = '0.0.0.0'
const devServerPort = 9090

const config = {
  entry: [
    `webpack-dev-server/client?http://${devServerHost}:${devServerPort}/`,
    'webpack/hot/only-dev-server', // Do not auto reload when syntax error occurs
    // Indicate that it's inline mode，equivalent to use --inline in webpack CLI
    path.resolve(__dirname, sourceDir, 'main.js')
  ],
  output: {
    path: path.resolve(__dirname, outputDir),
    publicPath: '/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: contentDir, // Useful without html-webpack-plugin.
    publicPath: '/',         // This will tell webpack-dev-server where to find the static file. 
    historyApiFallback: true,
    hot: true,
    host: devServerHost,
    port: devServerPort
  },
  devtool: 'eval',
  module: {
    // noPhase: [pathReact, pathReactDOM, pathReactRouter],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(__dirname, sourceDir)
      },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.(png|jpe?g)$/, loader: 'url?name=[name]_[hash:6].[ext]&limit=8192' },
      {
        test: /\.svg$/,
        loader: 'svg-sprite',
        query: {
          name: '[name]_[hash:6].[ext]',
          prefixize: true
        }
      }
      // Or raw-loader?
      // { test: path.resolve(node_modules, pathReact), loader: 'expose?React' },
      // { test: path.resolve(node_modules, pathReactDOM), loader: 'expose?ReactDOM' }
    ]
  },
  resolve: {
    // alias: { 'react': pathReact, 'react-dom': pathReactDOM, 'react-router': pathReactRouter },
    extensions: ['', '.js', 'jsx', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'src/images/favicon.ico',
      template: path.join(sourceDir, 'index.html'),
      title: 'Put your title here'
    })
  ]
}

module.exports = config