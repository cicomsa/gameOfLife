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

// six elements - triples + triples
const populateData1 = index => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, version8, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, version1, version8)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version1, version8, version8)

  return resultsObject
}

// six elements - triples + doubles + singles
const populateData2 = (index, alternateVersion) => {
  const resultsObject = {}
  // triples top
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, alternateVersion, version2)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, alternateVersion, version3)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version8, alternateVersion, version4)

  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version8, version2, alternateVersion)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version8, version3, alternateVersion)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version8, version4, alternateVersion)

  // triples middle
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(alternateVersion, version8, version2)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(alternateVersion, version8, version3)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(alternateVersion, version8, version4)

  resultsObject[`${index}10`] = {}
  resultsObject[`${index}10`].initialState = populate(version2, version8, alternateVersion)
  resultsObject[`${index}11`] = {}
  resultsObject[`${index}11`].initialState = populate(version3, version8, alternateVersion)
  resultsObject[`${index}12`] = {}
  resultsObject[`${index}12`].initialState = populate(version4, version8, alternateVersion)

  // triples bottom
  resultsObject[`${index}13`] = {}
  resultsObject[`${index}13`].initialState = populate(alternateVersion, version2, version8)
  resultsObject[`${index}14`] = {}
  resultsObject[`${index}14`].initialState = populate(alternateVersion, version3, version8)
  resultsObject[`${index}15`] = {}
  resultsObject[`${index}15`].initialState = populate(alternateVersion, version4, version8)

  resultsObject[`${index}16`] = {}
  resultsObject[`${index}16`].initialState = populate(version2, alternateVersion, version8)
  resultsObject[`${index}17`] = {}
  resultsObject[`${index}17`].initialState = populate(version3, alternateVersion, version8)
  resultsObject[`${index}18`] = {}
  resultsObject[`${index}18`].initialState = populate(version4, alternateVersion, version8)

  return resultsObject
}

// // six elements - doubles + doubles + singles - part 1
// const populateData3 = (index, alternateVersion) => {
//   const resultsObject = {}

//   resultsObject[`${index}1`] = {}
//   resultsObject[`${index}1`].initialState = populate(alternateVersion, version5, version2)
//   resultsObject[`${index}2`] = {}
//   resultsObject[`${index}2`].initialState = populate(alternateVersion, version5, version3)
//   resultsObject[`${index}3`] = {}
//   resultsObject[`${index}3`].initialState = populate(alternateVersion, version5, version4)

//   resultsObject[`${index}4`] = {}
//   resultsObject[`${index}4`].initialState = populate(alternateVersion, version6, version2)
//   resultsObject[`${index}5`] = {}
//   resultsObject[`${index}5`].initialState = populate(alternateVersion, version6, version3)
//   resultsObject[`${index}6`] = {}
//   resultsObject[`${index}6`].initialState = populate(alternateVersion, version6, version4)

//   resultsObject[`${index}7`] = {}
//   resultsObject[`${index}7`].initialState = populate(alternateVersion, version7, version2)
//   resultsObject[`${index}8`] = {}
//   resultsObject[`${index}8`].initialState = populate(alternateVersion, version7, version3)
//   resultsObject[`${index}9`] = {}
//   resultsObject[`${index}9`].initialState = populate(alternateVersion, version7, version4)

//   return resultsObject
// }


module.exports = {
  populateData1,
  populateData2,
  // populateData3
}