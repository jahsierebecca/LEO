 $(document).ready(function() { 

	var $aboutClick = $("#about-button");
	var $aboutContent = "<div><h3>About LEO</h3><p>Ultricies pulvinar ac magna, lectus duis dapibus vel. Amet porta aliquet augue, vel est montes, adipiscing? Parturient dolor, auctor eu ac, proin odio montes augue sed, sed integer phasellus auctor trinon plac</p></div>";
	$aboutClick.click(function () {
		// console.log("clicked about");
		// $("#tall-banner").append($aboutContent).toggleClass("front-2");
		$("#main-banner-container").toggleClass("flipped");
		$("#main-info").html($aboutContent);
	});

	var $collaborationClick = $("#collaboration-button");
	var $collabContent = "<div><h3>Who I work with</h3><p>Ultricies pulvinar ac magna, lectus duis dapibus vel. Amet porta aliquet augue, vel est montes, adipiscing? Parturient dolor, auctor eu ac, proin odio montes augue sed, sed integer phasellus auctor trinon plac</p></div>";
	var $collabLinks = "<div><h4>Bands I've Worked With</h4><h4>Videos I've Composed For</h4><h4>In My Spare Time</h4></div>";
	$collaborationClick.click(function () {

		$("#main-info").html($collabContent);
		$("#tall-info").html($collabLinks);

		var deleteClass = function() {
			$("#main-banner-container").removeClass("flipped");
			$("#about-content").removeClass("flipped");
			console.log(deleteClass);
		}
		var switchClass = function() {
    		$("#main-banner-container").addClass("flipped");
    		$('#about-content').addClass("flipped");
    		console.log(switchClass);
		}

		deleteClass();
		switchClass();
		// console.log("clicked about");
		// $("#tall-banner").append($aboutContent).toggleClass("front-2");

	});

	var $newsClick = $("#news-button");
	var $newsContent = "<div><h3>What's new</h3><p>Some things a dolor,teger phasellus auctor trinon plac</p></div>";
	$newsClick.click(function () {
		// console.log("clicked news");
		// $("#tall-banner").append($aboutContent).toggleClass("front-2");
		$("#about-content").toggleClass("flipped");
		$("#tall-info").html($newsContent);
	});


	var newSize = function(){
		var w = window.innerWidth;
		console.log(w);
		var oneBlock = w/12;
		console.log(oneBlock);
		console.log(w);
		console.log(oneBlock);
		if (w <= 768) {
			$('.small-hide').hide();
			$(".tall-1").css( "height", "300px");
			$(".tall-4").css( "height", "300px");
			$(".tall-2").css( "height", "300px;");
		} else {
			$(".tall-1").css( "height", oneBlock);
			$(".tall-4").css( "height", oneBlock*4);
			$(".tall-2").css( "height", oneBlock*2);
		}
	};
	 	
	 newSize();	
	// if (window.matchMedia('(min-width: 768px)').matches) {
	// 	newSize();
	// 	console.log('hi');
	// 	$(window).resize(function(){
	// 		newSize();
	// 	});
	// }

	$(window).resize(function(){
		newSize()
	});

});