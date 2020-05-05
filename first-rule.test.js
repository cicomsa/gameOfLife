const rule = require('./first-rule');
const { populate, version1 } = require('./helpers')
const testOneElData = require('./helpers/test.one-el')
const testTwoElsData = require('./helpers/test.two-els')
const testThreeElsData = require('./helpers/test.three-els')
const { initialState, firstRule } = require('./states')

const testOneEl1Data = {
  initialState: populate(version1, version1, version1),
  result: populate(version1, version1, version1)
}

// test one element only
test('One element only data', () => {
  expect(rule(testOneEl1Data.initialState)).toEqual(testOneEl1Data.result);

  Object.keys(testOneElData()).map(key => {
    expect(rule(testOneElData()[key].initialStateA)).toEqual(testOneElData()[key].resultA);
    expect(rule(testOneElData()[key].initialStateB)).toEqual(testOneElData()[key].resultB);
    expect(rule(testOneElData()[key].initialStateC)).toEqual(testOneElData()[key].resultC);
  })
});

// test two elements only
test('Two elements only data', () => {
  Object.keys(testTwoElsData()).map(key => {
    expect(rule(testTwoElsData()[key].initialState)).toEqual(testTwoElsData()[key].result)
  })
});

// test three elements
test('Three elements data', () => {
  Object.keys(testThreeElsData()).map(key => {
    expect(rule(testThreeElsData()[key].initialState)).toEqual(testThreeElsData()[key].result)
  })
});

test('Main first rule test', () => {
  expect(rule(initialState)).toEqual(firstRule);
});
