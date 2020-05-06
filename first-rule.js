// Each live cell with one or no neighbors dies, as if by solitude.
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

const checkLengthOne = (arr1, arr2, truth, index, newState, initialState) => {
  if (arr1.length === 1) {
    if (arr2.length) {
      getLiveCellsTruth1(arr1, arr2, truth)
    }

    switch (true) {
      case truth.length === 0:
        replaceWith = [...array]
        newState.splice(index, 1, replaceWith)
        break
      case truth.length === 1:
        replaceWith = [...array]
        newState.splice(index, 1, replaceWith)
        break
      default:
        initialState
    }
  }
}

const checkLengthTwo = (arr1, arr2, truth, index, newState, initialState) => {
  if (arr1.length === 2) {
    if (arr2.length) {
      if (arr1[0] === arr1[1] - 1) {
        getLiveCellsTruth1(arr1, arr2, truth)
      }
    }

    switch (true) {
      case truth.length === 0:
        replaceWith = [...array]
        newState.splice(index, 1, replaceWith)
        break
      case truth.length === 1:
        replaceWith = [...array]
        if (arr1[0] === arr1[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(index, 1, replaceWith)
        break
      default:
        initialState
    }
  }
}

const checkLengthThree = (arr1, arr2, truth, index, newState, initialState) => {
  if (arr1.length === 3) {
    getLiveCellsTruth2(arr1, arr2, truth)

    switch (true) {
      case truth.length === 1:
        replaceWith = [...array]
        if (arr1[0] === arr1[1] - 1) {
          replaceWith[1] = 'o'
        }
        newState.splice(index, 1, replaceWith)
        break
      default:
        initialState
    }
  }
}

const checkLiveCellsTruth = (arr1, arr2, truth, index, newState, initialState) => {
  checkLengthOne(arr1, arr2, truth, index, newState, initialState)
  checkLengthTwo(arr1, arr2, truth, index, newState, initialState)
  checkLengthThree(arr1, arr2, truth, index, newState, initialState)
}

const firstRule = initialState => {
  let newState = [...initialState]
  resultsObject = {}

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = liveCells(arr)
    resultsObject[`truth${i + 1}`] = []
  })

  const { arr1, arr2, arr3, truth1, truth2, truth3 } = resultsObject

  checkLiveCellsTruth(arr1, arr2, truth1, 0, newState, initialState)

  if (arr2.length === 1) {
    if (arr1.length) {
      getLiveCellsTruth1(arr2, arr1, truth2)
    }

    if (arr3.length) {
      getLiveCellsTruth1(arr2, arr3, truth2)
    }

    switch (true) {
      case truth2.length === 0:
        replaceWith = [...array]
        newState.splice(1, 1, replaceWith)
        break
      case truth2.length === 1:
        replaceWith = [...array]
        newState.splice(1, 1, replaceWith)
        break
      default:
        initialState
    }
  }

  if (arr2.length === 2) {
    if (arr1.length) {
      if (arr2[0] === arr2[1] - 1) {
        getLiveCellsTruth1(arr2, arr1, truth2)
      }
    }

    if (arr3.length) {
      if (arr2[0] === arr2[1] - 1) {
        getLiveCellsTruth1(arr2, arr3, truth2)
      }
    }

    switch (true) {
      case truth2.length === 0:
        replaceWith = [...array]
        newState.splice(1, 1, replaceWith)
        break
      case truth2.length === 1:
        replaceWith = [...array]
        if (arr2[0] === arr2[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(1, 1, replaceWith)
        break
      default:
        initialState
    }
  }

  if (arr2.length === 3) {
    getLiveCellsTruth2(arr2, arr1, truth2)
    getLiveCellsTruth2(arr2, arr3, truth2)

    switch (true) {
      case truth2.length === 1:
        replaceWith = [...array]
        if (arr2[0] === arr2[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(1, 1, replaceWith)
        break

      case truth2.length === 2:
        replaceWith = [...array]
        if (arr2[0] === arr2[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(1, 1, replaceWith)
        break

      default:
        initialState
    }
  }

  checkLiveCellsTruth(arr3, arr2, truth3, 2, newState, initialState)

  console.log(initialState)
  console.log(newState, truth1, truth2, truth3)
  return newState
}

module.exports = firstRule;