const {
  populate,
  version1,
  version2,
  version3,
  version4,
  version5,
  version6,
  version7,
  version8
} = require('./index')

// one element
const populateData1 = (index, alteredVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alteredVersion, version1, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version1, alteredVersion, version1)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version1, version1, alteredVersion)

  return resultsObject
}

// two elements - part 1
const populateData2 = (index, alteredVersion) => {
  const resultsObject = {}
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version2, alteredVersion, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version2, version1, alteredVersion)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version1, version2, alteredVersion)

  return resultsObject
}

// two elements - part 2
const populateData3 = (index, alteredVersion) => {
  const resultsObject = {}
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alteredVersion, version1, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version1, alteredVersion, version1)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version1, version1, alteredVersion)

  return resultsObject
}

module.exports = {
  populateData1,
  populateData2,
  populateData3
}