function Score(){
	this.userScore = 0;
	this.cpuScore = 0;

	this.rectSize = height*width/13000;
	this.textSize = this.rectSize;

	this.draw = function(){
		this.drawUserScore();
		this.drawCPUScore();
	}
	this.addPoint = function(player){
		switch(player){
			case(USER): 
			this.userScore += 1;
			break;

			case(CPU): 
			this.cpuScore += 1;
			break;
		}
		resetGame();
	}
	this.drawUserScore = function(){
		fill(255,255,255);
		rectMode(CENTER);
		rect(width*14/15, height/10, this.rectSize, this.rectSize);
		textSize(this.textSize);
		textAlign(CENTER, CENTER);
		fill(0,0,0);
		text(this.userScore, width*14/15, height/10);
	}
	this.drawCPUScore = function(){
		fill(255,255,255);
		rectMode(CENTER);
		rect(width*1/15, height/10, this.rectSize, this.rectSize);
		textSize(this.textSize);
		textAlign(CENTER, CENTER);
		fill(0,0,0);
		text(this.cpuScore, width*1/15, height/10);
	}
}