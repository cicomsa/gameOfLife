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
} = require('../helpers/index')
const {
  populateData1,
  populateData2,
  populateData3,
  populateData4,
  populateData5
} = require('../helpers/threes.populate-data')

// with version 2 at the end
const getData1 = () => {
  const resultsObject = populateData1('a', version2)
  resultsObject.a1.result = populate(version1, version5, version1)
  resultsObject.a2.result = populate(version1, version5, version1)
  resultsObject.a3.result = populate(version1, version3, version1)
  resultsObject.a4.result = populate(version1, version5, version1)
  resultsObject.a5.result = populate(version1, version5, version1)
  resultsObject.a6.result = populate(version1, version3, version1)
  resultsObject.a7.result = populate(version1, version3, version1)
  resultsObject.a8.result = populate(version1, version3, version1)
  resultsObject.a9.result = populate(version1, version3, version1)

  return resultsObject
}

// with version 3 at the end
const getData2 = () => {
  const resultsObject = populateData1('b', version3)
  resultsObject.b1.result = populate(version1, version5, version1)
  resultsObject.b2.result = populate(version1, version5, version1)
  resultsObject.b3.result = populate(version1, version3, version1)
  resultsObject.b4.result = populate(version1, version5, version1)
  resultsObject.b5.result = populate(version1, version8, version1)
  resultsObject.b6.result = populate(version1, version6, version1)
  resultsObject.b7.result = populate(version1, version3, version1)
  resultsObject.b8.result = populate(version1, version6, version1)
  resultsObject.b9.result = populate(version1, version6, version1)

  return resultsObject
}

// with version 4 at the end
const getData3 = () => {
  const resultsObject = populateData1('c', version4)
  resultsObject.c1.result = populate(version1, version3, version1)
  resultsObject.c2.result = populate(version1, version3, version1)
  resultsObject.c3.result = populate(version1, version3, version1)
  resultsObject.c4.result = populate(version1, version3, version1)
  resultsObject.c5.result = populate(version1, version6, version1)
  resultsObject.c6.result = populate(version1, version6, version1)
  resultsObject.c7.result = populate(version1, version3, version1)
  resultsObject.c8.result = populate(version1, version6, version1)
  resultsObject.c9.result = populate(version1, version6, version1)

  return resultsObject
}

const getData4 = () => {
  const resultsObject = populateData2('d', version5)
  resultsObject.d1.result = populate(version5, version5, version1)
  resultsObject.d2.result = populate(version3, version3, version1)
  resultsObject.d3.result = populate(version5, version5, version1)
  resultsObject.d4.result = populate(version3, version3, version1)
  resultsObject.d5.result = populate(version1, version5, version5)
  resultsObject.d6.result = populate(version1, version3, version3)
  resultsObject.d7.result = populate(version1, version5, version5)
  resultsObject.d8.result = populate(version1, version3, version3)

  return resultsObject
}

const getData5 = () => {
  const resultsObject = populateData2('e', version6)
  resultsObject.e1.result = populate(version3, version3, version1)
  resultsObject.e2.result = populate(version6, version6, version1)
  resultsObject.e3.result = populate(version3, version3, version1)
  resultsObject.e4.result = populate(version6, version6, version1)
  resultsObject.e5.result = populate(version1, version3, version3)
  resultsObject.e6.result = populate(version1, version6, version6)
  resultsObject.e7.result = populate(version1, version3, version3)
  resultsObject.e8.result = populate(version1, version6, version6)

  return resultsObject
}

const getData6 = (index, alternateVersion) => {
  const resultsObject = populateData3(index, alternateVersion)
  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)
  resultsObject[`${index}4`].result = populate(version1, version1, version1)
  resultsObject[`${index}5`].result = populate(version1, version1, version1)
  resultsObject[`${index}6`].result = populate(version1, version1, version1)
  resultsObject[`${index}7`].result = populate(alternateVersion, alternateVersion, version1)
  resultsObject[`${index}8`].result = populate(alternateVersion, alternateVersion, version1)
  resultsObject[`${index}9`].result = populate(version1, alternateVersion, alternateVersion)
  resultsObject[`${index}10`].result = populate(version1, alternateVersion, alternateVersion)

  return resultsObject
}

const getData7 = index => {
  const resultsObject = populateData4(index)
  resultsObject[`${index}1`].result = populate(version3, version3, version1)
  resultsObject[`${index}2`].result = populate(version3, version3, version1)
  resultsObject[`${index}3`].result = populate(version3, version3, version1)
  resultsObject[`${index}4`].result = populate(version1, version1, version1)
  resultsObject[`${index}5`].result = populate(version1, version1, version1)
  resultsObject[`${index}6`].result = populate(version1, version1, version1)
  resultsObject[`${index}7`].result = populate(version3, version3, version1)
  resultsObject[`${index}8`].result = populate(version3, version3, version1)
  resultsObject[`${index}9`].result = populate(version3, version3, version1)
  resultsObject[`${index}10`].result = populate(version1, version3, version3)
  resultsObject[`${index}11`].result = populate(version1, version3, version3)
  resultsObject[`${index}12`].result = populate(version1, version3, version3)
  resultsObject[`${index}13`].result = populate(version1, version1, version1)
  resultsObject[`${index}14`].result = populate(version1, version1, version1)
  resultsObject[`${index}15`].result = populate(version1, version1, version1)
  resultsObject[`${index}16`].result = populate(version1, version3, version3)
  resultsObject[`${index}17`].result = populate(version1, version3, version3)
  resultsObject[`${index}18`].result = populate(version1, version3, version3)

  return resultsObject
}

const getData8 = index => {
  const resultsObject = populateData5(index)
  resultsObject[`${index}1`].result = populate(version3, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version3, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version3)

  return resultsObject
}

const testData = () => {
  let resultsObject = {}

  resultsObject = {
    ...resultsObject,
    // singles
    ...getData1(),
    ...getData2(),
    ...getData3(),
    // doubles
    ...getData4(),
    ...getData5(),
    ...getData6('f', version5),
    // separated doubles
    ...getData6('g', version6),
    // triples
    ...getData7('j'),
    ...getData8('k')
  }

  return resultsObject
}

module.exports = testData