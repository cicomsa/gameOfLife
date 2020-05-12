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
  resultsObject[`${index}1`].initialState = populate(version8, version5, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, version6, version1)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version8, version7, version4)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version8, version1, version5)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version8, version1, version6)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version8, version1, version7)
  // triples middle
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version5, version8, version1)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version6, version8, version1)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version7, version8, version1)
  resultsObject[`${index}10`] = {}
  resultsObject[`${index}10`].initialState = populate(version1, version8, version5)
  resultsObject[`${index}11`] = {}
  resultsObject[`${index}11`].initialState = populate(version1, version8, version6)
  resultsObject[`${index}12`] = {}
  resultsObject[`${index}12`].initialState = populate(version1, version8, version7)
  // triples bottom
  resultsObject[`${index}13`] = {}
  resultsObject[`${index}13`].initialState = populate(version1, version5, version8)
  resultsObject[`${index}14`] = {}
  resultsObject[`${index}14`].initialState = populate(version1, version6, version8)
  resultsObject[`${index}15`] = {}
  resultsObject[`${index}15`].initialState = populate(version1, version7, version8)
  resultsObject[`${index}16`] = {}
  resultsObject[`${index}16`].initialState = populate(version1, version5, version8)
  resultsObject[`${index}17`] = {}
  resultsObject[`${index}17`].initialState = populate(version1, version6, version8)
  resultsObject[`${index}18`] = {}
  resultsObject[`${index}18`].initialState = populate(version1, version7, version8)

  return resultsObject
}

module.exports = {
  populateData1
}