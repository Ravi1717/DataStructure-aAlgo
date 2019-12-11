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
        }
        else{
            const searchnode=function(current){
                if(data<current.data){
                    if(current.left===null){
                        current.left=node;
                        return;
                    }else{
                        return searchnode(current.left);

                    }
                }else if(data>current.data){
                    if(current.right===null){
                        current.right=node;
                        return;
                    }else{
                        return searchnode(current.right);
                    }
                }else{
                    return null;
                }
            }
            return searchnode(this.root);
        }
    }
        search(data){
            const searchnode=function(current){
            if(current===null) return false;
            if(data<current.data) return searchnode(current.left);
            if(data>current.data) return searchnode(current.right);
            return true;
            }
            return searchnode(this.root);
        }
        remove(data){

        }
    }
const t1=new bst;
t1.add(13);
t1.add(8);
t1.add(37);
t1.add(6);
t1.add(11);
t1.add(24);
t1.add(42);
t1.add(12);
t1.add(16);
t1.add(29);
t1.add(55);
//console.log(t1.search(5));
console.log(t1);