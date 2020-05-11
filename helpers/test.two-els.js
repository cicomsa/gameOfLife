const {
  populate,
  version1,
  version2,
  version3,
  version4,
  version5,
  version6
} = require('./index')
const { populateData2, populateData3 } = require('./populate-data')

const getData1 = (index, alteredVersion) => {
  const resultsObject = populateData2(index, alteredVersion)
  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const getData2 = (index, alteredVersion) => {
  const resultsObject = populateData3(index, alteredVersion)
  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const testData = () => {
  let resultsObject = {}

  resultsObject = {
    ...resultsObject,
    // singles
    ...getData1('a', version2),
    ...getData1('b', version3),
    ...getData1('c', version4),
    // doubles
    ...getData2('j', version5),
    ...getData2('k', version6)
  }

  return resultsObject
}

module.exports = testData