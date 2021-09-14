const progress1 = document.querySelector('.progress1');
    progress.addEventListener('input', function() {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`
    })
    const progress1 = document.querySelector('.progress2');
    progress.addEventListener('input', function() {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`
    })    