/* Examine the code in these two files and determine each script's behavior.
Refactor the code to use the ES6 class syntax.
Refactor the code to avoid assigning this to a variable.
 */

class Timer {  //constructor function 
  constructor(seconds) {
    this.seconds = seconds;  //instance variable 
  }
  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }
  
      console.log(this.seconds);
      this.seconds -= 1; //countdown seconds until value reaches 0, then clearInterval
    }, 1000); //1 second intervals
  }
}

module.exports = Timer; //exports Timer constructor
