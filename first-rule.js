// Each live cell with one or no neighbors dies, as if by solitude.
const { version1, cells } = require('./helpers')

const newArray = (condition, newState, index, modifyArray = false) => {
  const array = [...version1]

  if (condition) {
    if (modifyArray) array[1] = 'o'
    newState.splice(index, 1, array)
  }
}

const addElement = (condition, els, el) => {
  if (condition) els.push(el)
}

const getTruth = (getCellsTruth, arr1, arr2, truth) => {
  if (arr2.length) {
    getCellsTruth(arr1, arr2, truth)
  }
}

const getCellsTruth1 = (arr1, arr2, truth) => {
  arr1.forEach(mainIndex => {
    arr2.map(index =>
      addElement(
        index === mainIndex
        || index === mainIndex - 1
        || index === mainIndex + 1,
        truth,
        true
      )
    )
  })
}

const getCellsTruth2 = (arr1, arr2, truth) => {
  if (!arr2.length) {
    const els = []

    arr1.map((el, i) => addElement(arr1[i + 1] === el + 1, els, el))
    addElement(els[0] === els[1] - 1, truth, true)
  }
}

const checkSingles = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  if (arr1.length === 1) {
    getTruth(getCellsTruth1, arr1, arr2, truth)
    getTruth(getCellsTruth1, arr1, arr3, truth)

    newArray(truth.length < 2, newState, index)
  }
}

const checkDoubles = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  if (arr1.length === 2) {
    if (arr1[0] === arr1[1] - 1) {
      getTruth(getCellsTruth1, arr1, arr2, truth)
      getTruth(getCellsTruth1, arr1, arr3, truth)
    }

    newArray(truth.length === 0, newState, index)
    newArray(
      truth.length === 1 && arr1[0] === arr1[1] - 1,
      newState,
      index,
      true
    )
  }
}

const checkTriples = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  if (arr1.length === 3) {
    getCellsTruth2(arr1, arr2, truth)
    getTruth(getCellsTruth2, arr1, arr3, truth)

    newArray(
      (truth.length === 1 || truth.length === 2)
      && arr1[0] === arr1[1] - 1,
      newState,
      index,
      true
    )
  }
}

const checkCellsTruth = (arr1, arr2, truth, index, newState, initialState, arr3 = []) => {
  checkSingles(arr1, arr2, arr3, truth, index, newState, initialState)
  checkDoubles(arr1, arr2, arr3, truth, index, newState, initialState)
  checkTriples(arr1, arr2, arr3, truth, index, newState, initialState)
}

const firstRule = initialState => {
  let newState = [...initialState]
  const resultsObject = {}

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = cells(arr, 'o')
    resultsObject[`truth${i + 1}`] = []
  })

  const { arr1, arr2, arr3, truth1, truth2, truth3 } = resultsObject

  checkCellsTruth(arr1, arr2, truth1, 0, newState, initialState)
  checkCellsTruth(arr2, arr1, truth2, 1, newState, initialState, arr3)
  checkCellsTruth(arr3, arr2, truth3, 2, newState, initialState)

  return newState
}

module.exports = firstRule