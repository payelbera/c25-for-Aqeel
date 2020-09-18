class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Image = loadImage('dustbingreen.png');
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      imageMode(CENTER);
      fill("red");
      image(this.Image,pos.x, pos.y, this.width, this.height*1.5);
      pop()
    }
  };
  