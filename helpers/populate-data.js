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

// three elements - singles
const populateData4 = (index, alternativeVersion) => {
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
const populateData5 = (index, alternateVersion) => {
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
const populateData6 = (index, alternateVersion) => {
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

// three elements - separated doubles
const populateData7 = index => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version7, version2, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version7, version3, version1)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version7, version4, version1)
  resultsObject[`${index}4`] = {}
  resultsObject[`${index}4`].initialState = populate(version7, version1, version2)
  resultsObject[`${index}5`] = {}
  resultsObject[`${index}5`].initialState = populate(version7, version1, version3)
  resultsObject[`${index}6`] = {}
  resultsObject[`${index}6`].initialState = populate(version7, version1, version4)
  resultsObject[`${index}7`] = {}
  resultsObject[`${index}7`].initialState = populate(version2, version7, version1)
  resultsObject[`${index}8`] = {}
  resultsObject[`${index}8`].initialState = populate(version3, version7, version1)
  resultsObject[`${index}9`] = {}
  resultsObject[`${index}9`].initialState = populate(version4, version7, version1)
  resultsObject[`${index}10`] = {}
  resultsObject[`${index}10`].initialState = populate(version1, version7, version2)
  resultsObject[`${index}11`] = {}
  resultsObject[`${index}11`].initialState = populate(version1, version7, version3)
  resultsObject[`${index}12`] = {}
  resultsObject[`${index}12`].initialState = populate(version1, version7, version4)
  resultsObject[`${index}13`] = {}
  resultsObject[`${index}13`].initialState = populate(version2, version1, version7)
  resultsObject[`${index}14`] = {}
  resultsObject[`${index}14`].initialState = populate(version3, version1, version7)
  resultsObject[`${index}15`] = {}
  resultsObject[`${index}15`].initialState = populate(version4, version1, version7)
  resultsObject[`${index}16`] = {}
  resultsObject[`${index}16`].initialState = populate(version1, version2, version7)
  resultsObject[`${index}17`] = {}
  resultsObject[`${index}17`].initialState = populate(version1, version3, version7)
  resultsObject[`${index}18`] = {}
  resultsObject[`${index}18`].initialState = populate(version1, version4, version7)

  return resultsObject
}

// three elements - triples
const populateData8 = index => {
  const resultsObject = {}

  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, version1, version1)
  resultsObject[`${index}2`] = {}
  resultsObject[`${index}2`].initialState = populate(version1, version8, version1)
  resultsObject[`${index}3`] = {}
  resultsObject[`${index}3`].initialState = populate(version1, version1, version8)

  return resultsObject
}

// four elements - triples
const populateData9 = index => {
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
const populateData10 = (index, alternateVersion) => {
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

module.exports = {
  populateData1,
  populateData2,
  populateData3,
  populateData4,
  populateData5,
  populateData6,
  populateData7,
  populateData8,
  populateData9,
  populateData10
}