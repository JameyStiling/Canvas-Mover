document.addEventListener("DOMContentLoaded", function ()
{
	const canvas = document.getElementById('moving-canvas');

	//set context
	const context = canvas.getContext('2d');

	//setup
	context.strokeStyle = '#cool';
	context.lineCap = 'round';
	context.lineJoin = 'round';

	let nowDrawing = false;
	let prevX;
	let prevY;

	function draw(e)
	{
		if (!nowDrawing) return;
		console.log(e)
		context.beginPath();
		context.moveTo(prevX, prevY);

		//position relative to container
		context.lineTo(e.offsetX, e.offsetY);
		context.stroke();
		prevX = e.offsetX;
		prevY = e.offsetY;
	}

	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mousedown', function (e)
	{
		nowDrawing = true;

		//every mouse down event resets the starting point
		prevX = e.offsetX;
		prevY = e.offsetY;

	});
	canvas.addEventListener('mouseup', function () { nowDrawing = false; });
	canvas.addEventListener('mouseout', function () { nowDrawing = false; });
});

// speed of mouse dictate color?