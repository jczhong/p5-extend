import p5 from 'p5';

p5.prototype.createColorBg = function (width, height, color) {
    createCanvas(width, height);
    background(color);
};

p5.prototype.createImageBg = function (width, height, image) {
    createCanvas(width, height);
    background(image);
};