const { populate, version1, version2, version3, version4 } = require('./index')

// two elements
const testTwoSplit = (i, alteredVersion) => {
  const resultsObject = {}

  resultsObject[`A${i}`] = {}
  resultsObject[`A${i}`].initialState = populate(alteredVersion, version2, version1)
  resultsObject[`A${i}`].result = populate(version1, version1, version1)

  resultsObject[`B${i}`] = {}
  resultsObject[`B${i}`].initialState = populate(alteredVersion, version3, version1)
  resultsObject[`B${i}`].result = populate(version1, version1, version1)

  resultsObject[`C${i}`] = {}
  resultsObject[`C${i}`].initialState = populate(alteredVersion, version4, version1)
  resultsObject[`C${i}`].result = populate(version1, version1, version1)

  resultsObject[`D${i}`] = {}
  resultsObject[`D${i}`].initialState = populate(alteredVersion, version1, version2)
  resultsObject[`D${i}`].result = populate(version1, version1, version1)

  resultsObject[`E${i}`] = {}
  resultsObject[`E${i}`].initialState = populate(alteredVersion, version1, version3)
  resultsObject[`E${i}`].result = populate(version1, version1, version1)

  resultsObject[`F${i}`] = {}
  resultsObject[`F${i}`].initialState = populate(alteredVersion, version1, version4)
  resultsObject[`F${i}`].result = populate(version1, version1, version1)


  resultsObject[`G${i}`] = {}
  resultsObject[`G${i}`].initialState = populate(version1, version2, version2)
  resultsObject[`G${i}`].result = populate(version1, version1, version1)

  resultsObject[`H${i}`] = {}
  resultsObject[`H${i}`].initialState = populate(version1, version2, version3)
  resultsObject[`H${i}`].result = populate(version1, version1, version1)

  resultsObject[`I${i}`] = {}
  resultsObject[`I${i}`].initialState = populate(version1, version2, version4)
  resultsObject[`I${i}`].result = populate(version1, version1, version1)


  return resultsObject
}

const testTwo1Data = testTwoSplit('a', version2)
const testTwo2Data = testTwoSplit('b', version3)
const testTwo3Data = testTwoSplit('c', version4)

const testTwoData = () => {
  const resultsObject = {}

  return {
    ...resultsObject,
    testTwo1Data,
    testTwo2Data,
    testTwo3Data
  }
}

module.exports = testTwoData 