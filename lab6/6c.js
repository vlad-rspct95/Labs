let stMap = new Map();
let max = 0;
class Student{
    constructor(name,group){
        this.name = name;
        this.group = group;
    }
}
function CountMax(a){
    for (i = 0; i < arr.length; i++){
        if (stMap.has(a[i].group)){
            stMap.set(a[i].group, stMap.get(a[i].group) + 1);
        }
        else{
            stMap.set(a[i].group, 1);
        }
    }
    for (let m of stMap.values()){
        if (max < m){
            max = m;
        }
    }
    console.log('Число обучающихся в самой большой группе: ' + max);
    max = 0;
}

let arr = [
    new Student('a','1'), 
    new Student('b','1'), 
    new Student('c','3'), 
    new Student('d','2'),
    new Student('e','2'),
    new Student('f','1'),
    new Student('g','3'),
    new Student('h','3'),
    new Student('i','3'),
    new Student('j','3'),
    new Student('k','2'),
    new Student('l','3')
 ];
 CountMax(arr);
 