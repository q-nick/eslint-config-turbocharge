import { DataTable, Then, When, setWorldConstructor } from '@cucumber/cucumber';
import { ESLint } from 'eslint';
import { TestWorld } from './TestWorld';
import assert from 'assert';
import config from '../index';

setWorldConstructor(TestWorld);

const getEslintErrorMessagess = async (fileString: string) => {
  const eslint = new ESLint({ useEslintrc: false, baseConfig: config });
  const results = await eslint.lintText(fileString);
  console.log(results[0]);
  return results
    .flatMap((result) => result.messages)
    .map(({ message }) => message);
};

When(
  'Use eslintrc extends {string}',
  function (this: TestWorld, extendsValue: string) {
    this.file = extendsValue;
  },
);

When('File:', async function (this: TestWorld, fileString: string) {
  this.file = fileString;
  // fs.writeFileSync(path.join(__dirname, 'tmp', 'testfile.js'), fileString);
});

Then('Should have errors', async function (this: TestWorld, data: DataTable) {
  const expectedErrors = data.raw().map((row) => row[0]);
  const errors = await getEslintErrorMessagess(this.file);

  console.log(errors);

  expectedErrors.forEach((expectedError, index) => {
    const error = errors[index];
    assert.ok(error, `Error index: ${index} not found`);

    assert.strictEqual(
      error,
      expectedError,
      `${errors[index]} in row ${index}`,
    );
  });

  assert.strictEqual(
    errors.length,
    expectedErrors.length,
    `Expected ${expectedErrors.length} errors, got ${errors.length}`,
  );
});

Then('Should have no errors', async function (this: TestWorld) {
  const errors = await getEslintErrorMessagess(this.file);

  assert.strictEqual(
    errors.length,
    0,
    `Found ${errors.length} errors, first: ${errors[0]}`,
  );
});
