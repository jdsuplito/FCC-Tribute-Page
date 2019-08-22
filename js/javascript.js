
let prevArrow = document.querySelector('.arrowNext_left');

let nextArrow = document.querySelector('.arrowNext_right');
let mainPortrait = document.querySelector('#image');

nextArrow.onclick = function() {
	mainPortrait.style.filter = 'brightness(1.5)';
}

prevArrow.onclick = function() {
	mainPortrait.style.filter = 'brightness(1)';
}