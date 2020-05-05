// Each live cell with one or no neighbors dies, as if by solitude.

const liveCells = array => {
  const result = array.reduce((result, el, i) => {
    if (el === 'o')
      result.push(i)
    return result
  }, [])

  return result
}

const getLiveCellsTruth = (arr, truth, mainIndex) => {
  if (arr.length === 1) {
    const index = arr[0]
    truth.push(
      index === mainIndex
      || index === mainIndex - 1
      || index === mainIndex + 1
    )
  }
}

const checkLiveCellsTruth = (arr1, arr2, arr3, truth, index, initialState) => {
  if (arr1.length === 1) {
    const mainIndex = arr1[0]

    getLiveCellsTruth(arr2, truth, mainIndex)

    if (index === 1) {
      getLiveCellsTruth(arr3, truth, mainIndex)
    }

    if (
      truth.length < 2 || (
        truth.length === 2 &&
        truth.filter(t => t === false).length > 0
      )
    ) {
      initialState.splice(index, 1, ['', '', ''])
    }
  }
}

const firstRule = initialState => {
  let newState = [...initialState]
  const resultsObject = {}

  initialState.map((arr, i) => {
    resultsObject[`arr${i + 1}`] = liveCells(arr)
    resultsObject[`truth${i + 1}`] = []
  })

  const { arr1, arr2, arr3, truth1, truth2, truth3 } = resultsObject

  checkLiveCellsTruth(arr1, arr2, arr3, truth1, 0, newState)
  checkLiveCellsTruth(arr2, arr1, arr3, truth2, 1, newState)
  checkLiveCellsTruth(arr3, arr1, arr2, truth3, 2, newState)

  return newState
}

module.exports = firstRule;