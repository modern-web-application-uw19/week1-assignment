// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    // eslint-disable-next-line no-undef
    const element = document.createElement(this.tag);
    element.innerHTML = this.content;
    // eslint-disable-next-line no-console
    console.log(element);
  }
};
// Export class here
module.exports = new HTMLElement();

const lovelaveQuote = new HTMLElement('h1', 'I am never so happy as when I am really engaged in good earnest...');

console.log(lovelaveQuote.render());