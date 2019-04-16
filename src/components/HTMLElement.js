// Define class here

class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
    // this.render = `<${tag}>${content}</${tag}>`;
  }
}

HTMLElement.prototype.render = function () {
  const instance = this;
  return `<${instance.tag}>${instance.content}</${instance.tag}>`;
};

// Export class here
module.exports = HTMLElement;
