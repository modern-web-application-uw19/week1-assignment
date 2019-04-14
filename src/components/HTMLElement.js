// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    if (this.content !== undefined) {
      return `<${this.tag}>${this.content}</${this.tag}>`;
    }
    return `<div>${this.tag}</div>`;
  }
}

// Test class here
const lovelaveQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');
console.log(lovelaveQuote.render());


// Export class here
module.exports = HTMLElement;
