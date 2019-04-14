const HTMLElement = require('./HTMLElement');
// Define class here
class DivElement extends HTMLElement {

    constructor(tag,content){

        super(tag,content);
    }


}

// Export class here
module.exports = {DivElement};

const xx = new DivElement('h1','What a wonderful world');

//console.log(andIThinkToMyself.render());
console.log(xx.render());