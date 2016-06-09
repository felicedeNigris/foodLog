//webpack dev config.js


var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-eval-source-map', //shows debug error in console
  entry: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/dev-server','./app/index.entry'],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new webpack.HotModuleReplacementPlugin() // To generate hot update chunks
  ],
  module:{
    loaders:[
      {test:/\.js$/,exclude: /node_modules/, loader: 'babel-loader'},
      {test:/\.scss$/, loaders:['style','css','sass']},
      {test:/\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test:/\.html$/, loader: 'raw-loader'}
    ]
  },
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'index.ouput.bundle.js'
  },
  devServer:{
    contentBase: './dist',
    hot: true //Enable HMR (hot module replacement)
  }
}
