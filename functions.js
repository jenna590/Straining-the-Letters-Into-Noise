$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 35000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 500,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
    startVisible: true,
});

$(document).ready(function(){
    animateDiv('#obj0');
    animateDiv('#obj1');
    animateDiv('#obj2');
    animateDiv('#obj3');
    animateDiv('#obj4');
    animateDiv('#obj5');
    animateDiv('#obj6');
    animateDiv('#obj7');
    animateDiv('#obj8');
    animateDiv('#obj9');
    animateDiv('#obj10');
    animateDiv('#room0');
    animateDiv('#room1');
    animateDiv('#room2');
    animateDiv('#room3');
    animateDiv('#room4');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 8000,   function(){
      animateDiv(myclass);        
    });
    
};