const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

var x = 90, y = 90, vel = 6.5;
var frame = 0, dir = 1;
ctx.fillStyle = "#ccf";
ctx.fillRect(0,0,400,400)



var img = new Image();
img.src = 'rpg_sprite_walk.png'
ctx.drawImage(img, 24*frame, 32*dir, 24,32, x, y, 24*3, 32*3);


addEventListener("keydown", (event) => {
	switch(event.code){
		case "ArrowDown":
			dir = 0;
			y -= vel;
			break;
		case "ArrowUp":
			dir = 1;
			y += vel;			
			break;
		case "ArrowLeft":
			dir = 2;
			x += vel;
			break;
		case "ArrowRight":
			dir = 3;
			x -= vel;
			break;
	}

	if (frame<7){
		frame++
	}else{
		frame = 0
	}
	ctx.fillRect(0,0,400,400)
	ctx.drawImage(img, 24*frame, 32*dir, 24,32, x, y, 24*3, 32*3);
});
