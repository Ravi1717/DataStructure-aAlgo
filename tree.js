class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}
class bst{
    constructor(){
        this.root=null;
    }
    add(data){
        const node=new Node(data);
        if(this.root===null){
            this.root=node;
        }else{
            const searchnode=function(current){
                if(data<current.data){
                    if(current.left===null){
                        current.left=node;
                        return;
                    }else {
                        return searchnode(current.left);
                        }
                }else if (data > current.data) {
                    if (current.right === null) {
                    current.right = node;
                    return;
                    } else {
                    return searchnode(current.right);
                    }
                    } else {
                    return null;
                    }
                    };
                    return searchnode(this.root);
                    }
                }
                   };
var t1=new bst;
t1.add(10);
t1.add(20);
t1.add(5);
t1.add(6);
t1.add(30);
t1.add(4);
console.log(t1);