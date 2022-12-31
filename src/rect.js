import p5 from 'p5';
import { isColor } from './utils';

//mode, x, y, width, height, color
p5.prototype.drawRect = function () {
    let index = -1;
    if (arguments[0] === this.CORNER || 
        arguments[0] === this.CORNERS ||
        arguments[0] === this.CENTER || 
        arguments[0] === this.RADIUS) {
        this.rectMode(arguments[0]);
        index = 0;
    }

    const x = arguments[index + 1];
    const y = arguments[index + 2];
    const width = arguments[index + 3];
    const height = arguments[index + 4];

    const color = arguments[index + 5];
    if (isColor(color)) {
        this.fill(color);
    }

    this.rect(x, y, width, height);
};