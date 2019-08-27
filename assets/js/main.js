var thePortrait = {
    mainImage: document.querySelector('#image'),
    mainImageBorder: document.querySelector('#border'),
    borderTransitionDurationMS: 2500,
    borderTransitionRunning: false,
    borderRotateSFX: new Audio('assets/sfx/rotate-sound.mp3'),
    nextBtn: document.querySelector('#arrow-right'),
    previousBtn: document.querySelector('#arrow-left'),
    switchImage: function(e) {
        if(this.borderTransitionRunning === false) {
            this.borderTransitionRunning = true;
            this.mainImageBorder.style.animation = e.target.id === 'arrow-right' ? `rotateBorderCW ${this.borderTransitionDurationMS}ms forwards` : `rotateBorderCCW ${this.borderTransitionDurationMS}ms forwards`;

            this.borderRotateSFX.play();

            setTimeout(this.removeBorderAnimation.bind(this), this.borderTransitionDurationMS);
        }
    },

    removeBorderAnimation: function() {
        this.mainImageBorder.style.animation = 'unset';
        this.borderTransitionRunning = false;
        this.borderRotateSFX.pause();
        this.borderRotateSFX.currentTime = 0;
    },

    init: function(e) {
        this.nextBtn.addEventListener('click', this.switchImage.bind(this), false);

        this.previousBtn.addEventListener('click', this.switchImage.bind(this), false);

        this.borderRotateSFX.playbackRate = 8;
    }
}

thePortrait.init();
