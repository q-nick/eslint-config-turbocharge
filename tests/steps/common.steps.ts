/* eslint-disable no-duplicate-imports */
import type { DataTable } from '@cucumber/cucumber';
import { setWorldConstructor, Then, When } from '@cucumber/cucumber';
import assert from 'assert';
import { ESLint } from 'eslint';

import configBackend from '../../backend';
import configCommon from '../../index';
import configReact from '../../react';
import { TestWorld } from './TestWorld';

setWorldConstructor(TestWorld);

const configs = {
  turbocharge: configCommon,
  'turbocharge/react': configReact,
  'turbocharge/backend': configBackend,
};

const getEslintErrorMessagess = async (
  fileString: string,
  filePath: string,
  configName: keyof typeof configs,
) => {
  console.log('using config:', configName);
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: configs[configName],
  });

  const results = await eslint.lintText(fileString, { filePath });

  return results
    .flatMap((result) => result.messages)
    .map(({ message }) => message);
};

When(
  'Use eslintrc extends {string}',
  function (
    this: TestWorld,
    extendsValue: 'turbocharge' | 'turbocharge/backend' | 'turbocharge/react',
  ) {
    this.extends = extendsValue;
  },
);

When('File:', async function (this: TestWorld, fileContent: string) {
  this.fileContent = fileContent;
});

When(
  'Set file name to: {string}',
  async function (this: TestWorld, fileName: string) {
    this.fileName = fileName;
  },
);

Then('Should have errors:', async function (this: TestWorld, data: DataTable) {
  const expectedErrors = data.raw().map((row) => row[0]);
  const errors = await getEslintErrorMessagess(
    this.fileContent,
    this.fileName,
    this.extends,
  );

  // console.log(errors);

  for (const [index, expectedError] of expectedErrors.entries()) {
    const error = errors[index];
    assert.ok(error, `Error index: ${index} not found`);

    assert.strictEqual(
      error,
      expectedError,
      `${errors[index]} in row ${index}`,
    );
  }

  assert.strictEqual(
    errors.length,
    expectedErrors.length,
    `Expected ${expectedErrors.length} errors, got ${errors.length}`,
  );
});

Then('Should have no errors', async function (this: TestWorld) {
  const errors = await getEslintErrorMessagess(
    this.fileContent,
    this.fileName,
    this.extends,
  );

  assert.strictEqual(
    errors.length,
    0,
    `Found ${errors.length} errors, first: ${errors[0]}`,
  );
});
