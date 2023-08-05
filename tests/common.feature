Feature: Common rules (shared between, js, ts, react, node etc)

  Scenario: Incorrect
    When Use eslintrc extends "turbocharge"
    And File:
      """js
      var fs = require('fs');
      function f() {}
      """
    Then Should have errors
      | Unexpected var, use let or const instead.                                      |
      | Expected 1 empty line after require statement not followed by another require. |
      | 'fs' is assigned a value but never used.                                       |
      | Expected a function expression.                                                |
      | 'f' is defined but never used.                                                 |
      | Unexpected empty function 'f'.                                                 |

  Scenario: Correct
    When Use eslintrc extends "turbocharge"
    And File:
      """js
      import fs from 'fs';
      
      const x = 1;
      const f = (a) => a;
      f(x, fs)
      """
    Then Should have no errors
