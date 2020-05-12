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

  if (arr1.length) {
    const els = { 1: [], 2: [], 3: [] }
    replaceWith = [...array]

    arr1.map((el, i) => {
      if (el === arr1[i + 1] - 1) {
        els[el] = []
      }
    })

    console.log(els)

    Object.keys(els).map(key => {
      if (els[key].length > 0) {
        replaceWith[key] = 'o'
      }
    })

    newState.splice(0, 1, replaceWith)
  }

  if (arr2.length) {
    const els = { 1: [], 2: [], 3: [] }
    replaceWith = [...array]

    arr2.map((el, i) => {
      if (el === arr1[i + 1] - 1) {
        els[el] = []
      }
    })

    console.log(els)

    Object.keys(els).map(key => {
      if (els[key].length > 0) {
        replaceWith[key] = 'o'
      }
    })

    newState.splice(1, 1, replaceWith)
  }

  if (arr3.length) {
    const els = { 1: [], 2: [], 3: [] }
    replaceWith = [...array]

    arr3.map((el, i) => {
      if (el === arr1[i + 1] - 1) {
        els[el] = []
      }
    })

    console.log(els)

    Object.keys(els).map(key => {
      if (els[key].length > 0) {
        replaceWith[key] = 'o'
      }
    })

    newState.splice(2, 1, replaceWith)
  }




  console.log(initialState)
  console.log(newState, truth1, truth2, truth3)
  return newState
}

module.exports = firstRule;