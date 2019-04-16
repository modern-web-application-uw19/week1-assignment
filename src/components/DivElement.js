const HTMLElement = require('./HTMLElement');

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

module.exports = DivElement;
