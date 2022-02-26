let mobileNet;
let video;
let label = "";
function modelLoaded() {
  // console.log("Model ready");
  mobileNet.predict(gotResult);
}
function gotResult(error, results) {
  if (error) {
    // console.log(error);
  } else {
    // console.log(results);

    label = results[0].label;

    mobileNet.predict(gotResult);
  }
}

function setup() {
  createCanvas(640, 620);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobileNet = ml5.imageClassifier("MobileNet", video, modelLoaded);
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(225);
  textSize(32);
  text(label, 10, height - 100);
}
