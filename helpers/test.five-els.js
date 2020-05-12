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
} = require('./fives.populate-data')

const getData1 = (index, alternateVersion) => {
  const resultsObject = populateData1(index, alternateVersion)
  resultsObject[`${index}1`].result = populate(version7, version2, version1)
  resultsObject[`${index}2`].result = populate(version7, version4, version1)
  resultsObject[`${index}3`].result = populate(version7, version7, version1)
  resultsObject[`${index}4`].result = populate(version3, version1, version1)
  resultsObject[`${index}5`].result = populate(version3, version1, version1)
  resultsObject[`${index}6`].result = populate(version3, version1, version1)

  resultsObject[`${index}7`].result = populate(version2, version7, version1)
  resultsObject[`${index}8`].result = populate(version4, version7, version1)
  resultsObject[`${index}9`].result = populate(version7, version7, version1)
  resultsObject[`${index}10`].result = populate(version1, version7, version2)
  resultsObject[`${index}11`].result = populate(version1, version7, version4)
  resultsObject[`${index}12`].result = populate(version1, version7, version7)

  resultsObject[`${index}13`].result = populate(version1, version2, version7)
  resultsObject[`${index}14`].result = populate(version1, version4, version7)
  resultsObject[`${index}15`].result = populate(version1, version7, version7)
  resultsObject[`${index}16`].result = populate(version1, version2, version7)
  resultsObject[`${index}17`].result = populate(version1, version4, version7)
  resultsObject[`${index}18`].result = populate(version1, version7, version7)

  return resultsObject
}

const testData = () => {
  let resultsObject = {}

  resultsObject = {
    ...resultsObject,
    ...getData1(),
  }

  return resultsObject
}

module.exports = testData