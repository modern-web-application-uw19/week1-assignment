const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super();
    this.tag = 'div';
    this.content = content;
  }
}

// test
const div = new DivElement('University of Washington');
console.log(div.render());

// Export class here
module.exports = DivElement;
