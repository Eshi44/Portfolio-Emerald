$(document).ready(function () {
	$("#frontpage").attr("style", "height:" + screen.height + "px");
	window.onresize = function (event) {
		$("#frontpage").attr("style", "height:" + screen.height + "px");
	
	};
});
