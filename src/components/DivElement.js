const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
  }
}

// Test class here
const andIThinkToMyself = new DivElement('What a wonderful world');
console.log(andIThinkToMyself.render());

// Export class here
module.exports = DivElement;
