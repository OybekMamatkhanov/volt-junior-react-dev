'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/index.jsx')
  ],
  resolve: {
    root: [
      path.resolve(__dirname, "src"),
    ],
    modules: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.css']
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['syntax-async-functions']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
      loader: 'file-loader'
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' },
    ]
  }
};