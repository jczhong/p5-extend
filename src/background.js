import p5 from 'p5';
import { isColor, isImage } from './utils';

//color/image
p5.prototype.drawBg = function () {
    const param = arguments[0];
    if (isColor(param)) {
        this.background(param);
    } else if (isImage(param)) {
        this.background(param);
    }
};