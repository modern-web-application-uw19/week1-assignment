const HTMLElement = require('./HTMLElement');
// Define class here
class DivElement extends HTMLElement {
  constructor(tag, content) {
    super(tag);
    this.content = content;
  }
}

/**
 * Question: I wasn't able to get this test to pass. I also tried super(tag, content)
 *           along with removing line 6 above and same result/error.
 *           What am i doing incorrectly above that causes div.tag to
 *           inherit 'University of Washington' rather than 'div' and leaves content as undefined?
 *
 *  PASS test/Timer.spec.js
    PASS test/HTMLElement.spec.js
    FAIL test/DivElement.spec.js
      ● DivElement class › should render valid div elements

        expect(received).toBe(expected) // Object.is equality

        Expected: "<div>University of Washington</div>"
        Received: "<University of Washington>undefined</University of Washington>"

          22 |   it('should render valid div elements', () => {
          23 |     const div = new DivElement('University of Washington');
        > 24 |     expect(div.render()).toBe('<div>University of Washington</div>');
            |                          ^
          25 |   });
          26 | });
          27 |

          at Object.toBe (test/DivElement.spec.js:24:26)

    Test Suites: 1 failed, 2 passed, 3 total
    Tests:       1 failed, 9 passed, 10 total
    Snapshots:   0 total
    Time:        3.25s
    Ran all test suites.
    npm ERR! Test failed.  See above for more details.

 *
 *
 */
// Export class here
module.exports = DivElement;
