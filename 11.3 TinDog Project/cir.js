function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
  }
  
  function draw() {
    background(0);
    stroke(255, 204, 0);
    for (let i = 0; i < 20; i++) {
      let size = 50 + i * 30;
      ellipse(width / 2, height / 2, size + sin(frameCount * 0.05 + i) * 100, size);
    }
  }
  