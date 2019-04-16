const HTMLElement = require('./HTMLElement');

// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// DivElement.prototype

// Export class here
module.exports = DivElement;
