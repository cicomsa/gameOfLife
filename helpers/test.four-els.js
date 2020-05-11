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
// const { populateData2, populateData3 } = require('./populate-data')

const version1 = ['', '', '']
const version2 = ['o', '', '']
const version3 = ['', 'o', '']
const version4 = ['', '', 'o']
const version5 = ['o', 'o', '']
const version6 = ['', 'o', 'o']
const version7 = ['o', '', 'o']
const version8 = ['o', 'o', 'o']


const populateData2 = index => {
  const resultsObject = {}
  // triple up
  resultsObject[`${index}1`] = {}
  resultsObject[`${index}1`].initialState = populate(version8, version2, version1)
  // resultsObject[`${index}2`] = {}
  // resultsObject[`${index}2`].initialState = populate(version8, version3, version1)
  // resultsObject[`${index}3`] = {}
  // resultsObject[`${index}3`].initialState = populate(version8, version4, version1)

  // resultsObject[`${index}4`] = {}
  // resultsObject[`${index}4`].initialState = populate(version8, version1, version2)
  // resultsObject[`${index}5`] = {}
  // resultsObject[`${index}5`].initialState = populate(version8, version1, version3)
  // resultsObject[`${index}6`] = {}
  // resultsObject[`${index}6`].initialState = populate(version8, version1, version4)

  // // triple middle
  // resultsObject[`${index}7`] = {}
  // resultsObject[`${index}7`].initialState = populate(version2, version8, version1)
  // resultsObject[`${index}8`] = {}
  // resultsObject[`${index}8`].initialState = populate(version3, version8, version1)
  // resultsObject[`${index}9`] = {}
  // resultsObject[`${index}9`].initialState = populate(version4, version8, version1)

  // resultsObject[`${index}10`] = {}
  // resultsObject[`${index}10`].initialState = populate(version1, version8, version2)
  // resultsObject[`${index}11`] = {}
  // resultsObject[`${index}11`].initialState = populate(version1, version8, version3)
  // resultsObject[`${index}12`] = {}
  // resultsObject[`${index}12`].initialState = populate(version1, version8, version4)

  // // triple down
  // resultsObject[`${index}10`] = {}
  // resultsObject[`${index}10`].initialState = populate(version2, version1, version8)
  // resultsObject[`${index}11`] = {}
  // resultsObject[`${index}11`].initialState = populate(version3, version1, version8)
  // resultsObject[`${index}12`] = {}
  // resultsObject[`${index}12`].initialState = populate(version4, version1, version8)

  // resultsObject[`${index}10`] = {}
  // resultsObject[`${index}10`].initialState = populate(version1, version2, version8)
  // resultsObject[`${index}11`] = {}
  // resultsObject[`${index}11`].initialState = populate(version1, version3, version8)
  // resultsObject[`${index}12`] = {}
  // resultsObject[`${index}12`].initialState = populate(version1, version4, version8)

  return resultsObject
}

// const version1 = ['', '', '']
// const version2 = ['o', '', '']
// const version3 = ['', 'o', '']
// const version4 = ['', '', 'o']

// const version5 = ['o', 'o', '']
// const version6 = ['', 'o', 'o']

// const version7 = ['o', '', 'o']
// const version8 = ['o', 'o', 'o']

const getData1 = index => {
  const resultsObject = populateData2(index)
  // triple up
  resultsObject[`${index}1`].result = populate(version5, version2, version1)
  // resultsObject[`${index}2`].result = populate(version8, version3, version1)
  // resultsObject[`${index}3`].result = populate(version6, version4, version1)
  // // triple middle
  // resultsObject[`${index}4`].result = populate(version2, version5, version1)
  // resultsObject[`${index}5`].result = populate(version3, version8, version1)
  // resultsObject[`${index}6`].result = populate(version4, version6, version1)

  // resultsObject[`${index}7`].result = populate(version1, version5, version2)
  // resultsObject[`${index}8`].result = populate(version1, version8, version3)
  // resultsObject[`${index}9`].result = populate(version1, version6, version4)
  // // triple down
  // resultsObject[`${index}10`].result = populate(version1, version2, version5)
  // resultsObject[`${index}11`].result = populate(version1, version3, version8)
  // resultsObject[`${index}12`].result = populate(version1, version4, version6)

  return resultsObject
}

const testData = () => {
  let resultsObject = {}

  resultsObject = {
    ...resultsObject,
    ...getData1('a'),
  }

  return resultsObject
}

module.exports = testData