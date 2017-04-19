const path = require('path')
const webpack = require('webpack')
const HtmlWebpack = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  entry: path.join(__dirname, 'src', 'Main.js'),

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
  },

  output: {
     path: path.join(__dirname, 'dist'),
     filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 1010
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),

    new HtmlWebpack({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),

    new ExtractTextPlugin('style.css')
  ]
}
