class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    let timeOut = this.seconds;
    const timeInterval = setInterval(() => {
      if (timeOut === 0) {
        clearInterval(timeInterval);
      }
      console.log(timeOut);
      timeOut -= 1;
    }, 1000);
  }
}

module.exports = Timer;
