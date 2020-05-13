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
const {
  populateData1,
  populateData2,
  populateData3,
  populateData4
} = require('./sevens-up.populate-data')

const getData1 = index => {
  const resultsObject = populateData1(index)

  resultsObject[`${index}1`].result = populate(version7, version4, version2)
  resultsObject[`${index}2`].result = populate(version7, version1, version3)
  resultsObject[`${index}3`].result = populate(version7, version2, version4)
  resultsObject[`${index}4`].result = populate(version5, version1, version5)
  resultsObject[`${index}5`].result = populate(version8, version1, version8)
  resultsObject[`${index}6`].result = populate(version6, version1, version6)
  resultsObject[`${index}7`].result = populate(version2, version4, version7)
  resultsObject[`${index}8`].result = populate(version3, version1, version7)
  resultsObject[`${index}9`].result = populate(version4, version2, version7)

  return resultsObject
}

const getData2 = index => {
  const resultsObject = populateData2(index, version5)

  resultsObject[`${index}1`].result = populate(version6, version1, version5)
  resultsObject[`${index}2`].result = populate(version6, version2, version6)
  resultsObject[`${index}3`].result = populate(version6, version2, version2)
  resultsObject[`${index}4`].result = populate(version6, version1, version5)
  resultsObject[`${index}5`].result = populate(version6, version1, version6)
  resultsObject[`${index}6`].result = populate(version6, version1, version4)
  resultsObject[`${index}7`].result = populate(version6, version7, version5)
  resultsObject[`${index}8`].result = populate(version6, version2, version6)
  resultsObject[`${index}9`].result = populate(version6, version7, version1)

  return resultsObject
}

const getData3 = index => {
  const resultsObject = populateData2(index, version6)

  resultsObject[`${index}1`].result = populate(version2, version1, version5)
  resultsObject[`${index}2`].result = populate(version2, version2, version6)
  resultsObject[`${index}3`].result = populate(version2, version2, version2)
  resultsObject[`${index}4`].result = populate(version4, version4, version5)
  resultsObject[`${index}5`].result = populate(version4, version1, version6)
  resultsObject[`${index}6`].result = populate(version4, version4, version4)
  resultsObject[`${index}7`].result = populate(version1, version7, version5)
  resultsObject[`${index}8`].result = populate(version1, version7, version6)
  resultsObject[`${index}9`].result = populate(version1, version7, version1)

  return resultsObject
}

const getData4 = index => {
  const resultsObject = populateData2(index, version7)

  resultsObject[`${index}1`].result = populate(version2, version1, version5)
  resultsObject[`${index}2`].result = populate(version2, version2, version6)
  resultsObject[`${index}3`].result = populate(version2, version2, version2)
  resultsObject[`${index}4`].result = populate(version4, version4, version5)
  resultsObject[`${index}5`].result = populate(version4, version1, version6)
  resultsObject[`${index}6`].result = populate(version4, version4, version4)
  resultsObject[`${index}7`].result = populate(version1, version7, version5)
  resultsObject[`${index}8`].result = populate(version1, version7, version6)
  resultsObject[`${index}9`].result = populate(version1, version7, version1)

  return resultsObject
}

const getData5 = index => {
  const resultsObject = populateData3(index)

  resultsObject[`${index}1`].result = populate(version2, version1, version5)
  resultsObject[`${index}2`].result = populate(version2, version2, version6)
  resultsObject[`${index}3`].result = populate(version2, version2, version2)
  resultsObject[`${index}4`].result = populate(version4, version4, version5)
  resultsObject[`${index}5`].result = populate(version4, version1, version6)
  resultsObject[`${index}6`].result = populate(version4, version4, version4)
  resultsObject[`${index}7`].result = populate(version1, version7, version5)
  resultsObject[`${index}8`].result = populate(version1, version7, version6)
  resultsObject[`${index}9`].result = populate(version1, version7, version1)

  return resultsObject
}

const getData6 = index => {
  const resultsObject = populateData4(index)
  resultsObject[`${index}1`].result = populate(version2, version1, version5)
  return resultsObject
}

const testData = () => {
  let resultsObject = {}

  resultsObject = {
    ...resultsObject,
    // triples + triples + singles
    ...getData1('a'),
    // triples + doubles + doubles
    // ...getData2('b'),
    // ...getData3('c'),
    // ...getData4('d'),
    // // triples + triples + doubles
    // ...getData5('e'),
    // // triples + triples + triples
    // ...getData6('f')
  }

  return resultsObject
}

module.exports = testData