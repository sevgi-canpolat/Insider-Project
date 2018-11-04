var Engine = Matter.Engine,
// Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;
var weights = [];

function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  // Define ground as teeter totter
  var options = {
    isStatic: true
  }
  ground = new Boundary(300, 300, 400, 5 , options);

  // locate stable boxes on right hand side
  var numberOfObjects = Math.floor(random(1, 5));
  for(var i = 0; i < numberOfObjects; i++) {
    weights.push(Math.floor(random(1, 10))); // define weights of each right side box randomly
    boxes.push(new RightSideBox(random(350, 450), 0, 20, 20));
  }
  calculateTotalWeights();
  World.add(world, ground); // Add static component to the engine.
}

function draw() {
  background(230);
  Engine.update(engine);
  ground.show();
  // Draw n stored rectangles to right side:
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].show();
    boxes.splice();
  }
}

function calculateTotalWeights() {
  var totalWeight = 0;
  for(var i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
    console.log(totalWeight);
  }
}
