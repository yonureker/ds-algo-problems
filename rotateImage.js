function rotateImage(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // matrix.map(array => array.reverse());

  for (let i = 0; i < matrix.length ; i++){
    for (let j = matrix.length - 1; j >= matrix.length / 2; j--){
      console.log(`i is ${i}`);
      console.log(`j is ${j}`);
      [matrix[i][matrix.length - j - 1], matrix[i][j]] = [matrix[i][j], matrix[i][matrix.length - j - 1]];
    }
  }

  return matrix;
}