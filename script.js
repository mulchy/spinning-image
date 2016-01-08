$(document).ready(function() {
    $("button").on('click', function() {
	var degreesToRotate = Math.random() * 360 * 10;
	$("#image-to-spin").css("transform", "rotate(" + degreesToRotate + "deg)");
    });
});
