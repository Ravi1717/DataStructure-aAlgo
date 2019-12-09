function insertionsort(arr){
    const n=arr.length;
        for(let i=1;i<n;i++){
            value=arr[i];
            hole=i;
            while(hole>0 && arr[hole-1]>value){
                arr[hole]=arr[hole-1];
                hole=hole-1;
            }
            arr[hole]=value;
        }
        return arr;
        }
    const unsortedarr=insertionsort([7,3,5,1,9,0,77,32,44,55,11,1001,2]);
    const result=unsortedarr;
    console.log(result);