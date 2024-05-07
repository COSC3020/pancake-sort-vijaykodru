function flip(array, n) {
    if(n > array.length){
        n = array.length;
    }
    let firstflip = array.slice(0, n);
    let bottom = array.slice(n, array.length) 
    firstflip.reverse();
    array = firstflip.concat(bottom);    
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let i = array.length; i >= 0; i--) {
        let max = maxindex(array, i);
        if (max != i - 1){
            flip(array, max + 1);
            flip(array, i);
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