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

// const checkLiveCellsTruth = (arr1, arr2, arr3, truth, index, initialState) => {

//   if (arr1.length === 1) {
//     const mainIndex = arr1[0]

//     getLiveCellsTruth1(arr2, truth, mainIndex)

//     if (index === 1 || (index === 2 && arr3.length === 2)) {
//       getLiveCellsTruth1(arr3, truth, mainIndex)
//     }

//     if (
//       truth.length < 2 || (
//         truth.length === 2 &&
//         truth.filter(t => t === false).length > 0
//       )
//     ) {
//       initialState.splice(index, 1, replaceWith)
//     }
//   }
//   console.log({ arr1 }, { arr2 }, { arr3 }, { index })
//   // to combine
//   if (arr1.length === 2) {
//     if (arr1[0] === arr1[1] - 1 && arr3.length !== 0) {
//       truth.push(true)
//     }

//     arr1.map(el => {
//       const mainIndex = el

//       getLiveCellsTruth1(arr2, truth, mainIndex)

//       if (index === 1) {
//         getLiveCellsTruth1(arr3, truth, mainIndex)
//       }
//     })

//     switch (true) {
//       case truth.length === 0:
//         initialState.splice(index, 1, replaceWith)
//         break
//       case truth[0] === false:
//         initialState.splice(index, 1, replaceWith)
//         break
//       case truth.length === 2 && truth.filter(t => t === false).length > 0:
//         initialState.splice(index, 1, replaceWith)
//         break
//       case truth.length === 3 && truth.filter(t => t === true).length === 2:
//         if (arr1[0] === arr1[1] - 1) {
//           replaceWith[1] = 'o'
//         }

//         initialState.splice(index, 1, replaceWith)
//         break
//       default:
//         initialState
//     }

//     if (
//       (truth.length === 0 || truth[0] === false) || (
//         truth.length === 2 &&
//         truth.filter(t => t === false).length > 0
//       )
//     ) {
//       initialState.splice(index, 1, replaceWith)
//     } else if (
//       truth.length === 3 &&
//       truth.filter(t => t === true).length > 1
//     ) {

//     }
//   }
// }

const firstRule = initialState => {
  let newState = [...initialState]
  resultsObject = {}

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = liveCells(arr)
    resultsObject[`truth${i + 1}`] = []
  })

  const { arr1, arr2, arr3, truth1, truth2, truth3 } = resultsObject

  if (arr1.length === 1) {
    if (arr2.length) {
      getLiveCellsTruth1(arr1, arr2, truth1)
    }

    switch (true) {
      case truth1.length === 0:
        replaceWith = [...array]
        newState.splice(0, 1, replaceWith)
        break
      case truth1.length === 1:
        replaceWith = [...array]
        newState.splice(0, 1, replaceWith)
        break
      default:
        initialState
    }
  }

  if (arr1.length === 2) {
    if (arr2.length) {
      if (arr1[0] === arr1[1] - 1) {
        getLiveCellsTruth1(arr1, arr2, truth1)
      }
    }

    switch (true) {
      case truth1.length === 0:
        replaceWith = [...array]
        newState.splice(0, 1, replaceWith)
        break
      case truth1.length === 1:
        replaceWith = [...array]
        if (arr1[0] === arr1[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(0, 1, replaceWith)
        break

      default:
        initialState
    }
  }

  if (arr1.length === 3) {
    getLiveCellsTruth2(arr1, arr2, truth1)

    switch (true) {
      case truth1.length === 1:
        replaceWith = [...array]
        if (arr1[0] === arr1[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(0, 1, replaceWith)
        break

      default:
        initialState
    }
  }

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

  if (arr3.length === 1) {
    if (arr2.length) {
      getLiveCellsTruth1(arr3, arr2, truth3)
    }

    switch (true) {
      case truth3.length === 0:
        replaceWith = [...array]
        newState.splice(2, 1, replaceWith)
        break
      case truth3.length === 1:
        replaceWith = [...array]
        newState.splice(2, 1, replaceWith)
        break
      default:
        initialState
    }
  }

  if (arr3.length === 2) {
    if (arr2.length) {
      if (arr3[0] === arr3[1] - 1) {
        getLiveCellsTruth1(arr3, arr2, truth3)
      }
    }

    switch (true) {
      case truth3.length === 0:
        replaceWith = [...array]
        newState.splice(2, 1, replaceWith)
        break
      case truth3.length === 1:
        replaceWith = [...array]
        if (arr3[0] === arr3[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(2, 1, replaceWith)
        break
      default:
        initialState
    }
  }

  if (arr3.length === 3) {
    getLiveCellsTruth2(arr3, arr2, truth3)

    switch (true) {
      case truth3.length === 1:
        replaceWith = [...array]
        if (arr3[0] === arr3[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(2, 1, replaceWith)
        break

      default:
        initialState
    }
  }

  // checkLiveCellsTruth(arr1, arr2, arr3, truth1, 0, newState)
  // checkLiveCellsTruth(arr2, arr1, arr3, truth2, 1, newState)
  // checkLiveCellsTruth(arr3, arr1, arr2, truth3, 2, newState)
  console.log(initialState)
  console.log(newState, truth1, truth2, truth3)
  return newState
}

module.exports = firstRule;