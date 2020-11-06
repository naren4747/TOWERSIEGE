class Polygon{
    constructor(x, y,sides,radius ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.polygon(x,y,sides,radius)
        this.width = width;
        this.height = height;
        this.radius = radius
        this.sides = sides
        
       


        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMod(CENTER)
        image(polygon_img,polygon.position.x,polygon.position.y,40,40);
        pop();
      }
}