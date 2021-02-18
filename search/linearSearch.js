/**
 * This function accepts an array and a value.
 * Loop through the array and check if the current array element is equal to the value.
 * If it is, return the index at which the element is found.
 * If the value is never found, return -1.
 * 
 * linearSearch([10,15,20,25,30],15);
 * linearSearch([9.8.7.6.5.4.3.2.1.0],4);
 * linearSearch([100],100);
 * linearSearch([1,2,3,4,5,6],6);
 * linearSearch([9,8,7,6,5,4,3,2,1,0],10);
 * linearSearch([100],200);
 */

// Naive solution
function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}



linearSearch([10,15,20,25,30],15);
// linearSearch([9,8,7,6,5,4,3,2,1,0],4);
// linearSearch([100],100);
// linearSearch([1,2,3,4,5,6],6);
// linearSearch([9,8,7,6,5,4,3,2,1,0],10);
// linearSearch([100],200);
