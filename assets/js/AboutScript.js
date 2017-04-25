$(document).ready(function(){
	$("#thanks").hide();
	$("#contact").click(function(){
		$("#contact").remove()
		$(".form").css("visibility", "visible")
	});

	$("#submit").click(function(){
		$(".form").hide();
		$("#thanks").show("slow");
	})
});