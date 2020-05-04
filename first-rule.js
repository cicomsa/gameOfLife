// Each live cell with one or no neighbors dies, as if by solitude.
const { firstGeneration } = require('./states.js')

const checkArray = (arr1Length, arr2Length, i) => {
  if (arr1Length < 2 && arr2Length <= 1) {
    return ['', '', '']
  }
  return null
}

const firstRule = initialState => {
  let cloneInitialState = [...initialState];

  initialState.map((arr, i) => {
    const arrLength = arr => arr.filter(el => el === 'o').length

    if (i === 2) {
      // console.log(
      //   arrLength(initialState[1]) < 2, initialState[1],
      //   arrLength(initialState[0]) === 0, initialState[0],
      //   arrLength(initialState[2]) === 0, initialState[2]
      // )
      if (
        arrLength(initialState[1]) < 2
        && arrLength(initialState[0]) === 0
        && arrLength(initialState[2]) === 0
      ) {
        cloneInitialState.splice(1, 1, ['', '', '']);
      }
    } else {
      cloneInitialState.splice(0, 1, checkArray(arrLength(initialState[0]), arrLength(initialState[1]), 0));

      cloneInitialState.splice(2, 1, checkArray(arrLength(initialState[2]), arrLength(initialState[1]), 2));
    }
  })

  return cloneInitialState
}

module.exports = firstRule;