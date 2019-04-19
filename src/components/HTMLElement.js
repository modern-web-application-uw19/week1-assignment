// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return '<${this.tag}>${this.content}</${this.tag}>';
  }
}

// const lovelaceQuote = new HTMLElement('p', 'I am never in good earnest...');

// console.log(lovelaceQuote.render());

// Export class here
module.exports = HTMLElement;
