//webpack config.js


var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map', //shows debug error in console
  entry: ['./app/index.entry.js'],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor:{
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module:{
    loaders:[
      {test:/\.js$/,exclude: /node_modules/, loader: 'babel-loader'},
      {test:/\.scss$/, loaders:['style','css','sass']}
    ]
  },
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'index.ouput.bundle.js'
  }
}
