import p5 from 'p5';
import { isColor } from './utils';

//x1, y1, x2, y2, x3, y3, color
p5.prototype.drawTriangle = function () {
    const x1 = arguments[0];
    const y1 = arguments[1];
    const x2 = arguments[2];
    const y2 = arguments[3];
    const x3 = arguments[4];
    const y3 = arguments[5];

    const color = arguments[6];
    if (isColor(color)) {
        this.fill(color);
    } else {
        this.fill(0);
    }

    this.triangle(x1, y1, x2, y2, x3, y3);
};