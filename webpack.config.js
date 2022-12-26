const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
      './src/background.js',
  ],
  output: {
    filename: 'ep5.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};