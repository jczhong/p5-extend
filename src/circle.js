import p5 from 'p5';
import { isColor } from './utils';

//x, y, d, color
p5.prototype.drawCircle = function () {
    const x = arguments[0];
    const y = arguments[1];
    const d = arguments[2];

    const color = arguments[3];
    if (isColor(color)) {
        this.fill(color);
    } else {
        this.fill(0);
    }

    this.circle(x, y, d);
};