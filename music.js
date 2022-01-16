var PeterPan = "";
var HarryPotter = "";

function preload() {
    PeterPan = loadSound("PeterPan.mp3");
    HarryPotter = loadSound("HarryPotter.mp3");
}

function setup() {
    var mycanvas = createCanvas(500, 350);
    mycanvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw() {
    image(webcam, 0, 0, 500, 350);
}