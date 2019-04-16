const HTMLElement = require('./HTMLElement');

console.log(HTMLElement);
// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// Export class here
module.exports = DivElement;

const xx = new DivElement('What a wonderful world');

// console.log(andIThinkToMyself.render());
console.log(xx.render());
