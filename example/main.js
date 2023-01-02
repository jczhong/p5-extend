function setup() {
    drawBg(400, 400, color(55, 204, 0));
    drawRect(200, 200, 30, 40, color(255, 54, 0));
    drawLine(20, 20, 100, 100, 5, color(255, 54, 0));
    drawDot(250, 250, color(0, 0, 0));
}

function draw() {
    if (mouseIsPressed) {
        drawCircle(mouseX, mouseY, 50, color(255, 54, 0));
    }
}