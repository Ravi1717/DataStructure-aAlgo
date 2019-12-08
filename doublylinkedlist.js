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
var dl=new doublylist;
dl.add(10);
dl.add(20);
dl.add(30);
dl.add(40);
console.log(dl);