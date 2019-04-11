// Define class here
class HTMLElements {
    constructor(tag, content) {
        this.tag = tag;
        this.content = content;
    }

    render(tag, content) {
        return `<${tag}>${content}</${tag}>`;
    }
}

// Export class here
module.exports = {};
