function selectionsort(arr){
    const n=arr.length;
    for(var i=0;i<(n);i++){
        let minindex=i;
        for(var j=i+1;j<(n);j++){
            if(arr[j]<arr[minindex]){
                minindex=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[minindex];
        arr[minindex]=temp;
        
    }
    return arr;

}
const unsorted=[23,4,2,66,3,5,6,100,1];
const result=selectionsort(unsorted);
console.log(result);