function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style("z-index",-1);
  createA("https://github.com/Anemix011","Mi Súper cuenta!","_blank").id("yo");
  textSize(50);
}

function draw() {
  text("😜", mouseX, mouseY);
}  

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}