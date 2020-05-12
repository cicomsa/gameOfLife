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

const firstRule = initialState => {
  let newState = [...initialState]
  resultsObject = {}

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = liveCells(arr)
    resultsObject[`truth${i + 1}`] = []
  })

  const { arr1, arr2, arr3, truth1, truth2, truth3 } = resultsObject
  const els = {
    arr1: {
      0: 0,
      1: 0,
      2: 0
    },
    arr2: {
      0: 0,
      1: 0,
      2: 0
    },
    arr3: {
      0: 0,
      1: 0,
      2: 0
    }
  }

  if (arr1.length) {
    arr1.forEach(mainIndex => {
      arr2.map(index => {
        if (index === mainIndex
          || index === mainIndex - 1
          || index === mainIndex + 1
        ) {
          els.arr1[mainIndex] += 1
        }
      })
    })

    if (arr1.length === 3) {
      arr1.map((el, i) => {
        if (el === arr1[i + 1] - 1 && el === arr1[i - 1] + 1) {
          els.arr1[el] += 1
        }
      })
    }

    arr1.map((el, i) => {
      if (el === arr1[i + 1] - 1 || el === arr1[i - 1] + 1) {
        els.arr1[el] += 1
      }
    })
  }

  if (arr2.length) {
    if (arr1.length) {
      arr2.forEach(mainIndex => {
        arr1.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {

            els.arr2[mainIndex] += 1
          }
        })
      })
    }

    if (arr3.length) {
      arr2.forEach(mainIndex => {
        arr3.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {
            els.arr2[mainIndex] += 1
          }
        })
      })
    }

    if (arr2.length === 3) {
      arr2.map((el, i) => {
        if (el === arr2[i + 1] - 1 && el === arr2[i - 1] + 1) {
          els.arr2[el] += 1
        }
      })
    }

    arr2.map((el, i) => {
      if (el === arr2[i + 1] - 1 || el === arr2[i - 1] + 1) {
        els.arr2[el] += 1
      }
    })

  }

  if (arr3.length) {
    arr3.forEach(mainIndex => {
      arr2.map(index => {
        if (index === mainIndex
          || index === mainIndex - 1
          || index === mainIndex + 1
        ) {
          els.arr3[mainIndex] += 1
        }
      })
    })

    if (arr3.length === 3) {
      arr3.map((el, i) => {
        if (el === arr3[i + 1] - 1 && el === arr3[i - 1] + 1) {
          els.arr3[el] += 1
        }
      })
    }

    arr3.map((el, i) => {
      if (el === arr3[i + 1] - 1 || el === arr3[i - 1] + 1) {
        els.arr3[el] += 1
      }
    })
  }

  console.log(els)

  Object.keys(els).map((key, i) => {
    replaceWith = [...array]

    Object.keys(els[key]).map(el => {
      replaceWith[el] = els[key][el] > 1 ? 'o' : ''
    })

    newState.splice(i, 1, replaceWith)
  })

  console.log(initialState)
  console.log(newState, truth1, truth2, truth3)
  return newState
}

module.exports = firstRule;