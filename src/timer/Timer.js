
const Timer = class {
  constructor(seconds) {
    this.seconds = seconds;
    // eslint-disable-next-line prefer-arrow-callback
  }

  start() {
    let time = this.seconds;
    // eslint-disable-next-line prefer-arrow-callback
    // eslint-disable-next-line func-names
    const timerInterval = setInterval(() => {
      if (time < 0) {
        clearInterval(timerInterval);
      } else {
      // eslint-disable-next-line no-console
        console.log(time);
        time -= 1;
      }
    }, 1000);
  }
};

module.exports = Timer;
