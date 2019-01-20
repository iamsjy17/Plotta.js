const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    plotta: ['@babel/polyfill', './src/plotta.js']
    // worker: ['@babel/polyfill', './src/view/osWorker.js']
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: [path.resolve(__dirname, 'src/js')],
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
  devtool: 'inline-source-map',
  mode: 'development'
};
module.exports = config;
