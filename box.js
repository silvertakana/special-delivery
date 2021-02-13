class Box {
  constructor(x, y, width, height,a,b,c, statics) {
    var options = {
        'restitution':0.3,
        'friction':0.3,
        'density':1.0,
        'isStatic':statics
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.a = a;
    this.b = b;
    this.c = c;
    World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    push();
    //translate(pos.x,pos.y);
    //rotate(this.body.angle);
    rectMode(CENTER);
    fill(this.a,this.b,this.c);
    rect(pos.x, pos.y, this.width, this.height);

    pop();
  }
};
