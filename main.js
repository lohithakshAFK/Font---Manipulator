right_wristX = 0;
left_wristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(500,100);
    video = createCapture(VIDEO);
    video.size(500,500);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses)
}

function gotPoses(results){
    if(results.length > 0){
    right_wristX = results[0].pose.rightWrist.x;    
    left_wristX = results[0].pose.leftWrist.x;
    difference = floor(left_wristX - right_wristX);
    console.log("Right Wrist X = " + right_wristX + " Left Wrist X = " + left_wristX + " Difference is " + difference);
    console.log(results);
    }
}

function draw(){
    background("black");
    fill("white");
    stroke("white")
    text("Boom",100,100);
    textSize(difference);
}

function modelLoaded(){
    console.log("PoseNet is loaded")
}

