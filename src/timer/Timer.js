// function Timer(seconds) {
// this.seconds = seconds;
// }

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

// Timer.prototype.start = function() {
//   const instance = this;
//   var timerInterval = setInterval(() => {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };

// //es6

// Timer.prototype.start = function() {
//   const instance = this;
//   var timerInterval = setInterval(() => {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };

module.exports = Timer;
