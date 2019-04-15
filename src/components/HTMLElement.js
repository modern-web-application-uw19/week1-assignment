// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const hElement = `<${this.tag}>${this.content}</${this.tag}>`;
    return hElement;
  }
}

// Export class here
module.exports = HTMLElement;
