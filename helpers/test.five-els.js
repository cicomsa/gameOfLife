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
  populateData3
} = require('./fives.populate-data')

const getData1 = index => {
  const resultsObject = populateData1(index, version5)

  resultsObject[`${index}1`].result = populate(version7, version2, version1)
  resultsObject[`${index}2`].result = populate(version3, version1, version1)
  resultsObject[`${index}3`].result = populate(version2, version7, version1)
  resultsObject[`${index}4`].result = populate(version1, version7, version2)
  resultsObject[`${index}5`].result = populate(version1, version2, version7)
  resultsObject[`${index}6`].result = populate(version1, version2, version7)

  return resultsObject
}

const getData2 = index => {
  const resultsObject = populateData1(index, version6)

  resultsObject[`${index}1`].result = populate(version7, version4, version1)
  resultsObject[`${index}2`].result = populate(version3, version1, version1)
  resultsObject[`${index}3`].result = populate(version4, version7, version1)
  resultsObject[`${index}4`].result = populate(version1, version7, version4)
  resultsObject[`${index}5`].result = populate(version1, version4, version7)
  resultsObject[`${index}6`].result = populate(version1, version4, version7)

  return resultsObject
}

const getData3 = index => {
  const resultsObject = populateData1(index, version7)

  resultsObject[`${index}1`].result = populate(version7, version7, version1)
  resultsObject[`${index}2`].result = populate(version3, version1, version1)
  resultsObject[`${index}3`].result = populate(version7, version7, version1)
  resultsObject[`${index}4`].result = populate(version1, version7, version7)
  resultsObject[`${index}5`].result = populate(version1, version7, version7)
  resultsObject[`${index}6`].result = populate(version1, version7, version7)

  return resultsObject
}

const getData4 = index => {
  const resultsObject = populateData2(index, version2)

  resultsObject[`${index}1`].result = populate(version5, version2, version1)
  resultsObject[`${index}2`].result = populate(version5, version2, version1)
  resultsObject[`${index}3`].result = populate(version5, version2, version1)
  resultsObject[`${index}4`].result = populate(version2, version2, version2)
  resultsObject[`${index}5`].result = populate(version2, version7, version3)
  resultsObject[`${index}6`].result = populate(version2, version7, version4)
  resultsObject[`${index}7`].result = populate(version1, version2, version5)
  resultsObject[`${index}8`].result = populate(version1, version1, version8)
  resultsObject[`${index}9`].result = populate(version1, version4, version6)

  return resultsObject
}

const getData5 = index => {
  const resultsObject = populateData2(index, version3)

  resultsObject[`${index}1`].result = populate(version8, version1, version1)
  resultsObject[`${index}2`].result = populate(version8, version1, version1)
  resultsObject[`${index}3`].result = populate(version8, version1, version1)

  resultsObject[`${index}4`].result = populate(version3, version7, version2)
  resultsObject[`${index}5`].result = populate(version3, version7, version3)
  resultsObject[`${index}6`].result = populate(version3, version7, version4)

  resultsObject[`${index}7`].result = populate(version1, version2, version5)
  resultsObject[`${index}8`].result = populate(version1, version1, version8)
  resultsObject[`${index}9`].result = populate(version1, version4, version6)

  return resultsObject
}

const getData6 = index => {
  const resultsObject = populateData2(index, version4)

  resultsObject[`${index}1`].result = populate(version6, version4, version1)
  resultsObject[`${index}2`].result = populate(version6, version4, version1)
  resultsObject[`${index}3`].result = populate(version6, version4, version1)
  resultsObject[`${index}4`].result = populate(version4, version7, version2)
  resultsObject[`${index}5`].result = populate(version4, version7, version3)
  resultsObject[`${index}6`].result = populate(version4, version4, version4)
  resultsObject[`${index}7`].result = populate(version1, version2, version5)
  resultsObject[`${index}8`].result = populate(version1, version1, version8)
  resultsObject[`${index}9`].result = populate(version1, version4, version6)

  return resultsObject
}

const getData7 = index => {
  const resultsObject = populateData3(index, version5)

  resultsObject[`${index}1`].result = populate(version5, version1, version2)
  resultsObject[`${index}2`].result = populate(version5, version1, version3)
  resultsObject[`${index}3`].result = populate(version5, version2, version1)

  resultsObject[`${index}4`].result = populate(version5, version4, version1)
  resultsObject[`${index}5`].result = populate(version5, version4, version3)
  resultsObject[`${index}6`].result = populate(version5, version4, version4)

  resultsObject[`${index}7`].result = populate(version5, version2, version1)
  resultsObject[`${index}8`].result = populate(version5, version7, version3)
  resultsObject[`${index}9`].result = populate(version5, version7, version1)

  return resultsObject
}

const getData8 = index => {
  const resultsObject = populateData3(index, version6)

  resultsObject[`${index}1`].result = populate(version7, version2, version1)
  resultsObject[`${index}2`].result = populate(version3, version1, version1)
  resultsObject[`${index}3`].result = populate(version2, version7, version1)
  resultsObject[`${index}4`].result = populate(version1, version7, version2)
  resultsObject[`${index}5`].result = populate(version1, version2, version7)
  resultsObject[`${index}6`].result = populate(version1, version2, version7)
  resultsObject[`${index}7`].result = populate(version1, version7, version2)
  resultsObject[`${index}8`].result = populate(version1, version2, version7)
  resultsObject[`${index}9`].result = populate(version1, version2, version7)

  return resultsObject
}

const getData9 = index => {
  const resultsObject = populateData3(index, version7)

  resultsObject[`${index}1`].result = populate(version7, version2, version1)
  resultsObject[`${index}2`].result = populate(version3, version1, version1)
  resultsObject[`${index}3`].result = populate(version2, version7, version1)
  resultsObject[`${index}4`].result = populate(version1, version7, version2)
  resultsObject[`${index}5`].result = populate(version1, version2, version7)
  resultsObject[`${index}6`].result = populate(version1, version2, version7)
  resultsObject[`${index}7`].result = populate(version1, version7, version2)
  resultsObject[`${index}8`].result = populate(version1, version2, version7)
  resultsObject[`${index}9`].result = populate(version1, version2, version7)

  return resultsObject
}

const testData = () => {
  let resultsObject = {}

  resultsObject = {
    ...resultsObject,
    // triples + doubles
    ...getData1('a'),
    ...getData2('b'),
    ...getData3('c'),
    // triples + singles
    ...getData4('d'),
    ...getData5('e'),
    ...getData6('f'),
    ...getData7('g'),
    // ...getData8('h'),
    // ...getData9('i')
  }

  return resultsObject
}

module.exports = testData