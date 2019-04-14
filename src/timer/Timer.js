class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    let timerSeconds = this.seconds;
    const timerInterval = setInterval(() => {
      if (timerSeconds === 0) {
        clearInterval(timerInterval);
      }

      console.log(timerSeconds);
      timerSeconds -= 1;
    }, 1000);
  }
}

module.exports = Timer;
