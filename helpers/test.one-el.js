const { populate, version1, version2, version3, version4 } = require('./index')
const { populateData1 } = require('./populate-data')

const getData = (index, alteredVersion) => {
  const resultsObject = populateData1(index, alteredVersion)

  resultsObject[`${index}1`].result = populate(version1, version1, version1)
  resultsObject[`${index}2`].result = populate(version1, version1, version1)
  resultsObject[`${index}3`].result = populate(version1, version1, version1)

  return resultsObject
}

const testData = () => {
  let resultsObject = {}

  resultsObject = { ...resultsObject, ...getData('a', version2) }
  resultsObject = { ...resultsObject, ...getData('b', version3) }
  resultsObject = { ...resultsObject, ...getData('c', version4) }

  return resultsObject
}

module.exports = testData 