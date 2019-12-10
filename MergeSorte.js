function mergesort(arr){
    if(arr.length===1){
        return arr;
    }
    let mid = parseInt(arr.length / 2),
leftArray = arr.slice(0, mid),
rightArray = arr.slice(mid, arr.length);
return merge(mergesort(leftArray), mergesort(rightArray));
}
function merge(leftarray,rightarray){
    let result=[];
    while(leftarray.length && rightarray.length){
        if(leftarray[0]<=rightarray[0]){
           result.push(leftarray.shift());
        }else{
            result.push(rightarray.shift());
        }
    }
        while(leftarray.length){
            result.push(leftarray.shift());
        }
        while(rightarray.length){
            result.push(rightarray.shift());
        }
        return result;
    }

const unsortedarr=mergesort([23,77,1,5,0,88,54]);
const result=unsortedarr;
console.log(result);