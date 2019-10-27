// sr.reveal('.withImg .left',{
// 	origin: 'bottom',
// 	distance: '50px',
// 	duration: 1000,
// 	easing: 'ease', 
// 	mobile: true,
// 	reset: true,
// 	viewFactor: 0.2,

// });\


window.addEventListener('scroll', function(){
	console.log('Scrollin');
});

var scroll = window.requestAnimationFrame || function(callback){window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop(){
	elementsToShow.forEach(function(element){
		if(isElementInViewPort(element)){
			element.classList.add('is-visible')
		}
		else{
			element.classList.remove('is-visible');
		}
	});
	scroll(loop);

}

loop();


function isElementInViewPort(el){
	if(typeOf jQuery === "function" && el instanceof jQuery){
		el = el[0];
	}

	var rect = el.getBoundingClientRect();

	return(
		(rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&  rect.top <= (window.innerHeight || document.documentElement.clientHeight))

		|| (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
}