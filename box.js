function RightSideBox(x, y, width, height) {
  var options = {
    friction: 1,
    restitution: 0
  }
  var weight = Math.floor(random(1, 10));
  this.body = Bodies.rectangle(x, y, width, height, options, weight);
  this.width = width;
  this.height = height;
  World.add(world, this.body);

  var randomRGB = [random(0,255), random(0,255), random(0,255)];
  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(randomRGB[0], randomRGB[1], randomRGB[2]); // assign random rectangle colors
    rect(0, 0, this.width, this.height, weight);
    pop();
  }

}
