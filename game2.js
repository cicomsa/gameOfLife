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

  if (arr1.length === 1) {
    if (arr2.length) {
      arr1.forEach(mainIndex => {
        arr2.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {
            truth1.push(true)
          }
        })
      })
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
        break
      default:
        initialState
    }
  }

  if (arr1.length === 2) {
    const els = []

    if (arr2.length) {
      if (arr1[0] === arr1[1] - 1) {
        arr1.forEach(mainIndex => {
          arr2.map(index => {
            if (index === mainIndex
              || index === mainIndex - 1
              || index === mainIndex + 1
            ) {
              truth1.push(true)
            }
          })
        })
      } else {
        arr1.forEach(mainIndex => {
          arr2.map((index, i) => {
            if (
              (index === mainIndex
                || index === mainIndex - 1
                || index === mainIndex + 1
              ) && (
                arr2[i + 1] === mainIndex
                || arr2[i + 1] === mainIndex - 1
                || arr2[i + 1] === mainIndex + 1
              )
            ) {
              truth1.push(true)
              els.push(mainIndex)
            }
          })
        })
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
        } else {
          els.map(el => replaceWith[el] = 'o')
        }

        newState.splice(0, 1, replaceWith)
        break

      default:
        initialState
    }
  }

  if (arr1.length === 3) {
    const els = { arr1: [], arr2: [] }

    if (!arr2.length) {
      arr1.map((el, i) => {
        if (arr1[i + 1] === el + 1) {
          els.arr1.push(el)
        }
      })

      if (els.arr1[0] === els.arr1[1] - 1) {
        truth1.push(true)
      }
    } else {
      arr1.forEach(mainIndex => {
        arr2.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {
            truth1.push(true)
            els.arr2 = els.arr2.includes(index) ? els.arr2 : [...els.arr2, index]
            els.arr1 = els.arr1.includes(mainIndex) ? els.arr1 : [...els.arr1, mainIndex]
          }
        })
      })
    }

    switch (true) {
      case truth1.length === 1:
        replaceWith = [...array]
        if (arr1[0] === arr1[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(0, 1, replaceWith)
        break

      case truth1.length === 2:
        replaceWith = [...array]
        els.arr1.map(el => {
          replaceWith[el] = 'o'
        })

        newState.splice(0, 1, replaceWith)
        break

      default:
        initialState
    }
  }

  if (arr2.length === 1) {
    if (arr1.length) {
      arr2.forEach(mainIndex => {
        arr1.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {
            truth2.push(true)
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
            truth2.push(true)
          }
        })
      })
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
    const els = []

    if (arr1.length) {
      if (arr2[0] === arr2[1] - 1) {
        arr2.forEach(mainIndex => {
          arr1.map(index => {
            if (index === mainIndex
              || index === mainIndex - 1
              || index === mainIndex + 1
            ) {
              truth2.push(true)
            }
          })
        })
      } else {
        arr2.forEach(mainIndex => {
          arr1.map((index, i) => {
            if (
              (index === mainIndex
                || index === mainIndex - 1
                || index === mainIndex + 1
              ) && (
                arr1[i + 1] === mainIndex
                || arr1[i + 1] === mainIndex - 1
                || arr1[i + 1] === mainIndex + 1
              )
            ) {
              truth2.push(true)
              els.push(mainIndex)
            }
          })
        })
      }
    }

    if (arr3.length) {
      if (arr2[0] === arr2[1] - 1) {
        arr2.forEach(mainIndex => {
          arr3.map(index => {
            if (index === mainIndex
              || index === mainIndex - 1
              || index === mainIndex + 1
            ) {
              truth2.push(true)
            }
          })
        })
      } else {
        arr2.forEach(mainIndex => {
          arr3.map((index, i) => {
            if (
              (index === mainIndex
                || index === mainIndex - 1
                || index === mainIndex + 1
              ) && (
                arr3[i + 1] === mainIndex
                || arr3[i + 1] === mainIndex - 1
                || arr3[i + 1] === mainIndex + 1
              )
            ) {
              truth2.push(true)
              els.push(mainIndex)
            }
          })
        })
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
        } else {
          els.map(el => replaceWith[el] = 'o')
        }

        newState.splice(1, 1, replaceWith)
        break
      default:
        initialState
    }
  }

  if (arr2.length === 3) {
    const els = { arr1: [], arr2: [], arr3: [] }

    if (!arr1.length) {
      if (!arr3.length) {
        arr2.map((el, i) => {
          if (arr2[i + 1] === el + 1) {
            els.arr2.push(el)
          }
        })

        if (els.arr2[0] === els.arr2[1] - 1) {
          truth2.push(true)
        }
      }
    } else {
      arr2.forEach(mainIndex => {
        arr1.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {
            truth2.push(true)
            els.arr1 = els.arr1.includes(index) ? els.arr1 : [...els.arr1, index]
            els.arr2 = els.arr2.includes(mainIndex) ? els.arr2 : [...els.arr2, mainIndex]
          }
        })
      })
    }

    if (!arr3.length) {
      if (!arr1.length) {
        arr2.map((el, i) => {
          if (arr2[i + 1] === el + 1) {
            if (!els.arr2.includes(el)) {
              els.arr2 = [...els.arr2, el]

              if (els.arr2[0] === els.arr2[1] - 1) {
                truth2.push(true)
              }
            }
          }
        })
      }
    } else {
      arr2.forEach(mainIndex => {
        arr3.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {
            truth2.push(true)
            els.arr3 = els.arr3.includes(index) ? els.arr3 : [...els.arr3, index]
            els.arr2 = els.arr2.includes(mainIndex) ? els.arr2 : [...els.arr2, mainIndex]
          }
        })
      })
    }

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
        els.arr2.map(el => {
          replaceWith[el] = 'o'
        })

        newState.splice(1, 1, replaceWith)
        break

      default:
        initialState
    }
  }

  if (arr3.length === 1) {
    if (arr2.length) {
      arr3.forEach(mainIndex => {
        arr2.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {
            truth3.push(true)
          }
        })
      })
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
    const els = []

    if (arr2.length) {
      if (arr3[0] === arr3[1] - 1) {
        arr3.forEach(mainIndex => {
          arr2.map(index => {
            if (index === mainIndex
              || index === mainIndex - 1
              || index === mainIndex + 1
            ) {
              truth3.push(true)
            }
          })
        })
      } else {
        arr3.forEach(mainIndex => {
          arr2.map((index, i) => {
            if (
              (index === mainIndex
                || index === mainIndex - 1
                || index === mainIndex + 1
              ) && (
                arr2[i + 1] === mainIndex
                || arr2[i + 1] === mainIndex - 1
                || arr2[i + 1] === mainIndex + 1
              )
            ) {
              truth3.push(true)
              els.push(mainIndex)
            }
          })
        })
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
        } else {
          els.map(el => replaceWith[el] = 'o')
        }

        newState.splice(2, 1, replaceWith)
        break
      default:
        initialState
    }
  }

  if (arr3.length === 3) {
    const els = { arr2: [], arr3: [] }

    if (!arr2.length) {
      arr3.map((el, i) => {
        if (arr3[i + 1] === el + 1) {
          els.arr3.push(el)
        }
      })

      if (els.arr3[0] === els.arr3[1] - 1) {
        truth3.push(true)
      }
    } else {
      arr3.forEach(mainIndex => {
        arr2.map(index => {
          if (index === mainIndex
            || index === mainIndex - 1
            || index === mainIndex + 1
          ) {
            truth3.push(true)
            els.arr2 = els.arr2.includes(index) ? els.arr2 : [...els.arr2, index]
            els.arr3 = els.arr3.includes(mainIndex) ? els.arr3 : [...els.arr3, mainIndex]
          }
        })
      })
    }

    switch (true) {
      case truth3.length === 1:
        replaceWith = [...array]
        if (arr3[0] === arr3[1] - 1) {
          replaceWith[1] = 'o'
        }

        newState.splice(2, 1, replaceWith)
        break

      case truth3.length === 2:
        replaceWith = [...array]
        els.arr3.map(el => {
          replaceWith[el] = 'o'
        })

        newState.splice(2, 1, replaceWith)
        break

      default:
        initialState
    }
  }

  console.log(initialState)
  console.log(newState, truth1, truth2, truth3)
  return newState
}

module.exports = firstRule;