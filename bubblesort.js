/*
function bubblesort(arr){
     const n=arr.length;
    for(let i=0;i<(n-1);i++){
        for(let j=0;j<(n-1);j++){
            if(arr[j]>arr[j+1]){
                 temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
const input=[45,23,8,2,99,11];
const result=bubblesort(input);
console.log(result);
*/
//--------------------------Method 2-------------------------

const unsortedarray=[23,1,3,66,2,54,9];
const sortedarray=bubblesort(unsortedarray);
console.log(sortedarray);
function bubblesort(array){
    let issorted=false;
    while(!issorted){
        issorted=true;
        for(let i=0;i<array.length;i++){
            if(array[i]>array[i+1]){
                let temp=array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                issorted=false;
            }
        }
    }
return array;
};

