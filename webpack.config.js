var webpack = require('webpack');
var path = require("path");

module.exports = {
  debug:true,
  devtool: "source-map",
  entry: path.resolve(__dirname, 'app/entry.js'),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {    
    loaders: [
      { 
        test: /(\.jsx$|\.js$)/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};

