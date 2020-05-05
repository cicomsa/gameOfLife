const { populate, version1, version2, version3, version4 } = require('./index')

// two elements

const createDataObject1 = (resultsObject, index, alteredVersion) => {
  resultsObject[index] = {}
  resultsObject[index].initialState = populate(version2, alteredVersion, version1)
  resultsObject[index].result = populate(version1, version1, version1)
}

const createDataObject2 = (resultsObject, index, alteredVersion) => {
  resultsObject[index] = {}
  resultsObject[index].initialState = populate(version2, version1, alteredVersion)
  resultsObject[index].result = populate(version1, version1, version1)
}

const createDataObject3 = (resultsObject, index, alteredVersion) => {
  resultsObject[index] = {}
  resultsObject[index].initialState = populate(version1, version2, alteredVersion)
  resultsObject[index].result = populate(version1, version1, version1)
}

const testData = () => {
  const resultsObject = {}

  createDataObject1(resultsObject, 'a', version2)
  createDataObject1(resultsObject, 'b', version3)
  createDataObject1(resultsObject, 'c', version4)

  createDataObject2(resultsObject, 'd', version2)
  createDataObject2(resultsObject, 'e', version3)
  createDataObject2(resultsObject, 'f', version4)

  createDataObject3(resultsObject, 'g', version2)
  createDataObject3(resultsObject, 'h', version3)
  createDataObject3(resultsObject, 'i', version4)

  return resultsObject
}

module.exports = testData 