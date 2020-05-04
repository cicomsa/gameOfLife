const { populate, version1, version2, version3, version4 } = require('./index')

const createDataObject = (resultsObject, index, alteredVersion) => {
  resultsObject[index] = {}
  resultsObject[index].initialState = populate(version2, alteredVersion, version1)
  resultsObject[index].result = populate(version1, version1, version1)
}

// two elements
const getData = () => {
  const resultsObject = {}

  resultsObject.a = {}
  resultsObject.a.initialState = populate(version2, version2, version1)
  resultsObject.a.result = populate(version1, version1, version1)

  resultsObject.b = {}
  resultsObject.b.initialState = populate(version2, version3, version1)
  resultsObject.b.result = populate(version1, version1, version1)

  resultsObject.c = {}
  resultsObject.c.initialState = populate(version2, version4, version1)
  resultsObject.c.result = populate(version1, version1, version1)

  resultsObject.d = {}
  resultsObject.d.initialState = populate(version2, version1, version2)
  resultsObject.d.result = populate(version1, version1, version1)

  resultsObject.e = {}
  resultsObject.e.initialState = populate(version2, version1, version3)
  resultsObject.e.result = populate(version1, version1, version1)

  resultsObject.f = {}
  resultsObject.f.initialState = populate(version2, version1, version4)
  resultsObject.f.result = populate(version1, version1, version1)

  resultsObject.g = {}
  resultsObject.g.initialState = populate(version1, version2, version2)
  resultsObject.g.result = populate(version1, version1, version1)

  resultsObject.h = {}
  resultsObject.h.initialState = populate(version1, version2, version3)
  resultsObject.h.result = populate(version1, version1, version1)

  resultsObject.i = {}
  resultsObject.i.initialState = populate(version1, version2, version4)
  resultsObject.i.result = populate(version1, version1, version1)

  return resultsObject
}

const testData = () => {
  const data1 = getData()

  return data1
}

module.exports = testData 