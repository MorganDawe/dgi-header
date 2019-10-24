module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  output: {
    path: __dirname,
    filename: 'dgiheader.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.svg$/, use: [{loader: "babel-loader"},{loader: "react-svg-loader", options: {jsx: true}}]}
    ]
  }
};