const rule = require('../game')
const { populate, version1 } = require('../helpers')
const testOneElData = require('../testsData2/test.one-el')
const testTwoElsData = require('../testsData2/test.two-els')
const testThreeElsData = require('../testsData2/test.three-els')
const testFourElsData = require('../testsData2/test.four-els')
const testFiveElsData = require('../testsData2/test.five-els')
const testSixElsData = require('../testsData2/test.six-els')
const testSevenUpElsData = require('../testsData2/test.seven-up-els')
const { initialState, firstRule } = require('../states')

const testOneEl1Data = {
  initialState: populate(version1, version1, version1),
  result: populate(version1, version1, version1)
}

// test one element only
// test('One element only data', () => {
//   expect(rule(testOneEl1Data.initialState, true)).toEqual(testOneEl1Data.result);

//   Object.keys(testOneElData()).map(key => {
//     // console.log(key, 'testOneElData()[key].initialState', testOneElData()[key].initialState)
//     // console.log(key, 'testOneElData()[key].result', testOneElData()[key].result)
//     expect(rule(testTwoElsData()[key].initialState, true))
//       .toEqual(testTwoElsData()[key].result)
//   })
// })

// // test two elements only
// test('Two elements only data', () => {
//   Object.keys(testTwoElsData()).map(key => {
//     // console.log(key, 'testTwoElsData()[key].initialState', testTwoElsData()[key].initialState)
//     // console.log(key, 'testTwoElsData()[key].result', testTwoElsData()[key].result)
//     expect(rule(testTwoElsData()[key].initialState, true))
//       .toEqual(testTwoElsData()[key].result)
//   })
// })

// test three elements
// test('Three elements data', () => {
//   Object.keys(testThreeElsData()).map(key => {
//     // console.log(key, 'testThreeElsData()[key].initialState', testThreeElsData()[key].initialState)
//     // console.log(key, 'testThreeElsData()[key].result', testThreeElsData()[key].result)
//     expect(rule(testThreeElsData()[key].initialState, true))
//       .toEqual(testThreeElsData()[key].result)
//   })
// })

// test four elements
test('Four elements data', () => {
  Object.keys(testFourElsData()).map(key => {
    console.log(key, 'testFourElsData()[key].initialState', testFourElsData()[key].initialState)
    console.log(key, 'testFourElsData()[key].result', testFourElsData()[key].result)
    expect(rule(testFourElsData()[key].initialState, true))
      .toEqual(testFourElsData()[key].result)
  })
})


// // test five elements
// test('Five elements data', () => {
//   Object.keys(testFiveElsData()).map(key => {
//     // console.log(key, 'testFiveElsData()[key].initialState', testFiveElsData()[key].initialState)
//     // console.log(key, 'testFiveElsData()[key].result', testFiveElsData()[key].result)
//     expect(rule(testFiveElsData()[key].initialState, true))
//       .toEqual(testFiveElsData()[key].result)
//   })
// })

// // test six elements
// test('Six elements data', () => {
//   Object.keys(testSixElsData()).map(key => {
//     // console.log(key, 'testSixElsData()[key].initialState', testSixElsData()[key].initialState)
//     // console.log(key, 'testFivetestSixElsDataElsData()[key].result', testSixElsData()[key].result)
//     expect(rule(testSixElsData()[key].initialState, true))
//       .toEqual(testSixElsData()[key].result)
//   })
// })

// // test seven to nine elements
// test('Seven to nine elements data', () => {
//   Object.keys(testSevenUpElsData()).map(key => {
//     // console.log(key, 'testSevenUpElsData()[key].initialState', testSevenUpElsData()[key].initialState)
//     // console.log(key, 'testSevenUpElsData()[key].result', testSevenUpElsData()[key].result)
//     expect(rule(testSevenUpElsData()[key].initialState, true))
//       .toEqual(testSevenUpElsData()[key].result)
//   })
// })

// test('Main first rule test', () => {
//   expect(rule(initialState, true)).toEqual(firstRule)
// })
