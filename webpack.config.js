const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    plotta: ['@babel/polyfill', './src/plotta.js'],
    testData: ['./src/demo/testData.js']
  },
  output: {
    filename: '[name].bundle.js',
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
          options: { name: 'worker.bundle.js' }
        }
      }
    ]
  },
<<<<<<< HEAD
  devtool: 'cheap-module-source-map',
=======
  devtool: 'inline-source-map',
>>>>>>> af8834b453fe3c1d4eb6d959b0655f40630bc79a
  mode: 'development'
};
module.exports = config;
