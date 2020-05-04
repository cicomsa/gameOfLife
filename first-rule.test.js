const rule = require('./first-rule');
const { populate, version1 } = require('./helpers')
const testOneElData = require('./helpers/test.one-el')
const testTwoElData = require('./helpers/test.two-els')
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
  Object.keys(testTwoElData()).map(data => {
    Object.keys(testTwoElData()[data]).map(key => {
      expect(rule(testTwoElData()[data][key].initialState)).toEqual(testTwoElData()[data][key].result);
    })
  })
});

test('Main first rule test', () => {
  expect(rule(initialState)).toEqual(firstRule);
});
