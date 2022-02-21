function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}


function draw(){
    image(video, 100, -100, 640, 480);
    rect(56, 46, 55, 55);
    circle(30, 30, 50);
    tint(tint_color);
}

function take_snapshot(){
    save("student_name.png");
}
