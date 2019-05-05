const HTMLElement = require('./HTMLElement');

class DivElement extends HTMLElement {
  constructor(content) {
    super();
    this.content = content;
  }

  render() {
    return new HTMLElement('div', this.content).render();
  }
}

module.exports = DivElement;
