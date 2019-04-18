// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

const lovelaceQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');
console.log(lovelaceQuote.render());
// <p>I am never so happy as when I am really engaged in good earnest...</p>

const div = new HTMLElement('div', 'University of Washington');
console.log(div.render());
// <div>University of Washington</div>

// Export class here
module.exports = HTMLElement;
