// Each live cell with one or no neighbors dies, as if by solitude.
const { version1, cells } = require('./helpers')

const newArray = (condition, newState, index, changeArray = false) => {
  const array = [...version1]

  if (condition) {
    if (changeArray) array[1] = 'o'
    newState.splice(index, 1, array)
  }
}

const addElement = (condition, els, el) => {
  if (condition) els.push(el)
}

const getTruth = (getLiveCellsTruth, arr1, arr2, truth) => {
  if (arr2.length) {
    getLiveCellsTruth1(arr1, arr2, truth)
  }
}

const getLiveCellsTruth1 = (arr1, arr2, truth) => {
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

const getLiveCellsTruth2 = (arr1, arr2, truth) => {
  if (!arr2.length) {
    let els = []

    arr1.map((el, i) => addElement(arr1[i + 1] === el + 1, els, el))
    addElement(els[0] === els[1] - 1, truth, true)
  }
}

const checkLengthOne = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  if (arr1.length === 1) {
    getTruth(getLiveCellsTruth1, arr1, arr2, truth)
    getTruth(getLiveCellsTruth1, arr1, arr3, truth)

    newArray(truth.length < 2, newState, index)
  }
}

const checkLengthTwo = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  if (arr1.length === 2) {
    if (arr1[0] === arr1[1] - 1) {
      getTruth(getLiveCellsTruth1, arr1, arr2, truth)
      getTruth(getLiveCellsTruth1, arr1, arr3, truth)
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

const checkLengthThree = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  if (arr1.length === 3) {
    getLiveCellsTruth2(arr1, arr2, truth)
    getTruth(getLiveCellsTruth2, arr1, arr3, truth)

    newArray(
      (truth.length === 1 || truth.length === 2)
      && arr1[0] === arr1[1] - 1,
      newState,
      index,
      true
    )
  }
}

const checkLiveCellsTruth = (arr1, arr2, truth, index, newState, initialState, arr3 = []) => {
  checkLengthOne(arr1, arr2, arr3, truth, index, newState, initialState)
  checkLengthTwo(arr1, arr2, arr3, truth, index, newState, initialState)
  checkLengthThree(arr1, arr2, arr3, truth, index, newState, initialState)
}

const firstRule = initialState => {
  let newState = [...initialState]
  const resultsObject = {}

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = cells(arr, 'o')
    resultsObject[`truth${i + 1}`] = []
  })

  const { arr1, arr2, arr3, truth1, truth2, truth3 } = resultsObject

  checkLiveCellsTruth(arr1, arr2, truth1, 0, newState, initialState)
  checkLiveCellsTruth(arr2, arr1, truth2, 1, newState, initialState, arr3)
  checkLiveCellsTruth(arr3, arr2, truth3, 2, newState, initialState)

  return newState
}

module.exports = firstRule