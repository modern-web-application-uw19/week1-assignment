import HTMLElement from './HTMLElement';
// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// Export class here
export default { DivElement };

const div = new DivElement('I am a div');
console.log('render', div.render());
