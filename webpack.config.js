//webpack config.js


var path = require('path')


module.exports = {
  entry: ['.app/index.entry.js'],
  module:{
    loaders:[
      {js:/\.js$/,exclude: /node_modules/, loader: 'babel-loader'},
      {css:/\.css$/, loader:'css-loader'}
    ]
  },
  output:{
    path: path.join(__dirname, ''),
    filename: 'index.ouput.bundle.js'
  }
}
