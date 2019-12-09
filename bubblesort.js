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