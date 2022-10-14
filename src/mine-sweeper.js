const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let width = matrix[0].length;
  let height = matrix.length;
  matrix = matrix.flat();
  let result = [];

  for (let i = 0; i < width * height; i++) {
    let count = 0;
    const isLeft = i % width === 0;
    const isRight = i % width === width - 1;
    if (i > 0 && !isLeft && matrix[i - 1] === true) count++; //запад
    if (i > width - 1 && !isRight && matrix[i + 1 - width] === true) count++; //северо-восток
    if (!isRight && matrix[i + 1] === true) count++; //восток
    if (
      i < width * height - width - 1 &&
      !isRight &&
      matrix[i + 1 + width] === true
    )
      count++; //юго-восток
    if (i > width - 1 && matrix[i - width] === true) count++; //север
    if (i > width && !isLeft && matrix[i - 1 - width] === true) count++; //северо-запад
    if (i < width * height - width && !isLeft && matrix[i - 1 + width] === true)
      count++; //юго-запад
    if (i < width - 1 && matrix[i + width] === true) count++; //юг
    result[i] = count;
    console.log(result[i]);
  }
  let arr = [];
  for (let i = 0; i < height; i++) {
    arr[i] = result.slice(i * width, i * width + width);
  }
  //console.log(arr);
  return arr;
}

module.exports = {
  minesweeper,
};
