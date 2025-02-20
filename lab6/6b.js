let valMap = new Map();
function CountElem (a) {
    for (i = 0; i < a.length; i++){
        if (valMap.has(a[i])){
            
            valMap.set(a[i],valMap.get(a[i]) + 1);
        }
        else {
            valMap.set(a[i],1);
        }
    }
    valMap.forEach((value, key, map) => {
        console.log(`${key}: ${value}`);
    });
    valMap.clear();
    console.log('----------');
}
CountElem([1,3,4,3,5,1,36,4,3,15]);
CountElem([1,3,4,3,5,1,36,4,3,15,5,5,36,12]);
CountElem([2,2,2,2,2,2]);