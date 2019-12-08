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
    };
};
doublylist.prototype.remove=function(position){
  currentnode=this.head;
  size=this.size;
  count=1;
  message={failure:"Failure:non-existent node in the list"};
  beforenodetodelete=null;
  nodetodelete=null;
  deletednode=null;
  if(size===0 || position<1 || position>size){
    throw new Error(message.failure);
}if(position===1){
    this.head=currentnode.next;
if(!this.head){
    this.head.previous=null;
}else{
    this.tail=null;
}
}else if(position===this.size){
    this.tail=this.tail.previous;
    this.tail.next=null;
}else{
    while(count<position){
       currentnode=currentnode.next;
       count++; 
    }
    beforenodetodelete=currentnode.previous;
    nodetodelete=currentnode;
    afternodetodelete=currentnode.next;
    beforenodetodelete.next=afternodetodelete;
    afternodetodelete.previous=beforenodetodelete;
    deletednode=nodetodelete;
    nodetodelete=null;
}
this.size--;
};

var dl=new doublylist;
dl.add(10);
dl.add(20);
dl.add(30);
dl.add(40);
dl.remove(3);
console.log(dl)
//console.log(dl.searchnode(2));
//console.log(dl);