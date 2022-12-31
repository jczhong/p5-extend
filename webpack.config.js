const path = require('path');
const fs = require('fs');

const fileNames = fs.readdirSync('./src').flatMap(filename => './src/'+filename);

console.log(fileNames);
module.exports = {
  mode: 'development',
  watch: true,
  entry: fileNames,
  output: {
    filename: 'ep5.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};