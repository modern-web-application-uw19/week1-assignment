// Define class here

class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
    this.render = `<${tag}>${content}</${tag}>`;
  }
}

// Export class here
module.exports = HTMLElement;
