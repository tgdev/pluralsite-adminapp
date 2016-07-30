import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false, // webpack displays list of all files it's bundling
  entry: [
    'eventsource-polyfill', // required for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // NOTE: reloads page if hot module reloading fails
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // NOTE: physical files only output by production build task
    publicPath: '/',
    filename: 'scripts.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // hot module reloading
    new webpack.NoErrorsPlugin() // Keeps errors from breaking hot module reloading
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] }
      { test: /\.woff(2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    ]
  }
};
