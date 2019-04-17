// Define class here
// Define class here
class HTMLElement {
  constructor(tag, text) {
    this.tag = tag;
    this.text = text;
  }

  render() {
    return `<${this.tag}>${this.text}</${this.tag}>`;
  }
}

const h1 = new HTMLElement('h1', 'Web Design');

console.log(h1.render());

// Export class here
module.exports = HTMLElement;
