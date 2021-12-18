/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    plotta: ['@babel/polyfill', './src/plotta.ts'],
    testData: ['./src/demo/testData.js'],
  },
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: './dist/release/',
    path: path.resolve(__dirname, 'dist/release/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new CleanWebpackPlugin(), new UglifyJSPlugin()],
  mode: 'production',
};
module.exports = config;
