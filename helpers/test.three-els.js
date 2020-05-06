const { populate, version1, version2, version3, version4, version5, version6 } = require('./index')

// three elements

// with version 2 at the end
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

// with version 3 at the end
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

// with version 4 at the end
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

const createDataObject4 = resultsObject => {
  resultsObject.d1 = {}
  resultsObject.d1.initialState = populate(version5, version2, version1)
  resultsObject.d1.result = populate(version5, version2, version1)

  resultsObject.d2 = {}
  resultsObject.d2.initialState = populate(version5, version4, version1)
  resultsObject.d2.result = populate(version3, version1, version1)


  resultsObject.d3 = {}
  resultsObject.d3.initialState = populate(version2, version5, version1)
  resultsObject.d3.result = populate(version2, version5, version1)

  resultsObject.d4 = {}
  resultsObject.d4.initialState = populate(version4, version5, version1)
  resultsObject.d4.result = populate(version1, version3, version1)


  // resultsObject.d5 = {}
  // resultsObject.d5.initialState = populate(version1, version5, version2)
  // resultsObject.d5.result = populate(version1, version5, version2)

  // resultsObject.d6 = {}
  // resultsObject.d6.initialState = populate(version1, version5, version4)
  // resultsObject.d6.result = populate(version1, version3, version1)


  // resultsObject.d7 = {}
  // resultsObject.d7.initialState = populate(version1, version2, version5)
  // resultsObject.d7.result = populate(version1, version2, version5)

  // resultsObject.d8 = {}
  // resultsObject.d8.initialState = populate(version1, version4, version5)
  // resultsObject.d8.result = populate(version1, version1, version3)
}

const createDataObject5 = resultsObject => {
  resultsObject.e1 = {}
  resultsObject.e1.initialState = populate(version6, version2, version1)
  resultsObject.e1.result = populate(version3, version1, version1)

  resultsObject.e2 = {}
  resultsObject.e2.initialState = populate(version6, version4, version1)
  resultsObject.e2.result = populate(version6, version4, version1)


  resultsObject.e3 = {}
  resultsObject.e3.initialState = populate(version2, version6, version1)
  resultsObject.e3.result = populate(version1, version3, version1)

  resultsObject.e4 = {}
  resultsObject.e4.initialState = populate(version4, version6, version1)
  resultsObject.e4.result = populate(version4, version6, version1)


  resultsObject.e5 = {}
  resultsObject.e5.initialState = populate(version1, version6, version2)
  resultsObject.e5.result = populate(version1, version3, version1)

  resultsObject.e6 = {}
  resultsObject.e6.initialState = populate(version1, version6, version4)
  resultsObject.e6.result = populate(version1, version6, version4)


  resultsObject.e7 = {}
  resultsObject.e7.initialState = populate(version1, version2, version6)
  resultsObject.e7.result = populate(version1, version1, version3)

  resultsObject.e8 = {}
  resultsObject.e8.initialState = populate(version1, version4, version6)
  resultsObject.e8.result = populate(version1, version4, version6)
}

const createDataObject6 = (resultsObject, index, alternateVersion) => {
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alternateVersion, version1, version2)
  resultsObject[`${index}1`].result = populate(version1, version1, version1)

  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(alternateVersion, version1, version3)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)

  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(alternateVersion, version1, version4)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version2, version1, alternateVersion)
  resultsObject[`${index}4`].result = populate(version1, version1, version1)

  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version3, version1, alternateVersion)
  resultsObject[`${index}5`].result = populate(version1, version1, version1)

  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version4, version1, alternateVersion)
  resultsObject[`${index}6`].result = populate(version1, version1, version1)
}

const createDataObject7 = (resultsObject, index, alternateVersion) => {
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alternateVersion, version3, version1)
  resultsObject[`${index}1`].result = populate(alternateVersion, version3, version1)

  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version3, alternateVersion, version1)
  resultsObject[`${index}2`].result = populate(version3, alternateVersion, version1)

  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version1, alternateVersion, version3)
  resultsObject[`${index}3`].result = populate(version1, alternateVersion, version3)

  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version1, version3, alternateVersion)
  resultsObject[`${index}4`].result = populate(version1, version3, alternateVersion)
}

const testData = () => {
  const resultsObject = {}

  // singles
  // createDataObject1(resultsObject)
  // createDataObject2(resultsObject)
  // createDataObject3(resultsObject)

  // doubles
  createDataObject4(resultsObject)
  // createDataObject4(resultsObject)
  // createDataObject6(resultsObject, 'f', version5)
  // createDataObject6(resultsObject, 'g', version6)
  // createDataObject7(resultsObject, 'h', version5)
  // createDataObject7(resultsObject, 'i', version6)

  return resultsObject
}

module.exports = testData