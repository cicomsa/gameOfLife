const { populate, version1, version2, version3, version4, version5, version6 } = require('./index')

// one element
const populateData1 = alteredVersion => {
  const resultsObject = {}

  resultsObject.initialStateA = populate(alteredVersion, version1, version1)
  resultsObject.initialStateB = populate(version1, alteredVersion, version1)
  resultsObject.initialStateC = populate(version1, version1, alteredVersion)

  return resultsObject
}

// two elements
const populateData2 = (index, alteredVersion) => {
  const resultsObject = {}
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version2, alteredVersion, version1)

  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version2, version1, alteredVersion)

  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version1, version2, alteredVersion)

  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(alteredVersion, version1, version1)

  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version1, alteredVersion, version1)

  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version1, version1, alteredVersion)

  return resultsObject
}

module.exports = {
  populateData1,
  populateData2
}