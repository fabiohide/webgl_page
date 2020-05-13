sizeW = 42;
sizeH = 36;
W = 3840;
H = 2160;

function preload() {

    corpo1 = loadModel('pvc.obj');

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    background(0);
}

function draw() {

    translate(0, 0, ((windowWidth + windowHeight) / 08));
    translate(mouseY / 40, mouseX / 40);
    // fill(255, 0, 0);


    // ellipse(10, 10, 10, 10);


    rotateY(frameCount * 0.05);
    rotateX(frameCount * 0.03);

    for (y = -90; y <= width; y += sizeH) {
        for (x = -176; x <= height; x += sizeW) {
            fill(255, 0, 0);
            //ellipse(x, y, sizeW, sizeH);
            //image(cato, x, y, sizeW, sizeH);
            normalMaterial()
            model(corpo1);
            translate(y, x);

        }
    }


    //normalMaterial()
    // rotateY(frameCount * 0.15);
    //rotateX(frameCount * 0.03);
    //model(corpo1, 100, 100);

}
