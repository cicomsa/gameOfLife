const { populate, version1, version2, version3, version4 } = require('./index')

const createObject = (resultsObject, letter, i, alteredVersion) => {
  resultsObject[`${letter}${i}`] = {}
  resultsObject[`${letter}${i}`].initialState = populate(alteredVersion, version2, version1)
  resultsObject[`${letter}${i}`].result = populate(version1, version1, version1)
}

// two elements
const testTwoSplit = (i, alteredVersion) => {
  const resultsObject = {}

  createObject(resultsObject, 'A', i, alteredVersion)
  createObject(resultsObject, 'B', i, alteredVersion)
  createObject(resultsObject, 'C', i, alteredVersion)
  createObject(resultsObject, 'D', i, alteredVersion)
  createObject(resultsObject, 'E', i, alteredVersion)
  createObject(resultsObject, 'F', i, alteredVersion)

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