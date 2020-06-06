// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  let count = 1;
  let start_row = 0;
  let start_col = 0;
  let end_row = n - 1;
  let end_col = n - 1;

  while (start_row <= end_row && start_col <= end_col) {
    // Top Row
    for (let i = start_col; i <= end_col; i++) {
      arr[start_row][i] = count;
      count++;
    }
    start_row++;
    // Right Column
    for (let i = start_row; i <= end_row; i++) {
      arr[i][end_col] = count;
      count++;
    }
    end_col--;
    // Bottom Row
    for (let i = end_col; i >= start_col; i--) {
      arr[end_row][i] = count;
      count++;
    }
    end_row--;
    // Start Column
    for (let i = end_row; i >= start_row; i--) {
      arr[i][start_col] = count;
      count++;
    }
    start_col++;
  }
  return arr;
}

module.exports = matrix;
