function setup() {
    createCanvas(400, 400);
}

let x = 0;
function draw() {
    drawBg(color(55, 204, 0));
    // drawCircle(x, 50, 10, color(255, 54, 0));
    // x += 5;
    drawTriangle(50, 50, 100, 100, 50, 100, color(255, 0, 0));
}