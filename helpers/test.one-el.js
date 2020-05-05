const { populate, version1, version2, version3, version4 } = require('./index')

// one element

const getData = (alteredVersion) => {
  const resultsObject = {}

  resultsObject.initialStateA = populate(alteredVersion, version1, version1)
  resultsObject.resultA = populate(version1, version1, version1)

  resultsObject.initialStateB = populate(version1, alteredVersion, version1)
  resultsObject.resultB = populate(version1, version1, version1)

  resultsObject.initialStateC = populate(version1, version1, alteredVersion)
  resultsObject.resultC = populate(version1, version1, version1)

  return resultsObject
}

const data1 = getData(version2)
const data2 = getData(version3)
const data3 = getData(version4)

const testData = () => {
  const data = {}

  return {
    ...data,
    data1,
    data2,
    data3
  }
}

module.exports = testData 