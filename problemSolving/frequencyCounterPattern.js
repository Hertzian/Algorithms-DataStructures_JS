/*
write a function called same, which accepts two arrays.
The function should return tre if every value in the array has it´s corresponding value squared in the second array.
The frequency of values must be the same.
*/

/*
Examples:
same([1,2,3],[4,1,9]); // true
same([1,2,3],[1,9]); // false
same([1,2,1],[4,4,1]); // false (must be same frequency)
*/

// a naive solution
// time complexity - O(n^2)

function same_naive(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);// return -1 if the value isn´t there

        if(correctIndex === -1){ 
            return false;
        }

        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }

    return true;
}

// same_naive([1,2,3,2],[9,1,4,4]);


// refactored
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log('esto');
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            console.log('aqui');
            console.log(freqCounter1);
            console.log(freqCounter2);
            return false;
        }

        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            console.log('aca'); 
            console.log(freqCounter1);
            console.log(freqCounter2);
            return false;
        }
    }

    console.log(freqCounter1);
    console.log(freqCounter2);
    return true;
}

// let arr1 = [1,2,3,2,5];
// let arr2 = [9,1,4,4,11];

// same(arr1, arr2);

/**
 * Frequency Counter - sameFrequency
 * 
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * 
 * TIME O(n)
 * 
 * sample input:
 * sameFrequency(182,281); // true
 * sameFrequency(34,14); // false
 * sameFrequency(3589578,5879385); // true
 * sameFrequency(22,222); // false
 */

function toString(num){
    let str =  num.toString();

    return str;
}

function sameFrequency(num1, num2){
    arr1 = toString(num1);
    arr2 = toString(num2);

    if(arr1.legth !== arr2.legth){
        return 'invalid data';
    }

    const lookup = {};
    
    for(let i = 0; i < arr1.legth; i++){
        let number = first[i];

        lookup[number] ? lookup[number] += 1 : lookup[number] = 1;
    }

    for(let i = 0; i < arr2.legth; i++){
        let number = first[i];

        if(!lookup[number]){
            return console.log('false');
        }else{
            lookup[number] -= 1;
        }
    }

    return console.log('true');
}

// sameFrequency(182,281);
sameFrequency(34,14);
// sameFrequency(3589578,5879385);
// sameFrequency(22,222);