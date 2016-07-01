function draw()
{
    var scene = document.getElementById("scene");
    var context = scene.getContext("2d");
    drawPlayboard(context);
    drawCactpotCircles(context);
}

function drawPlayboard(context)
{
    // Draw 7 arrows for each column/row/diagonal
    var RightArrow = new Path2D();
    RightArrow.rect(0, 10, 25, 16);
    RightArrow.moveTo(25, 5);
    RightArrow.lineTo(40, 17);
    RightArrow.lineTo(25, 31);
    for (i = 0; i < 3; i++)
    {
	context.save();
	context.translate(0, (50 + 25 + 8) + i * (50 * 2 + 10));
	context.fill(RightArrow);
	context.restore();

	context.save();
	context.translate((50 + 25 + 40) + i * (50 * 2 + 10), 0);
	context.rotate((Math.PI / 2));
	context.fill(RightArrow);
	context.restore();
    }
}

function drawCactpotCircles(context)
{
    // Draw 9 circles for each play piece
    var radius = 50;
    var xOffset = 50;
    var yOffset = 50;
    var margin = radius * 2 + 10;
    var startAngle = 0;
    var endAngle = Math.PI * 2;
    for (i = 0; i < 3; i++)
    {
	var y = yOffset + 50 + (margin * i);
	for (j = 0; j < 3; j++)
	{
	    context.beginPath();
	    var x = xOffset + 50 + (margin * j);
	    context.arc(x, y, radius, startAngle, endAngle, true);
	    context.fill();
	}
    }
}
