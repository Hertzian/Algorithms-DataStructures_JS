/**
 * swap values in bubble sort
 * 
 * Start looping from with a variable called i the end of the array towards the beginning.
 * Start an inner loop with a variable called j from the beginning until i -1.
 * If arr[j] is greater than arr[j+1], swap those two values!
 * Return the sorted array
 */


function swap1(arr, idx1, idx2){
    let temp = arr[idx1];

    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSortNaive(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr, arr[j], arr[j + 1]);

            if(arr[j] > arr[j + 1]){
                // swapp!
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;

}

function swapable(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            // console.log(arr, arr[j], arr[j + 1]);

            if(arr[j] > arr[j + 1]){
                swap1(arr, j, j + 1);
            }
        }
    }
    console.log(arr);
    return arr;

}

function bubbleSort(arr){
    let noSwaps;// this is an optimization

    for(let i = arr.length; i > 0; i--){
        noSwaps = true;// optimization part

        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j + 1]);

            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;

                noSwaps = false;// optimization part
            }
        }
        if(noSwaps){
            break;
        }
    }
    console.log(arr);
    return arr;
}






swapable([37,45,29,8]);