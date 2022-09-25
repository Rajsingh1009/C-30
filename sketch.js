const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  



  for (var i = 0; i <balls.length; i++) {
       showCannonBalls(balls[i] , i);
  }
  cannon.display();
  tower.display();
  cannonBall.display()
 
}






function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    cannonBall.shoot()
  }
//function  to show the ball
function showCannonBalls(ball,index) {
  ball.display();
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50){
    Matter.World.remove(world, ball.body);
    balls.splice(index,  1);
  }
}


function keyReleased() {
  if (keyCode === Down_Arrow){
    balls[balls.length  - 1].shoot();
  }
}