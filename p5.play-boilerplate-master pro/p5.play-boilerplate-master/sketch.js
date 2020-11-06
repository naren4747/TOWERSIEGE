function setup() {
  createCanvas(800,400);
  polygon = new Polygon(50,100,20,20,20)
}

function draw() {
  background(255,255,255);  
  polygon.display()
  drawSprites();
}