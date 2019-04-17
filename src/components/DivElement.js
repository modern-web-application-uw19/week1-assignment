const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(text) {
    super('div');
    this.text = text;
  }
}

const shakespear = new DivElement('To be or not to be?');

console.log(shakespear.render());
// Export class here
module.exports = DivElement;
