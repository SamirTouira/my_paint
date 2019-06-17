
//setup variables
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let originX, originY;

let DrawAuthorized = false;



//Colors/Size functions
const size = document.querySelector('#brush-size');
const colors = document.querySelector('#color-picker');

colors.addEventListener('change', function(){
	ctx.fillStyle = this.value
	ctx.strokeStyle = this.value;
})
size.addEventListener('change', function(){
	ctx.lineWidth = this.value
})



const clear = document.querySelector('#clear-btn');

clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))



//Event and function on drawing line
canvas.addEventListener('mousedown', (e) => {
	DrawAuthorized = true;
	originX = e.offsetX;
	originY = e.offsetY;
	console.log(originY, originX);
})

canvas.addEventListener('mousemove', (e) => {
	if(!DrawAuthorized) return;

	drawLine(e);
});



canvas.addEventListener('mouseup', () => DrawAuthorized = false)


function drawLine(e){
	ctx.beginPath();
	ctx.moveTo(originX, originY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	ctx.closePath();
	originX = e.offsetX;
	originY = e.offsetY;
}