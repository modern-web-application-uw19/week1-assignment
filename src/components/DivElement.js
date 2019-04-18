const HTMLElement = require('./HTMLElement');

// Define class here
const DivElement = function(content){
    this.tag = tag;
    this.content = content;
}

DivElement.prototype = Object.create(HTMLElement.prototype);
DivElement.prototype.constructor = DivElement;

DivElement.prototype.render = function(){
    return this;
}

// usage:
const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());
// prints "<div>What a wonderful world</div>"

// Export class here
module.exports = {};
