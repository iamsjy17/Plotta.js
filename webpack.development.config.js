// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const config = {
  entry: {
    plotta: ['@babel/polyfill', './src/plotta.ts'],
    testData: ['./src/demo/testData.js'],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: './dist/dev/',
    path: path.resolve(__dirname, 'dist/dev/'),
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
  devServer: {
    port: 9000,
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
module.exports = config;
