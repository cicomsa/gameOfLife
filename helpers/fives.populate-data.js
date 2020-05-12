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

// five elements - triples + doubles
const populateData1 = (index, alternateVersion) => {
  const resultsObject = {}
  // triples top
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, alternateVersion, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, version1, alternateVersion)
  // triples middle
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(alternateVersion, version8, version1)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version1, version8, alternateVersion)
  // triples bottom
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version1, alternateVersion, version8)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version1, alternateVersion, version8)

  return resultsObject
}

// five elements - triple + singles
const populateData2 = (index, alternateVersion) => {
  const resultsObject = {}
  // triples top
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, alternateVersion, version2)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, alternateVersion, version3)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version8, alternateVersion, version4)

  // triples middle
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(alternateVersion, version8, version2)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(alternateVersion, version8, version3)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(alternateVersion, version8, version4)

  // triples bottom
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(alternateVersion, version2, version8)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(alternateVersion, version3, version8)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(alternateVersion, version4, version8)

  return resultsObject
}

// five elements - doubles + doubles + singles
const populateData3 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alternateVersion, version5, version2)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(alternateVersion, version5, version3)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(alternateVersion, version5, version4)

  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(alternateVersion, version6, version2)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(alternateVersion, version6, version3)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(alternateVersion, version6, version4)

  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(alternateVersion, version7, version2)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(alternateVersion, version7, version3)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(alternateVersion, version7, version4)

  return resultsObject
}

const populateData4 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version2, version5, alternateVersion)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version3, version5, alternateVersion)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version4, version5, alternateVersion)

  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version2, version6, alternateVersion)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version3, version6, alternateVersion)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version4, version6, alternateVersion)

  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version2, version7, alternateVersion)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version3, version7, alternateVersion)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version4, version7, alternateVersion)

  return resultsObject
}

module.exports = {
  populateData1,
  populateData2,
  populateData3,
  populateData4
}