import p5 from 'p5';
import { isColor } from './utils';

//x, y, color
p5.prototype.drawDot = function () {
    const x = arguments[0];
    const y = arguments[1];

    const param = arguments[2];
    if (isColor(param)) {
        this.stroke(param);
    } else {
        this.stroke(0);
    }
    this.strokeWeight(1);

    this.point(x, y);
};