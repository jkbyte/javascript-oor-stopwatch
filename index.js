
function stopwatch() {
    let startTime, stopTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Watch already started..');
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Watch alrady stopped..');
        running = false;
        stopTime = new Date();
        const seconds = (stopTime.getTime() - startTime.getTime()) /1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        stopTime = null;
        duration = 0;
        running = false;
        console.log('Timer reset..');
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return 'Watch run for: ' + duration;
        }
    });
}

const sw = new stopwatch();