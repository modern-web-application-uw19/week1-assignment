const Timer = require('./Timer');

class Countdown extends Timer {
  constructor(seconds) {
    super(seconds);
    this.seconds = seconds;
  }
}

const countdown = new Countdown(10);
countdown.start();
