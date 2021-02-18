/**
 * JS native sort method
 */

function numberCompare(num1, num2){
    // asc
    return num1 - num2;
}

console.log(
    [6,4,15,10].sort(numberCompare)
);

function compareByLen(str1, str2){
    return str1.length - str2.length;
}

console.log(
    ['Steele', 'Colt','Data Structures','Algorithms'].sort(compareByLen)
);
