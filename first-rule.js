// Each live cell with one or no neighbors dies, as if by solitude.

const liveCells = arr => {
  const result = arr.reduce(function (a1, e, i) {
    if (e === 'o')
      a1.push(i);
    return a1;
  }, [])

  return result
}

const getLiveCellsTruth = (arr, truth, mainIndex) => {
  if (arr.length === 1) {
    const index = arr[0]
    truth.push(index === mainIndex || index === mainIndex - 1 || index === mainIndex + 1)
  }
}

const checkLiveCellsTruth = (arr1, arr2, arr3, truth, index, initialState) => {
  if (arr1.length === 1) {
    const mainIndex = arr1[0]

    getLiveCellsTruth(arr2, truth, mainIndex)

    if (index === 1) {
      getLiveCellsTruth(arr3, truth, mainIndex)
    }

    if (truth.length < 2 || (truth.length === 2 && truth.filter(t => t === false).length > 0)) {
      initialState.splice(index, 1, ['', '', ''])
    }
  }
}

const firstRule = initialState => {
  let cloneInitialState = [...initialState];
  const resultsObject = {}

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = liveCells(arr)
    resultsObject[`truth${i + 1}`] = []
  })

  const { arr1, arr2, arr3, truth1, truth2, truth3 } = resultsObject

  checkLiveCellsTruth(arr1, arr2, arr3, truth1, 0, cloneInitialState)
  checkLiveCellsTruth(arr2, arr1, arr3, truth2, 1, cloneInitialState)
  checkLiveCellsTruth(arr3, arr1, arr2, truth3, 2, cloneInitialState)

  return cloneInitialState
}

module.exports = firstRule;