// creates a class with a single argument
class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const timerInterval = setInterval(() => { // inherits the THIS context
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      process.stdout.write(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

module.exports = Timer;
