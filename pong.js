var leftPaddle, rightPaddle, gameEnd, ball, score;
var CPU = "l";
var USER = "r";

function setup(){
	createCanvas(windowWidth,windowHeight);
	leftPaddle = new Paddle(CPU);
	rightPaddle = new Paddle(USER);
	ball = new Ball();
	score = new Score();
}
function windowResized() {
	createCanvas(windowWidth,windowHeight);
	leftPaddle = new Paddle(CPU);
	rightPaddle = new Paddle(USER);
}
function draw(){
	background(30, 32, 35);
	handleRightPaddle();
	handleLeftPaddle();
	handleBall();
	handleScore();
}
function handleRightPaddle(){
	rightPaddle.draw();
	rightPaddle.update();
}
function handleLeftPaddle(){
	leftPaddle.draw();
	leftPaddle.update();
}
function handleBall(){
	ball.draw();
	ball.update();
}
function handleScore(){
	score.draw();
	//score.update();
}
function resetGame(){
	ball = new Ball();
	leftPaddle = new Paddle(CPU);
	rightPaddle = new Paddle(USER);
}
