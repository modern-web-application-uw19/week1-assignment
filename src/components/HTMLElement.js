class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

module.exports = HTMLElement;

// usage:
const lovelaceQuote = new HTMLElement('p',
  'I am never so happy as when I am really engaged in good earnest...');
console.log(lovelaceQuote.render());
// output:
// <p>I am never so happy as when I am really engaged in good earnest...</p>
