var portrait = {
	prevArrow: document.querySelector('.arrowNext_left'),
	nextArrow: document.querySelector('.arrowNext_right'),
	image1Container: document.querySelector('#image-1-container'),
	mainPortrait: document.querySelector('#image'),
	currentBorderRotation: 0,
	currentPortrait: 0,
	portraitPictures: [
		'../pictures/ada-1.png',
		'../pictures/ada-2.png',
		'../pictures/ada-3.png'
	]
}

function increaseBorderRotation() {
	portrait.image1Container.style.transform = `rotate(${portrait.currentBorderRotation}deg)`;
	portrait.currentBorderRotation += 0.1;
}

portrait.prevArrow.onclick = function() {
	portrait.currentPortrait = portrait.currentPortrait === 0 ? portrait.portraitPictures.length-1 : portrait.currentPortrait-1;
	portrait.mainPortrait.style.backgroundImage = `url("${portrait.portraitPictures[portrait.currentPortrait]}")`;
}

portrait.nextArrow.onclick = function() {
	portrait.currentPortrait = portrait.currentPortrait === portrait.portraitPictures.length-1 ? 0: portrait.currentPortrait+1;
	portrait.mainPortrait.style.backgroundImage = `url("${portrait.portraitPictures[portrait.currentPortrait]}")`;
}

portrait.image1Container.onmouseenter = function() {
	var increaseRotationOnHover = setInterval(increaseBorderRotation, 1);
	portrait.image1Container.onmouseleave = function() {
		clearInterval(increaseRotationOnHover);
	}
}
