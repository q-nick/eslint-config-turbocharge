Feature: React rules

  Background: 
    When Use eslintrc extends "turbocharge/react"
    And Set file name to: "Test.tsx"

  Scenario: Incorrect functional component
    And File:
      """tsx
      export function Component() {
        return <div />
      }
      """
    Then Should have errors:
      | Expected a function expression.                                              |
      | Function component is not an arrow function                                  |
      | Function name `Component` must match one of the following formats: camelCase |

  Scenario: Incorrect functional component filename
    And Set file name to: "Test.ts"
    And File:
      """tsx
      export function Component() {
        return <div />
      }
      """
    Then Should have errors:
      | Parsing error: '>' expected. |

  Scenario: Incorrect functional component filename, bad extends
    And Use eslintrc extends "turbocharge"
    And File:
      """tsx
      export function Component() {
        return <div />
      }
      """
    Then Should have errors:
      | Parsing error: Unexpected token < |

  Scenario: Correct
    And File:
      """tsx
      export const Component  = () => {
        return <div />
      }
      """
    Then Should have no errors
