$(document).ready(function(){var e=$("#about-button"),o="<div><h3>About LEO</h3><p>Ultricies pulvinar ac magna, lectus duis dapibus vel. Amet porta aliquet augue, vel est montes, adipiscing? Parturient dolor, auctor eu ac, proin odio montes augue sed, sed integer phasellus auctor trinon plac</p></div>";e.click(function(){$("#main-banner-container").toggleClass("flipped"),$("#main-info").html(o)});var t=$("#collaboration-button"),i="<div><h3>Who I work with</h3><p>Ultricies pulvinar ac magna, lectus duis dapibus vel. Amet porta aliquet augue, vel est montes, adipiscing? Parturient dolor, auctor eu ac, proin odio montes augue sed, sed integer phasellus auctor trinon plac</p></div>",n="<div><h4>Bands I've Worked With</h4><h4>Videos I've Composed For</h4><h4>In My Spare Time</h4></div>";t.click(function(){$("#main-info").html(i),$("#tall-info").html(n);var e=function(){$("#main-banner-container").removeClass("flipped"),$("#about-content").removeClass("flipped"),console.log(e)},o=function(){$("#main-banner-container").addClass("flipped"),$("#about-content").addClass("flipped"),console.log(o)};e(),o()});var a=$("#news-button"),l="<div><h3>What's new</h3><p>Some things a dolor,teger phasellus auctor trinon plac</p></div>";a.click(function(){$("#about-content").toggleClass("flipped"),$("#tall-info").html(l)});var s=function(){var e=window.innerWidth;console.log(e);var o=e/12;console.log(o),console.log(e),console.log(o),768>=e?($(".small-hide").hide(),$(".tall-1").css("height","300px"),$(".tall-4").css("height","300px"),$(".tall-2").css("height","300px;")):($(".tall-1").css("height",o),$(".tall-4").css("height",4*o),$(".tall-2").css("height",2*o))};s(),$(window).resize(function(){s()})});