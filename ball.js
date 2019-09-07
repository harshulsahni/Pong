function Ball(){
	this.x = width/2;
	this.y = height/2;
	this.r = width*height*0.00002;
	if(this.r < 1) this.r = 1;
	
	this.speed = width*0.005;
	this.vx = this.speed;
	this.vy = 0;
	this.draw = function(){
		noStroke();
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
	this.update = function(){
		this.x += this.vx;
		this.y -= this.vy;
		this.touchingBoundaries();
		this.speed += width*0.005*0.005/7;
	}
	this.touchingBoundaries = function(){
		if(this.y - this.r <= 0){
			this.y = this.r
			this.vy *= -1;
		}
		else if(this.y + this.r >= height){
			this.y = height - this.r;
			this.vy *= -1;
		}
		if(this.x - this.r <= 0){
			this.vy=0;
			this.vx=0;
			score.addPoint(USER);
		}
		else if(this.x + this.r >= width){
			this.vy=0;
			this.vx=0;
			score.addPoint(CPU);
		}
	}
	this.bounce = function(yContact, paddlePos, paddleHeight, n){
		//translate height of paddle from 45 degrees to -45 degrees
		//takes the contact point of paddle, the y position of the paddle, and the height of the paddle to determine angle
		//(yContact - paddlePos)/paddleHeight gives the fraction. 
		//n determines which way ball will go; left for user, right for CPU
		var fraction = (paddlePos - yContact)/paddleHeight;
		var angle = Math.PI/2 * fraction;
		this.vx = n*this.speed*Math.cos(angle);
		this.vy = this.speed*Math.sin(angle);
		console.log("contact: at deg:" + 90*fraction + " with speeds: " + this.vx + " " + this.vy);
	}
}