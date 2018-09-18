$(function() {
    fadeLoop();
});
function fadeLoop(){
	$(".cake-wrapper").fadeIn(500).delay(4000).fadeOut(500, function(){
    	$(".pizza-wrapper").fadeIn(500).delay(4000).fadeOut(500, function(){
    		$(".icecream-wrapper").fadeIn(500).delay(4000).fadeOut(500, function(){
    			$(".gift-wrapper").fadeIn(500).delay(4000).fadeOut(500, function(){
    				$(".hat-wrapper").fadeIn(500).delay(4000).fadeOut(500, function(){
	    				fadeLoop();
	    			});
    			});
    		});
    	});
    });
}