const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    const divTag = 'div';
    super(divTag, content);
  }
}

// Export class here
module.exports = DivElement;
