var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineWidth = 5;
var down = false;

canvas.adddEventListener('mousemove', draw);


function draw(e)
{
	xPos = e.clientX - canvas.offsetLeft;
	yPos = e.clientY - canvas.offsetTop;

	alert(canvas.offsetLeft);
	alert(canvas.offsetTop);
}
