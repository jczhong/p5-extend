import p5 from 'p5';
import { isColor, isImage } from './utils';

//width, height, color/image
p5.prototype.drawBg = function () {
    const width = arguments[0];
    const height = arguments[1];
    this.createCanvas(width, height);
    
    const thirdParam = arguments[2];
    if (isColor(thirdParam)) {
        this.background(thirdParam);
    } else if (isImage(thirdParam)) {
        this.background(thirdParam);
    }
};