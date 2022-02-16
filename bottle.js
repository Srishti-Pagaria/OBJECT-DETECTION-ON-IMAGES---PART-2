img_basket = "";
status = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectings objects";
}

function preload(){
    img_basket = loadImage("bottle.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Dog", 45, 75);
    text("Cat", 275, 90);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    rect(260, 75, 340, 330);
}

function modelLoaded(){
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img_basket, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
   
}