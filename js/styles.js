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


var divs = $('.rotates'),//fetch all the divs
    len = divs.length,//number of divs on page
    randomDiv,//random number that will be generated
    speed = 1000;//interval in miliseconds for the new div to appear

console.log(divs);
var interval = setInterval(
                function() { 
                        randomDiv = Math.floor(Math.random()*len);
                        // divs.removeClass('flipped');
                        divs.eq(randomDiv).addClass('show');                         
                } , speed);


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