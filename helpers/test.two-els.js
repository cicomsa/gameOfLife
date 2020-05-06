const { populate, version1, version2, version3, version4, version5, version6 } = require('./index')
const { populateData2 } = require('./populate-data')

const getData = (index, alteredVersion) => {
  const resultsObject = populateData2(index, alteredVersion)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)
  resultsObject[`${index}4`].result = populate(version1, version1, version1)
  resultsObject[`${index}5`].result = populate(version1, version1, version1)
  resultsObject[`${index}6`].result = populate(version1, version1, version1)
}

const testData = () => {
  const resultsObject = {}

  // singles
  getData('a', version2)
  getData('b', version3)
  getData('c', version4)

  // doubles
  getData('d', version5)
  getData('e', version6)

  return resultsObject
}

module.exports = testData