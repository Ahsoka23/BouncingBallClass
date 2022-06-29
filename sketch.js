var ball;
var vx = 2;
var vy= 1;
/*var ballwidth=100
var ballheight=100*/
function setup() {
  createCanvas(400,400);
ball=new BALL(120,163)
ball.movee(5,6)

 // ball = createSprite(100,100,ballwidth,ballheight);
}

function draw() 
{

  background(51);
  ball.cratee()
  ball.bounceOff();
  /*if(ball.position.x<=ballwidth/2 || ball.position.x>=width-ballwidth/2||ball.position.y<=ballheight/2 || ball.position.x>=height-ballheight/2)
  {
    vx= -vx;
    vy= -vy
  }
  ball.velocity.x = vx;
  ball.velocity.y=vy
  */
  drawSprites();

}

