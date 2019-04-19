class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    this.setInterval(function timerInterval() {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      this.seconds -= 1;
    }, 1000);
  }
/* Refactor this
    }
    var timerInterval = setInterval(function () {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}
*/
}
module.exports = Timer;
