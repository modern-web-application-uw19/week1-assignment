class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  start() {
    let instance;
    const timerInterval = setInterval(function () {
      if (instance.seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(instance.seconds);
      instance.seconds -= 1;
    }, 1000);
  }
}


export default Timer;
