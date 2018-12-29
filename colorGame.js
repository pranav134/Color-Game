var square = document.querySelectorAll(".squares");
var color = document.querySelector("#color");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var reset = document.querySelector("#reset");
var msg = document.querySelector(".message");
var colors=[];
var num=6;
var pickedColor;

easy.addEventListener("click", function(){
	num=3;
	h1.style.backgroundColor="steelblue";
	msg.textContent="";
	reset.textContent="New Colors";
	hard.classList.remove("selected");
	easy.classList.add("selected");
	var colors=[];
	for(var i=0;i<num;i++)
	{
		colors.push(randomColor());
	}

	pickedColor = colors[pickColor(num)];

	color.textContent = pickedColor;
	for(var i=0;i<6;i++)
	{
		if(colors[i])
		{
			square[i].style.backgroundColor= colors[i];
		}else
		{
			square[i].style.backgroundColor = "#232323";
		}
	}
});

hard.addEventListener("click", function(){
	num=6;
	h1.style.backgroundColor="steelblue";
	msg.textContent="";
	reset.textContent="New Colors";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	var colors=[];
	for(var i=0;i<num;i++)
	{
		colors.push(randomColor());
	}

	pickedColor = colors[pickColor(num)];

	color.textContent = pickedColor;
	for(var i=0;i<num;i++)
	{
		square[i].style.backgroundColor= colors[i];
	}
});

reset.addEventListener("click" , function(){
	reset.textContent="New Colors";
	h1.style.backgroundColor="steelblue";
	msg.textContent="";
	if(num===6){
		hard.classList.add("selected");
		easy.classList.remove("selected");
	}else{
		hard.classList.remove("selected");
		easy.classList.add("selected");
		for(var i =num;i<6;i++)
		{
			square[i].style.backgroundColor="#232323";
		}
	}
	var colors=[];
	for(var i=0;i<num;i++)
	{
		colors.push(randomColor());
	}

	pickedColor = colors[pickColor(num)];

	color.textContent = pickedColor;
	for(var i=0;i<num;i++)
	{
		square[i].style.backgroundColor= colors[i];
	}
});

for(var i=0;i<num;i++)
{
	colors.push(randomColor());
}

function pickColor(num){
	var a= Math.floor(Math.random()*num);
	return a;
}

 pickedColor = colors[pickColor(num)];

color.textContent = pickedColor;

for(var i=0;i<square.length;i++)
{
	square[i].style.background= colors[i];
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor===pickedColor)
		{
			for(var j=0;j<square.length;j++)
			{
				square[j].style.background = pickedColor;
			}
			h1.style.backgroundColor = pickedColor;
			msg.textContent = "CORRECT!!";
			reset.textContent="Play Again?";
		}else{
			this.style.background= "#232323";
			msg.textContent = "Try Again";
		}
	});
}


function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";
}