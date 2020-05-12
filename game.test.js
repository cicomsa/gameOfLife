const rule = require('./game')
const { populate, version1 } = require('./helpers')
const testOneElData = require('./helpers/test.one-el')
const testTwoElsData = require('./helpers/test.two-els')
const testThreeElsData = require('./helpers/test.three-els')
const testFourElsData = require('./helpers/test.four-els')
const testFiveElsData = require('./helpers/test.five-els')
const { initialState, firstRule } = require('./states')

const testOneEl1Data = {
  initialState: populate(version1, version1, version1),
  result: populate(version1, version1, version1)
}

// test one element only
test('One element only data', () => {
  expect(rule(testOneEl1Data.initialState)).toEqual(testOneEl1Data.result);

  Object.keys(testOneElData()).map(key => {
    // console.log(i + 1, 'testOneElData()[key].result', testOneElData()[key].result)
    expect(rule(testTwoElsData()[key].initialState))
      .toEqual(testTwoElsData()[key].result)
  })
})

// test two elements only
test('Two elements only data', () => {
  Object.keys(testTwoElsData()).map(key => {
    // console.log(i + 1, 'testTwoElsData()[key].result', testTwoElsData()[key].result)
    expect(rule(testTwoElsData()[key].initialState))
      .toEqual(testTwoElsData()[key].result)
  })
})

// test three elements
test('Three elements data', () => {
  Object.keys(testThreeElsData()).map(key => {
    // console.log(i + 1, 'testThreeElsData()[key].result', testThreeElsData()[key].result)
    expect(rule(testThreeElsData()[key].initialState))
      .toEqual(testThreeElsData()[key].result)
  })
})

// test four elements
test('Four elements data', () => {
  Object.keys(testFourElsData()).map((key, i) => {
    // console.log(i + 1, 'testFourElsData()[key].result', testFourElsData()[key].result)
    expect(rule(testFourElsData()[key].initialState))
      .toEqual(testFourElsData()[key].result)
  })
})


// test five elements
test('Five elements data', () => {
  Object.keys(testFiveElsData()).map((key, i) => {
    console.log(i + 1, 'testFiveElsData()[key].initialState', testFiveElsData()[key].initialState)
    console.log(i + 1, 'testFiveElsData()[key].result', testFiveElsData()[key].result)
    expect(rule(testFiveElsData()[key].initialState))
      .toEqual(testFiveElsData()[key].result)
  })
})

test('Main first rule test', () => {
  expect(rule(initialState)).toEqual(firstRule)
})
