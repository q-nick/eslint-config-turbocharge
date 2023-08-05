Feature: Common rules (shared between, js, ts, react, node etc)

  Background: 
    When Use eslintrc extends "turbocharge"

  Scenario: Incorrect Imports
    And File:
      """js
      var fs = require('fs');
      const b = 1;
      """
    Then Should have errors
      | Unexpected var, use let or const instead.                                      |
      | Expected 1 empty line after require statement not followed by another require. |
      | 'fs' is assigned a value but never used.                                       |
      | 'b' is assigned a value but never used.                                        |

  Scenario: var, let, const
    And File:
      """js
      var bar, baz;
      console.log(bar, baz);
      """
    Then Should have errors
      | Split 'var' declarations into multiple statements.   |
      | Unexpected var, use let or const instead.            |
      | Variable 'bar' should be initialized on declaration. |
      | Variable 'baz' should be initialized on declaration. |
      | Unexpected console statement.                        |

  Scenario: strings
    And File:
      """js
      const a = "${123}";
      console.log(a);
      """
    Then Should have errors
      | Unexpected template string expression. |
      | Unexpected console statement.          |

  Scenario: Correct
    And File:
      """js
      // import fs from 'fs';
      
      const x = 1;
      const f = (a) => a;
      const ff = (a) => { return a };
      f(ff(x) ? 'a' : 'b')
      """
    Then Should have no errors
