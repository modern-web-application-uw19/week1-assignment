// Define class here
class HTMLElement {
    constructor(tag, content) {
        this.tag = tag;
        this.content = content;
    }

    render(tag, content) {
        return `<${this.tag}>${this.content}</${this.tag}>`;
    }
}

const lovelaceQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');

console.log(lovelaceQuote.render());
// prints "<p>I am never so happy as when I am really engaged in good earnest...</p>"

// Export class here
module.exports = HTMLElement;
