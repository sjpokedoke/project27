class Bob {
    constructor(x,y,radius) {
      var options = {
        isStatic: false,
        'restitution':1,
        'friction':0,
        'density':0.8,
    }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x,this.y,radius/2, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    strokeWeight(2);
    stroke("white")
    fill(rgb(200,200,255));
    ellipse(0,0,this.radius, this.radius);
    pop();
    }
  };
