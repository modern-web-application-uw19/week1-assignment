function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = function () {
  const instance = this;
  var timerInterval = setInterval(() => {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

// class Timer {
//   constructor(seconds) {
//     this.seconds = seconds;
//   }

//   start () {
//     setInterval(())
//   }
// }

module.exports = Timer;
