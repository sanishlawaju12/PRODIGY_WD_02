class Stopwatch {
    constructor() {
        this.seconds = '00';
        this.tens = '00';
        this.mins = '00';
        this.interval = null;
        this.getSeconds = document.querySelector('.seconds');
        this.getTens = document.querySelector('.tens');
        this.getMins = document.querySelector('.mins');
        this.btnStart = document.querySelector('.btn-start');
        this.btnStop = document.querySelector('.btn-stop');
        this.btnReset = document.querySelector('.btn-reset');
        this.btnStart.addEventListener('click', this.start.bind(this));
        this.btnStop.addEventListener('click', this.stop.bind(this));
        this.btnReset.addEventListener('click', this.reset.bind(this));
    }

    start() {
        clearInterval(this.interval);
        this.interval = setInterval(this.startTimer.bind(this), 10);
        
    }

    stop() {
        clearInterval(this.interval);
    
    }

    reset() {
        clearInterval(this.interval);
        this.tens = '00';
        this.seconds = '00';
        this.mins = '00';
        this.getSeconds.innerHTML = this.seconds;
        this.getTens.innerHTML = this.tens;
        this.getMins.innerHTML = this.mins;

    }

    startTimer() {
        this.tens++;
        if (this.tens <= 9) {
            this.getTens.innerHTML = '0' + this.tens;
        } else {
            this.getTens.innerHTML = this.tens;
        }
        if (this.tens > 99) {
            this.seconds++;
            this.getSeconds.innerHTML = ('0' + this.seconds).slice(-2);
            this.tens = 0;
            this.getTens.innerHTML = '00';
        }
        if (this.seconds > 59) {
            this.mins++;
            this.getMins.innerHTML = ('0' + this.mins).slice(-2);
            this.seconds = 0;
            this.getSeconds.innerHTML = '00';
        }
    }
}

// Initialize Stopwatch
const stopwatch = new Stopwatch();
