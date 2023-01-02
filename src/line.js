import p5 from 'p5';
import { isColor } from './utils';

//x1, y1, x2, y2, stroke color/weight
p5.prototype.drawLine = function () {
    const x1 = arguments[0];
    const y1 = arguments[1];
    const x2 = arguments[2];
    const y2 = arguments[3];

    let setColor = false;
    let setWeight = false;
    for(let index = 4; index < arguments.length; index++) {
        const param = arguments[index];
        if (isColor(param)) {
            this.stroke(param);
            setColor = true;
        } else if (typeof param === 'number') {
            this.strokeWeight(param);
            setWeight = true;
        }
    }
    
    //default
    if (!setColor) {
        this.stroke(0);
    }
    if (!setWeight) {
        this.strokeWeight(1);
    }

    this.line(x1, y1, x2, y2);
};