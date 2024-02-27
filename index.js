// Initialization variables
let backgroundColor, textColor, accentColor;
let mic, fft;
let video, isPlaying;
let moneyImg, earthImg;
let textX, textY;
let moneyScale, earthScale;
let moneySpin = 0;
let isShaking = false;

function preload() {
  moneyImg = loadImage("money.png"); // Replace "money.png" with your image path
  earthImg = loadImage("earth.png"); // Replace "earth.png" with your image path
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Color scheme
  backgroundColor = color(0, 10, 20);
  textColor = color(255);
  accentColor = color(0, 255, 0);

  // Audio and video setup
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.1, 256);
  fft.setInput(mic);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  isPlaying = false;

  // Text positioning
  textX = width / 2;
  textY = height / 3;

  // Image scaling
  moneyScale = 0.5;
  earthScale = 0.2;
}

function draw() {
  background(backgroundColor);

  // Webcam feed manipulation (optional)
  if (isPlaying) {
    push();
    translate(width / 2, height / 2);
    scale(-1, 1); // Flip the video horizontally
    image(video, 0, 0, width, height);
    filter(INVERT); // Invert the colors
    pop();
  }

  // Money image manipulation
  push();
  translate(width / 2, height * 2 / 3);
  rotate(moneySpin);
  scale(moneyScale);
  image(moneyImg, 0, 0);
  pop();

  // Earth image manipulation
  push();
  translate(width / 5, height * 4 / 5);
  scale(earthScale);
  image(earthImg, 0, 0);
  pop();

  // Text with sound visualization
  let spectrum = fft.spectrum;
  let level = map(spectrum[1], 0, 1, 0, 20);
  textSize(32 + level);
  fill(textColor);
  noStroke();
  textAlign(CENTER, CENTER);
  text("Who Wants to Be a Trillionaire?", textX, textY);

  // Money image shaking based on audio level
  moneySpin += level * 0.1;
  if (level > 0.1) {
    isShaking = true;
  } else {
    isShaking = false;
  }

  if (isShaking) {
    translate(random(-5, 5), random(-5, 5));
  }
}

function keyPressed() {
  if (key === ' ') {
    isPlaying = !isPlaying;
  }
}
