const { populate, version1, version2, version3, version4 } = require('./index')

const createDataObject = (resultsObject, letter, i, alteredVersion) => {
  resultsObject[`${letter}${i}`] = {}
  resultsObject[`${letter}${i}`].initialState = populate(alteredVersion, version2, version1)
  resultsObject[`${letter}${i}`].result = populate(version1, version1, version1)
}

// two elements
const getData = (i, alteredVersion) => {
  const resultsObject = {}

  createDataObject(resultsObject, 'A', i, alteredVersion)
  createDataObject(resultsObject, 'B', i, alteredVersion)
  createDataObject(resultsObject, 'C', i, alteredVersion)
  createDataObject(resultsObject, 'D', i, alteredVersion)
  createDataObject(resultsObject, 'E', i, alteredVersion)
  createDataObject(resultsObject, 'F', i, alteredVersion)

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

const data1 = getData('a', version2)
const data2 = getData('b', version3)
const data3 = getData('c', version4)

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