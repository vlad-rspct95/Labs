let Min;
let m;
let arr = [];

function PrintArr (mat) {
    for (let i = 0; i < mat[0].length; i++){
        Min = mat[0][i];
        for (let j = 0; j < mat.length; j++){
            if (mat[j][i] < Min ) {
                Min = mat[j][i];
            }
        }
        arr.push(Min);
    }
    console.log(arr);
    arr = [];
}
PrintArr([
    [1,2,3],
    [4,5,6]
]);
PrintArr([
    [1,10,16],
    [4,5,3],
    [5,4,20],
    [123,124,135]
]);
PrintArr([
    [1,1,-1],
    [1,1,1],
    [1,1,1],
    [-1,-1,1]
]);