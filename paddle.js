function Paddle(player){
	this.height = height*.2;
	this.width = width*.01;
	this.paddleSpeed = height*0.014;
	this.determineXPos = function(){
		if(player == CPU) return width*0.1;
		else if(player == USER) return width * 0.9;
	}
	this.x = this.determineXPos();
	this.y = height/2;

	this.draw = function(){
		rectMode(CENTER);
		fill(255,255,255)
		rect(this.x, this.y, this.width, this.height)
	}

	this.update = function(){
		if(this.y - this.height/2 <= 0) this.y = this.height/2;
		if (this.y + this.height/2 >= height) this.y = height - this.height/2;

		if(player == USER){
			if(keyIsDown(UP_ARROW) || keyIsDown(87)){
				this.y -= this.paddleSpeed;
			}
			else if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
				this.y += this.paddleSpeed;
			}
		}
		else if(player == CPU){
			if(this.whereIsBall() == "above"){
				this.y -= this.paddleSpeed;
			}
			else if(this.whereIsBall() == "below"){
				this.y += this.paddleSpeed;
			}
		}
		this.touch();
		this.whereIsBall();
	}
	this.touch = function(){
		var rectXPos, rectYPos,n;
		if(player == USER) n = -1;
		else n = 1;

		rectXPos = this.x + n*this.width/2;
		rectYPos = this.y - this.height/2;
		for(var i=0; i<this.height; i++){
			if(dist(ball.x, ball.y, rectXPos, rectYPos + i) <= ball.r){
				ball.bounce(rectYPos + i, this.y, this.height, n);
				break;
			}
		}
	}
	this.whereIsBall = function(){
		if(player == CPU){
			if(ball.y - this.y <= -75){
				return "above";
			}
			else if(ball.y - this.y >= 75){
				return "below";
			}
		}
	}
}