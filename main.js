function preload() {

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    canvas.center();
    video.size(640, 480);
    video.center();
}

function draw(){
    
}

function take_snapshot() {
    save('student_name.png');
}
