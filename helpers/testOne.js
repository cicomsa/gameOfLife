const { populate, version1, version2, version3, version4 } = require('./index')

//one element
const testOneSplit = (alteredVersion) => {
  const resultsObject = {}

  resultsObject.initialStateA = populate(alteredVersion, version1, version1)
  resultsObject.resultA = populate(version1, version1, version1)

  resultsObject.initialStateB = populate(version1, alteredVersion, version1)
  resultsObject.resultB = populate(version1, version1, version1)

  resultsObject.initialStateC = populate(version1, version1, alteredVersion)
  resultsObject.resultC = populate(version1, version1, version1)

  return resultsObject
}

const testOne2Data = testOneSplit(version2)
const testOne3Data = testOneSplit(version3)
const testOne4Data = testOneSplit(version4)

const testOneData = () => {
  const resultsObject = {}

  return {
    ...resultsObject,
    testOne2Data,
    testOne3Data,
    testOne4Data
  }
}

module.exports = testOneData 