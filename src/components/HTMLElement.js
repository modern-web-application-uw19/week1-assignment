// Define class here
const HTMLElement = class {
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
module.exports = { HTMLElement };
