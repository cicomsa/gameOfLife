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

// four elements - triples
const populateData1 = index => {
  const resultsObject = {}
  // triple up
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, version2, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version8, version3, version1)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version8, version4, version1)

  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version8, version1, version2)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version8, version1, version3)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version8, version1, version4)

  // triple middle
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version2, version8, version1)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version3, version8, version1)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version4, version8, version1)

  resultsObject[`${index}10`] = {}
  resultsObject[`${index}10`].initialState = populate(version1, version8, version2)
  resultsObject[`${index}11`] = {}
  resultsObject[`${index}11`].initialState = populate(version1, version8, version3)
  resultsObject[`${index}12`] = {}
  resultsObject[`${index}12`].initialState = populate(version1, version8, version4)

  // triple down
  resultsObject[`${index}13`] = {}
  resultsObject[`${index}13`].initialState = populate(version2, version1, version8)
  resultsObject[`${index}14`] = {}
  resultsObject[`${index}14`].initialState = populate(version3, version1, version8)
  resultsObject[`${index}15`] = {}
  resultsObject[`${index}15`].initialState = populate(version4, version1, version8)

  resultsObject[`${index}16`] = {}
  resultsObject[`${index}16`].initialState = populate(version1, version2, version8)
  resultsObject[`${index}17`] = {}
  resultsObject[`${index}17`].initialState = populate(version1, version3, version8)
  resultsObject[`${index}18`] = {}
  resultsObject[`${index}18`].initialState = populate(version1, version4, version8)

  return resultsObject
}

// four elements - doubles
const populateData2 = (index, alternateVersion) => {
  const resultsObject = {}
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alternateVersion, version5, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(alternateVersion, version6, version1)

  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(alternateVersion, version1, version5)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(alternateVersion, version1, version6)

  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version1, alternateVersion, version5)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version1, alternateVersion, version6)

  return resultsObject
}

// four elements - separate doubles + doubles
const populateData3 = (index, alternateVersion) => {
  const resultsObject = {}
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version7, alternateVersion, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version7, version1, alternateVersion)

  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(alternateVersion, version7, version1)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version1, version7, alternateVersion)

  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(alternateVersion, version1, version7)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version1, alternateVersion, version7)

  return resultsObject
}

// four elements - double separate doubles
const populateData4 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version7, version7, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version7, version1, version7)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version1, version7, version7)


  return resultsObject
}

// four elements - doubles + singles - part 1
const populateData5 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(alternateVersion, version2, version2)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(alternateVersion, version2, version3)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(alternateVersion, version2, version4)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(alternateVersion, version3, version2)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(alternateVersion, version3, version3)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(alternateVersion, version3, version4)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(alternateVersion, version4, version2)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(alternateVersion, version4, version3)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(alternateVersion, version4, version4)

  return resultsObject
}

// four elements - doubles + singles - part 2
const populateData6 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version2, alternateVersion, version2)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version2, alternateVersion, version3)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version2, alternateVersion, version4)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version3, alternateVersion, version2)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version3, alternateVersion, version3)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version3, alternateVersion, version4)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version4, alternateVersion, version2)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version4, alternateVersion, version3)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version4, alternateVersion, version4)

  return resultsObject
}

// four elements - doubles + singles - part 3
const populateData7 = (index, alternateVersion) => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version2, version2, alternateVersion)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version2, version3, alternateVersion)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version2, version4, alternateVersion)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version3, version2, alternateVersion)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version3, version3, alternateVersion)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version3, version4, alternateVersion)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version4, version2, alternateVersion)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version4, version3, alternateVersion)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version4, version4, alternateVersion)

  return resultsObject
}

module.exports = {
  populateData1,
  populateData2,
  populateData3,
  populateData4,
  populateData5,
  populateData6,
  populateData7,
  // populateData8,
  // populateData9,
  // populateData10,
  // populateData11,
  // populateData12
}