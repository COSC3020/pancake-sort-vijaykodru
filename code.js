function flip(array, n) {
    let firstFlip = array.slice(0, n).reverse();
    let bottom = array.slice(n);
    array = firstFlip.concat(bottom);
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let i = array.length; i > 0; i--) {
        let max = maxindex(array, i);
        if (max !== i - 1){
            array = flip(array, max + 1);
            array = flip(array, i);
        }
    }
    return array;
}

function maxindex(arr, size){
    let Max = 0;
    for(let i = 0; i < size; i++){
        if(arr[Max] < arr[i]){
            Max = i;
        }
    }
    return Max
}