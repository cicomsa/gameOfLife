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

// seven elements - triples + triples + singles
const populateData1 = index => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, version8, version2)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, version8, version3)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version8, version8, version4)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version8, version2, version8)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version8, version3, version8)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version8, version4, version8)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version2, version8, version8)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version3, version8, version8)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version4, version8, version8)

  return resultsObject
}

// seven elements - triples + doubles + doubles
const populateData2 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, alternateVersion, version5)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, alternateVersion, version6)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version8, alternateVersion, version7)

  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(alternateVersion, version8, version5)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(alternateVersion, version8, version6)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(alternateVersion, version8, version7)

  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(alternateVersion, version5, version8)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(alternateVersion, version6, version8)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(alternateVersion, version7, version8)

  return resultsObject
}

const populateData3 = index => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, version8, version5)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, version8, version6)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version8, version8, version7)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version8, version5, version8)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version8, version6, version8)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version8, version7, version8)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version5, version8, version8)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version6, version8, version8)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version7, version8, version8)

  return resultsObject
}

const populateData4 = index => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, version8, version8)
}

module.exports = {
  populateData1,
  populateData2,
  populateData3,
  populateData4
}
