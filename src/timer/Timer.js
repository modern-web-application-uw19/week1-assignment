
/*
function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = function() {
  var instance = this;
  var timerInterval = setInterval(function() {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};
*/

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
start () {  
  var seconds = this.getTime();
  var timerInterval = setInterval(function() {
    if (seconds === 0) {
      clearInterval(timerInterval);
    }
    console.log(seconds);
    seconds -= 1;
  }, 1000);
}
}
module.exports = Timer;
