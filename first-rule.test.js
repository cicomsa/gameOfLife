const rule = require('./first-rule');
const { populate, version1 } = require('./helpers')
const testOneData = require('./helpers/testOne')
const testTwoData = require('./helpers/testTwo')
const { initialState, firstRule } = require('./states')

const testOne1Data = {
  initialState: populate(version1, version1, version1),
  result: populate(version1, version1, version1)
}

// test one element only
test('One element only data', () => {
  expect(rule(testOne1Data.initialState)).toEqual(testOne1Data.result);
  Object.keys(testOneData()).map(key => {
    expect(rule(testOneData()[key].initialStateA)).toEqual(testOneData()[key].resultA);
    expect(rule(testOneData()[key].initialStateB)).toEqual(testOneData()[key].resultB);
    expect(rule(testOneData()[key].initialStateC)).toEqual(testOneData()[key].resultC);
  })
});

// test two elements only
test('Two elements only data', () => {
  Object.keys(testTwoData()).map(data => {
    Object.keys(testTwoData()[data]).map(key => {
      expect(rule(testTwoData()[data][key].initialState)).toEqual(testTwoData()[data][key].result);
    })
  })
});

test('Main first rule test', () => {
  expect(rule(initialState)).toEqual(firstRule);
});
