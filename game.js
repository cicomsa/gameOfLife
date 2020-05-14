let replaceWith

const cells = (array, type) => {
  result = array.reduce((result, el, i) => {
    if (el === type)
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

const checkTruth = (arr1, arr2, dArr1, els, dEls, arr, dArr, arr3 = []) => {
  if (arr1.length) {
    getTruthV1(arr1, arr2, els, arr)
    getTruthV1(dArr1, arr1, dEls, dArr)
    getTruthV1(dArr1, arr2, dEls, dArr)

    if (arr3.length) {
      getTruthV1(arr1, arr3, els, arr)
      getTruthV1(dArr1, arr3, dEls, dArr)
    }

    getTruthV2(arr1, els, arr)
  }
}

const generateNewState = (els, replaceWith, newState, liveCells = true) => {
  Object.keys(els).map((key, i) => {
    const elsItems = els[key]
    replaceWith = liveCells ? ['', '', ''] : newState[i]

    if (liveCells) {
      Object.keys(elsItems).map(itemKey => {
        replaceWith[itemKey] =
          elsItems[itemKey] === 2 || elsItems[itemKey] === 3 ? 'o' : ''
      })
    } else {
      Object.keys(elsItems).map(itemKey => {
        if (elsItems[itemKey] === 3) {
          replaceWith[itemKey] = 'o'
        }
      })
    }

    newState.splice(i, 1, replaceWith)
  })
}

const firstRule = (initialState, withDeadCells = false) => {
  let newState = [...initialState]
  resultsObject = { els: {}, dEls: {} }

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = cells(arr, 'o')
    resultsObject[`dArr${i + 1}`] = cells(arr, '')
    resultsObject.els[`arr${i + 1}`] = { 0: 0, 1: 0, 2: 0 }
    resultsObject.dEls[`dArr${i + 1}`] = { 0: 0, 1: 0, 2: 0 }
  })

  const { arr1, arr2, arr3, els, dArr1, dArr2, dArr3, dEls } = resultsObject

  checkTruth(arr1, arr2, dArr1, els, dEls, 'arr1', 'dArr1')
  checkTruth(arr2, arr1, dArr2, els, dEls, 'arr2', 'dArr2', arr3)
  checkTruth(arr3, arr2, dArr3, els, dEls, 'arr3', 'dArr3')

  generateNewState(els, replaceWith, newState) // live cells logic only
  if (withDeadCells) {
    generateNewState(dEls, replaceWith, newState, false) // dead cells logic only
  }

  // console.log({ els }, { dEls })
  // console.log(initialState)
  // console.log(newState)
  return newState
}

module.exports = firstRule;