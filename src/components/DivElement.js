const HTMLElement = require('./HTMLElement');

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

module.exports = DivElement;

// usage:
const andIThinkToMyself = new DivElement('What a wonderful world');
console.log(andIThinkToMyself.render());
// output:
// <div>What a wonderful world</div>
