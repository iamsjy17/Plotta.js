const path = require('path');

module.exports = {
  entry: {
    plotta: ['@babel/polyfill', './src/plotta.js']
    // worker: ['@babel/polyfill', './src/view/osWorker.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      //   {
      //     test: /\.worker\.js$/,
      //     use: { loader: 'worker-loader' }
      //   }
    ]
  },

  devtool: 'source-map',
  mode: 'development'
};
