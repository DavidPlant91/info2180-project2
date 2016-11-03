window.onload=funtion(){
	var puzzle=document.getElementById("puzzlearea");
	var pieces=puzzle.children;
	var top=0;
	var left=0;
	var topBG=0;
	var leftsideBG=0;
	var topBlank =300;
	var leftBlank=300;
	var previousTop;
	var previousLeft;
	
	for(var i=0; i<pieces.length; i++){
		pieces[i].className="puzzlepiece";
		pieces[i].style.top=top + "px";
		pieces[i].style.left=left + "px";
		
		pieces[i].style.backgroundPosition = leftsideBG + "px" + topBG + "px";
		pieces[i].onlclick = makeMove;
		pieces[i].onmouseover = makeMovable;
		
		if(left < 300){
			left = left + 100;
			leftsideBG = leftsideBG - 100;
		}
		
		else{
			left = 0;
			leftsideBG = 0;
			Top = Top + 100;
			topBG = topBG - 100;
		}
	}
	
	function makeMovable(){
		if(previousTop == topBlank && previousLeft == (leftBlank - 100) || previousTop == topBlank && previousLeft == (leftBlank +100) || previousTop==(topBlank - 100) && previousLeft == (leftBlank)) || previousTop ==(topBlank + 100) && previousLeft == leftBlank){
			$(this).addClass("movablepiece");
		}
		else{
		this.removeClass("movablepiece");
		}
		
	}
	
	funtion makeMove(){
		previousTop = parseInt(this.style.top);
		previousLeft = parseInt(this.style.left);
		
		if(previousTop == topBlank && previousLeft == (leftBlank - 100) || previousTop == topBlank && previousLeft == (leftBlank +100) || previousTop==(topBlank - 100) && previousLeft == (leftBlank)) || previousTop ==(topBlank + 100) && previousLeft == leftBlank){
			this.style.top = topBlank + "px";
			this.style.left = leftBlank + "px";
			topBlank = previousTop;
			leftBlank = previousLeft;
		}
	}
	
	
	function getStyle(top, left){
		for (var i = 0; i < pieces.length; i++){
			if(pieces[i].style.top==top && pieces[i].style.left==left){
				shufflePiece=pieces[i];
				return shufflePiece;
			}
			
		}
	}
	
	function shuffle(){
		var x = 0;
		var choice = 0;
		var timesShuffled=9999;
		var shufflePiece;
		
		for(x=0; x < timesShuffled; x++){
			choice=Math.floor(Math.random()*4);
			console.log(choice);
			if (choice==0){
				(getStyle((topBlank-100) + "px", leftBlank + "px"))||getStyle((topBlank+100)+"px", leftBlank+"px");
				previousTop=parseInt(shufflePiece.style.top);
				previousLeft=parseInt(shufflePiece.style.left);
				shufflePiece.style.top = topBlank+ "px";
				shufflePiece.style.left = leftBlank + "px";
				topBlank = previousTop;
				leftBlank = previousLeft;
			}
			
			else if(choice==1){
				(getStyle(topBlank + "px", (leftBlank - 100) + "px"))||getStyle(topBlank + "px", (leftBlank + 100) +"px");
				previousTop=parseInt(shufflePiece.style.top);
				previousLeft=parseInt(shufflePiece.style.left);
				shufflePiece.style.top = topBlank + "px";
				shufflePiece.style.left = leftBlank + "px";
				topBlank = previousTop;
				leftBlank = previousLeft;
	
			}
			
			else if(choice==2){
				getStyle((topBlank + 100) + "px", leftBlank + "px")||(getStyle((topBlank - 100)+"px", leftBlank+"px"));
				previousTop=parseInt(shufflePiece.style.top);
				previousLeft=parseInt(shufflePiece.style.left);
				shufflePiece.style.top = topBlank + "px";
				shufflePiece.style.left = leftBlank + "px";
				topBlank = previousTop;
				leftBlank = previousLeft;
			
			}
			
			else{
				getStyle(topBlank + "px", (leftBlank + 100) + "px")||(getStyle(topBlank + "px", (leftBlank - 100) +"px"));
				previousTop=parseInt(shufflePiece.style.top);
				previousLeft=parseInt(shufflePiece.style.left);
				shufflePiece.style.top = topBlank + "px";
				shufflePiece.style.left = leftBlank + "px";
				topBlank = previousTop;
				leftBlank = previousLeft;
			
			}
		}  
	
	}
	
	
	document.getElementById("controls").onlick=shuffle;
}
