function Node(data){
    this.data=data;
    this.previous=null;
    this.next=null;
}
function doublylist(){
    this.size=0;
    this.head=null;
    this.tail=null;
}
doublylist.prototype.add=function(data){
    var node=new Node(data);
    if(!this.size){
        this.head=node;
        this.tail=node;
        this.size++;
    }else{
    this.tail.next=node;
    node.previous=this.tail;
    this.tail=node;
    this.size++;
    }
}
doublylist.prototype.searchnode=function(position){
    currentnode=this.head;
    size=this.size;
    count=1;
    message={failure:"failure:nonexistent node in the list"};
    if(size===0 || position<1 || position>size){
        throw new Error(message.failure);
    }else{
        while(count<position){
            currentnode=currentnode.next;
            count++;
        }
        return currentnode;
    }

}
var dl=new doublylist;
dl.add(10);
dl.add(20);
dl.add(30);
dl.add(40);
console.log(dl.searchnode(2));
//console.log(dl);