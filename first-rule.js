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
    truth.push(index === mainIndex || index === mainIndex - 1 || index === mainIndex + 2)
  }
}

const checkLiveCellsTruth = (arr1, arr2, arr3, truth, index, initialState) => {
  if (arr1.length === 1) {
    const mainIndex = arr1[0]

    getLiveCellsTruth(arr2, truth, mainIndex)

    if (index === 1) {
      getLiveCellsTruth(arr3, truth, mainIndex)
    }

    if (truth.length < 2) {
      initialState.splice(index, 1, ['', '', '']);
    }
  }
}

const firstRule = initialState => {
  let cloneInitialState = [...initialState];

  const arr1 = initialState[0]
  const arr2 = initialState[1]
  const arr3 = initialState[2]

  let truth1 = []
  let truth2 = []
  let truth3 = []

  const a1 = liveCells(arr1)
  const a2 = liveCells(arr2)
  const a3 = liveCells(arr3)

  checkLiveCellsTruth(a1, a2, a3, truth1, 0, cloneInitialState)
  checkLiveCellsTruth(a2, a1, a3, truth2, 1, cloneInitialState)
  checkLiveCellsTruth(a3, a1, a2, truth3, 2, cloneInitialState)

  return cloneInitialState
}

module.exports = firstRule;