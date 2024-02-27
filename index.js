// Initialize the canvas
function setup() {
  createCanvas(800, 600);
}

// Draw the scene every frame
function draw() {
  // Background color
  background(200, 230, 255); // Light blue

  // Draw a simple illustration of a mountain landscape
  fill(139, 69, 19); // Brown
  triangle(0, height, width / 2, height - 150, width, height);

  fill(0, 128, 0); // Green
  rect(0, height - 100, width, 100); // Ground

  fill(255, 255, 0); // Yellow
  ellipse(width / 2, height - 150, 50, 50); // Sun

  // Add animation (clouds moving from right to left)
  fill(255, 255, 255, 150); // White with transparency
  ellipse(width - 100, 100, 80, 40);
  ellipse(width - 200, 50, 60, 30);

  // Update cloud positions for animation 
  translate(5, 0); // Move clouds slightly left each frame
}

