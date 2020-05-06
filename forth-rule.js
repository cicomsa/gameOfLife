// Each dead cell with three neighbors becomes populated.

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