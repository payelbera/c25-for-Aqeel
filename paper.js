class Paper{
    constructor(x,y,radius){
    var options={
      restitution:0.8,
      friction:0.3,
      density:0.3
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
     this.pap = loadImage('paper.png')

     World.add(world,this.body);
  } 
     display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER);
        
       image(this.pap,0,0, this.radius, this.radius);
pop();

     }
}