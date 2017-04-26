$(document).ready(function(){
	$(".menu").click(function(){
		if ($(".sidebar-container").hasClass("sidebar-active")) {
			$(".sidebar-container").removeClass("sidebar-active")
			$(".menu").removeClass("menu-active")
		}
		else{
			$(".menu").addClass("menu-active")
			$(".sidebar-container").addClass("sidebar-active")
		}
	});
	$(".contents").click(function(){
		if ($(".sidebar-container").hasClass("sidebar-active")) {
			$(".sidebar-container").removeClass("sidebar-active")
			$(".menu").removeClass("menu-active")
		}
		else{
			return false
		}
	});
});