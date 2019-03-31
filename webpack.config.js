const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    plotta: ['@babel/polyfill', './src/plotta.js'],
    testData: ['./src/demo/testData.js']
  },
  output: {
    filename: '[name].js',
    publicPath: '../dist/',

    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /osWorker\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'worker-loader',
          options: { name: 'PlottaDraw.worker.js' }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  mode: 'production'
};
module.exports = config;
