// Each live cell with one or no neighbors dies, as if by solitude.
const { version1, cells } = require('./helpers')

const getLiveCellsTruth1 = (arr1, arr2, truth) => {
  arr1.forEach(mainIndex => {
    arr2.map(index => {
      if (index === mainIndex
        || index === mainIndex - 1
        || index === mainIndex + 1
      ) {
        truth.push(true)
      }
    })
  })
}

const getLiveCellsTruth2 = (arr1, arr2, truth) => {
  if (!arr2.length) {
    let els = []
    arr1.map((el, i) => {
      if (arr1[i + 1] === el + 1) {
        els.push(el)
      }
    })

    if (els[0] === els[1] - 1) {
      truth.push(true)
    }
  }
}

const checkLengthOne = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  const newArray = [...version1]

  if (arr1.length === 1) {
    if (arr2.length) {
      getLiveCellsTruth1(arr1, arr2, truth)
    }

    if (arr3.length) {
      getLiveCellsTruth1(arr1, arr3, truth)
    }

    if (truth.length < 2) {
      newState.splice(index, 1, newArray)
    }
  }
}

const checkLengthTwo = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  const newArray = [...version1]

  if (arr1.length === 2) {
    if (arr1[0] === arr1[1] - 1) {
      if (arr2.length) {
        getLiveCellsTruth1(arr1, arr2, truth)
      }

      if (arr3.length) {
        getLiveCellsTruth1(arr1, arr3, truth)
      }
    }

    if (truth.length === 0) {
      newState.splice(index, 1, newArray)
    }

    if (truth.length === 1 && arr1[0] === arr1[1] - 1) {
      newArray[1] = 'o'
      newState.splice(index, 1, newArray)
    }
  }
}

const checkLengthThree = (arr1, arr2, arr3, truth, index, newState, initialState) => {
  const newArray = [...version1]

  if (arr1.length === 3) {
    getLiveCellsTruth2(arr1, arr2, truth)

    if (arr3.length) {
      getLiveCellsTruth2(arr1, arr3, truth)
    }

    if (
      (truth.length === 1 || truth.length === 2)
      && arr1[0] === arr1[1] - 1
    ) {
      newArray[1] = 'o'
      newState.splice(index, 1, newArray)
    }
  }
}

const checkLiveCellsTruth = (arr1, arr2, truth, index, newState, initialState, arr3 = []) => {
  checkLengthOne(arr1, arr2, arr3, truth, index, newState, initialState)
  checkLengthTwo(arr1, arr2, arr3, truth, index, newState, initialState)
  checkLengthThree(arr1, arr2, arr3, truth, index, newState, initialState)
}

const firstRule = initialState => {
  let newState = [...initialState]
  resultsObject = {}

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