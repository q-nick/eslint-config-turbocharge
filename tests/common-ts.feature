Feature: Common TS rules (shared between, ts, react, node etc)

  Background: 
    When Use eslintrc extends "turbocharge"
    And Set file name to: "script.ts"

  Scenario: TS features
    And File:
      """js
      export const x = () => 'a';
      """
    Then Should have no errors

  Scenario: Functions
    When File:
      """js
      import fs from 'fs';
      
      fs(async function (this: Window) { return this; })
      """
    Then Should have no errors
