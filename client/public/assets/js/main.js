$(document).ready(function () {
	$("#frontpage").attr("style", "height:" + (window.innerHeight) + "px");
	window.onresize = function (event) {
		$("#frontpage").attr("style", "height:" + (window.innerHeight) + "px");
		console.log(window.innerHeight);
	
	};
});
