const rule = require('./first-rule');


const populate = (arr1, arr2, arr3) => {
  return [arr1, arr2, arr3]
}

const version1 = ['', '', '']
const version2 = ['o', '', '']
const version3 = ['', 'o', '']
const version4 = ['', '', 'o']

// one element only
const testOneData = (alteredVersion) => {
  const resultsObject = {}

  resultsObject.initialStateA = populate(alteredVersion, version1, version1)
  resultsObject.resultA = populate(version1, version1, version1)

  resultsObject.initialStateB = populate(version1, alteredVersion, version1)
  resultsObject.resultB = populate(version1, version1, version1)

  resultsObject.initialStateC = populate(version1, version1, alteredVersion)
  resultsObject.resultC = populate(version1, version1, version1)

  return resultsObject
}

const testOne1Data = {
  initialState: populate(version1, version1, version1),
  result: populate(version1, version1, version1)
}

const testOne2Data = testOneData(version2)
const testOne3Data = testOneData(version3)
const testOne4Data = testOneData(version4)

// error initialStateB - to find out why only this one
test('expects one element only data', () => {
  expect(rule(testOne1Data.initialState)).toEqual(testOne1Data.result);
  expect(rule(testOne2Data.initialStateA)).toEqual(testOne2Data.resultA);
  expect(rule(testOne2Data.initialStateB)).toEqual(testOne2Data.resultB);
  expect(rule(testOne2Data.initialStateC)).toEqual(testOne2Data.resultC);
  expect(rule(testOne3Data.initialStateA)).toEqual(testOne3Data.resultA);
  expect(rule(testOne3Data.initialStateB)).toEqual(testOne3Data.resultB);
  expect(rule(testOne3Data.initialStateC)).toEqual(testOne3Data.resultC);
  expect(rule(testOne4Data.initialStateA)).toEqual(testOne4Data.resultA);
  expect(rule(testOne4Data.initialStateB)).toEqual(testOne4Data.resultB);
  expect(rule(testOne4Data.initialStateC)).toEqual(testOne4Data.resultC);
});
