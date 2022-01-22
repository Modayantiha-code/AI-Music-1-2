var PeterPan = "";
var HarryPotter = "";
LeftwristX = 0;
LeftwristY = 0;
RightwristX = 0;
RightwristY = 0;

function preload() {
    PeterPan = loadSound("PeterPan.mp3");
    HarryPotter = loadSound("HarryPotter.mp3");
}

function setup() {
    var mycanvas = createCanvas(500, 350);
    mycanvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    posenetmodel = ml5.poseNet(video, modelloaded);
    posenetmodel.on("pose", getResults);
}

function modelloaded() {
    console.log("Posenet has loaded");
}

function draw() {
    image(webcam, 0, 0, 500, 350);
}

function getResults(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
        LeftwristX = resultsarray[0].pose.leftWrist.x;
        LeftwristY = resultsarray[0].pose.leftWrist.y;
        RightwristX = resultsarray[0].pose.rightWrist.x;
        RightwristY = resultsarray[0].pose.rightWrist.y;

    }

}