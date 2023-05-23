// Configurar ambiente - capturar canvas e configurar
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Variáveis globais
var pc, entities = [], map;

// Entidades
class Entity{
	constructor(src, x, y, sx, sy, sw, sh, w, h){
		this.src = src;
		this.x = x;
		this.y = y;
		this.sx = sx;
		this.sy = sy;
		this.sw = sw;
		this.sh = sh;
		this.w = w;
		this.h = h;
		this.img = new Image()
		this.img.src = src;
	}
	draw(){
		ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
	}
}

class Character extends Entity{
	constructor(src, x, y, sx, sy, sw, sh, w, h){
		super(src, x, y, sx, sy, sw, sh, w, h);
		this.i_img = 0;
		this.direction = 0;
		this.vel = 10;
	}
	draw(){
		if(this.i_img > 2)
			this.i_img = 0;		
		this.i_img++;
		ctx.drawImage(this.img, this.sx*this.i_img, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
	}
}

// Load para carregar
pc = new Character("rpg_sprite_walk.png", 24, 32, 24, 32, 24, 32, 24*2, 32*2);


// Main (game setup e game loop)
function gameLoop(){
	ctx.fillRect(0,0,400,400);

	for(let entity of entities){
		entity.draw();
	}
	pc.draw();
	requestAnimationFrame(gameLoop)
}
pc.img.onload = function(){
	gameLoop();
}