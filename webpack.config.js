const path = require('path');
const webpack = require('webpack');

function resolve(...args) {
  return path.resolve(__dirname, ...args);
}

const config = {
  entry: {
    'react-presenter': resolve('src', 'index.jsx'),
  },
  output: {
    path: resolve('dist'),
    library: 'react-presenter',
    libraryTarget: 'commonjs2',
    filename: `index.js`,
  },
  externals: [
      "@snakesilk/engine",
      "three",
      "react",
      "prop-types",
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [
          resolve('src'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: [
              'transform-class-properties',
            ],
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
