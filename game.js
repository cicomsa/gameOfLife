const array = ['', '', '']
let replaceWith = [...array]

const liveCells = array => {
  result = array.reduce((result, el, i) => {
    if (el === 'o')
      result.push(i)
    return result
  }, [])

  return result
}

const conditionOne = (mainIndex, index) => mainIndex === index ||
  mainIndex === index - 1 || mainIndex === index + 1

const conditionTwo = (el, i, arr) => el === arr[i + 1] - 1
const conditionThree = (el, i, arr) => el === arr[i - 1] + 1


const getTruthV1 = (arr1, arr2, els, arr) => {
  arr1.forEach(mainIndex => {
    arr2.map(index => {
      if (conditionOne(mainIndex, index)) {
        els[arr][mainIndex] += 1
      }
    })
  })
}

const getTruthV2 = (arr1, els, arr) => {
  if (arr1.length === 3) {
    arr1.map((el, i) => {
      if (conditionTwo(el, i, arr1) && conditionThree(el, i, arr1)) {
        els[arr][el] += 1
      }
    })
  }

  arr1.map((el, i) => {
    if (conditionTwo(el, i, arr1) || conditionThree(el, i, arr1)) {
      els[arr][el] += 1
    }
  })
}

const checkTruth = (arr1, arr2, els, arr, arr3 = []) => {
  if (arr1.length) {
    getTruthV1(arr1, arr2, els, arr)

    if (arr3.length) {
      getTruthV1(arr1, arr3, els, arr)
    }

    getTruthV2(arr1, els, arr)
  }
}

const generateNewState = (els, replaceWith, newState) => {
  Object.keys(els).map((key, i) => {
    const elsItems = els[key]
    replaceWith = [...array]

    Object.keys(elsItems).map(itemKey => {
      replaceWith[itemKey] = elsItems[itemKey] === 2 || elsItems[itemKey] === 3 ? 'o' : ''
    })

    newState.splice(i, 1, replaceWith)
  })
}

const firstRule = initialState => {
  let newState = [...initialState]
  resultsObject = { els: {} }

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = liveCells(arr)
    resultsObject.els[`arr${i + 1}`] = { 0: 0, 1: 0, 2: 0 }
  })

  const { arr1, arr2, arr3, els } = resultsObject

  checkTruth(arr1, arr2, els, 'arr1')
  checkTruth(arr2, arr1, els, 'arr2', arr3)
  checkTruth(arr3, arr2, els, 'arr3')

  generateNewState(els, replaceWith, newState)

  // console.log(els)
  // console.log(initialState)
  // console.log(newState, truth1, truth2, truth3)
  return newState
}

module.exports = firstRule;