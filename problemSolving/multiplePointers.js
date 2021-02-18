/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

/*
Example

sumZero([-3,-2,-1,0,1,2,3]); // [-3,3]
sumZero([-2,0,1,3]); // undefined
sumZero([1,2,3]); // undefined
*/

// Naive solution
function sumZeroN(arr){
    for(let i = 0; i < arr.legth; i++){
        for(let j = i + 1; j < arr.legth; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }

}

// Refactor
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];

        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

sumZero([-3,-2,-1,0,1,2,3]);