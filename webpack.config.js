const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  module : {
    rules: [{
      tests: /\.m?jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    }]
  }
};