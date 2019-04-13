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

const html = new HTMLElement('p', 'Hello World');
console.log(html.render());
