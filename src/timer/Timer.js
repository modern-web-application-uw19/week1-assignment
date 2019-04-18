class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  getTime() {
    return this.seconds;
  }

  setTime(value) {
    this.seconds = value;
  }

  start() {
    let seconds = this.getTime();
    const timerInterval = setInterval(function() {
      if (seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(seconds);
      seconds -= 1;
    }, 1000);
  }
}

module.exports = Timer;
