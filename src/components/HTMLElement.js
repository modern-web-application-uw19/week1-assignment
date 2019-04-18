// Define class here

const HTMLElement = function(tag, content){
    this.tag = tag;
    this.content = content;
}

HTMLElement.prototype.render = function(){
    return this;
}

// usage:
const lovelaceQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');

console.log(lovelaveQuote.render());
// prints "<p>I am never so happy as when I am really engaged in good earnest...</p>"

// Export class here
module.exports = HTMLElement;

