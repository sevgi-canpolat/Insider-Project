function Boundary(x, y, width, height) {
  var options = {
    friction: 1,
    restitution: 0,
    isStatic: true,
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(255,0,0);
    rect(0, 0, this.width, this.height);
    pop();
  }

}
