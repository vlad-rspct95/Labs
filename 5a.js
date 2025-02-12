let Min;
let m;
let sum = 0;
function FunMin (arr) {
    Min = arr[0];
    m = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < Min) {
            Min = arr[i];
            m = i;
        }
    }
    for (let i = 0; i < m; i++ ){
        sum = sum + arr[i];
    }
    console.log(sum);
    sum = 0;
}
FunMin([10,25,234,1,12,41,52,124,16]);
FunMin([1,2]);
FunMin([2,2,22,1]);
FunMin([2,1]);
