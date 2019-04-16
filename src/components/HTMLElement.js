// Define class here

class HTMLElement {
    constructor(tag,content){
      this.tag = tag;
      this.content=content;
    }
    const render = function ( ) {
      return `<{this.tag}>{this.content}</{this.tag}>`;
  }

}

// Export class here
module.exports = {};
