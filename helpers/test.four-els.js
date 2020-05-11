const {
  populate,
  // version1,
  // version2,
  // version3,
  // version4,
  // version5,
  // version6,
  // version7,
  // version8
} = require('./index')
const {
  populateData1,
  populateData2,
  populateData3,
  populateData4,
  populateData5,
  populateData6,
  populateData7,
} = require('./fours.populate-data')

const version1 = ['', '', '']
const version2 = ['o', '', '']
const version3 = ['', 'o', '']
const version4 = ['', '', 'o']
const version5 = ['o', 'o', '']
const version6 = ['', 'o', 'o']
const version7 = ['o', '', 'o']
const version8 = ['o', 'o', 'o']

const getData1 = index => {
  const resultsObject = populateData1(index)
  // triple up
  resultsObject[`${index}1`].result = populate(version5, version2, version1)
  resultsObject[`${index}2`].result = populate(version8, version3, version1)
  resultsObject[`${index}3`].result = populate(version6, version4, version1)

  resultsObject[`${index}4`].result = populate(version3, version1, version1)
  resultsObject[`${index}5`].result = populate(version3, version1, version1)
  resultsObject[`${index}6`].result = populate(version3, version1, version1)
  // // triple middle
  resultsObject[`${index}7`].result = populate(version2, version5, version1)
  resultsObject[`${index}8`].result = populate(version3, version8, version1)
  resultsObject[`${index}9`].result = populate(version4, version6, version1)

  resultsObject[`${index}10`].result = populate(version1, version5, version2)
  resultsObject[`${index}11`].result = populate(version1, version8, version3)
  resultsObject[`${index}12`].result = populate(version1, version6, version4)
  // // triple down
  resultsObject[`${index}13`].result = populate(version1, version1, version3)
  resultsObject[`${index}14`].result = populate(version1, version1, version3)
  resultsObject[`${index}15`].result = populate(version1, version1, version3)

  resultsObject[`${index}16`].result = populate(version1, version2, version5)
  resultsObject[`${index}17`].result = populate(version1, version3, version8)
  resultsObject[`${index}18`].result = populate(version1, version4, version6)

  return resultsObject
}

const getData2 = (index, alternateVersion) => {
  const resultsObject = populateData2(index, alternateVersion)

  resultsObject[`${index}1`].result = populate(alternateVersion, version5, version1)
  resultsObject[`${index}2`].result = populate(alternateVersion, version6, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)
  resultsObject[`${index}4`].result = populate(version1, version1, version1)
  resultsObject[`${index}5`].result = populate(version1, alternateVersion, version5)
  resultsObject[`${index}6`].result = populate(version1, alternateVersion, version6)

  return resultsObject
}

const getData3 = (index, alternateVersion, alternateVersion2) => {
  const resultsObject = populateData3(index, alternateVersion)

  resultsObject[`${index}1`].result = populate(alternateVersion2, alternateVersion, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(alternateVersion, alternateVersion2, version1)

  resultsObject[`${index}4`].result = populate(version1, alternateVersion2, alternateVersion)
  resultsObject[`${index}5`].result = populate(version1, version1, version1)
  resultsObject[`${index}6`].result = populate(version1, alternateVersion, alternateVersion2)

  return resultsObject
}

const getData4 = index => {
  const resultsObject = populateData4(index)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const getData5 = index => {
  const resultsObject = populateData5(index, version5)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const getData6 = index => {
  const resultsObject = populateData5(index, version6)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const getData7 = index => {
  const resultsObject = populateData6(index, version5)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const getData8 = index => {
  const resultsObject = populateData6(index, version6)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const getData9 = index => {
  const resultsObject = populateData7(index, version5)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const getData10 = index => {
  const resultsObject = populateData7(index, version6)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const testData = () => {
  let resultsObject = {}

  resultsObject = {
    ...resultsObject,
    ...getData1('a'),
    ...getData2('b', version5),
    ...getData2('c', version6),
    ...getData3('d', version5, version2),
    ...getData3('e', version6, version4),
    ...getData4('f'),
  }

  return resultsObject
}

module.exports = testData