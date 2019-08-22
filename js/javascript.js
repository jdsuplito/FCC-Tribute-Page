var portrait = {
	prevArrow: document.querySelector('.arrowNext_left'),
	nextArrow: document.querySelector('.arrowNext_right'),
	image1Container: document.querySelector('#image-1-container'),
	mainPortrait: document.querySelector('#image'),
	currentBorderRotation: 0
}

function increaseBorderRotation() {
	portrait.image1Container.style.transform = `rotate(${portrait.currentBorderRotation}deg)`;
	portrait.currentBorderRotation += 0.1;
} 

portrait.nextArrow.onclick = function() {
	portrait.mainPortrait.style.filter = 'brightness(1.5)';
}

portrait.prevArrow.onclick = function() {
	portrait.mainPortrait.style.filter = 'brightness(1)';
}

portrait.image1Container.onmouseenter = function() {
	var increaseRotationOnHover = setInterval(increaseBorderRotation, 1);
	portrait.image1Container.onmouseleave = function() {
		clearInterval(increaseRotationOnHover);
	}
}
