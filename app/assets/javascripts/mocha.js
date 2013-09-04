/*
 * --------------------------------------------------------------------
 * Simple Scroller
 * by Siddharth S, www.ssiddharth.com, hello@ssiddharth.com
 * Version: 1.0, 05.10.2009 	
 * --------------------------------------------------------------------
 */
$(document).ready(function() 
{	 
	var index = 0;
	var images = $("#gallery div");
	var thumbs = $("#thumbs img");
	var imgHeight = $(thumbs).attr("height");
	$(thumbs).slice(0,3).clone().appendTo("#thumbs");
	for (i=0; i<thumbs.length; i++)
	{
		$(thumbs[i]).addClass("thumb-"+i);
		$(images[i]).addClass("tes-"+i);
	}

	$("#next").click(sift);
	show(index);
	setInterval(function(){counterer(); sift();}, 8500);
//	setInterval(sift, 3000);
	
	function sift()
	{
		if (index<(thumbs.length-1)){index++ ; }
		else {index=0}
		show (index);
		counterer(index);
	}
	function show(num)
	{
		$(images).fadeOut(300);
		$(".tes-"+num).stop().fadeIn(300);
		var scrollPos = (num+1)*imgHeight;
		$("#thumbs").stop().animate({scrollTop: scrollPos}, 300);		
		console.log(scrollPos, "div.tes-"+num);
	}

	function counterer(x){
//		var tess = sift(); 
	var area = $(".tes")[x],
      results = {
        paragraphs: document.getElementById('result__paragraphs'),
        words: document.getElementById('result__words'),
        characters: document.getElementById('result__characters'),
        all: document.getElementById('result__all')
      }

  new Countable.live(area, function (counter) {
    if ('textContent' in document.body) {
      results.paragraphs.textContent = counter.paragraphs
      results.words.textContent = counter.words
      results.characters.textContent = counter.characters
      results.all.textContent = counter.all
    } else {
      results.paragraphs.innerText = counter.paragraphs
      results.words.innerText = counter.words
      results.characters.innerText = counter.characters
      results.all.textContent = counter.all
    }
  })
	var delay = $("#result__words").text()*250;
//	sift(delay);
		test1.value = delay;
}
});