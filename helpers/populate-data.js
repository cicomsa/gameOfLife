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

// three elements - singles
const populateData3 = (index, alternativeVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version2, version2, alternativeVersion)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version2, version3, alternativeVersion)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version2, version4, alternativeVersion)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version3, version2, alternativeVersion)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version3, version3, alternativeVersion)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version3, version4, alternativeVersion)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version4, version2, alternativeVersion)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version4, version3, alternativeVersion)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version4, version4, alternativeVersion)

  return resultsObject
}

// three elements - doubles - part 1
const populateData4 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alternateVersion, version2, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(alternateVersion, version4, version1)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version2, alternateVersion, version1)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version4, alternateVersion, version1)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version1, alternateVersion, version2)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version1, alternateVersion, version4)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version1, version2, alternateVersion)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version1, version4, alternateVersion)

  return resultsObject
}

// three elements - doubles - part 2
const populateData5 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alternateVersion, version1, version2)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(alternateVersion, version1, version3)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(alternateVersion, version1, version4)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version2, version1, alternateVersion)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version3, version1, alternateVersion)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version4, version1, alternateVersion)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(alternateVersion, version3, version1)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version3, alternateVersion, version1)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version1, alternateVersion, version3)
  resultsObject[`${index}10`] = {}
  resultsObject[`${index}10`].initialState = populate(version1, version3, alternateVersion)

  return resultsObject
}

module.exports = {
  populateData1,
  populateData2,
  populateData3,
  populateData4,
  populateData5
}