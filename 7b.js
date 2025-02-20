function binarySearch (arr, el, st, end) {
    const middle = (Math.floor((st + end) / 2));

    if (el == arr[middle]){
        return middle;
    }

    if (st >= end){
        return -1;
    }

    if (el < arr[middle]){
        return binarySearch(arr, el, st, middle - 1);
    }
    else  {
        return binarySearch(arr, el, middle + 1, end);
    }
}
stud = ["Адамович_Вячеслав",
        "Бульденков_Максим", 
        "Богданова_Дарья" , 
        "Ершов_Владислав",
        "Ершов_Андрей",
        "Гайнулов_Алексей", 
        "Давыдов_Сергей" , 
        "Скопцов_Михаил",
        "Шеина_Анастасия",
        "Куштулиди_Александр"
    ];
console.log(stud.sort());

console.log(binarySearch(stud.sort(), "Ершов_Владислав", 0 , stud.length - 1));



