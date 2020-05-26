var numSquares=6;
var colors=generateRandomColor(numSquares) 
var squares=document.querySelectorAll(".square");
var ques=document.querySelector("#ques");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var pickedColor=pickColor();
ques.textContent=pickedColor;
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	ques.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	ques.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		}
});		
reset.addEventListener("click",function(){
	// generate all new color
	colors=generateRandomColor(numSquares)
	// pick a new random color from array
	pickedColor=pickColor()
	// change ques to match picked color
    ques.textContent=pickedColor
    this.textContent="New Color"
	// change the colors of square
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		}
	h1.style.background="steelblue"	
	message.textContent="";
})
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
	var clickedColor =this.style.background;
	if(clickedColor===pickedColor){
		for(var i=0;i<squares.length;i++){
		squares[i].style.background=pickedColor;
		}
		message.textContent="correct!!!";
		h1.style.background=pickedColor;
		reset.textContent="Play Again?"	
	}else{this.style.background="#232323"
          message.textContent="Try Again!!!";                     }
})
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	// generate an array
	var arr=[]
	// repeat num times
	for(var i=0;i<num;i++){
      // push into an array
	arr.push(randomColor());
	}
	// return an array
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+b +")";
}



