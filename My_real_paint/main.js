var canvas, ctx,
brush = {
			x: 0,
			y: 0,
			color: "#000000",
			size: 10,
			down: false,
},
strokes  = [],
currentStrokes = null;
function redraw()
{

}

function init()
{
	canvas = $('#draw');
	canvas.attr({
		width: window.innerWidth,
		height: window.innerHeight,
		});
	ctx = canvas.getContext('2d');

	canvas.mousedown(function(e)
	{
		brush.down = true;

		brush.x = pageX;
		brush.y = pageY;

		currentStroke = {
			color: brush.color,
			size: brush.size,
			points: [],
		};

		currentStrokes.points.push(
		{
			x: brush.x,
			y: brush.y,
		});

		strokes.push(currentStroke);

		redraw();
	})
}

$(init);