 $(document).ready(function() { 

// var wiDth = $('square-div').css('width'); // get width
// $('square-div').css('height', wiDth);

// $(".rotates").on('mouseover', function() {

// 	console.log('clicked');
// });
// var rotateArray = $.makeArray(rotateDivs);

// $('rotateDivs').css('padding', "33px;");
// for (var i = 0; i <= rotateArray.length; i++) {
// $('rotates').css('background-image', "url(../img/square3.jpg");
// $('rotates').css('border', 'yellow');
// }


// var divs = $('.rotates'),//fetch all the divs
//     len = divs.length,//number of divs on page
//     randomDiv,//random number that will be generated
//     speed = 1000;//interval in miliseconds for the new div to appear

// console.log(divs);
// var interval = setInterval(
//                 function() { 
//                         randomDiv = Math.floor(Math.random()*len);
//                         // divs.removeClass('flipped');
//                         divs.eq(randomDiv).addClass('show');                         
//                 } , speed);


// var flip = function() {
// 	if () 
// }

var $aboutClick = $("#about-button");
var $aboutContent = "<div><h3>About LEO</h3><p>Ultricies pulvinar ac magna, lectus duis dapibus vel. Amet porta aliquet augue, vel est montes, adipiscing? Parturient dolor, auctor eu ac, proin odio montes augue sed, sed integer phasellus auctor trinon plac</p></div>";
$aboutClick.click(function () {
	console.log("clicked about");
	// $("#tall-banner").append($aboutContent).toggleClass("front-2");
	$("#main-banner-container").toggleClass("flipped");
	$("#main-info").replaceWith($aboutContent);
});

var $newsClick = $("#news-button");
var $newsContent = "<div><h3>What's new</h3><p>Some things a dolor,teger phasellus auctor trinon plac</p></div>";
$newsClick.click(function () {
	console.log("clicked news");
	// $("#tall-banner").append($aboutContent).toggleClass("front-2");
	$("#about-content").toggleClass("flipped");
	$("#tall-info").replaceWith($newsContent);
});

var w = window.innerWidth;
console.log(w);
var oneBlock = w/12;
console.log(oneBlock);

// $("#test").css( "border", "3px solid yellow");
$(".tall-1").css( "height", oneBlock);
$(".tall-4").css( "height", oneBlock*4);
$(".tall-2").css( "height", oneBlock*2);

$( window ).resize(function() {
  $(".tall-1").css( "height", oneBlock);
  $(".tall-4").css( "height", oneBlock*4);
   $(".tall-2").css( "height", oneBlock*2);
   console.log("resizing!");
});

console.log("hi!");

});