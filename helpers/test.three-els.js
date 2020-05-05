const { populate, version1, version2, version3, version4 } = require('./index')


const createDataObject1 = resultsObject => {
  resultsObject.a1 = {}
  resultsObject.a1.initialState = populate(version2, version2, version2)
  resultsObject.a1.result = populate(version1, version2, version1)

  resultsObject.a2 = {}
  resultsObject.a2.initialState = populate(version2, version3, version2)
  resultsObject.a2.result = populate(version1, version3, version1)

  resultsObject.a3 = {}
  resultsObject.a3.initialState = populate(version2, version4, version2)
  resultsObject.a3.result = populate(version1, version1, version1)


  resultsObject.a4 = {}
  resultsObject.a4.initialState = populate(version3, version2, version2)
  resultsObject.a4.result = populate(version1, version2, version1)

  resultsObject.a5 = {}
  resultsObject.a5.initialState = populate(version3, version3, version2)
  resultsObject.a5.result = populate(version1, version3, version1)

  resultsObject.a6 = {}
  resultsObject.a6.initialState = populate(version3, version4, version2)
  resultsObject.a6.result = populate(version1, version1, version1)


  resultsObject.a7 = {}
  resultsObject.a7.initialState = populate(version4, version2, version2)
  resultsObject.a7.result = populate(version1, version1, version1)

  resultsObject.a8 = {}
  resultsObject.a8.initialState = populate(version4, version3, version2)
  resultsObject.a8.result = populate(version1, version3, version1)

  resultsObject.a9 = {}
  resultsObject.a9.initialState = populate(version4, version4, version2)
  resultsObject.a9.result = populate(version1, version1, version1)
}

const createDataObject2 = resultsObject => {
  resultsObject.b1 = {}
  resultsObject.b1.initialState = populate(version2, version2, version3)
  resultsObject.b1.result = populate(version1, version2, version1)

  resultsObject.b2 = {}
  resultsObject.b2.initialState = populate(version2, version3, version3)
  resultsObject.b2.result = populate(version1, version3, version1)

  resultsObject.b3 = {}
  resultsObject.b3.initialState = populate(version2, version4, version3)
  resultsObject.b3.result = populate(version1, version1, version1)


  resultsObject.b4 = {}
  resultsObject.b4.initialState = populate(version3, version2, version3)
  resultsObject.b4.result = populate(version1, version2, version1)

  resultsObject.b5 = {}
  resultsObject.b5.initialState = populate(version3, version3, version3)
  resultsObject.b5.result = populate(version1, version3, version1)

  resultsObject.b6 = {}
  resultsObject.b6.initialState = populate(version3, version4, version3)
  resultsObject.b6.result = populate(version1, version4, version1)


  resultsObject.b7 = {}
  resultsObject.b7.initialState = populate(version4, version2, version3)
  resultsObject.b7.result = populate(version1, version1, version1)

  resultsObject.b8 = {}
  resultsObject.b8.initialState = populate(version4, version3, version3)
  resultsObject.b8.result = populate(version1, version3, version1)

  resultsObject.b9 = {}
  resultsObject.b9.initialState = populate(version4, version4, version3)
  resultsObject.b9.result = populate(version1, version4, version1)
}

const createDataObject3 = resultsObject => {
  resultsObject.c1 = {}
  resultsObject.c1.initialState = populate(version2, version2, version4)
  resultsObject.c1.result = populate(version1, version1, version1)

  resultsObject.c2 = {}
  resultsObject.c2.initialState = populate(version2, version3, version4)
  resultsObject.c2.result = populate(version1, version3, version1)

  resultsObject.c3 = {}
  resultsObject.c3.initialState = populate(version2, version4, version4)
  resultsObject.c3.result = populate(version1, version1, version1)


  resultsObject.c4 = {}
  resultsObject.c4.initialState = populate(version3, version2, version4)
  resultsObject.c4.result = populate(version1, version1, version1)

  resultsObject.c5 = {}
  resultsObject.c5.initialState = populate(version3, version3, version4)
  resultsObject.c5.result = populate(version1, version3, version1)

  resultsObject.c6 = {}
  resultsObject.c6.initialState = populate(version3, version4, version4)
  resultsObject.c6.result = populate(version1, version4, version1)


  resultsObject.c7 = {}
  resultsObject.c7.initialState = populate(version4, version2, version4)
  resultsObject.c7.result = populate(version1, version1, version1)

  resultsObject.c8 = {}
  resultsObject.c8.initialState = populate(version4, version3, version4)
  resultsObject.c8.result = populate(version1, version3, version1)

  resultsObject.c9 = {}
  resultsObject.c9.initialState = populate(version4, version4, version4)
  resultsObject.c9.result = populate(version1, version4, version1)
}

// three elements
const testData = () => {
  const resultsObject = {}

  createDataObject1(resultsObject)
  createDataObject2(resultsObject)
  createDataObject3(resultsObject)

  return resultsObject
}

module.exports = testData