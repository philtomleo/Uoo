$(function(){
	$(".nav-btn").click(function(){
	  $(this).parent(".nav").toggleClass("navslide");
	  $(".nav-list").toggleClass("nav-show");
	});
});