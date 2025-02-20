let set = new Set();
function SearchSame (a,b) {
    for (i = 0; i < a.length; i++){
        for (j = 0; j < b.length; j++){
            if (a[i] == b[j]) {
                set.add(b[j]);
            }
        }
    }
    for (let s of set){
        console.log(s);
    }
    console.log('----------');
}
SearchSame([1,1,23,7,5,5,9], [2,1,13,82,5,7,10])
SearchSame([1,1,23,7,5,5,9,13], [2,1,1,2,13,82,5,7,10,2])