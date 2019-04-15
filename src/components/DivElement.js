const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    // passed to the parent Book constructor
    super();
    this.tag = 'div';
    this.content = content;
  }
}

// Export class here
module.exports = DivElement;
